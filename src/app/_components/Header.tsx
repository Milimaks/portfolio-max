"use client";

import { GithubIcon } from "@/app/_components/icons/GithutIcon";
import { LinkedinIcon } from "@/app/_components/icons/LinkedinIcon";
import { buttonVariants } from "@/components/ui/button";
import { useScroll } from "@/hooks/useScroll";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { SiteIcon } from "./icons/SiteIcon";
import { Section } from "./Section";

export const Header = () => {
  const { scrollDirection } = useScroll();
  return (
    <header
      className={cn(
        "fixed w-full  backdrop-blur-md z-50 transition-all duration-300",
        scrollDirection === "down" ? "-top-24" : "top-0",
        scrollDirection === "up" && "shadow-md"
      )}
    >
      <Section className="flex justify-between items-center">
        <a href="/">
          <SiteIcon size={48} />
        </a>

        <ul className="flex space-x-2">
          <Link
            href="https://github.com/Milimaks"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <GithubIcon size={16} className="text-foreground" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/maxime-faure-848355197/"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <LinkedinIcon size={16} className="text-foreground" />
          </Link>
        </ul>
      </Section>
    </header>
  );
};
