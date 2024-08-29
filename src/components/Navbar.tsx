/** @format */

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex min-h-10 min-w-full items-center justify-center px-10 py-8 fixed z-30">
      <ul className="flex flex gap-52 font-medium">
        <li>
          <Link href="#home" className="hover:text-purple duration-300">
            Home
          </Link>
        </li>
        <li>
          <Link href="#project" className="hover:text-purple duration-300">
            Project
          </Link>
        </li>
        <li>
          <Link href="#contact" className="hover:text-purple duration-300">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
