import { Card } from "@/components/ui/card";
import { ContactCard } from "./ContactCard";
import { SIDE_PROJECTS, WORKS } from "./dataStatus";
import { Section } from "./Section";
import { SideProject } from "./SideProject";
import { Work } from "./Works";

export const Status = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full">
        <Card className=" p-4 w-full flex flex-col gap-2">
          {" "}
          <p className="text-sm text-muted-foreground">Side, fun project</p>
          <div className="flex flex-col gap-4">
            {SIDE_PROJECTS.map((project, index) => (
              <SideProject key={index} {...project} />
            ))}
          </div>
        </Card>
      </div>
      <div className="flex-[2] w-full  flex flex-col h-full gap-4">
        <Card className="p-4 flex-1">
          Work
          <div className="flex flex-col gap-4">
            {WORKS.map((work, index) => (
              <Work key={index} {...work} />
            ))}
          </div>
        </Card>
        <Card className="p-4 flex-1 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">Contact me</p>
          <ContactCard
            name="Github"
            description="View my projects"
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1024px-GitHub_Invertocat_Logo.svg.png"
            mediumImage="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1024px-GitHub_Invertocat_Logo.svg.png"
          />
          <ContactCard
            name="Github"
            description="View my projects"
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1024px-GitHub_Invertocat_Logo.svg.png"
            mediumImage="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1024px-GitHub_Invertocat_Logo.svg.png"
          />
        </Card>
      </div>
    </Section>
  );
};
