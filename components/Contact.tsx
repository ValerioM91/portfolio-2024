import Button from "./Button"
import Container from "./Container"
import Title from "./Title"

const Contact = () => {
  return (
    <section id="contact" className="lg:clip-path-2 bg-gradient-pattern px-4 py-16 lg:pt-28">
      <Container className="flex flex-col items-center justify-center gap-6 ">
        <Title title="Let's Chat" className="text-base-100" />

        <Button as="link" variant="outline-white" href="mailto:info@valeriomattera.com" className="mx-auto text-2xl">
          info@valeriomattera.com
        </Button>
      </Container>
    </section>
  )
}
export default Contact
