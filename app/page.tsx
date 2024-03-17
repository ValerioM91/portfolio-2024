import About from "@/sections/About"
import Contact from "@/sections/Contact"
import Footer from "@/sections/Footer"
import Hero from "@/sections/Hero"
import IndustryExperience from "@/sections/IndustryExperience"
import Projects from "@/sections/Projects"
import NavBar from "@/components/NavBar"
import Skills from "@/sections/Skills"

export default function Home() {
  return (
    <>
      <main>
        <NavBar />
        <Hero />
        <About />
        <IndustryExperience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
