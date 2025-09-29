import Link from "next/link";
import "./ui.css";

export default function Card({ children, className, href, tags }) {
  return (
    <div className={`border-3 rounded-2xl grow ${className} cardComponent`}>
      {href ? (
        <Link href={href}>
          <div className="h-full w-full p-10">
            {children}{" "}
            {tags && tags.length > 0 && (
              <div className="flex mt-5 ">
                {tags.map((tag, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center mr-2 px-3 py-1 rounded-full bg-foreground text-background text-sm font-medium"
                  >
                    {tag.icon && (
                      <span className="text-lg mr-1">{tag.icon}</span>
                    )}
                    <span>{tag.title}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Link>
      ) : (
        <div className="h-full w-full p-10">
          {children}{" "}
          {tags && tags.length > 0 && (
            <div className="flex mt-5 ">
              {tags.map((tag, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center mr-2 px-3 py-1 rounded-full bg-foreground text-background text-sm font-medium"
                >
                  {tag.icon && <span className="text-lg mr-1">{tag.icon}</span>}
                  <span>{tag.title}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
