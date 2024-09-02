'use client'

import toast from 'react-hot-toast'

import { createNewHabit } from '@/actions/create-new-habit'

export function NewHabitForm() {
  async function handleSubmit(formData: FormData) {
    const result = await createNewHabit(formData)

    if (!result?.success) {
      if (result?.message) {
        toast.error(result?.message[0])
      }
    }
  }
  return (
    <form
      action={handleSubmit}
      className="flex w-2/3 flex-col items-center gap-10 pb-4"
    >
      <input
        type="text"
        className="w-full rounded bg-neutral-700 px-4 py-3 text-sm text-slate-300 focus:outline-none"
        name="new"
        id="new"
      />

      <button
        type="submit"
        className="w-full rounded bg-green-500 py-2 font-semibold text-slate-900 transition-opacity hover:opacity-80 md:w-[37%]"
      >
        Cadastrar
      </button>
    </form>
  )
}
