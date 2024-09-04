import { collection, getDocs, query, where } from 'firebase/firestore'

import { habitProps } from '@/@types/habit'
import { db } from '@/libs/firebase'

export async function getHabit(slug: string) {
  const habitsRef = collection(db, 'Habits')

  const q = query(habitsRef, where('habitSlug', '==', slug))

  const docSnap = await getDocs(q)

  const habits: habitProps[] = []

  docSnap.forEach((doc) => {
    const data: habitProps = {
      title: doc.id,
      infos: {
        streak: doc.data().streak,
        habitSlug: doc.data().habitSlug,
      },
    }

    habits.push(data)
  })

  return habits[0]
}
