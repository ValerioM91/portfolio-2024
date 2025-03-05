import vplayer1 from "../images/v-player1.jpg"
// import activityFinder from "../images/activity-finder.jpg"
import shootemup from "../images/shootemup.jpg"
import portfolio from "../images/portfolio.jpg"
import books from "../images/books-blog.jpg"
import jesandjoe from "../images/jesandjoe.jpg"
import quizzy from "../images/quizzy.jpg"
import { FaFile, FaGithub, FaLinkedin } from "react-icons/fa6"
import { type StaticImageData } from "next/image"

export const NAV_LINKS: {
  id: number
  text: string
  url: string
  delay: "delay-300" | "delay-400" | "delay-500" | "delay-600" | "delay-700"
  external?: boolean
}[] = [
  {
    id: 1,
    text: "Resume",
    external: true,
    url: "./Valerio-Mattera-CV.pdf",
    delay: "delay-300",
  },
  {
    id: 2,
    text: "Projects",
    url: "#projects",
    delay: "delay-400",
  },
  {
    id: 3,
    text: "GitHub",
    url: "https://github.com/ValerioM91",
    delay: "delay-500",
  },
  {
    id: 4,
    text: "Contact",
    url: "#contact",
    delay: "delay-600",
  },
]

export const PROJECTS: {
  img: StaticImageData
  title: string
  info: string[]
  url?: string
  urlLabel?: string
  repo?: string
  backend?: string
  frontend?: string
}[] = [
  // {
  //   img: activityFinder,
  //   title: `Activity Finder`,
  //   info: [`Next.js Full Stack app (App Router)`, `Server actions`, `Tailwind CSS`, `Prisma ORM`, `OpenAI API`],
  //   url: "https://activity-finder-valeriom91.vercel.app/",
  //   repo: "https://github.com/ValerioM91/activity-finder",
  // },
  {
    img: quizzy,
    title: `Quizzy (wip)`,
    info: [
      `Monorepo with TurboRepo`,
      `Nest JS (Back-end)`,
      `Prisma ORM w. PostgreSQL`,
      `React & Tanstack Router (2 Front-ends)`,
      `TypeScript`,
      `OpenAI for generating questions`,
      // `AWS ECS & RDS for deployment`,
      `Tailwind CSS`,
    ],
    // urlLabel: "Play",
    // url: "https://quizzy.valeriomattera.co.uk",
    repo: "https://github.com/ValerioM91/quizzy-monorepo",
  },
  {
    img: vplayer1,
    title: `V-Player 1`,
    info: [
      `Next.js Frontend (Pages router)`,
      `Typescript - Type generation with GraphQL Code Generator`,
      `GraphQL`,
      `Headless Wordpress Theme with ACF`,
      `Dynamic Layouts with Gutenberg`,
      `React Styled Components`,
    ],
    url: "https://v-player1-frontend.vercel.app/",
    backend: "https://github.com/ValerioM91/v-player1-backend",
    frontend: "https://github.com/ValerioM91/v-player1-frontend",
  },
  {
    img: portfolio,
    title: `Portfolio site`,
    info: [`Next.js`, `Tailwind CSS`, `TypeScript`],
    url: "https://github.com/ValerioM91/portfolio-2024",
    urlLabel: "Source Code",
  },
  {
    img: jesandjoe,
    title: `Jes and Joe`,
    info: [`Next.js Front end`, `Builder.io CMS`, `Tailwind CSS`],
    url: "https://jesandjoe.uk",
    repo: "https://github.com/ValerioM91/jesandjoe",
  },
  {
    img: books,
    title: `Martina's Books`,
    info: [`Gatbsy.js`, `Contentful CMS`, `GraphQL`],
    url: "https://blog-with-gatsby.netlify.app/",
    repo: "https://github.com/ValerioM91/blog-gatsby",
  },
  {
    img: shootemup,
    title: "Shoot 'em Up",
    info: [`HTML5 Canvas`, `Vanilla JavaScript`, `Webpack`],
    urlLabel: "Play",
    url: "https://shootem-up.vercel.app",
    repo: "https://github.com/ValerioM91/shootem-up",
  },
]

export const NETWORKS = [
  {
    icon: FaFile,
    text: "Resume",
    url: "./Valerio-Mattera-CV.pdf",
  },
  {
    icon: FaLinkedin,
    text: "LinkedIn",
    url: "https://www.linkedin.com/in/valerio-mattera/",
  },
  {
    icon: FaGithub,
    text: "GitHub",
    url: "https://github.com/ValerioM91",
  },
]

export const INDUSTRY_EXPERIENCE: {
  title: string
  content: string
  skills: string[]
}[] = [
  {
    title: "Biotech Industry",
    content:
      "As Full Stack Engineer, I contributed to both backend and frontend development for Abcam. On the backend, I worked with GraphQL and serverless architecture. On the frontend, I implemented features and improved the user interface using React and Next.js.",
    skills: [
      "TypeScript",
      "Node.js",
      "GraphQL",
      "Serverless",
      "Mongodb",
      "Next.js",
      "React",
      "Jest",
      "React Testing Library",
    ],
  },
  {
    title: "International business and world affairs information",
    content:
      "As Full Stack Engineer, I developed new Microsoft Teams and Slack applications for one of the world's preeminent journals to allow users to save and share articles within their workspace.",
    skills: ["Node.js", "Express.js", "TypeScript", "Prisma", "MySQL", "React", "Jest", "React Testing Library"],
  },
  {
    title: "Heating Industry",
    content:
      "As Senior Front End Engineer, I re-engineer and modernised the Worcester Bosch Professional mobile app introducing modern technologies and best practices, reducing errors by 80%.",
    skills: ["TypeScript", "React", "React Native", "Redux Toolkit", "RTK Query"],
  },
  {
    title: "Heating Industry",
    content:
      "As Senior Front End Engineer, I successfully overhauled the legacy React codebase for Worcester Bosch FastTrack, resulting in a remarkable 98% increase in conversion rates, elevated completed orders, and a revenue boost of £600,000.",
    skills: ["React", "Redux", "Storybook", "React Router", "PHP"],
  },
  {
    title: "E-Commerce and retail",
    content:
      "As Front End Engineer, I led the delivery of the first direct-to-consumer e-commerce platform for Glenmorangie, generating over 100k during the first three months.",
    skills: ["React", "Shopify", "Shogun Frontend CMS", "Storybook", "Chakra UI", "Next.js", "Google Analytics"],
  },
]
