import { Outlet } from "react-router-dom"
import NavBar from "./components/NavBar"


function App() {

  return (
    <div className="flex flex-col items-center gap-20">
      <NavBar />
      <Outlet />
      </div>
  )
}

export default App
