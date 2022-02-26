import React from 'react'
import Link from 'next/link'
import About from './about.js'


export default function Home() {

  return (
  <div>
      <nav>
        <li>
          <ul>
            <Link href="/"> home </Link>
          </ul>
          <ul>
            <Link href="/Posts"> Blogs </Link>{" "}
          </ul>
          <ul>
            <Link href="/about"> About </Link>{" "}
          </ul>
        </li>
      </nav>

      <About/>
    </div>
  )
}
