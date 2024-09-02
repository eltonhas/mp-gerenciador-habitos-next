import { ButtonNavigate } from '@/components/button-navigate'
import { NewHabitForm } from '@/components/new-habit-form'

export default function NewHabit() {
  return (
    <main className="flex h-full w-full max-w-4xl md:mx-auto">
      <div className="flex h-full w-full flex-col items-center pb-10 pt-20 md:h-2/3">
        <h1 className="pb-16 text-3xl">Novo hábito</h1>
        <NewHabitForm />
        <ButtonNavigate title="Cancelar" type="black" page="/" />
      </div>
    </main>
  )
}
