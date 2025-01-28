import { ComponentPropsWithoutRef } from "react";
import { Section } from "./Section";
import { cn } from "@/lib/utils";
import { GithubIcon } from "@/app/_components/icons/GithutIcon";
import Link from "next/link";
import { Code } from "./Code";

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
          <Link href="https://github.com/Milimaks" target="_blank" className="">
            <Code className="inline-flex items-center   duration-500  hover:shadow-[0px_6px_0px_0px_black] transition-transform hover:-translate-y-2">
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
      <div className="flex-[1] max-md:m-auto ml-auto">
        <img
          src="/my-face.png"
          alt="Maxime Faure - Picture"
          className="w-full h-auto rounded-full max-w-sm max-md:w-56 "
        />
      </div>
    </Section>
  );
};
