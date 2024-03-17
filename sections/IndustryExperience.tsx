import { INDUSTRY_EXPERIENCE } from "@/data"
import ExperienceCard from "../components/ExperienceCard"
import Title from "../components/Title"

const IndustryExperience = () => {
  return (
    <div className="container py-10 lg:pb-32 lg:pt-20">
      <Title title="Industry Experience" className="mb-8" />
      <div className="grid gap-8 md:grid-cols-2">
        {INDUSTRY_EXPERIENCE.map(experience => (
          <ExperienceCard {...experience} key={experience.title} />
        ))}
      </div>
    </div>
  )
}
export default IndustryExperience
