import { type INDUSTRY_EXPERIENCE } from "@/data"
import { cn } from "@/utils/cn"

type ExperienceCard = React.ComponentPropsWithoutRef<"div"> & (typeof INDUSTRY_EXPERIENCE)[number]

const ExperienceCard = ({ className, title, content, skills, ...rest }: ExperienceCard) => {
  return (
    <div className={cn("flex flex-col bg-base-100 shadow-lg shadow-black/20", className)} {...rest}>
      <div className="flex-1 space-y-1 p-5">
        <h3 className="text-xl font-bold">{title}</h3>
        <p>{content}</p>
      </div>
      <div className="bg-secondary/80 p-5 dark:bg-secondary">
        <h4 className="mb-2 text-lg font-bold text-white">Experience in role:</h4>
        <div className="flex flex-wrap gap-2">
          {skills.map(skill => (
            <div key={skill} className="rounded bg-white px-2 py-1 text-sm font-bold text-primary">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default ExperienceCard
