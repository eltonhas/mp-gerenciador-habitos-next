'use client'

import { Check, X } from 'lucide-react'
import { useState } from 'react'

interface DayButtonProps {
  day: string
  disable?: boolean
}

export function DayButton({ day, disable = false }: DayButtonProps) {
  const [checked, setChecked] = useState<'out' | 'on' | 'off'>('out')
  function handleClick() {
    if (checked === 'out' || checked === 'off') {
      setChecked('on')
    } else {
      setChecked('off')
    }
  }
  return (
    <button
      className="flex flex-col items-center gap-2 px-2 py-2 transition-all hover:brightness-150"
      onClick={handleClick}
      disabled={disable}
    >
      {day}
      {checked === 'out' && (
        <div className="w-2 rounded-full bg-slate-400 p-3" />
      )}
      {checked === 'on' && <Check className="text-green-700" />}
      {checked === 'off' && <X className="text-red-500" />}
    </button>
  )
}
