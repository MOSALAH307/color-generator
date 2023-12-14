import { FaHtml5, FaJs, FaReact, FaCss3 } from "react-icons/fa";
import { SiTailwindcss, SiDaisyui } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import backroads from "./assets/backroads.png";
import colorGenerator from "./assets/color-generator.png";
import comfyStore from "./assets/comgy-store.png";
import foodOrder from "./assets/food-order.png";
import menu from "./assets/menu.png";
import tracker from "./assets/tracker.png";
import unsplash from "./assets/unsplash.png";

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
    img: foodOrder,
    url: "https://food-order-app-wheat-one.vercel.app/",
    github: "https://github.com/MOSALAH307/food-order-app",
    title: "food order app",
    text: "Simple page to order food online with menu displayed",
  },
  {
    id: 3,
    img: colorGenerator,
    url: "https://color-generator-wine.vercel.app/",
    github:
      "https://github.com/MOSALAH307/14-react-fundamentals-projects/tree/main/09-color-generator",
    title: "Color Generator",
    text: "Simple page to generate different color degrees",
  },
  {
    id: 4,
    img: unsplash,
    url: "https://unsplash-images-eight.vercel.app/",
    github: "https://github.com/MOSALAH307/unsplash-images",
    title: "Unsplash Images",
    text: "Simple page to display images upon user search",
  },
  {
    id: 5,
    img: menu,
    url: "https://menu-orpin-three.vercel.app/",
    github:
      "https://github.com/MOSALAH307/14-react-fundamentals-projects/tree/main/05-menu",
    title: "Restaurant Menu",
    text: "Simple page to display different items in a reastaurant menu",
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
