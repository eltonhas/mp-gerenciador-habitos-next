import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react'

export function Calendar() {
  return (
    <div className="w-[80%] rounded-s-md bg-neutral-800 p-4">
      <div className="flex w-full items-center justify-between">
        <ArrowLeftIcon className="size-4 text-neutral-500" />
        <p className="text-neutral-500">Setembro de 2024</p>
        <ArrowRightIcon className="size-4 text-neutral-500" />
      </div>
    </div>
  )
}
