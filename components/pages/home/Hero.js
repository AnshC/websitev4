import Image from "next/image";
import CircularText from "@/components/ui/CircleText";

export default function Hero({ designRef }) {
  const handleClick = () => {
    if (designRef.current) {
      designRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative h-full flex flex-col items-center justify-center">
      <div className="relative aspect-square rounded-full overflow-hidden md:h-full md:aspect-square w-[300px] h-[300px] md:w-auto mb-10 md:mb-0">
        <Image
          src="/img/hero.jpg"
          alt="Hero"
          fill
          priority
          className="object-cover grayscale brightness-50"
        />
      </div>
      <div className="relative text-center text-foreground flex flex-col px-10 md:absolute px-0">
        <h1 className="font-black tracking-tighter p-1 text-6xl sm:text-7xl md:text-[96px] lg:text-[128px] 2xl:text-[180px]">
          Ansh Chauhan
        </h1>
        <p className="font-serif p-1 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          Web Dev. Design. Coffee.
        </p>
      </div>
      <div
        className="absolute bottom-0 right-0 m-30 hidden lg:block"
        onClick={handleClick}
      >
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
