"use client";
import data from "@/data/designs.json";
import { useState } from "react";
import Image from "next/image";
import { TiArrowRightThick, TiArrowLeftThick } from "react-icons/ti";
import Button from "@/components/ui/Button";

export default function Design() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [opacity, setOpacity] = useState(100);

  function handleLeftClick() {
    setOpacity(0);
    setTimeout(() => {
      setOpacity(100);
      setCurrentIndex((prev) => {
        const newIndex = prev === 0 ? data.designs.length - 1 : prev - 1;
        return newIndex;
      });
    }, 200);
  }

  function handleRightClick() {
    setOpacity(0);
    setTimeout(() => {
      setOpacity(100);
      setCurrentIndex((prev) => {
        const newIndex = prev === data.designs.length - 1 ? 0 : prev + 1;
        return newIndex;
      });
    }, 200);
  }
  const radialBackground = {
    background: `radial-gradient(circle at center, transparent 0%, transparent 60%, ${data.designs[currentIndex].colors.primary}50 100%)`,
  };

  return (
    <div
      className={`w-full h-[100vh] bg-background flex items-center justify-center transition duration-200 ease-in-out opacity-${opacity}`}
      style={radialBackground}
    >
      <div className="flex items-center">
        <Button
          href="#"
          icon={<TiArrowLeftThick />}
          alt
          onClick={handleLeftClick}
        />
        <div className="mx-20">
          <Image
            src={data.designs[currentIndex].image}
            width={data.designs[currentIndex].dimensions.width}
            height={data.designs[currentIndex].dimensions.height}
            alt={data.designs[currentIndex].title}
            priority
          />
        </div>
        <Button
          href="#"
          icon={<TiArrowRightThick />}
          alt
          onClick={handleRightClick}
        />
      </div>
    </div>
  );
}
