import Link from "next/link";
import { Section } from "./Section";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { GithubIcon } from "./icons/GithutIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import { MailIcon } from "./icons/MailIcon";

export const Footer = () => {
  return (
    <footer className="flex items-center justify-center w-full h-24 ">
      <Section>
        <p className="text-sm text-muted-foreground">
          &copy; 2025 - Built with Next.js, TypeScript, and Tailwind CSS
        </p>
        <p className="text-sm text-muted-foreground mx-auto w-fit p-2">
          You can steal my code{" "}
          <Link
            href="https://github.com/Milimaks/portfolio-max/"
            target="_blank"
          >
            <i className="cursor-pointer text-accent">
              <u>here</u>
            </i>
          </Link>
        </p>
        <ul className="hidden max-lg:flex gap-4 items-center justify-center ">
          <li>
            <Link
              target="_blank"
              href="https://github.com/Milimaks"
              className={cn(
                buttonVariants({ variant: "network" }),
                "size-6 p-0 "
              )}
            >
              <GithubIcon size={16} />
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/maxime-faure-848355197/"
              className={cn(
                buttonVariants({ variant: "network" }),
                "size-6 p-0"
              )}
            >
              <LinkedinIcon size={16} />
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              href="mailto:maxime.faure93@gmail.com"
              className={cn(
                buttonVariants({ variant: "network" }),
                "size-6 p-0 "
              )}
            >
              <MailIcon size={16} />
            </Link>
          </li>
        </ul>
      </Section>
    </footer>
  );
};
