import { ComponentPropsWithoutRef } from "react";
import { Section } from "./Section";
import { cn } from "@/lib/utils";
import { GithubIcon } from "@/components/icons/GithutIcon";
import Link from "next/link";

const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
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

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full flex flex-col gap-2">
        <h2 className="font-caption text-5xl text-primary font-bold">
          Maxime Faure
        </h2>
        <h3 className="text-3xl font-caption ">Frontend Developper</h3>
        <p className="text-base">
          I love creating content on{" "}
          <Link
            href="https://github.com/Milimaks"
            target="_blank"
            className="hover:-translate-y-2 transition-transform duration-300 ease-in-out"
          >
            <Code className="inline-flex items-center ">
              {" "}
              <GithubIcon size={14} className="inline" /> Githubs
            </Code>
          </Link>
          Currently working at <Code>Wizbii</Code>
          living in{" "}
          <Code className="inline-flex items-center ">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/langfr-1280px-Flag_of_France.svg.png"
              style={{ height: 16, width: "auto" }}
            />
            France,Toulouse
          </Code>
        </p>
      </div>
      <div className="flex-[2] max-md:m-auto ml-auto">
        <img
          src="/my-face.png"
          alt="Maxime Faure - Picture"
          className="w-full h-auto rounded-full max-w-sm max-md:w-56 "
        />
      </div>
    </Section>
  );
};
