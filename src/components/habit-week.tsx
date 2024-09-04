import dayjs from 'dayjs'
import Link from 'next/link'

import { habitProps } from '@/@types/habit'
import { days } from '@/utils/days'
import { getCurrentWeekDates } from '@/utils/get-current-week-dates'

import { ButtonDelete } from './button-delete'
import { DayButton } from './day-button'

export function HabitWeek({ title, infos }: habitProps) {
  const toDay = dayjs()

  const dayWeek = toDay.day()

  const currentWeekDates = getCurrentWeekDates()

  console.log(currentWeekDates)

  return (
    <div className="flex w-[80%] flex-col gap-2">
      <div className="flex justify-between">
        <Link
          href={`/habit/${infos.habitSlug}`}
          className="font-light text-slate-200"
        >
          {title}
        </Link>
        <ButtonDelete habit={title} />
      </div>
      <Link
        href={`/habit/${title}`}
        className="flex justify-around rounded bg-neutral-800 px-2 pb-4 pt-2"
      >
        {days.map((day, i) => (
          <DayButton
            label={day}
            day={currentWeekDates[i]}
            key={day}
            disable={true}
            actualDay={i === dayWeek}
            streak={infos.streak}
          />
        ))}
      </Link>
    </div>
  )
}
