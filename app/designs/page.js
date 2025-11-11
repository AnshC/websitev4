"use client";
import data from "@/data/designs.json";
import { useState, useEffect } from "react";
import Image from "next/image";
import { TiArrowRightThick, TiArrowLeftThick } from "react-icons/ti";
import Button from "@/components/ui/Button";
import Tilt from "react-parallax-tilt";

export default function Design() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [designArray, setDesignArray] = useState(data.designs);
  const categories = ["All", "Cars", "Artists", "Miscellaneous", "Featured"];

  useEffect(() => {
    setPrevIndex(currentIndex);
    setIsTransitioning(true);
    updateDesigns();
    setCurrentIndex(0);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [categoryIndex]);

  function updateDesigns() {
    switch (categoryIndex) {
      case 0:
        setDesignArray(data.designs);
        break;
      case 1:
        setDesignArray(
          data.designs.filter((design) => design.category === "cars"),
        );
        break;
      case 2:
        setDesignArray(
          data.designs.filter((design) => design.category === "artists"),
        );
        break;
      case 3:
        setDesignArray(
          data.designs.filter((design) => design.category === "misc"),
        );
        break;
      case 4:
        setDesignArray(data.designs.filter((design) => design.featured));
        break;
      default:
        setDesignArray(data.designs);
    }
  }

  function handleLeftClick() {
    setPrevIndex(currentIndex);
    setIsTransitioning(true);
    setCurrentIndex((prev) => {
      const newIndex = prev === 0 ? designArray.length - 1 : prev - 1;
      return newIndex;
    });
    setTimeout(() => setIsTransitioning(false), 500);
  }

  function handleRightClick() {
    setPrevIndex(currentIndex);
    setIsTransitioning(true);
    setCurrentIndex((prev) => {
      const newIndex = prev === designArray.length - 1 ? 0 : prev + 1;
      return newIndex;
    });
    setTimeout(() => setIsTransitioning(false), 500);
  }

  const prevGradient = {
    background: `radial-gradient(circle at center, transparent 0%, transparent 70%, ${
      designArray[prevIndex]
        ? designArray[prevIndex].colors.primary
        : designArray[0].colors.primary
    }20 100%)`,
  };

  const currentGradient = {
    background: `radial-gradient(circle at center, transparent 0%, transparent 70%, ${
      designArray[currentIndex]
        ? designArray[currentIndex].colors.primary
        : designArray[0].colors.primary
    }20 100%)`,
  };

  return (
    <div className="w-full h-[100vh] bg-background relative">
      {/* Previous gradient layer */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          ...prevGradient,
          opacity: isTransitioning ? 1 : 0,
        }}
      />

      {/* Current gradient layer */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          ...currentGradient,
          opacity: isTransitioning ? 0 : 1,
        }}
      />

      {/* Content layer */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
        <div className="absolute top-10 font-sans">
          <ul className="flex text-2xl">
            {categories.map((category, index) => (
              <li
                key={index}
                className={`cursor-pointer mx-5 ${index === categoryIndex ? "underline underline-offset-10" : "hover-underline-animation left"}`}
                onClick={() => {
                  setCategoryIndex(index);
                }}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center">
          <Button
            href="#"
            icon={<TiArrowLeftThick />}
            alt
            onClick={handleLeftClick}
            iconStyles={"text-4xl"}
          />
          <div className="mx-20">
            <Tilt tiltReverse>
              <Image
                src={designArray[currentIndex].image}
                width={designArray[currentIndex].dimensions.width}
                height={designArray[currentIndex].dimensions.height}
                alt={designArray[currentIndex].title}
                priority
              />
            </Tilt>
          </div>
          <Button
            href="#"
            icon={<TiArrowRightThick />}
            alt
            onClick={handleRightClick}
            iconStyles={"text-4xl"}
          />
        </div>
        <div className="absolute bottom-10 font-sans">
          <p className="text-5xl font-black">
            <span style={{ color: designArray[currentIndex].colors.primary }}>
              {currentIndex + 1}
            </span>{" "}
            of{" "}
            <span style={{ color: designArray[currentIndex].colors.primary }}>
              {designArray.length}
            </span>{" "}
            designs.
          </p>
        </div>
      </div>
    </div>
  );
}
