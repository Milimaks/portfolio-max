import { Badge } from "@/components/ui/badge";
import { MySQLIcon } from "./icons/MySQLIcon";
import { NestIcon } from "./icons/NestIcon";
import { PrismaIcon } from "./icons/PrismaIcon";

export const SkillsBackEnd = () => {
  return (
    <div className="flex items-center gap-4  max-md:flex-col max-md:items-start">
      <Badge variant="outline" className="w-fit">
        Back End
      </Badge>
      <ul className="flex flex-wrap gap-2">
        <li>
          <Badge variant="default" className="flex gap-2 w-fit">
            <NestIcon size={24} />
            <p>Nest.js</p>
          </Badge>
        </li>
        <li>
          <Badge variant="default" className="flex gap-2 w-fit">
            <PrismaIcon size={24} />
            <p>Prisma</p>
          </Badge>
        </li>
        <li>
          <Badge variant="default" className="flex gap-2 w-fit">
            <MySQLIcon size={24} />
            <p>MySQL</p>
          </Badge>
        </li>
      </ul>
    </div>
  );
};
