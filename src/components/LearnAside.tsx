import { NavLink } from "react-router-dom";
import "../styles/LearnAside.css";
interface IProps {}
const LearnAside = ({}: IProps) => {
  return (
    <aside className="font-bold text-lg w-64 min-h-screen">
      <ul className="flex flex-col">
        <li className="hover:text-[#149eca] duration-200">
          <NavLink to="/learn" end>
            Quick Start
          </NavLink>
        </li>
        <li className="hover:text-[#149eca] duration-200">
          <NavLink to="/learn/thinking-in-react">Thinking in React</NavLink>
        </li>
        <li className="hover:text-[#149eca] duration-200">
          <NavLink to="/learn/installation">installation</NavLink>
        </li>
      </ul>
    </aside>
  );
};
export default LearnAside;
