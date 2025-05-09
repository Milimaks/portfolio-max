import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

export const ContactCard = (props: {
  image: string;
  mediumImage: string;
  name: string;
  description: string;
  className?: string;
}) => {
  return (
    <Card
      className={cn(
        "p-3 text-primary hover:bg-foreground/10 transition-colors group flex items-center gap-4",
        props.className
      )}
    >
      <div className="relative">
        <img
          src={props.image}
          alt={props.name}
          className="w-10 h-10 rounded-full object-contain"
        />
        <img
          src={props.mediumImage}
          alt={props.name}
          className="w-4 h-4 absolute -bottom-1 -right-1 rounded-full object-contain"
        />
      </div>
      <div className="mr-auto">
        <div className="flex items-center gap-2">
          <p className="text-lg font-semibold">{props.name}</p>
        </div>
        <p className="text-sm text-primary">{props.description}</p>
      </div>
      <ArrowUpRight
        size={16}
        className="group-hover:translate-x-2 mr-4 group-hover:-translate-2 transition-transform"
      />
    </Card>
  );
};
