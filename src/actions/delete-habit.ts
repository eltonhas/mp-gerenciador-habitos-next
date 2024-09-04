'use server'
import { deleteDoc, doc } from 'firebase/firestore'
import { revalidatePath } from 'next/cache'

import { db } from '@/libs/firebase'

export async function deleteHabit(habit: string) {
  const habitsRef = doc(db, 'Habits', habit)
  await deleteDoc(habitsRef)

  revalidatePath('/')
}
