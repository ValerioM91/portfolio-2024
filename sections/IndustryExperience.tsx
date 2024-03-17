import { INDUSTRY_EXPERIENCE } from "@/data"
import ExperienceCard from "../components/ExperienceCard"
import Title from "../components/Title"
import Container from "../components/Container"

const IndustryExperience = () => {
  return (
    <Container className="py-12">
      <Title title="Industry Experience" className="mb-8" />
      <div className="grid gap-8 md:grid-cols-2">
        {INDUSTRY_EXPERIENCE.map(experience => (
          <ExperienceCard {...experience} key={experience.title} />
        ))}
      </div>
    </Container>
  )
}
export default IndustryExperience
