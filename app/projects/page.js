"use client";
import data from "@/data/projects.json";
import { useState } from "react";
import Button from "@/components/ui/Button";
import { FaHouseChimney, FaGithub } from "react-icons/fa6";
import TargetCursor from "@/components/ui/TargetCursor";
import { ReactLenis } from "lenis/react";
import Link from "next/link";

export default function Projects() {
  const [projects, setProjects] = useState(data);

  return (
    <div className="w-full bg-background">
      <ReactLenis />
      <div className="px-40 flex absolute justify-between font-serif py-10 text-4xl w-full z-20">
        <div className="flex items-center justify-center">
          <Button
            href="/"
            icon={<FaHouseChimney />}
            alt
            className="mr-5 cursor-target"
            cursor="cursor-none"
          >
            Home
          </Button>
          <Button
            href="https://github.com/AnshC"
            icon={<FaGithub />}
            alt
            className="cursor-target"
            cursor="cursor-none"
          >
            AnshC
          </Button>
        </div>
        <h1 className="font-sans tracking-tighter font-light">Ansh Chauhan</h1>
      </div>
      <main className="w-full flex flex-col px-40 py-40">
        <h1 className="font-serif text-6xl text-center">Projects.</h1>
        <p className="font-serif text-3xl text-center italic">
          a collection of code.
        </p>
      </main>
      <div>
        <TargetCursor
          spinDuration={5}
          hideDefaultCursor
          parallaxOn
          hoverDuration={0.2}
        />
        <section className="px-40">
          <h2 className="font-serif text-[200px] text-left tracking-tighter">
            2026
          </h2>
          {projects["2026"].map((project) => (
            <div className="mb-10 p-10 cursor-target">
              <Link
                href={project.link ? project.link : ""}
                key={project.id}
                className="cursor-none"
              >
                <h3 className="font-serif text-5xl text-left tracking-tighter">
                  {project.title}
                  <span className="text-2xl italic ml-5 tracking-normal text-slate-400">
                    {project.languages.join(", ")}
                  </span>
                </h3>
                <p className="font-serif text-2xl text-left">
                  {project.description}
                </p>
              </Link>
            </div>
          ))}
        </section>
        <section className="px-40">
          <h2 className="font-serif text-[200px] text-left tracking-tighter">
            2025
          </h2>
          {projects["2025"].map((project) => (
            <div className="mb-10 p-10 cursor-target">
              <Link
                href={project.link ? project.link : ""}
                key={project.id}
                className="cursor-none"
              >
                <h3 className="font-serif text-5xl text-left tracking-tighter">
                  {project.title}
                  <span className="text-2xl italic ml-5 tracking-normal text-slate-400">
                    {project.languages.join(", ")}
                  </span>
                </h3>
                <p className="font-serif text-2xl text-left">
                  {project.description}
                </p>
              </Link>
            </div>
          ))}
        </section>
        <section className="px-40">
          <h2 className="font-serif text-[200px] text-left tracking-tighter">
            2024
          </h2>
          {projects["2024"].map((project) => (
            <div className="mb-10 p-10 cursor-target">
              <Link
                href={project.link ? project.link : ""}
                key={project.id}
                className="cursor-none"
              >
                <h3 className="font-serif text-5xl text-left tracking-tighter">
                  {project.title}
                  <span className="text-2xl italic ml-5 tracking-normal text-slate-400">
                    {project.languages.join(", ")}
                  </span>
                </h3>
                <p className="font-serif text-2xl text-left">
                  {project.description}
                </p>
              </Link>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
