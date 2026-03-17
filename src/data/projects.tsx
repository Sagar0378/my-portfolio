import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiDocker,
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiPostgresql,
  SiReactquery,
  SiShadcnui,
  SiSocketdotio,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiPrisma,
  SiSanity,
  SiSupabase,
  SiJavascript,
  SiPython,
  SiChakraui,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: { title: "Next.js", bg: "black", fg: "white", icon: <RiNextjsFill /> },
  chakra: { title: "Chakra UI", bg: "black", fg: "white", icon: <SiChakraui /> },
  node: { title: "Node.js", bg: "black", fg: "white", icon: <RiNodejsFill /> },
  python: { title: "Python", bg: "black", fg: "white", icon: <SiPython /> },
  prisma: { title: "Prisma", bg: "black", fg: "white", icon: <SiPrisma /> },
  postgres: { title: "PostgreSQL", bg: "black", fg: "white", icon: <SiPostgresql /> },
  mongo: { title: "MongoDB", bg: "black", fg: "white", icon: <SiMongodb /> },
  express: { title: "Express", bg: "black", fg: "white", icon: <SiExpress /> },
  reactQuery: { title: "React Query", bg: "black", fg: "white", icon: <SiReactquery /> },
  shadcn: { title: "ShadCN UI", bg: "black", fg: "white", icon: <SiShadcnui /> },
  aceternity: { title: "Aceternity", bg: "black", fg: "white", icon: <AceTernityLogo /> },
  tailwind: { title: "Tailwind", bg: "black", fg: "white", icon: <SiTailwindcss /> },
  docker: { title: "Docker", bg: "black", fg: "white", icon: <SiDocker /> },
  yjs: { title: "Y.js", bg: "black", fg: "white", icon: (<span><strong>Y</strong>js</span>) },
  firebase: { title: "Firebase", bg: "black", fg: "white", icon: <SiFirebase /> },
  sockerio: { title: "Socket.io", bg: "black", fg: "white", icon: <SiSocketdotio /> },
  js: { title: "JavaScript", bg: "black", fg: "white", icon: <SiJavascript /> },
  ts: { title: "TypeScript", bg: "black", fg: "white", icon: <SiTypescript /> },
  vue: { title: "Vue.js", bg: "black", fg: "white", icon: <SiVuedotjs /> },
  react: { title: "React.js", bg: "black", fg: "white", icon: <RiReactjsFill /> },
  sanity: { title: "Sanity", bg: "black", fg: "white", icon: <SiSanity /> },
  spline: { title: "Spline", bg: "black", fg: "white", icon: <SiThreedotjs /> },
  gsap: { title: "GSAP", bg: "black", fg: "white", icon: "" },
  framerMotion: { title: "Framer Motion", bg: "black", fg: "white", icon: <TbBrandFramerMotion /> },
  supabase: { title: "Supabase", bg: "black", fg: "white", icon: <SiSupabase /> },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
    id: "taskflow",
    category: "Productivity App",
    title: "TaskFlow — Task Manager",
    src: "/assets/projects-screenshots/portfolio/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.reactQuery,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
      ],
    },
    live: "https://github.com/Sagar0378",
    github: "https://github.com/Sagar0378",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            TaskFlow is a full-stack productivity app that helps teams and
            individuals manage tasks, set deadlines, and track progress — all in
            one clean, responsive interface.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Kanban Task Boards</TypographyH3>
          <p className="font-mono mb-2">
            Organize work into boards with drag-and-drop cards. Assign tasks,
            set priorities, and track status in real time with a Kanban-style
            interface.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/projects.png`,
              `${BASE_PATH}/portfolio/project.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">User Authentication</TypographyH3>
          <p className="font-mono mb-2">
            Secure JWT-based authentication with role management — admins,
            editors, and viewers each get a tailored experience.
          </p>
          <SlideShow images={[`${BASE_PATH}/portfolio/skills.png`]} />
          <TypographyH3 className="my-4 mt-8">Dashboard & Analytics</TypographyH3>
          <p className="font-mono mb-2">
            Visual overview of task completion rates, overdue items, and team
            productivity — built with Recharts for clean data visualization.
          </p>
          <SlideShow images={[`${BASE_PATH}/portfolio/navbar.png`]} />
        </div>
      );
    },
  },
  {
    id: "shopease",
    category: "E-Commerce",
    title: "ShopEase — E-Commerce CMS",
    src: "/assets/projects-screenshots/portfolio/projects.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.shadcn,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.docker,
      ],
    },
    live: "https://github.com/Sagar0378",
    github: "https://github.com/Sagar0378",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            ShopEase is a full-featured e-commerce platform with a custom CMS
            for product management, orders, and inventory — built to replace
            expensive SaaS solutions for small businesses.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Product Management</TypographyH3>
          <p className="font-mono mb-2">
            Admin dashboard to create, edit, and organize products with image
            uploads, variant support, and real-time stock tracking.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/landing.png`,
              `${BASE_PATH}/portfolio/project.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Custom CMS</TypographyH3>
          <p className="font-mono mb-2">
            A content management system that keeps product listings, promotions,
            and pages dynamic and up-to-date without touching code.
          </p>
          <SlideShow images={[`${BASE_PATH}/portfolio/skills.png`]} />
          <TypographyH3 className="my-4 mt-8">Order & Checkout Flow</TypographyH3>
          <p className="font-mono mb-2">
            Smooth checkout experience with cart management, payment integration
            hooks, and automated order confirmation emails.
          </p>
          <SlideShow images={[`${BASE_PATH}/portfolio/navbar.png`]} />
        </div>
      );
    },
  },
  {
    id: "portfolio",
    category: "Portfolio",
    title: "My Portfolio",
    src: "/assets/projects-screenshots/portfolio/landing.png",
    screenshots: ["landing.png"],
    live: "https://github.com/Sagar0378",
    github: "https://github.com/Sagar0378",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.shadcn,
        PROJECT_SKILLS.aceternity,
        PROJECT_SKILLS.framerMotion,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.spline,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            My personal portfolio — built with Next.js, Spline 3D, and Framer
            Motion to showcase my work in the most interactive way possible.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Interactive 3D Objects</TypographyH3>
          <p className="font-mono mb-2">
            A 3D keyboard rendered live in the browser using Spline — each
            keycap reveals a skill when pressed. It&apos;s not just a portfolio,
            it&apos;s an experience.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/landing.png`,
              `${BASE_PATH}/portfolio/skills.png`,
            ]}
          />
          <TypographyH3 className="my-4">Space Theme</TypographyH3>
          <p className="font-mono mb-2">
            Dark background + floating particles = out-of-this-world cool.
          </p>
          <SlideShow images={[`${BASE_PATH}/portfolio/navbar.png`]} />
          <TypographyH3 className="my-4 mt-8">Projects Showcase</TypographyH3>
          <p className="font-mono mb-2">
            A clean, animated showcase of my top personal and freelance projects.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/projects.png`,
              `${BASE_PATH}/portfolio/project.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "quickchat",
    category: "Chat App",
    title: "QuickChat — Realtime Messenger",
    src: "/assets/projects-screenshots/ghostchat/1.png",
    screenshots: ["1.png", "2.png", "3.png", "4.png"],
    live: "https://github.com/Sagar0378",
    github: "https://github.com/Sagar0378",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.ts,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.sockerio,
        PROJECT_SKILLS.mongo,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            QuickChat is a real-time messaging app built with Socket.io and
            React. It supports rooms, private messaging, typing indicators, and
            online presence — a fully functional messenger built from scratch.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Real-Time Messaging</TypographyH3>
          <p className="font-mono mb-2">
            Instant message delivery via WebSockets with typing indicators,
            read receipts, and online/offline status for all connected users.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/ghostchat/1.png`,
              `${BASE_PATH}/ghostchat/2.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Chat Rooms & DMs</TypographyH3>
          <p className="font-mono mb-2">
            Create and join topic-based chat rooms or send direct messages.
            Message history is persisted in MongoDB so nothing gets lost on
            refresh.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/ghostchat/3.png`,
              `${BASE_PATH}/ghostchat/4.png`,
            ]}
          />
        </div>
      );
    },
  },
];

export default projects;
