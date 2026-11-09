import Contact from "@/components/landing-page/Contact"
import Faq from "@/components/landing-page/Faq"
import Hero from "@/components/landing-page/Hero"
import Product from "@/components/landing-page/Product"
import WorkFlow from "@/components/landing-page/WorkFlow"

const Homepage = () => {
  return (
    <div>
      <Hero/>
      <Product/>
      <WorkFlow/>
      <Faq />
      <Contact />
    </div>
  )
}

export default Homepage
