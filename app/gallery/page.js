import DomeGallery from "@/components/ui/DomeGallery";
import Link from "next/link";

export default function Gallery() {
  return (
    <div className="font-sans w-full h-[100vh] bg-foreground text-foreground flex flex-col items-center ">
      <div className="px-40 flex absolute justify-between font-serif py-10 text-4xl w-full z-20">
        <Link href="/">
          <h1>Ansh Chauhan</h1>
        </Link>
        <h1>My Camera Roll Highlights.</h1>
      </div>
      <DomeGallery segments={30} />
    </div>
  );
}
