"use client"

import { useEffect, useState } from "react"
import Button from "./Button"
import { FaBars } from "react-icons/fa6"
import { FaTimes } from "react-icons/fa"
import { NAV_LINKS } from "@/consts"
import Link from "next/link"

const MobileNav = () => {
  const [showNav, setShowNav] = useState(false)

  useEffect(() => {
    document.body.style.overflow = showNav ? "hidden" : "unset"
  }, [showNav])

  return (
    <>
      <Button className="sm:hidden" variant="outline" onClick={() => setShowNav(true)}>
        <FaBars />
      </Button>
      <div
        className={`fixed inset-0 translate-x-full bg-opacity-90 bg-gradient-pattern transition-transform duration-300 ${
          showNav ? "translate-x-0" : ""
        }`}
      >
        <div className="flex justify-end p-4">
          <Button variant="outline-white" onClick={() => setShowNav(false)}>
            <FaTimes />
          </Button>
        </div>
        <nav>
          <ul className="mt-16 flex flex-col items-center justify-center text-4xl text-base-100">
            {NAV_LINKS.map(link => {
              return (
                <li key={link.id}>
                  <Link className="inline-block p-4" href={link.url}>
                    {link.text}
                  </Link>
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
