"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { FaBars } from "react-icons/fa6"
import { FaTimes } from "react-icons/fa"
import { NAV_LINKS } from "@/data"
import Button from "./Button"

const MobileNav = () => {
  const [showNav, setShowNav] = useState(false)

  useEffect(() => {
    document.body.style.overflow = showNav ? "hidden" : "unset"
  }, [showNav])

  return (
    <>
      <Button className="sm:hidden" variant="outline" onClick={() => setShowNav(true)} aria-label="Open mobile menu">
        <FaBars />
      </Button>
      <div
        className={`fixed inset-0 bg-opacity-90 bg-gradient-linear transition-transform duration-300 ${
          showNav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <Button variant="outline-white" onClick={() => setShowNav(false)} aria-label="Close mobile menu">
            <FaTimes />
          </Button>
        </div>
        <nav>
          <ul className="mt-16 flex flex-col items-center justify-center text-4xl text-white">
            {NAV_LINKS.map(link => {
              const Element = link.external ? "a" : Link
              return (
                <li key={link.id}>
                  <Element className="inline-block p-4" href={link.url}>
                    {link.text}
                  </Element>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </>
  )
}
export default MobileNav
