"use client";
import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/ui/Navbar";
import DesignSection from "@/components/pages/home/Design";
import Hero from "@/components/pages/home/Hero";
import ProjectSection from "@/components/pages/home/Projects";
import ContactSection from "@/components/pages/home/Contact";
import styles from "./page.module.css";

export default function Home() {
  const designRef = useRef(null);

  const [navVariant, setNavVariant] = useState("foreground");
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const designSection = document.getElementById("design");

    if (!container || !designSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setNavVariant(entry.isIntersecting ? "background" : "foreground");
      },
      {
        root: container,
        threshold: 0.6,
      },
    );

    observer.observe(designSection);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={`font-sans ${styles.homeComponent}`}>
      <Navbar variant={navVariant} />

      <main className="h-[100vh] bg-background pt-20">
        <Hero designRef={designRef} />
      </main>

      <section
        id="design"
        className="h-[100vh] bg-foreground pt-20"
        ref={designRef}
      >
        <DesignSection />
      </section>

      <section className="h-[100vh] bg-background pt-20">
        <ProjectSection />
      </section>

      <section className="h-[100vh] bg-background pt-20">
        <ContactSection />
      </section>
    </div>
  );
}
