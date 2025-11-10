import Image from "next/image";
import { TiArrowRightThick, TiArrowLeftThick } from "react-icons/ti";
import Button from "@/components/ui/Button";

export default function Design(props) {
  const radialBackground = {
    background: `radial-gradient(circle at center, transparent 0%, transparent 60%, ${props.data.colors.primary}50 100%)`,
  };

  return (
    <div
      className="w-full h-full bg-background flex items-center justify-center"
      style={radialBackground}
    >
      <div className="flex items-center">
        <Button
          href="#"
          icon={<TiArrowLeftThick />}
          alt
          onClick={props.handleLeftClick}
        />
        <div className="mx-20">
          <Image
            src={props.data.image}
            width={props.data.dimensions.width}
            height={props.data.dimensions.height}
            alt={props.data.title}
            priority
          />
        </div>
        <Button
          href="#"
          icon={<TiArrowRightThick />}
          alt
          onClick={props.handleRightClick}
        />
      </div>
    </div>
  );
}
