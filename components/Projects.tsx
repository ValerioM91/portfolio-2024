import { PROJECTS } from "@/consts"
import Container from "./Container"
import Title from "./Title"
import Image from "next/image"
import Button from "./Button"

const Projects = () => {
  return (
    <section id="projects" className="">
      <Container className="max-w-6xl py-10">
        <Title title="Projects" className="mb-6 md:mb-12" />

        {PROJECTS.map(project => (
          <SingleProject project={project} key={project.title} />
        ))}

        <p className="text-center md:text-lg">
          Please note: <em>all the projects here free time projects. Contact me to chat about my professional ones.</em>
        </p>
      </Container>
    </section>
  )
}
export default Projects

const SingleProject = ({ project }: { project: (typeof PROJECTS)[number] }) => {
  const { title, info, url, repo, img, backend, frontend } = project

  return (
    <div className="mx-auto mb-8 grid gap-4 border-b pb-8 md:mb-16 md:grid-cols-5 md:flex-row md:border-none md:pb-0">
      <div className="flex flex-col items-center gap-3 md:col-span-2 md:items-start">
        <h3 className="text-2xl font-bold">{title}</h3>
        <ul className="list-disc px-4">
          {info.map(inf => (
            <li key={inf} className="text-lg">
              {inf}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {url && (
            <Button as="link" external href={url} variant="outline">
              See Live
            </Button>
          )}
          {repo && (
            <Button as="link" external href={repo} variant="ghost">
              Source Code
            </Button>
          )}
          {backend && (
            <Button as="link" external href={backend} variant="ghost">
              Backend
            </Button>
          )}
          {frontend && (
            <Button as="link" external href={frontend} variant="ghost">
              Frontend
            </Button>
          )}
        </div>
      </div>

      <Image src={img} alt={title} width={700} height={400} className="w-full self-center md:col-span-3" />
    </div>
  )
}