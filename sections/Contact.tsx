import Container from "../components/Container"
import Link from "../components/Link"
import Title from "../components/Title"

const Contact = () => {
  return (
    <section id="contact" className="bg-base-200">
      <div className="lg:clip-path-2 bg-gradient-linear px-4 py-16 lg:pt-28">
        <Container className="flex flex-col items-center justify-center gap-6 ">
          <Title title="Let's Chat" className="text-white" />

          <Link colorSchema="white" variant="solid" href="mailto:info@valeriomattera.com" className="mx-auto text-2xl">
            info@valeriomattera.com
          </Link>
        </Container>
      </div>
    </section>
  )
}
export default Contact
