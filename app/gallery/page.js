import DomeGallery from "@/components/external/DomeGallery";
import Link from "next/link";

export default function Gallery() {
  return (
    <div className="font-sans w-full h-[100vh] bg-foreground text-foreground">
      <div className="px-40 flex absolute justify-between font-serif py-10 text-4xl w-full z-20">
        <Link href="/">
          <h1>Ansh Chauhan</h1>
        </Link>
        <h1>Gallery</h1>
      </div>
      <div className="absolute z-20 bottom-0 px-40 py-10">
        <h1 className="px-5 py-2 bg-background text-6xl font-bold">
          Cars. Coffee. Cities. Sound.
        </h1>
        <p className="px-5 py-2 bg-background text-3xl w-[70%]">
          Just the things that keep me inspired.
        </p>
      </div>
      <DomeGallery segments={30} />
    </div>
  );
}
