import { Outlet } from "react-router-dom"
import Header from "../components/Headerone"
import { Menu } from "../components/Menu"

const GeneralLayout = () => {
  return (
    <div>
        <Header /> 
        <Menu/>     
        <Outlet />
    </div>
  )
}

export default GeneralLayout
