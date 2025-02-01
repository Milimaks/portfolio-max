import { Section } from "./Section";

export const AboutMe = () => {
  return (
    <Section className="flex flex-col max-md:flex-col items-start gap-4 mt-32  max-w-3xl">
      <h2 className="text-3xl font-bold text-primary-foreground">About Me</h2>
      <p className="text-lg text-muted-foreground">
        I'm a software engineer with a passion for building web applications. I
        specialize in front-end development, but I'm also comfortable working on
        the back-end. I have experience with a variety of technologies,
        including React, Next.js, TypeScript, Node.js, and Tailwind CSS.
      </p>
    </Section>
  );
};
