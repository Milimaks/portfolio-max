import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { ReactIcon } from "@/app/_components/icons/ReactIcon";

export const Skills = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant="outline">Skills</Badge>
      <h2 className="scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        I love working on ...
      </h2>
      <div className="">
        <div className="flex flex-col gap-4">
          <ReactIcon
            size={42}
            className="animate-spin"
            style={{ animationDuration: "8s" }}
          />
          <h3 className="mb-2 text-2xl font-semibold tracking-tight">
            Marketing
          </h3>
          <p className="text-sm text-muted-foreground">
            Plan it, create it, launch it. Collaborate seamlessly with all the
            organization and hit your marketing goals every month with our
            marketing plan.
          </p>
        </div>
      </div>
    </Section>
  );
};
