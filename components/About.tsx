import Link from "next/link"
import Title from "./Title"

const About = () => {
  return (
    <section
      id="about"
      className="lg:clip-path-1 flex flex-col items-center gap-6 bg-gradient-pattern px-4 py-12 lg:pb-36"
    >
      <Title title="About me" className="text-base-100" />
      <div className="flex max-w-prose flex-col gap-4 text-center text-lg text-base-100 md:text-left lg:text-xl">
        <p>
          Hello! I&apos;m a Senior Engineer based in Birmingham with a focus on Frontend development. My areas of
          expertise include TypeScript, React, React Native, and frameworks like Next.js and Remix. Additionally, I have
          experience in Backend development, primarily with Node.js.
        </p>

        <p>
          When I&apos;m not working or studying, I enjoy a range of activities. I&apos;m an avid video game enthusiast,
          a regular at the gym, and a keen follower of TV series and sports, with a special interest in Formula 1.
        </p>

        <p>
          If you&apos;re interested in collaborating or simply wish to have a chat about whether Lewis Hamilton is or is
          not the GOAT, feel free to contact me at{" "}
          <Link className="underline underline-offset-4" href="mailto:info@valeriomattera.com">
            info@valeriomattera.com
          </Link>
          .
        </p>
      </div>
    </section>
  )
}
export default About
