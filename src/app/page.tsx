import { ButtonNavigate } from '@/components/button-navigate'
import { HabitWeek } from '@/components/habit-week'

export default async function Home() {
  return (
    <main className="flex h-full w-full max-w-4xl md:mx-auto">
      <div className="flex h-full w-full flex-col items-center justify-between pb-10 pt-20 md:h-2/3">
        {/* <p className="text-xl text-slate-200">
          Você não tem hábitos cadastrados
        </p> */}

        <HabitWeek title="Beber 2 litros de água" />

        <ButtonNavigate page="new-habit" title="Novo hábito" />
      </div>
    </main>
  )
}
