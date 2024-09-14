import { Link } from "react-router-dom";

const PageNotFound = ()=>{
  return (
    <div>
      <h1 className="text-[140px] text-[#149eca] font-bold text-center mt-32">
        404
      </h1>
      <h1 className="text-[35px] text-center font-bold mt-[-20px]">
        <span className="text-red-700">Oops!</span> Page not found
      </h1>
      <p className="flex justify-center text-2xl">
        The page you're looking for doesn't exist.
      </p>
      <div className="flex justify-center mt-5">
        <Link to={"/"} className="bg-[#149eca] p-2 rounded-md font-bold ">
          Go Home
        </Link>
      </div>
    </div>
  );
}
export default PageNotFound