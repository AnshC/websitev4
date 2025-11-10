import Link from "next/link";
import "./ui.css";

export default function Button({
  children,
  href,
  icon,
  className,
  alt,
  iconStyles,
  onClick,
}) {
  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick(e);
    }
  };

  return (
    <div
      className={`font-sans font-bold text-xl ${className} ${alt ? "text-foreground" : "text-background"}`}
    >
      <Link
        className={`border-3 rounded-full p-3 ${alt ? "border-foreground buttonShadowAlt" : "border-background buttonShadow"} w-max flex items-center`}
        href={href}
        onClick={handleClick}
      >
        <div>{children}</div>
        {icon ? (
          <div className={children ? `ml-2 text-2xl` : iconStyles}>{icon}</div>
        ) : (
          ""
        )}
      </Link>
    </div>
  );
}
