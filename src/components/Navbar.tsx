import { NavLink } from "react-router-dom";

interface IProps{

}
const Navbar = ({}:IProps)=>{
  return (
    <nav className="mx-auto flex justify-center my-7 font-bold">
      <ul className="flex items-center justify-between">
        <li className="hover:text-[#149eca]  duration-200">
          <NavLink className="p-4" to="/">Home</NavLink>
        </li>
        <li className="hover:text-[#149eca] duration-200">
          <NavLink className="p-4" to="/contact">Contact</NavLink>
        </li>
        <li className="hover:text-[#149eca] duration-200">
          <NavLink className="p-4" to="/about">About</NavLink>
        </li>
        <li className="hover:text-[#149eca] duration-200">
          <NavLink className="p-4" to="/learn">Learn</NavLink>
        </li>
        <li className="hover:text-[#149eca] duration-200">
          <NavLink className="p-4" to="/contribute">Contribute</NavLink>
        </li>
        <li className="hover:text-[#149eca] duration-200">
          <NavLink className="p-4" to="/login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar