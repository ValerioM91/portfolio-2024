import Link from "next/link"
import logo from "../images/logo-blue.png"
import Image from "next/image"
import Container from "./Container"
import { NAV_LINKS } from "@/consts"
import MobileNav from "./MobileNav"
import ThemeWrapper from "./ThemeWrapper"

const NavBar = () => {
  return (
    <div className="absolute w-full">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link href="/">
            <Image src={logo} alt="Valerio Mattera" height={48} />
          </Link>

          <ThemeWrapper />

          <MobileNav />

          <ul className="hidden sm:flex">
            {NAV_LINKS.map(link => {
              const { id, text, url } = link
              return (
                <li key={id}>
                  <Link className="inline-block min-w-[7rem] text-center text-xl text-primary" href={url}>
                    {text}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </Container>
    </div>
  )
}
export default NavBar
