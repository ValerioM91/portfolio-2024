import Badge from "@/components/Badge"
import Title from "@/components/Title"

const Skills = () => {
  return (
    <div className="animate-fade bg-gradient-linear py-10 text-white dark:bg-base-100 lg:pb-32 lg:pt-20">
      <div className="container">
        <Title title="Technical Skills" />

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <SkillList title="Core" skills={["TypeScript", "JavaScript", "HTML", "CSS", "PHP"]} />
          <SkillList
            title="Backend"
            skills={["Node.js", "Express", "tRPC", "Prisma", "MySQL", "MongoDB", "REST API", "WordPress"]}
          />
          <SkillList
            title="Frontend"
            skills={[
              "React",
              "Next.js",
              "React Native",
              "Redux",
              "Redux Toolkit",
              "RTK Query",
              "Tanstack Query (React Query)",
              "Tailwind CSS",
              "Chakra UI",
              "Styled Components",
              "Emotion",
              "Remix",
              "Framer Motion",
              "Gatsby",
            ]}
          />

          <SkillList
            title="Miscellaneous"
            skills={[
              "Source Control (Git)",
              "Jest",
              "ESLint",
              "Husky",
              "Zod",
              "OpenAI",
              "React Testing Library",
              "Figma",
              "Mixpanel",
              "Docker",
              "Cypress",
              "NextAuth.js",
              "OAuth",
            ]}
          />
        </div>
      </div>
    </div>
  )
}
export default Skills

const SkillList = ({ title, skills }: { title: string; skills: string[] }) => {
  return (
    <div>
      <h3 className="text-2xl font-bold">{title}</h3>
      <ul className="mt-2 flex flex-wrap gap-2">
        {skills.map(skill => (
          <Badge key={skill} skill={skill} />
        ))}
      </ul>
    </div>
  )
}
