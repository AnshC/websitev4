import Image from "next/image";

import SplitText from "@/components/ui/SplitText";
import CircularText from "@/components/ui/CircleText";

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
        <h1 className="text-[200px] font-black tracking-tighter p-1">
          Ansh Chauhan
        </h1>
        <p className="font-serif text-6xl p-1 translate-y-[-40px]">
          Web Dev. Design. Coffee.
        </p>
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
