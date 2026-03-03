import Link from "next/link";
import "./ui.css";
export default function Card({ children, className, href, tags }) {
  const inner = (
    <div className="h-full w-full p-5 xl:p-10">
      {children}
      {tags && tags.length > 0 && (
        <div className="flex mt-3 hidden sm:flex xl:mt-5 flex-wrap gap-2">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="flex items-center justify-center px-2 xl:px-3 py-1 rounded-full bg-foreground text-background text-xs xl:text-sm font-medium"
            >
              {tag.icon && (
                <span className="text-base xl:text-lg mr-1">{tag.icon}</span>
              )}
              <span className="w-max">{tag.title}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div
      className={`border-3 rounded-2xl grow h-[150px] sm:h-[250px] md:h-max ${className} cardComponent`}
    >
      {href ? <Link href={href}>{inner}</Link> : inner}
    </div>
  );
}
