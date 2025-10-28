export default function ShadowText({ children, className, alt }) {
  return (
    <div className={`relative tracking-tighter font-bold text-9xl mb-[25px] w-max h-max ${className}`}>
      <h2 className="invisible">{children}</h2> 
      <h2
        className={`absolute top-0`}
      >
        {children}
      </h2>
      <h2 className={`absolute top-0 translate-x-3 -translate-y-3 ${alt ? "stroke-text-alt": "stroke-text"} text-foreground`}>
        {children}
      </h2>
    </div>
  );
}
