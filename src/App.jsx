import { Route, Routes } from "react-router-dom"
import LandingPage from "./layout/landingPage"

const App = () => {
  return (
    <div>
     <Routes>
      <Route path="/" element={<LandingPage/>}>

      </Route>
     </Routes>
    </div>
  )
}

export default App
