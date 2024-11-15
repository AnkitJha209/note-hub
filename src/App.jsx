import { Outlet } from "react-router-dom"
import NavBar from "./components/NavBar"
import { useEffect } from "react"
import { useSelector } from "react-redux"


function App() {

  const themeMode = useSelector(state => state.theme.themeMode)
  // console.log(themeMode)

useEffect(() => {
  document.querySelector('html').classList.remove('light', 'dark')
  document.querySelector('html').classList.add(themeMode)
}, [themeMode])

  return (
    <div className="flex flex-col items-center gap-20">
      <NavBar />
      <Outlet />
      </div>
  )
}

export default App
