import Image from "next/image";

import SplitText from "@/components/external/SplitText";
import CircularText from "@/components/external/CircleText";

export default function Hero({ designRef }) {
  const handleClick = () => {
    if (designRef.current) {
      designRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative h-full flex items-center justify-center">
      <div className="relative h-full aspect-square rounded-full overflow-hidden">
        <Image
          src="/img/hero.jpg"
          alt="Hero"
          fill
          priority
          className="object-cover grayscale brightness-50"
        />
      </div>
      <div className="absolute text-center text-foreground flex flex-col">
        <SplitText
          text="Ansh Chauhan"
          className="text-[200px] font-black tracking-tighter text-shadow-[0_5px_25px_rgb(0_0_0_/_1)] p-1"
          delay={100}
          duration={0.5}
          ease="power3.out"
          splitType="words"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="0"
          textAlign="center"
        />
        <SplitText
          text="Web Dev. Design. Coffee."
          className="font-serif text-6xl p-1 translate-y-[-40px]"
          delay={100}
          duration={0.5}
          ease="power3.out"
          splitType="words"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="0"
          textAlign="center"
        />
      </div>
      <div className="absolute bottom-0 right-0 m-30" onClick={handleClick}>
        <CircularText
          text="SCROLL*DOWN*"
          onHover="speedUp"
          spinDuration={20}
          className="absolute"
        />
      </div>
    </div>
  );
}
