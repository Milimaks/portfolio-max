import { cn } from "@/lib/utils";

export type SpacingProps = {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
};

export const Spacing = ({ size = "md" }) => {
  return (
    <div
      className={cn({
        "h-4 lg:h-16": size === "xs",
        "h-8 lg:h-24": size === "sm",
        "h-16 lg:h-32": size === "md",
        "h-24 lg:h-40": size === "lg",
        "h-32 lg:h-48": size === "xl",
      })}
    ></div>
  );
};
