import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

import { Calendar } from '@/components/calendar'

interface HabitProps {
  params: {
    slug: string
  }
}

export default function Habit({ params: { slug } }: HabitProps) {
  return (
    <main className="flex h-full w-full max-w-4xl md:mx-auto">
      <div className="flex h-full w-full flex-col items-center pb-10 pt-20 md:h-2/3">
        <h1 className="pb-16 text-2xl">{slug}</h1>
        <div className="text-slate- mb-4 flex w-[80%] flex-col gap-4">
          <Link href={'/'} className="flex items-center gap-2">
            <ArrowLeft className="size-4" />
            <span>Voltar</span>
          </Link>
        </div>
        <Calendar />
      </div>
    </main>
  )
}
