import { Badge } from "@/components/ui/badge";
import { DrupalIcon } from "./icons/DrupalIcon";
import { GraphQLIcon } from "./icons/GraphQLIcon";
import { JavascriptIcon } from "./icons/JavascriptIcon";
import { JqueryIcon } from "./icons/JqueryIcon";
import { MUIIcon } from "./icons/MUIIcon";
import { NestIcon } from "./icons/NestIcon";
import { NextIcon } from "./icons/NextIcon";
import { PhpIcon } from "./icons/PhpIcon";
import { PlaywrightIcon } from "./icons/PlaywrightIcon";
import { ReactIcon } from "./icons/ReactIcon";
import { RemixIcon } from "./icons/RemixIcon";
import { TailwindIcon } from "./icons/TailwindIcon";
import { TypescriptIcon } from "./icons/TypescriptIcon";
import { Section } from "./Section";
import { VerticalTabs } from "./VerticalTabs";

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
            <ReactIcon size={30} />
            <NestIcon size={30} />
            <NextIcon size={30} />
            <RemixIcon size={30} />
            <TypescriptIcon size={30} />
            <TailwindIcon size={30} />
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
            <ReactIcon size={30} />
            <GraphQLIcon size={30} />
            <TypescriptIcon size={30} />
            <MUIIcon size={30} />
            <PlaywrightIcon size={30} />
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
            <ReactIcon size={30} />
            <DrupalIcon size={30} />
            <JavascriptIcon size={30} />
            <PhpIcon size={30} />
            <JqueryIcon size={36} />
          </div>
        </div>
      ),
    },
  ];
  return (
    <Section id="work">
      <h2 className="scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Career History
      </h2>
      <div className=" flex items-center justify-center">
        <div className="w-full max-w-4xl">
          <VerticalTabs items={tabItems} />
        </div>
      </div>
    </Section>
  );
};
