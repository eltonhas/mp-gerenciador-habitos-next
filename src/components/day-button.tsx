'use client'

import { Check, X } from 'lucide-react'
import { useState } from 'react'
import toast from 'react-hot-toast'

import { toogleHabit } from '@/actions/toogle-habit'
import { isFucture } from '@/utils/is-future'

interface DayButtonProps {
  label?: string
  day: string
  disable?: boolean
  actualDay?: boolean
  streak: Record<string, boolean>
  title?: string
}

export function DayButton({
  label,
  day,
  disable = false,
  actualDay = false,
  streak,
  title,
}: DayButtonProps) {
  const dayLabel = new Date(day)

  const dayString = dayLabel.toISOString()

  const streakDates = Object.entries(streak)

  const dayStatus: (string | boolean)[] = []
  streakDates.forEach((date) => {
    const dayStringFormat = dayString.split('T')[0]
    const dateFormat = date[0].split('T')[0]
    if (dateFormat === dayStringFormat) {
      dayStatus.push(date[0])
      dayStatus.push(date[1])
    }
  })

  const [checked, setChecked] = useState<'out' | 'on' | 'off'>(
    dayStatus.length === 0 ? 'out' : dayStatus[1] ? 'on' : 'off',
  )

  const [disabledClick, setDisabledClick] = useState(false)

  async function handleClick() {
    setDisabledClick(true)
    if (isFucture(dayLabel)) {
      toast.error('Essa data ainda não passou.')
      setDisabledClick(false)
      return
    }

    if (checked === 'out' || checked === 'off') {
      await toogleHabit({
        date: day,
        done: true,
        habit: title as string,
        habitStreak: streak,
      })
      setChecked('on')
    } else {
      await toogleHabit({
        date: day,
        done: false,
        habit: title as string,
        habitStreak: streak,
      })
      setChecked('off')
    }

    setDisabledClick(false)
  }

  return (
    <button
      className={`flex flex-col items-center gap-2 px-2 py-2 transition-all ${!disable && 'hover:brightness-150'} ${actualDay && 'font-extrabold text-slate-200'}`}
      onClick={handleClick}
      disabled={disable || disabledClick}
    >
      {label || dayLabel.getDate()}

      {checked === 'out' && (
        <div className="w-2 rounded-full bg-slate-400 p-3" />
      )}
      {checked === 'on' && <Check className="text-green-700" />}
      {checked === 'off' && <X className="text-red-500" />}
    </button>
  )
}
