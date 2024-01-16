import vplayer1 from "../images/v-player1.jpg"
import activityFinder from "../images/activity-finder.jpg"
import shootemup from "../images/shootemup.jpg"
import books from "../images/books-blog.jpg"
import jesandjoe from "../images/jesandjoe.jpg"
import quizzy from "../images/quizzy.jpg"
import { FaFile, FaGithub, FaLinkedin } from "react-icons/fa6"

export const NAV_LINKS = [
  {
    id: 1,
    name: "file",
    text: "Resume",
    external: true,
    url: "./Valerio-Mattera-CV.pdf",
  },
  {
    id: 2,
    text: "Projects",
    url: "#projects",
  },
  {
    id: 3,
    text: "GitHub",
    url: "https://github.com/ValerioM91",
  },
  {
    id: 4,
    text: "Contact",
    url: "#contact",
  },
]

export const PROJECTS = [
  {
    img: activityFinder,
    title: `Activity Finder`,
    info: [`Next.js Full Stack app (App Router)`, `Server actions`, `Tailwind CSS`, `Prisma ORM`, `OpenAI API`],
    url: "https://activity-finder-valeriom91.vercel.app/",
    repo: "https://github.com/ValerioM91/activity-finder",
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
    img: quizzy,
    title: `Quizzy (wip)`,
    info: [`PWA`, `Tanstack Router`, `Tailwind CSS`],
    urlLabel: "Play",
    url: "https://quiz-pwa.vercel.app",
    repo: "https://github.com/ValerioM91/quiz-pwa",
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
