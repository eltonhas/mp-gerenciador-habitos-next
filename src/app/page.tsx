import { getHabits } from '@/actions/get-habits'
import { ButtonNavigate } from '@/components/button-navigate'
import { HabitWeek } from '@/components/habit-week'

export default async function Home() {
  const habits = await getHabits()

  return (
    <main className="flex h-full w-full max-w-4xl md:mx-auto">
      <div className="flex h-full w-full flex-col items-center justify-between pb-10 pt-20 md:h-2/3">
        <div className="flex w-full flex-col items-center gap-8">
          {habits.length !== 0 ? (
            habits.map((habit) => (
              <HabitWeek
                title={habit.title}
                key={habit.infos.habitSlug}
                infos={habit.infos}
              />
            ))
          ) : (
            <p className="text-xl text-slate-200">
              Você não tem hábitos cadastrados
            </p>
          )}
        </div>
        <ButtonNavigate page="new-habit" title="Novo hábito" />
      </div>
    </main>
  )
}
