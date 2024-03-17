import Image from "next/image"
import { PROJECTS } from "@/data"
import Title from "../components/Title"
import Link from "../components/Link"

const Projects = () => {
  return (
    <section id="projects" className="bg-base-200">
      <div className="container max-w-6xl py-10 lg:pb-32 lg:pt-20">
        <Title title="Projects" className="mb-6 md:mb-12" />

        {PROJECTS.map(project => (
          <SingleProject project={project} key={project.title} />
        ))}
      </div>
    </section>
  )
}
export default Projects

const SingleProject = ({ project }: { project: (typeof PROJECTS)[number] }) => {
  const { title, info, url, repo, img, backend, frontend, urlLabel } = project

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
          {url && <Link href={url}>{urlLabel || "See Live"}</Link>}
          {repo && (
            <Link href={repo} variant="ghost">
              Source Code
            </Link>
          )}
          {backend && (
            <Link href={backend} variant="ghost">
              Backend
            </Link>
          )}
          {frontend && (
            <Link href={frontend} variant="ghost">
              Frontend
            </Link>
          )}
        </div>
      </div>

      <Link
        href={url ?? "/"}
        className="group px-0 py-0 hover:bg-transparent md:col-span-3"
        aria-label="Navigate to live project"
        variant="ghost"
      >
        <Image
          src={img}
          alt={title}
          width={700}
          height={400}
          className="max-h-96 w-full self-center object-cover object-top shadow-lg transition-all group-hover:scale-[0.99]"
        />
      </Link>
    </div>
  )
}
