import vplayer1 from "../images/v-player1.jpg"
import activityFinder from "../images/activity-finder.jpg"
import shootemup from "../images/shootemup.jpg"
import books from "../images/books-blog.jpg"
import jesandjoe from "../images/jesandjoe.jpg"
import { FaFile, FaGithub, FaLinkedin } from "react-icons/fa6"
// import quiz from "../images/quiz.jpg"
// import vplayer1 from "../images/vvvvv"
// import vplayer1 from "../images/vvvvv"
// import vplayer1 from "../images/vvvvv"

export const NAV_LINKS = [
  {
    id: 1,
    name: "file",
    text: "Resume",
    url: "./CV.pdf",
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
    info2: "",
    url: "https://activity-finder-valeriom91.vercel.app/",
    repo: "https://github.com/ValerioM91/activity-finder",
  },
  {
    img: jesandjoe,
    title: `Jes and Joe`,
    info: [`Next.js Front end`, `Builder.io CMS`, `Tailwind CSS`],
    info2: "",
    url: "https://jesandjoe.uk",
    repo: "https://github.com/ValerioM91/jesandjoe",
  },
  {
    img: vplayer1,
    title: `V-Player 1`,
    info: [
      `Headless Wordpress Theme with ACF`,
      `Dynamic Layouts with Gutenberg`,
      `Next.js Frontend (Pages router)`,
      `GraphQL`,
      `React Styled Components`,
    ],
    info2: "",
    url: "https://v-player1-frontend.vercel.app/",
    backend: "https://github.com/ValerioM91/v-player1-backend",
    frontend: "https://github.com/ValerioM91/v-player1-frontend",
  },
  {
    img: books,
    title: `Martina's Books`,
    info: [`Gatbsy.js`, `Contentful CMS`, `GraphQL`, ` Dynamically generated Pages`],
    info2: "",
    url: "https://blog-with-gatsby.netlify.app/",
    repo: "https://github.com/ValerioM91/blog-gatsby",
  },
  {
    img: shootemup,
    title: "Shoot 'em Up",
    info: [`HTML5 Canvas`, `Vanilla JavaScript`, `Webpack`],
    url: "https://shootem-up.vercel.app",
    repo: "https://github.com/ValerioM91/shootem-up",
  },
  // {
  //   img: "/wine.jpg",
  //   title: "Best Wines e-Commerce",
  //   info: [
  //     `Commerce.js API for the products management`,
  //     `Context API to serve the products and the cart fetched from
  //   Commerce.js API to all the App components`,
  //     `useReducer Hook`,
  //     `React Styled Components`,
  //     `User Authentication using the Auth0 platform`,
  //   ],
  //   info2: "",
  //   url: "https://best-wines.netlify.app/",
  //   repo: "https://github.com/ValerioM91/best-wines",
  // },

  // {
  //   img: "/umbrella.jpg",
  //   title: "Umbrella Forecast Vanilla JS Web-App",
  //   info: [
  //     `Data of all the cities imported from a local JSON file provided by
  //   the Open Weather API`,
  //     `Requests to the Open Weather API to retrieve the daily and the
  //   3-hour forecast data on the city selection`,
  //     `Create trying to follow the MVC framework architecture principles`,
  //   ],
  //   url: "https://umbrella-weather-forecast.netlify.app/",
  //   repo: "https://github.com/ValerioM91/umbrella",
  // },

  // {
  //   img: quiz,
  //   title: "Quiz game with React",
  //   info: [`useState and useEffect Hooks`, `Context API`, `Axios`],
  //   url: "https://quiz-react-1.netlify.app/",
  //   repo: "https://github.com/ValerioM91/quiz",
  // },
]

export const NETWORKS = [
  {
    icon: FaFile,
    text: "Resume",
    url: "./CV.pdf",
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
