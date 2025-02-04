import { Badge } from "@/components/ui/badge";
import { ReactIcon } from "./icons/ReactIcon";
import { TailwindIcon } from "./icons/TailwindIcon";
import { FigmaIcon } from "./icons/FigmaIcon";

export const SkillsDesign = () => {
  return (
    <div className="flex items-center gap-4">
      <Badge variant="outline" className="min-w-fit">
        Design + CSS
      </Badge>
      <ul className="flex flex-wrap gap-2">
        <li>
          <Badge variant="default" className="flex gap-2 w-fit">
            <TailwindIcon size={24} />
            <p>Tailwind</p>
          </Badge>
        </li>
        <li>
          <Badge variant="default" className="flex gap-2 w-fit">
            <FigmaIcon size={24} />
            <p>Figma</p>
          </Badge>
        </li>
      </ul>
    </div>
  );
};
