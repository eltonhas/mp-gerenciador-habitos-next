import { collection, getDocs, query } from 'firebase/firestore'

import { habitProps } from '@/@types/habit'
import { db } from '@/libs/firebase'

export async function getHabits() {
  const habits: habitProps[] = []
  const habitsRef = collection(db, 'Habits')

  const q = query(habitsRef)

  const querySnapshot = await getDocs(q)

  querySnapshot.forEach((doc) => {
    const data: habitProps = {
      title: doc.id,
      infos: {
        streak: doc.data().streak,
        habitSlug: doc.data().habitSlug,
      },
    }

    habits.push(data)
  })

  return habits
}
