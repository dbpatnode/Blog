import React from 'react'
import Link from 'next/link'


export default function Navbar() {

  return (
    <div>
        <nav>
            <li>
                <ul><Link href="/"> home </Link></ul>
                <ul><Link href="/Posts"> Blogs </Link>{" "}</ul>
                <ul><Link href="/about"> About </Link>{" "}</ul>
            </li>
        </nav>
    </div>
  )
}
