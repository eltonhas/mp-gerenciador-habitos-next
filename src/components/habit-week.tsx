import { Trash2 } from 'lucide-react'
import Link from 'next/link'

import { days } from '@/utils/days'

import { DayButton } from './day-button'

interface HabitWeekProps {
  title: string
}

export function HabitWeek({ title }: HabitWeekProps) {
  return (
    <div className="flex w-[80%] flex-col gap-2">
      <div className="flex justify-between">
        <Link href={'/habit/teste'} className="font-light text-slate-200">
          {title}
        </Link>
        <button className="transition-opacity hover:opacity-80">
          <Trash2 className="text-red-500" />
        </button>
      </div>
      <Link
        href={'/habit/teste'}
        className="flex justify-around rounded bg-neutral-800 px-2 pb-4 pt-2"
      >
        {days.map((day) => (
          <DayButton day={day} key={day} disable={true} />
        ))}
      </Link>
    </div>
  )
}
