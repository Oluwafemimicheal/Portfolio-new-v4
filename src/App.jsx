import { Route, Routes } from "react-router-dom"
import LandingPage from "./layout/landingPage"
import Homepage from "./pages/Homepage"

const App = () => {
  return (
    <div className="lg:overflow-x-hidden">
     <Routes>
        <Route element={<LandingPage />}>
          <Route index path="/" element={<Homepage />} />
      </Route>
     </Routes>
    </div>
  )
}

export default App
