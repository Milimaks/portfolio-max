import { Code, LucideIcon, Rss, StickyNote } from "lucide-react";

export const SIDE_PROJECTS: SideProjectProps[] = [
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

export type SideProjectProps = {
  Logo: LucideIcon;
  title: string;
  description: string;
  url: string;
};

export const WORKS: WorkProps[] = [
  {
    image: "/my-face.png",
    title: "Wizbii",
    role: "Frontend Developer",
    date: "2020 - Present",
    url: "/",
    freelance: true,
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

export type WorkProps = {
  image: string;
  title: string;
  role: string;
  date: string;
  url: string;
  freelance?: boolean;
};
