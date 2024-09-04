'use server'

import { doc, updateDoc } from 'firebase/firestore'

import { db } from '@/libs/firebase'

interface ToogleHabitProps {
  habit: string
  habitStreak: Record<string, boolean>
  date: string
  done: boolean
}

export async function toogleHabit({
  date,
  done,
  habit,
  habitStreak,
}: ToogleHabitProps) {
  if (!habitStreak || !date) {
    return
  }

  const updateStreak = {
    ...habitStreak,
    [date]: done,
  }

  const habitRef = doc(db, 'Habits', habit)

  await updateDoc(habitRef, {
    streak: updateStreak,
  })
}
