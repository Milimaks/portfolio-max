import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { ReactIcon } from "@/app/_components/icons/ReactIcon";
import { Code } from "./Code";
import { TailwindIcon } from "./icons/TailwindIcon";
import { OpenAiIcon } from "./icons/OpenAiIcon";

export const Skills = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant="outline">Skills</Badge>
      <h2 className="scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        I love working on ...
      </h2>
      <div className="flex max-md:flex-col gap-4 ">
        <div className="flex flex-col gap-4 flex-1">
          <ReactIcon
            size={42}
            className="animate-spin"
            style={{ animationDuration: "8s" }}
          />
          <h3 className="mb-2 text-2xl font-semibold tracking-tight">
            Marketing
          </h3>
          <p className="text-sm text-muted-foreground">
            My main framework is <Code>React</Code>. I also use{" "}
            <Code>Next.Js</Code> as frontend and backend
          </p>
        </div>
        <div className="flex flex-col gap-4 flex-1">
          <TailwindIcon size={42} />
          <h3 className="mb-2 text-2xl font-semibold tracking-tight">
            Marketing
          </h3>
          <p className="text-sm text-muted-foreground">
            My main framework is <Code>React</Code>. I also use{" "}
            <Code>Next.Js</Code> as frontend and backend
          </p>
        </div>
        <div className="flex flex-col gap-4 flex-1">
          <OpenAiIcon size={42} />
          <h3 className="mb-2 text-2xl font-semibold tracking-tight">
            Marketing
          </h3>
          <p className="text-sm text-muted-foreground">
            My main framework is <Code>React</Code>. I also use{" "}
            <Code>Next.Js</Code> as frontend and backend
          </p>
        </div>
      </div>
    </Section>
  );
};
