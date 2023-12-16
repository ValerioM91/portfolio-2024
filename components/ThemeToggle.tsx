"use client"

import { useEffect, useState } from "react"

export type Theme = "light" | "dark"

const ThemeToggle = ({ initialValue }: { initialValue?: Theme }) => {
  const [theme, setTheme] = useState<Theme>(initialValue || "light")

  useEffect(() => {
    if (typeof window !== undefined && !initialValue) {
      const isDarkPreferred = window.matchMedia("(prefers-color-scheme: dark)").matches === true

      if (isDarkPreferred) {
        document.cookie = "vm91-theme=dark"
        document.documentElement.setAttribute("data-theme", "dark")
        setTheme("dark")
      }
    }
  }, [initialValue])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    document.cookie = "vm91-theme=" + newTheme
    document.documentElement.setAttribute("data-theme", newTheme)
    setTheme(newTheme)
  }

  if (!theme) return null

  return (
    <label className="flex cursor-pointer items-center gap-2 text-primary">
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
      </svg>
      <input
        type="checkbox"
        value={theme}
        onChange={toggleTheme}
        className={`relative box-content h-6 w-12 shrink-0 cursor-pointer appearance-none rounded-full border-2 border-primary after:absolute after:top-0 after:m-1 after:h-4 after:w-4 after:rounded-full after:bg-primary after:transition-all ${
          theme === "dark" ? "after:translate-x-6" : ""
        }`}
      />
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    </label>
  )
}
export default ThemeToggle
