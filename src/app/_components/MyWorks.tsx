import Link from "next/link";
import { WorkProps } from "./dataStatus";
import { Badge } from "@/components/ui/badge";
import { VerticalTabs } from "./VerticalTabs";
import { ReactIcon } from "./icons/ReactIcon";
import { NestIcon } from "./icons/NestIcon";
import { NextIcon } from "./icons/NextIcon";
import { RemixIcon } from "./icons/RemixIcon";
import { Type } from "lucide-react";
import { TypescriptIcon } from "./icons/TypescriptIcon";
import { MUIIcon } from "./icons/MUIIcon";
import { GraphQLIcon } from "./icons/GraphQLIcon";
import { PlaywrightIcon } from "./icons/PlaywrightIcon";
import { TailwindIcon } from "./icons/TailwindIcon";
import { DrupalIcon } from "./icons/DrupalIcon";
import { JavascriptIcon } from "./icons/JavascriptIcon";
import { PhpIcon } from "./icons/PhpIcon";
import { JqueryIcon } from "./icons/JqueryIcon";

export const MyWorks = () => {
  const tabItems = [
    {
      id: "01",
      title: "Freelance",
      content: (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold font-heading text-primary">
            Fullstack Developper - JavaScript / Typescript
          </h2>
          <p className="text-sm font-heading text-primary/50">
            August 2024 - Present
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-primary font-heading mr-2">▸</span>
              <span className="text-primary">
                Developed and styled interactive web applications for Apple
                Music using Ember and SCSS
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">▸</span>
              <span className=" text-primary">
                Built and shipped the Apple Music Extension for Facebook
                Messenger leveraging third-party and internal API integrations
              </span>
            </li>
          </ul>
          <Badge variant="outline">Skills</Badge>
          <div className="flex items-center gap-4 text-black">
            <ReactIcon size={24} />
            <NestIcon size={24} />
            <NextIcon size={24} />
            <RemixIcon size={24} />
            <TypescriptIcon size={24} />
            <TailwindIcon size={24} />
          </div>
        </div>
      ),
    },
    {
      id: "02",
      title: "HubeeCar",
      content: (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold font-heading text-primary">
            Front-End Developer
          </h2>
          <p className="text-sm font-heading text-primary/50">
            November 2023 - August 2024
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-primary  mr-2">▸</span>
              <span className="text-primary">
                Collaborated with a small team of student designers to spearhead
                new projects
              </span>
            </li>
          </ul>
          <Badge variant="outline">Skills</Badge>
          <div className="flex items-center gap-4 text-black">
            <ReactIcon size={24} />
            <GraphQLIcon size={24} />
            <TypescriptIcon size={24} />
            <MUIIcon size={24} />
            <PlaywrightIcon size={24} />
          </div>
        </div>
      ),
    },
    {
      id: "03",
      title: "CGI",
      content: (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold font-heading text-primary">
            Software Engineer
          </h2>
          <p className="text-sm font-heading text-primary/50">
            February 2023 - November 2023
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-primary mr-2">▸</span>
              <span className="text-primary">
                Engineered and maintained major features of customer-facing web
                app using ES6, Handlebars, Backbone, Marionette and CSS
              </span>
            </li>
          </ul>
          <Badge variant="outline">Skills</Badge>
          <div className="flex items-center gap-4 text-black">
            <ReactIcon size={24} />
            <DrupalIcon size={24} />
            <JavascriptIcon size={24} />
            <PhpIcon size={24} />
            <JqueryIcon size={24} />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className=" flex items-center justify-center p-8">
      <div className="w-full max-w-4xl">
        <VerticalTabs items={tabItems} />
      </div>
    </div>
  );
};
