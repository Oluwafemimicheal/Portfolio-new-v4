import Footer from "@/components/landing-page/Footer"
import Navbar from "@/components/landing-page/Navbar"
import { Outlet } from "react-router-dom"

const LandingPage = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer />
    </div>
  )
}

export default LandingPage
