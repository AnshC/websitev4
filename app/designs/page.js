"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./page.module.css";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import HighlightSection from "@/components/design/Highlights";
import CarSection from "@/components/design/Cars";
import MiscSection from "@/components/design/Misc";
import ProjectSection from "@/components/design/Projects";

export default function Designs() {
  const [currentView, setCurrentView] = useState(0);

  const handleBackClick = () => {
    setCurrentView((prev) => (prev === 0 ? 3 : prev - 1));
  };

  const handleForwardClick = () => {
    setCurrentView((prev) => (prev === 3 ? 0 : prev + 1));
  };

  const views = [
    <HighlightSection key="highlights" />,
    <CarSection key="cars" />,
    <MiscSection key="misc" />,
    <ProjectSection key="projects" />,
  ];

  return (
    <div className="w-full h-[100vh]">
      <div className="px-40 flex absolute justify-between font-serif py-10 text-4xl w-full z-20">
        <Link href="/">
          <h1>Ansh Chauhan</h1>
        </Link>
        <h1>Design Portfolio</h1>
      </div>
      <div className="w-full h-full font-sans relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full absolute top-0 left-0"
          >
            {views[currentView]}
          </motion.div>
        </AnimatePresence>
        <div className="absolute h-full w-full flex justify-between text-4xl z-10">
          <div
            onClick={handleBackClick}
            className={`h-full w-[100px] flex items-center justify-center cursor-pointer ${styles.leftGradient}`}
          >
            <IoIosArrowBack className={styles.icon} />
          </div>
          <div
            onClick={handleForwardClick}
            className={`h-full w-[100px] flex items-center justify-center cursor-pointer ${styles.rightGradient}`}
          >
            <IoIosArrowForward className={styles.icon} />
          </div>
        </div>
      </div>
    </div>
  );
}
