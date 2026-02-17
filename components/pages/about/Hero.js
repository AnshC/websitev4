"use client";
import Button from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { FaHouseChimney } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export default function Hero() {
  return (
    <div className="bg-background font-serif px-40 py-10 h-full w-full flex flex-col">
      <div className="flex items-center justify-between w-full">
        <Button href="/" icon={<FaHouseChimney />} alt>
          Home
        </Button>
        <h1 className="text-9xl font-sans font-black tracking-tighter px-10 translate-y-5">
          Ansh Chauhan
        </h1>
      </div>
      <div className="bg-foreground w-full flex-1 rounded-4xl flex overflow-hidden">
        <div className="flex-1 m-10 rounded-4xl relative overflow-hidden">
          <Image
            src={"/img/profile.jpeg"}
            fill={true}
            style={{ objectFit: "cover" }}
            alt="Portrait Picture of Ansh"
          />
        </div>
        <div className="h-full flex-1 text-background p-10 text-4xl flex flex-col justify-between">
          <div>
            <p className="pb-10">
              Hey! I'm Ansh Chauhan, a passionate{" "}
              <Link href="/projects" className="underline">
                developer
              </Link>{" "}
              and{" "}
              <Link href="/designs" className="underline">
                designer.
              </Link>{" "}
              I love working on cool projects that let me turn designs into
              digital experiences.
            </p>
            <p className="pb-10">
              I'm an undergraduate student at the University of Michigan,
              pursuing a degree in Data Science, alongside a minor in UX Design.
            </p>
          </div>
          <div className="flex">
            <Button
              className="mr-5"
              href="mailto:anshch@umich.edu"
              icon={<SiGmail />}
            />
            <Button
              className="mr-5"
              href="https://www.linkedin.com/in/anshc05/"
              icon={<FaLinkedinIn />}
            />
            <Button
              className="mr-5"
              href="https://www.instagram.com/ansh.c05/"
              icon={<RiInstagramFill />}
            />
            <Button
              className="mr-5"
              href="https://github.com/AnshC"
              icon={<FaGithub />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
