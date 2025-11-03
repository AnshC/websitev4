import Button from "@/components/ui/Button";
import DomeGallery from "@/components/ui/DomeGallery";
import Link from "next/link";
import { FaHouseChimney } from "react-icons/fa6";

export default function Gallery() {
  return (
    <div className="w-full h-[100vh] bg-foreground text-foreground flex flex-col items-center ">
      <div className="px-40 flex absolute justify-between font-serif py-10 text-4xl w-full z-20">
        <Button href="/" icon={<FaHouseChimney />} alt />
        <h1 className="font-sans tracking-tighter font-bold">
          My Camera Roll Highlights.
        </h1>
      </div>
      <DomeGallery segments={30} />
    </div>
  );
}
