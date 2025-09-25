import Image from "next/image";

export default function Hero() {
  return (
    <div className="h-[70vh]">
      <Image src={"/img/hero.jpeg"} height={100} width={100}/>
      <div className="text-center">
        <h1 className="text-6xl font-black tracking-tighter">Ansh Chauhan</h1>
        <h2 className="font-serif text-xl">Web Dev. Design. Coffee.</h2>
      </div>
    </div>
  );
}
