'use client'

import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react'
import { useState } from 'react'

import { days } from '@/utils/days'
import { getDaysInMonth } from '@/utils/get-days-in-month'
import { months } from '@/utils/months'

import { DayButton } from './day-button'

interface CalendarProps {
  streak: Record<string, boolean>
  title: string
}

export function Calendar({ streak, title }: CalendarProps) {
  const currentDate = new Date()
  const currentDay = currentDate.getDate()
  const currentMonth = currentDate.getMonth()
  const currentYear = currentDate.getFullYear()

  const [monthDisplay, setMonthDisplay] = useState(currentMonth)
  const [yearDisplay, setYearDisplay] = useState(currentYear)

  const daysInMonth = getDaysInMonth(yearDisplay, monthDisplay)

  function handleChangeMonth(sign: '+' | '-') {
    if (sign === '+') {
      if (monthDisplay < 11) {
        setMonthDisplay(monthDisplay + 1)
      } else {
        setMonthDisplay(0)
        setYearDisplay(yearDisplay + 1)
      }
    } else {
      if (monthDisplay > 0) {
        setMonthDisplay(monthDisplay - 1)
      } else {
        setMonthDisplay(11)
        setYearDisplay(yearDisplay - 1)
      }
    }
  }

  return (
    <div className="flex w-[80%] flex-col gap-4 rounded-s-md bg-neutral-800 p-4">
      <div className="flex w-full items-center justify-between">
        <button onClick={() => handleChangeMonth('-')}>
          <ArrowLeftIcon className="size-4 text-neutral-400" />
        </button>
        <p className="text-neutral-400">
          {months[monthDisplay]} de {yearDisplay}
        </p>
        <button onClick={() => handleChangeMonth('+')}>
          <ArrowRightIcon className="size-4 text-neutral-400" />
        </button>
      </div>
      <div className="grid w-full grid-cols-7">
        {days.map((day) => (
          <div key={day} className="flex flex-col items-center p-2">
            <span className="font-light text-neutral-200">{day}</span>
          </div>
        ))}
        {daysInMonth.map((day, i) => {
          if (day !== null) {
            return (
              <DayButton
                day={day.toISOString()}
                key={String(day)}
                actualDay={
                  day.getDate() === currentDay &&
                  currentMonth === monthDisplay &&
                  currentYear === yearDisplay
                }
                streak={streak}
                title={title}
              />
            )
          } else {
            return <div key={i} />
          }
        })}
      </div>
    </div>
  )
}
