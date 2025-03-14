import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

export const Code = ({
  className,
  ...props
}: ComponentPropsWithoutRef<"span">) => {
  return (
    <span
      className={cn(
        "bg-accent/30 border hover:bg-accent/50 transition-colors border-accent px-1 py-0.5 rounded-sm font-mono text-primary mx-1",
        className
      )}
      {...props}
    />
  );
};
