import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { Code, LucideIcon, Rss, StickyNote } from "lucide-react";
import Link from "next/link";

export const Status = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full">
        <Card className=" p-4 w-full flex flex-col gap-2">
          {" "}
          <p className="text-sm text-muted-foreground">Side, fun project</p>
          <div className="flex flex-col gap-4">
            {SIDE_PROJECTS.map((project, index) => (
              <SideProject
                key={index}
                Logo={project.Logo}
                title={project.title}
                description={project.description}
                url="/"
              />
            ))}
          </div>
        </Card>
      </div>
      <div className="flex-[2] w-full  flex flex-col h-full gap-4">
        <Card className="p-4 flex-1">
          Work
          <div className="flex flex-col gap-4">
            {WORKS.map((work, index) => (
              <Work
                image={work.image}
                title={work.title}
                role={work.role}
                date={work.date}
                url={work.url}
                key={index}
              />
            ))}
          </div>
        </Card>
        <Card className="p-4 flex-1">Contact me</Card>
      </div>
    </Section>
  );
};

const SIDE_PROJECTS: SideProjectProps[] = [
  {
    Logo: Code,
    title: "Githut",
    description: "A Github clone",
    url: "/",
  },
  {
    Logo: StickyNote,
    title: "Linkedin",
    description: "A Linkedin clone",
    url: "/",
  },
  {
    Logo: StickyNote,
    title: "Githut",
    description: "A Github clone",
    url: "/",
  },
  {
    Logo: Rss,
    title: "Linkedin",
    description: "A Linkedin clone",
    url: "/",
  },
];

type SideProjectProps = {
  Logo: LucideIcon;
  title: string;
  description: string;
  url: string;
};

const SideProject = (props: SideProjectProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
    >
      <span className="bg-accent text-accent-foreground p-4 rounded-sm">
        <props.Logo />
      </span>
      <div>
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
    </Link>
  );
};

const WORKS: WorkProps[] = [
  {
    image: "/my-face.png",
    title: "Wizbii",
    role: "Frontend Developer",
    date: "2020 - Present",
    url: "/",
  },
  {
    image: "/my-face.png",
    title: "Wizbii",
    role: "Frontend Developer",
    date: "2020 - Present",
    url: "/",
  },
  {
    image: "/my-face.png",
    title: "Wizbii",
    role: "Frontend Developer",
    date: "2020 - Present",
    url: "/",
  },
  {
    image: "/my-face.png",
    title: "Wizbii",
    role: "Frontend Developer",
    date: "2020 - Present",
    url: "/",
  },
];

type WorkProps = {
  image: string;
  title: string;
  role: string;
  date: string;
  url: string;
};

const Work = (props: WorkProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
    >
      <img
        src={props.image}
        alt={props.title}
        className="w-10 h-10 object-contain rounded-md"
      />
      <div>
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.role}</p>
        <div className="ml-auto">
          <p className="text-sm text-muted-foreground">{props.date}</p>
        </div>
      </div>
    </Link>
  );
};
