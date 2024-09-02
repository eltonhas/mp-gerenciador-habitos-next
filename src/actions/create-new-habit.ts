'use server'

import { z } from 'zod'

const newHabitSchema = z.object({
  new: z.string().min(1, { message: 'Digite um novo habito.' }),
})

export async function createNewHabit(data: FormData) {
  const result = newHabitSchema.safeParse(Object.fromEntries(data))

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors

    if (errors.new?.length !== 0) {
      return { success: false, message: errors.new }
    }
  }

  console.log(result)
}
