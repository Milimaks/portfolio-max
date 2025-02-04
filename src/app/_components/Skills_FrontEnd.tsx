import { Badge } from "@/components/ui/badge";
import { JavascriptIcon } from "./icons/JavascriptIcon";
import { NextIcon } from "./icons/NextIcon";
import { ReactIcon } from "./icons/ReactIcon";
import { RemixIcon } from "./icons/RemixIcon";
import { TailwindIcon } from "./icons/TailwindIcon";
import { TypescriptIcon } from "./icons/TypescriptIcon";
import { GraphQLIcon } from "./icons/GraphQLIcon";

export const SkillsFrontEnd = () => {
  return (
    <div className="flex items-center gap-4">
      <Badge variant="outline" className="min-w-fit flex-3">
        Front End
      </Badge>
      <ul className="flex flex-wrap gap-2">
        <li>
          <Badge variant="default" className="flex gap-2 w-fit">
            <ReactIcon size={24} />
            <p>React</p>
          </Badge>
        </li>
        <li>
          <Badge variant="default" className="flex gap-2 w-fit">
            <RemixIcon size={24} />
            <p>Remix</p>
          </Badge>
        </li>{" "}
        <li>
          <Badge variant="default" className="flex gap-2 w-fit">
            <GraphQLIcon size={24} />
            <p>GraphQL</p>
          </Badge>
        </li>
      </ul>
    </div>
  );
};
