import { InputHTMLAttributes } from "react"

interface IProps extends InputHTMLAttributes<HTMLInputElement>{}
const Input = ({...rest}:IProps)=>{
  return (
    <input
      className="block mt-4 text-white w-80 rounded-lg border shadow-md focus:ring-indigo-200 focus:border-indigo-500 focus:outline-none focus:ring-1 bg-Back-color p-4"
      {...rest}
    />
  );
}
export default Input