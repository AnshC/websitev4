"use client";
import ShadowText from "@/components/ui/ShadowText";
import Button from "../../ui/Button";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const buttons = (alt, showText = true) => (
  <div className="flex flex-wrap justify-center gap-4">
    <Button href="mailto:anshch@umich.edu" icon={<SiGmail />} alt={alt}>
      {showText ? "Email" : null}
    </Button>
    <Button
      href="https://www.linkedin.com/in/anshc05/"
      icon={<FaLinkedinIn />}
      alt={alt}
    >
      {showText ? "LinkedIn" : null}
    </Button>
    <Button
      href="https://www.instagram.com/ansh.c05/"
      icon={<RiInstagramFill />}
      alt={alt}
    >
      {showText ? "Instagram" : null}
    </Button>
  </div>
);

export default function ContactSection() {
  return (
    <div className="bg-background w-full text-foreground flex flex-col items-center justify-center h-full p-5 sm:p-10 xl:p-40">
      <div className="bg-background xl:bg-foreground h-full w-full xl:rounded-3xl text-foreground xl:text-background flex flex-col items-center text-center justify-center">
        <div className="xl:hidden flex flex-col items-center">
          <ShadowText className="-translate-x-3" alt>
            <span className="hidden sm:inline">Contact Me!</span>
            <span className="sm:hidden">
              Contact
              <br />
              Me!
            </span>
          </ShadowText>
          {buttons(true, false)}
        </div>
        <div className="hidden xl:block">
          <ShadowText className="-translate-x-3">Contact Me!</ShadowText>
          {buttons(false, true)}
        </div>
      </div>
      <p className="mt-10 xl:mt-25">Developed & Design by Me.</p>
    </div>
  );
}
