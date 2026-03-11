"use client";
import { ReactLenis, useLenis } from "lenis/react";
import data from "@/data/designs.json";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Tilt from "react-parallax-tilt";
import Button from "@/components/ui/Button";
import { FaHouseChimney, FaInstagram } from "react-icons/fa6";

export default function Design() {
  const [items, setItems] = useState(data.designs);

  return (
    <div className="w-full bg-background flex flex-col font-sans">
      <ReactLenis />
      <div className="flex items-center justify-between font-serif py-10 w-full z-20 px-10 md:px-30">
        <div className="hidden sm:flex items-center justify-center">
          <Button href="/" icon={<FaHouseChimney />} alt className="mr-5">
            Home
          </Button>
          <Button
            href="https://instagram.com/ansh.psd/"
            icon={<FaInstagram />}
            alt
          >
            @ansh.psd
          </Button>
        </div>
        <div className="flex sm:hidden">
          <Button
            href="/"
            icon={<FaHouseChimney />}
            alt
            className="mr-5"
          ></Button>
          <Button
            href="https://instagram.com/ansh.psd/"
            icon={<FaInstagram />}
            alt
          ></Button>
        </div>
        <h1 className="font-sans tracking-tighter font-light text-2xl ml-5">
          Ansh Chauhan
        </h1>
      </div>
      <main className="w-full flex flex-col py-30 px-5 sm:px-10 md:px-30">
        <h1 className="font-serif text-6xl text-center">Design Portfolio.</h1>
        <p className="font-serif text-3xl text-center italic">
          Artwork inspired by cars, music, and personal experiences.
        </p>
      </main>
      <section className="w-full flex flex-wrap items-center justify-center z-5 mb-20 px-5 sm:px-10 md:px-30">
        {items.map((img) => {
          return (
            <Link href={img.img} key={img.id}>
              <div
                className="w-75 h-75 md:w-100 md:h-100 relative m-5"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transition = "box-shadow 0.5s";
                  e.currentTarget.style.boxShadow = `0px 0px 1000px 300px ${img.colors.shadow}`;
                  e.currentTarget.style.borderRadius = "100px";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transition = "box-shadow 3s";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderRadius = "100px";
                }}
              >
                <Tilt
                  glarePosition="all"
                  perspective={1500}
                  scale={1.1}
                  tiltReverse={true}
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  className="w-75 h-75 md:w-100 md:h-100 cursor-pointer"
                >
                  <Image
                    alt={img.title}
                    src={img.url}
                    fill={true}
                    style={{ objectFit: "cover" }}
                    priority={img.id < 7}
                  />
                </Tilt>
              </div>
            </Link>
          );
        })}
      </section>
      <footer className="mb-20">
        <p className="font-serif text-3xl text-center italic">
          More coming soon!
        </p>
      </footer>
    </div>
  );
}
