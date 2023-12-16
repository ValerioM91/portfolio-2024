import Container from "./Container"
import Button from "./Button"
import { cookies } from "next/headers"

const Hero = () => {
  const cookieStore = cookies()
  const isDarkMode = cookieStore.get("vm91-theme")?.value === "dark"

  console.log(isDarkMode)

  return (
    <section id="hero" className={`flex min-h-screen items-center bg-base-200`}>
      <Container className="flex flex-col items-center sm:items-start">
        <h1 className="mb-4 text-center text-4xl font-bold leading-tight sm:text-left sm:text-5xl lg:text-6xl">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-pattern bg-clip-text text-transparent">
            <br className="sm:hidden" />
            Valerio Mattera
          </span>
          ,
          <br />a Senior Frontend engineer
        </h1>

        <Button variant="outline" as="link" href="#about">
          Know more
        </Button>
      </Container>
    </section>
  )
}
export default Hero
