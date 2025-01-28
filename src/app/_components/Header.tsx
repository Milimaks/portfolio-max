import { Button, buttonVariants } from "@/components/ui/button";
import { Section } from "./Section";
import { GithubIcon } from "@/app/_components/icons/GithutIcon";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { LinkedinIcon } from "@/app/_components/icons/LinkedinIcon";
import { SiteIcon } from "./icons/SiteIcon";

export const Header = () => {
  return (
    <header className=" py-4">
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
