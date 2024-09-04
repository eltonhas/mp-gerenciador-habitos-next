import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

import { getHabit } from '@/actions/get-habit'
import { Calendar } from '@/components/calendar'

interface HabitProps {
  params: {
    slug: string
  }
}

export default async function Habit({ params: { slug } }: HabitProps) {
  const habit = await getHabit(slug)

  return (
    <main className="flex h-full w-full max-w-4xl md:mx-auto">
      <div className="flex h-full w-full flex-col items-center pb-10 pt-20 md:h-2/3">
        <h1 className="pb-16 text-2xl">{habit.title}</h1>
        <div className="mb-4 flex w-[80%] flex-col gap-4 text-neutral-300">
          <Link href={'/'} className="flex items-center gap-2">
            <ArrowLeft className="size-4" />
            <span>Voltar</span>
          </Link>
        </div>
        <Calendar streak={habit.infos.streak} title={habit.title} />
      </div>
    </main>
  )
}
