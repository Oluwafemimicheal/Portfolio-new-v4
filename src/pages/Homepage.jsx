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
    </div>
  )
}

export default Homepage
