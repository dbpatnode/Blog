import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="Footer">
      <p>Copyright © 2022, Daniel Patnode</p>
      <nav>
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
    </div>
  );
}
