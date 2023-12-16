import About from "@/components/About"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import NavBar from "@/components/NavBar"
import Projects from "@/components/Projects"

export default function Home() {
  return (
    <>
      <main>
        <NavBar />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
