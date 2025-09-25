export default function ShadowText({ children, className, alt }) {
  return (
    <div className="relative">
      <h2
        className={`tracking-tighter font-bold text-9xl mb-[25px] px-40 ${className}`}
      >
        {children}
      </h2>
      <h2 className={`tracking-tighter font-bold text-9xl mb-[25px] px-40 absolute left-3 bottom-3 ${alt ? "stroke-text-alt": "stroke-text"} text-foreground`}>
        {children}
      </h2>
    </div>
  );
}
