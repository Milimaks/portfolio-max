"use client";

import { Button } from "@/components/ui/button";
import { Section } from "./Section";
import { ChevronDown } from "lucide-react";
import { AboutMe } from "./AboutMe";
import { useState } from "react";
import { Collapsible } from "@/components/ui/collapsible";
import {
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";

interface HeroProps {
  isCollapsibleOpen: boolean;
  setIsCollapsibleOpen: (isOpen: boolean) => void;
}

export const Hero: React.FC<HeroProps> = ({
  isCollapsibleOpen,
  setIsCollapsibleOpen,
}) => {
  const handleChevronClick = () => {
    setIsCollapsibleOpen(!isCollapsibleOpen);
  };

  const handleButtonClick = () => {
    setIsCollapsibleOpen(!isCollapsibleOpen);
  };

  return (
    <Section className="flex flex-col max-md:flex-col items-start gap-4 pt-5">
      <div className="flex flex-row-reverse">
        <div className="flex-[1] max-w-48">
          <img
            src="/my-face.png"
            alt="Maxime Faure - Picture"
            className="w-32 mx-auto h-auto rounded-full max-w-56 max-md:w-56 "
          />
        </div>
        <div className="flex-[3] w-full  justify-center items-center gap-2">
          <h2 className="font-caption text-5xl text-primary  font-bold">
            Hello, je suis Maxime
          </h2>
          <h3 className="text-3xl font-caption ">Développeur Fullstack</h3>
          <p className="text-base font-">
            Je suis un développeur logiciel basé à Toulouse, en France.
            Spécialisé en JavaScript, je suis passionné par la création de sites
            web à la fois esthétiques et fonctionnels, avec une préférence pour
            le Front-end, notamment avec React.
            <br />
            <br />
          </p>
          <h3 className="font-caption">Je peux vous aider avec :</h3>
          <ul className="flex flex-col gap-2 mt-2 font-heading relative">
            <li>o React</li>
            <li>o Node.js</li>
            <li>o Remix / Next.js</li>
            <li className="flex justify-between">
              <p>o SEO and more...</p>
              <Button
                onClick={handleButtonClick}
                className="absolute right-0 bottom-0 transition ease-in-out duration-300 hover:shadow-[0px_6px_0px_0px_black] hover:-translate-y-2 "
              >
                {isCollapsibleOpen ? "En savoir moins" : "En savoir plus"}
              </Button>
            </li>
          </ul>
        </div>
      </div>
      <Collapsible open={isCollapsibleOpen} className="w-full">
        <CollapsibleContent className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
          <AboutMe />
        </CollapsibleContent>
        <CollapsibleTrigger asChild>
          <div className="w-full flex justify-center">
            <ChevronDown
              className={`mt-8 text-primary/50 cursor-pointer transition-transform ${
                isCollapsibleOpen ? "" : "hidden"
              }`}
              onClick={handleChevronClick}
            />
          </div>
        </CollapsibleTrigger>
      </Collapsible>
    </Section>
  );
};
