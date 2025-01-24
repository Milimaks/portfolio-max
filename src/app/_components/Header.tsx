import { Button, buttonVariants } from "@/components/ui/button";
import { Section } from "./Section";
import { GithubIcon } from "@/components/icons/GithutIcon";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";

export const Header = () => {
  return (
    <header className="sticky top-0 py-4">
      <Section className="flex items-baseline">
        <h1 className="text-4xl font-bold text-primary">Maxime Faure</h1>
        <div className="flex-1" />
        <ul className="flex items-center space-x-2">
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
