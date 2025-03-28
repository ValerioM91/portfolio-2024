import Link from "next/link"
import Title from "../components/Title"
import Image from "next/image"
import valerioImage from "../images/VALERIO.jpg"

const About = () => {
  return (
    <section id="about" className="animate-fade bg-base-200">
      <div className="flex flex-col items-center gap-6 bg-gradient-linear px-4 pb-20 pt-12">
        <div className="container items-center gap-20 space-y-10 lg:flex">
          <div className="mx-auto flex max-w-prose flex-col gap-4 text-center text-lg text-white md:text-left lg:text-xl">
            <Title title="About me" className="mb-8 text-white lg:text-left" />
            <p>
              I&apos;m an experienced full stack engineer. On the Front End, my areas of expertise include TypeScript,
              React, Next.js, React Native, and state management libraries. On the Backend, I have experience building
              RESTful and GraphQL APIs with Node.js, Express, Nest.js, and Serverless.
            </p>

            <p>
              When I&apos;m not working or studying, I enjoy a range of activities. I&apos;m an avid video game
              enthusiast, a regular at the gym, I read books, comics and manga and I&apos;m a keen follower of TV series
              and sports, with a special interest in Formula 1.
            </p>

            <p>
              If you&apos;re interested in collaborating or simply wish to have a chat about whether Lewis Hamilton is
              the GOAT or not, feel free to contact me at{" "}
              <Link className="underline underline-offset-4" href="mailto:info@valeriomattera.com">
                info@valeriomattera.com
              </Link>
              .
            </p>
          </div>

          <div className="mx-auto shrink-0 rotate-3 rounded-2xl p-8">
            <Image
              src={valerioImage.src}
              width={400}
              height={400}
              alt="Valerio Mattera"
              className="mx-auto rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
export default About
