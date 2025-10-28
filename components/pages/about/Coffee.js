import Image from "next/image";

export default function Coffee() {
  return (
    <div className="bg-background font-serif px-40 py-10 h-full w-full flex flex-col">
      <h1 className="text-9xl font-sans font-black tracking-tighter px-10 translate-y-5">
        Cars + Coffee
      </h1>
      <div className="bg-foreground w-full flex-1 rounded-2xl flex flex-col overflow-hidden p-10 text-background">
        <p className="text-4xl pb-10">
          My coffee journey began in high school, when I started a small pop-up
          café called Café Dusk. That little project showed me how atmosphere
          and design can turn something simple into an experience. In college, I
          worked at Sweetwaters Coffee & Tea and later at Vertex Coffee
          Roasters, where I learned to appreciate the craft behind every cup.
        </p>
        <p className="text-4xl">
          These days, I’m often brewing at home or checking out local cafés —
          usually after a morning spent at a Cars & Coffee show. I’ve found that
          both coffee and cars share the same appeal for me: creativity,
          craftsmanship, and the joy of bringing people together around shared
          passions.
        </p>
        <div className="flex w-full h-full">
          <div className="flex-1 relative flex items-center justify-center grayscale">
            <Image
              src="/img/g35.png"
              alt="Infinti G35 Coupe"
              width={700}
              height={700}
            />
            <Image
              src="/img/g35_2.png"
              alt="Infinti G35 Coupe"
              width={700}
              height={700}
            />
            <Image
              src="/img/g35.png"
              alt="Infinti G35 Coupe"
              width={700}
              height={700}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
