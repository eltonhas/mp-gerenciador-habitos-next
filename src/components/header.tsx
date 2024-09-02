import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <Link href={'/'} className="my-8 flex items-end justify-center gap-2">
      <Image
        src={'/checked.svg'}
        alt="checked"
        width={999}
        height={999}
        className="size-10 md:size-14"
      />
      <h1 className="text-3xl font-bold md:text-5xl">
        meta.
        <span className="font-light text-green-400">diária</span>
      </h1>
    </Link>
  )
}
