import CircularGallery from "@/components/external/CircularGallery";
import ShadowText from "@/components/text/ShadowText";

export default function DesignSection() {
  return (
    <div className="bg-foreground w-full text-background flex flex-col align-center justify-center h-full">
      <ShadowText>Designs.</ShadowText>
      <p className="font-serif text-4xl px-40">
        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus
        ex sapien vitae pellentesque sem placerat. In id cursus mi pretium
        tellus duis convallis.
      </p>
      <div style={{ height: "400px", position: "relative" }}>
        <CircularGallery
          bend={1}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollEase={0.01}
        />
      </div>
    </div>
  );
}
