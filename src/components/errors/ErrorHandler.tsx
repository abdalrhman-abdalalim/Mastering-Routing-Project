import { Link, useLocation } from "react-router-dom";

interface IProps {
  statusCode?: number;
  title?: string;
}
const ErrorHandler = ({
    statusCode = 404,
    title = "Page Not Found",
}: IProps) => {
    const { pathname } = useLocation();
  return (
    <div>
      <img
        src="src\images\false-2061131_1280.png"
        className="w-64 h-64 mx-auto"
      />
      <h1 className="text-center text-[55px] font-bold mt-[-30px]">
        {statusCode} - {title}
      </h1>
      <p className="text-center mx-auto mt-4 max-w-lg text-xl">
        Oops something wen wrong. Try to refersh this page or feel free contact
        us if the problem pressits.
      </p>
      <div className="flex justify-center">
        <Link
          className="bg-[#149eca] p-4 mr-5 ml-5 flex mt-10 w-fit rounded-md font-bold hover:!text-white"
          to={pathname}
          reloadDocument
        >
          Refresh
        </Link>
        <Link
          className="bg-[#149eca] p-4 mr-5 ml-5 flex mt-10 w-fit rounded-md font-bold hover:!text-white"
          to={'/'}
        >
          Home
        </Link>
      </div>
    </div>
  );
};
export default ErrorHandler;
