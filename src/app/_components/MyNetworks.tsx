import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { GithubIcon } from "./icons/GithutIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import { MailIcon } from "./icons/MailIcon";

export const MyNetworks = () => {
  return (
    <ul className="flex flex-col space-y-4 fixed left-16 bottom-0">
      <Link
        href="https://github.com/Milimaks"
        className={cn(buttonVariants({ variant: "default" }), "size-6 p-0")}
      >
        <GithubIcon size={16} className="text-foreground" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/maxime-faure-848355197/"
        className={cn(buttonVariants({ variant: "default" }), "size-6 p-0  ")}
      >
        <LinkedinIcon size={16} className="text-foreground" />
      </Link>
      <Link
        href="mailto:maxime.faure93@gmail.com"
        className={cn(buttonVariants({ variant: "default" }), "size-6 p-0  ")}
      >
        <MailIcon size={16} className="text-foreground " />
      </Link>
      <div className="left-0 right-0 mx-auto block w-px h-[90px] bg-black " />
    </ul>
  );
};
