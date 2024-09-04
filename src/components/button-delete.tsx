'use client'

import { Trash2 } from 'lucide-react'

import { deleteHabit } from '@/actions/delete-habit'

interface ButtonDeleteProps {
  habit: string
}

export function ButtonDelete({ habit }: ButtonDeleteProps) {
  return (
    <button
      className="transition-opacity hover:opacity-80"
      onClick={() => deleteHabit(habit)}
    >
      <Trash2 className="text-red-500" />
    </button>
  )
}
