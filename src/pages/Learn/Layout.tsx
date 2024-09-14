import { Outlet } from "react-router-dom"
import LearnAside from "../../components/LearnAside"
import Navbar from "../../components/Navbar"

interface IProps{

}
const Layout = ({}:IProps)=>{
  return(
    <>
        <Navbar/>
        <LearnAside/>
        <Outlet/>
    </>
  )
}
export default Layout