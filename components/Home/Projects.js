import ShadowText from "@/components/text/ShadowText";

import Button from "@/components/ui/Button";
import { TiArrowRightThick } from "react-icons/ti";
import { FaReact } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";
import { IoLogoJavascript } from "react-icons/io";
import { LuRotate3D } from "react-icons/lu";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";


import Card from "@/components/ui/Card";

export default function ProjectSection() {
  return (
    <div className="bg-background w-full text-foreground flex flex-col justify-center h-full px-40">
      <ShadowText alt>Development.</ShadowText>
      <p className="font-serif text-4xl">
        “Developed, with design. View a collection of my projects crafted with a
        focus on minimal design, seamless user experience, and accessibility at
        their core.”
      </p>
      <div className="flex my-[50px]">
        <Card
          href="https://f1positions.com"
          tags={[
            { title: "React.js", icon: <FaReact /> },
            { title: "Google Charts", icon: <BsGraphUp /> },
          ]}
        >
          <h3 className="text-4xl font-bold">Visualizing F1 Positions</h3>
          <p className="text-lg">Graphing Driver Positions.</p>
        </Card>
        <Card
          href="https://anshc.github.io/espresso-explained/index.html"
          className={"mx-10"}
          tags={[
            { title: "JavaScript", icon: <IoLogoJavascript /> },
            { title: "ModelViewer", icon: <LuRotate3D /> },
          ]}
        >
          <h3 className="text-4xl font-bold">Espresso Explained</h3>
          <p className="text-lg">Cappuccino or a Latte?</p>
        </Card>
        <Card
          href="https://anshc.netlify.app"
          tags={[
            { title: "Next.js", icon: <SiNextdotjs /> },
            { title: "Tailwind", icon: <RiTailwindCssFill /> },
          ]}
        >
          <h3 className="text-4xl font-bold">Personal Portfolio</h3>
          <p className="text-lg">This Website.</p>
        </Card>
      </div>
      <div className="flex justify-between">
        <Button href="/designs" icon={<TiArrowRightThick />} alt>
          View Projects
        </Button>
        <Button href="https://github.com/AnshC" icon={<FaGithub />} alt>
          AnshC
        </Button>
      </div>
    </div>
  );
}
