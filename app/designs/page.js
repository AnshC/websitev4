"use client";
import Design from "@/components/pages/design/Design";
import data from "@/data/designs.json";
import { useState } from "react";

export default function Designs() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleLeftClick() {
    setCurrentIndex((prev) => {
      const newIndex = prev === 0 ? data.designs.length - 1 : prev - 1;
      return newIndex;
    });
  }

  function handleRightClick() {
    setCurrentIndex((prev) => {
      const newIndex = prev === data.designs.length - 1 ? 0 : prev + 1;
      return newIndex;
    });
  }

  return (
    <div className="w-full h-[100vh] relative">
      <Design
        key={data.designs[currentIndex].id}
        data={data.designs[currentIndex]}
        handleLeftClick={handleLeftClick}
        handleRightClick={handleRightClick}
      />
    </div>
  );
}
