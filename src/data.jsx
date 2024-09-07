import { FaHtml5, FaJs, FaReact, FaCss3 } from "react-icons/fa";
import { SiTailwindcss, SiDaisyui } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import backroads from "./assets/backroads.png";
import comfyStore from "./assets/comgy-store.png";
import tracker from "./assets/tracker.png";
import SKFH from "./assets/SKFH.jpeg"
import Mubasher from "./assets/Mubasher.jpeg"
import jobster from "./assets/jobster.jpeg"
import Muharah from "./assets/Muharah.jpeg"

export const links = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#skills", text: "skills" },
  { id: 3, href: "#about", text: "about" },
  { id: 4, href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: 1,
    title: "HTML",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in HTML, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: 2,
    title: "CSS3",
    icon: <FaCss3 className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: 3,
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: 4,
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: 5,
    title: "Tailwind",
    icon: <SiTailwindcss className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in tailwind, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: 6,
    title: "daisyUI",
    icon: <SiDaisyui className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in daisyUI, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: 7,
    title: "C++",
    icon: <TbBrandCpp className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in Cpp, building applications and systems using powerful and fast cpp enhanced with OOP methadology.",
  },
];

export const projects = [
  {
    id: 1,
    img: comfyStore,
    url: "https://comfy-store-zeta.vercel.app/",
    github: "https://github.com/MOSALAH307/comfy-store",
    title: "Comfy Store",
    text: "E-commerce for furniture company with features",
  },
  {
    id: 2,
    img: SKFH,
    url: "https://skfh.top2top.net/",
    github: "https://github.com/MOSALAH307/",
    title: "SKFH site ",
    text: "Build the website for a big governmental Saudi organization.",
  },
  {
    id: 3,
    img: Muharah,
    url: "https://almaharh.com/",
    github: "https://github.com/MOSALAH307/",
    title: "Al-Mouhrah site",
    text: "Build, Design the site and the dashboard ",
  },
  {
    id: 4,
    img: Mubasher,
    url: "https://mountasher.online/",
    github: "https://github.com/MOSALAH307/",
    title: "Mubasher site ",
    text: "Build, Design the site and the dashboard ",
  },
  {
    id: 5,
    img: jobster,
    url: "https://jobster-app-with-react.vercel.app/",
    github: "https://github.com/MOSALAH307/jobster-app-with-react",
    title: "jobster dashboard",
    text: "job applications dashboard",
  },
  {
    id: 6,
    img: backroads,
    url: "https://backroads-mocha.vercel.app/",
    github: "https://github.com/MOSALAH307/backroads",
    title: "Backroads",
    text: "Simple page for a tourism company to display services",
  },
  {
    id: 7,
    img: tracker,
    url: "https://expenses-tracker-vert.vercel.app/",
    github: "https://github.com/MOSALAH307/expenses-tracker",
    title: "Expenses Tracker",
    text: "Simple app to tack and filter personal expenses",
  },
];
