const About = () => {
  return (
    <section
      id="hero"
      className="lg:clip-path-1 flex flex-col items-center gap-6 bg-gradient-pattern bg-clip-padding px-4 py-12 lg:pb-28"
    >
      <h2 className="text-3xl font-bold uppercase text-base-100 sm:text-4xl">About me</h2>

      <div className="flex max-w-prose flex-col gap-4 text-lg text-base-100 lg:text-xl">
        <p>
          Hello, I&apos;m a Senior Engineer based in Birmingham with a focus on Front End development. My areas of
          expertise include TypeScript, React, React Native, and proficiency in frameworks like Next.js and Remix.
          Additionally, I have experience in backend development, primarily with Node.js.
        </p>

        <p>
          When I&apos;m not working or studying, I enjoy a range of activities. I&apos;m an avid video game enthusiast,
          a regular at the gym, and a keen follower of TV series and sports, with a special interest in Formula 1.
        </p>

        <p>
          If you&apos;re interested in collaborating or simply wish to have a chat on whether Lewis Hamilton is the
          GOAT, feel free to connect with me through the link below.
        </p>
      </div>
    </section>
  )
}
export default About
