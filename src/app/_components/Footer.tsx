import Link from "next/link";
import { Section } from "./Section";

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
      </Section>
    </footer>
  );
};
