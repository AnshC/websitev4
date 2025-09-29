import ShadowText from "@/components/text/ShadowText";
import Button from "../ui/Button";

import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";


export default function ContactSection () {
    return (
        <div className="bg-background w-full text-foreground flex flex-col items-center justify-center h-full p-40">
            <div className="bg-foreground h-full w-full rounded-3xl text-background flex flex-col items-center text-center justify-center">
                <ShadowText className="-translate-x-3">Contact Me!</ShadowText>
                <div className="flex">
                    <Button href="mailto:anshch@umich.edu" icon={<SiGmail />}>Email</Button>
                    <Button href="https://www.linkedin.com/in/anshc05/" className="mx-10" icon={<FaLinkedinIn />}>LinkedIn</Button>
                    <Button href="https://www.instagram.com/ansh.c05/" icon={<RiInstagramFill />}>Instagram</Button>
                </div>
            </div>
            <p className="mt-25">Developed & Design by Me.</p>
        </div>
    )
}