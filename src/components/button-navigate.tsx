'use client'

import { useRouter } from 'next/navigation'

interface CustonButtonProps {
  title: string
  type?: 'green' | 'black'
  page: string
}

export function ButtonNavigate({
  page,
  title,
  type = 'green',
}: CustonButtonProps) {
  const router = useRouter()
  function handleClick() {
    router.push(page)
  }
  return (
    <button
      className={`w-2/3 rounded py-2 font-semibold transition-opacity hover:opacity-80 md:w-1/4 ${type === 'green' ? 'bg-green-500 text-slate-900' : 'bg-slate-800 text-red-600'}`}
      onClick={handleClick}
    >
      {title}
    </button>
  )
}
