import { cookies } from "next/headers"
import ThemeToggle, { type Theme } from "./ThemeToggle"

const ThemeWrapper = () => {
  const cookieStore = cookies()
  const themeValue = (cookieStore.get("vm91-theme")?.value || "light") as Theme

  return <ThemeToggle initialValue={themeValue} />
}
export default ThemeWrapper
