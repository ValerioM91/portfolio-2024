import Link from "next/link"
import { NAV_LINKS } from "@/data"
import Container from "./Container"
import MobileNav from "../sections/MobileNav"
import ThemeWrapper from "./ThemeWrapper"
import AnimatedLogo from "./AnimatedLogo"

const NavBar = () => {
  return (
    <div className="absolute w-full">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <AnimatedLogo className="h-12 w-auto" />

          <div className="flex items-center gap-4">
            <ThemeWrapper />
            <MobileNav />

            <nav>
              <ul className="hidden sm:flex">
                {NAV_LINKS.map(link => {
                  const { id, text, url, external } = link
                  const Element = external ? "a" : Link

                  return (
                    <li key={id}>
                      <Element className="inline-block p-2 text-center text-xl text-primary md:min-w-[7rem]" href={url}>
                        {text}
                      </Element>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </div>
        </div>
      </Container>
    </div>
  )
}
export default NavBar
