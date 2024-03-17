import { INDUSTRY_EXPERIENCE } from "@/data"
import ExperienceCard from "../components/ExperienceCard"
import Title from "../components/Title"

const IndustryExperience = () => {
  return (
    <div className="bg-base-200">
      <div className="container py-10 lg:pb-32 lg:pt-20">
        <Title title="Industry Experience" className="mb-8" />
        <div className="grid gap-8 md:grid-cols-2">
          {INDUSTRY_EXPERIENCE.map((experience, index) => (
            <ExperienceCard
              {...experience}
              className={index % 2 === 0 ? "animate-fade-right" : "animate-fade-left"}
              key={experience.title}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
export default IndustryExperience
