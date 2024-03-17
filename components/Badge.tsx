import { cn } from "@/utils/cn"

const Badge = ({ skill, as: As = "li", inverted }: { skill: string; as?: "div" | "p" | "li"; inverted?: boolean }) => {
  return (
    <As
      className={cn("rounded bg-white px-2 py-1 text-sm font-bold text-primary dark:text-secondary", {
        "bg-primary text-white": inverted,
      })}
    >
      {skill}
    </As>
  )
}
export default Badge
