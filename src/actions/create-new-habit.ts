'use server'

import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from 'firebase/firestore'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { z } from 'zod'

import { db } from '@/libs/firebase'
import { createSlug } from '@/utils/create-slug'

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

  const habit = result.data?.new

  const habitSlug = createSlug(habit as string)

  const habitObject = {
    habitSlug,
    streak: {},
  }

  const habitsRef = collection(db, 'Habits')

  const q = query(habitsRef, where('habitSlug', '==', habitSlug))

  const querySnapshot = await getDocs(q)

  if (!querySnapshot.empty) {
    return { success: false, message: 'Habito já cadastrado.' }
  }

  const habitDoc = doc(habitsRef, habit)

  await setDoc(habitDoc, habitObject)

  revalidatePath('/')
  redirect('/')
}
