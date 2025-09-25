import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full font-serif absolute">
      <ul className="flex justify-between">
        <div className="flex">
          <li>
            <Link href="/about">About.</Link>
          </li>
          <li>
            <Link href="/gallery">Gallery.</Link>
          </li>
        </div>
        <div className="flex">
          <li>
            <Link href="/designs">Designs.</Link>
          </li>
          <li>
            <Link href="/projects">Projects.</Link>
          </li>
        </div>
      </ul>
    </div>
  );
}
