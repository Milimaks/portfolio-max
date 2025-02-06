import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { WorkProps } from "./dataStatus";

export const Work = (props: WorkProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
    >
      <img
        src={props.image}
        alt={props.title}
        className="w-10 h-10 object-contain rounded-md"
      />
      <div>
        <div className="flex items-center gap-2">
          <p className="text-lg font-semibold">{props.title}</p>
          {props.freelance && <Badge variant="outline">Freelance</Badge>}
        </div>
        <p className="text-sm text-muted-foreground">{props.role}</p>
        <div className="ml-auto">
          <p className="text-sm text-muted-foreground">{props.date}</p>
        </div>
      </div>
    </Link>
  );
};
