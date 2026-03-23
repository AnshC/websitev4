import ShadowText from "@/components/ui/ShadowText";
import Button from "@/components/ui/Button";
import { TiArrowRightThick } from "react-icons/ti";
import { FaReact } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";
import { IoLogoJavascript } from "react-icons/io";
import { LuRotate3D } from "react-icons/lu";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import "./sections.css";
import Card from "@/components/ui/Card";
export default function ProjectSection() {
  return (
    <div className="bg-background w-full text-foreground flex flex-col justify-center h-full px-5 sm:px-10 md:px-30">
      <ShadowText alt>
        <span className="hidden sm:inline">Development.</span>
        <span className="sm:hidden">Code.</span>
      </ShadowText>
      <p className="font-serif text-2xl sm:text-3xl">
        "Developed, with design. View a collection of my projects crafted with a
        focus on minimal design, seamless user experience, and accessibility at
        their core."
      </p>
      <div className="hideScrollbar flex flex-row overflow-x-auto md:overflow-x-visible my-6 md:my-[50px] gap-4 md:gap-0 pb-2 md:pb-0">
        <Card
          href="https://f1positions.com"
          className="min-w-[220px] md:min-w-0"
          tags={[
            { title: "React.js", icon: <FaReact /> },
            { title: "Google Charts", icon: <BsGraphUp /> },
          ]}
        >
          <h3 className="text-xl xl:text-2xl 2xl:text-4xl font-bold">
            Visualizing F1 Positions
          </h3>
          <p className="text-sm xl:text-base 2xl:text-lg">
            Graphing Driver Positions.
          </p>
        </Card>
        <Card
          href="https://anshc.github.io/espresso-explained/index.html"
          className="min-w-[220px] md:min-w-0 md:mx-10"
          tags={[
            { title: "JavaScript", icon: <IoLogoJavascript /> },
            { title: "ModelViewer", icon: <LuRotate3D /> },
          ]}
        >
          <h3 className="text-xl xl:text-2xl 2xl:text-4xl font-bold">
            Espresso Explained
          </h3>
          <p className="text-sm xl:text-base 2xl:text-lg">
            Cappuccino or a Latte?
          </p>
        </Card>
        <Card
          href="https://anshc.vercel.app/"
          className="min-w-[220px] md:min-w-0"
          tags={[
            { title: "Next.js", icon: <SiNextdotjs /> },
            { title: "Tailwind", icon: <RiTailwindCssFill /> },
          ]}
        >
          <h3 className="text-xl xl:text-2xl 2xl:text-4xl font-bold">
            Personal Portfolio
          </h3>
          <p className="text-sm xl:text-base 2xl:text-lg">This Website.</p>
        </Card>
      </div>
      <div className="flex justify-between">
        <Button href="/projects" icon={<TiArrowRightThick />} alt>
          View Projects
        </Button>
        <Button href="https://github.com/AnshC" icon={<FaGithub />} alt>
          AnshC
        </Button>
      </div>
    </div>
  );
}
