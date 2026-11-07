import Navbar from "@/components/landing-page/Navbar"
import { Outlet } from "react-router-dom"

const LandingPage = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default LandingPage
