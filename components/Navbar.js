import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="Navbar">
      <ul>
        <li>
          <Link href="/"> Home </Link>
        </li>
        <li>
          <Link href="/Posts"> Blogs </Link>
        </li>
        <li>
          <Link href="/about"> About </Link>
        </li>
      </ul>
    </nav>
  );
}
