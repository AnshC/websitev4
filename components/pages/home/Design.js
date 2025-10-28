import CircularGallery from "@/components/ui/CircularGallery";
import ShadowText from "@/components/ui/ShadowText";
import Button from "@/components/ui/Button";

import { TiArrowRightThick } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";

export default function DesignSection() {
  return (
    <div className="bg-foreground w-full text-background flex flex-col justify-center h-full">
      <ShadowText className={"px-40"}>Design.</ShadowText>
      <p className="font-serif text-4xl px-40">
        “Design is not just what it looks like and feels like. Design is how it
        works." From concept to final detail, each piece is crafted to create
        meaningful and engaging experiences.
      </p>
      <div style={{ height: "400px", position: "relative" }}>
        <CircularGallery
          bend={1}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollEase={0.01}
        />
      </div>
      <div className="flex justify-between px-40">
        <Button href="/designs" icon={<TiArrowRightThick />}>
          View Designs
        </Button>
        <Button href="https://instagram.com/ansh.psd/" icon={<FaInstagram />}>
          @ansh.psd
        </Button>
      </div>
    </div>
  );
}
