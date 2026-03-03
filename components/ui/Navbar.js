import Link from "next/link";
import "./ui.css";

export default function Navbar({ variant }) {
  return (
    <div
      className={`w-full font-serif fixed top-0 left-0 z-10 transition-colors duration-300
          text-2xl px-5 py-10
          sm:text-3xl sm:px-10
          md:text-4xl md:px-30 md:py-10
          ${variant === "foreground" ? "text-foreground" : "text-background"}`}
      style={{
        "--underline-color":
          variant === "foreground" ? "var(--foreground)" : "var(--background)",
      }}
    >
      <ul className="flex justify-between">
        <div className="flex">
          <li className="px-2 sm:px-4">
            <Link className="hover-underline-animation left" href="/about">
              About.
            </Link>
          </li>
          <li className="px-2 sm:px-4">
            <Link className="hover-underline-animation left" href="/gallery">
              Gallery.
            </Link>
          </li>
        </div>
        <div className="flex">
          <li className="px-2 sm:px-4">
            <Link className="hover-underline-animation left" href="/designs">
              Designs.
            </Link>
          </li>
          <li className="px-2 sm:px-4">
            <Link className="hover-underline-animation left" href="/projects">
              Projects.
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
}
