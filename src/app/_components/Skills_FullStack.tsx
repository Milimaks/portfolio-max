import { Badge } from "@/components/ui/badge";
import { ReactIcon } from "./icons/ReactIcon";
import { JavascriptIcon } from "./icons/JavascriptIcon";
import { TypescriptIcon } from "./icons/TypescriptIcon";
import { PhpIcon } from "./icons/PhpIcon";
import { DrupalIcon } from "./icons/DrupalIcon";
import { NextIcon } from "./icons/NextIcon";

export const SkillsFullStack = () => {
  return (
    <div className="flex items-center gap-4 max-md:flex-col max-md:items-start">
      <Badge variant="outline" className="w-fit">
        Fullstack
      </Badge>
      <ul className="flex flex-wrap gap-2">
        <li>
          <Badge variant="default" className="flex gap-2 w-fit">
            <TypescriptIcon size={24} />
            <p>Typescript</p>
          </Badge>
        </li>
        <li>
          <Badge variant="default" className="flex gap-2 w-fit">
            <JavascriptIcon size={24} />
            <p>Javascript</p>
          </Badge>
        </li>
        <li>
          <Badge variant="default" className="flex gap-2 w-fit">
            <PhpIcon size={24} />
            <p>Php</p>
          </Badge>
        </li>
        <li>
          <Badge variant="default" className="flex gap-2 w-fit">
            <NextIcon size={24} />
            <p>Next.js</p>
          </Badge>
        </li>
        <li>
          <Badge variant="default" className="flex gap-2 w-fit">
            <DrupalIcon size={24} />
            <p>Drupal</p>
          </Badge>
        </li>
      </ul>
    </div>
  );
};
