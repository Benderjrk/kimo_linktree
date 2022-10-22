import React from 'react'
import Link from "next/link";

type Props = {
    href: any,
    words: string
}

const Button = ({ href, words }: Props) => {
  return (
    <Link href={href}>
        <a className='heroButton hover:border-yellow-600  hover:shadow-inner hover:shadow-4xl hover:shadow-zinc-800/80'>{words}</a>
    </Link>
  )
}

export default Button