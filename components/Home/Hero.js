import Image from "next/image";

import SplitText from "@/components/external/SplitText";

export default function Hero() {
  return (
    <div className="relative h-full flex items-center justify-center">
      <div className="relative h-full aspect-square rounded-full overflow-hidden">
        <Image
          src="/img/hero.jpg"
          alt="Hero"
          fill
          className="object-cover grayscale"
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
        {/* <h1 className="text-9xl font-black tracking-tighter">Ansh Chauhan</h1> */}
        {/* <h2 className="font-serif text-4xl">Web Dev. Design. Coffee.</h2> */}
      </div>
    </div>
  );
}
