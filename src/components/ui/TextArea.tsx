import { ReactNode } from "react";

interface IProps {
  children?: ReactNode;
  className?: string;
}

const TextArea = ({ children, className }: IProps) => {
  return (
        <textarea
        className={`${className} h-40 w-96 border-[1px] border-gray-300 shadow-md focus:outline-none focus:ring-1 bg-Back-color rounded-md p-5`}
        rows={6}
        >
        {children}
        </textarea>
  );
};

export default TextArea;
