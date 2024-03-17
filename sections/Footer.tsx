import Link from "next/link"
import { FaAngleUp } from "react-icons/fa6"
import { NETWORKS } from "@/data"
import Container from "../components/Container"

const Footer = () => {
  return (
    <footer className="bg-[#333] py-6 text-white md:py-12">
      <Container className="flex flex-col items-center justify-center gap-3">
        <Link href="#hero" className="p-2 text-2xl" aria-label="Navigate to the top">
          <FaAngleUp />
        </Link>

        <div className="grid grid-cols-3 items-center gap-4 text-lg md:text-xl">
          {NETWORKS.map(network => {
            const { icon: Icon, url, text } = network
            return (
              <a
                key={text}
                href={url || "https://github.com/cobidev/gatsby-simplefolio"}
                rel="noopener noreferrer"
                target="_blank"
                aria-label={text}
                className="inline-flex flex-col items-center"
              >
                <Icon />
                <p className="mt-1">{text}</p>
              </a>
            )
          })}
        </div>
        <hr />
        <p>© {new Date().getFullYear()} - Valerio Mattera</p>
      </Container>
    </footer>
  )
}
export default Footer
