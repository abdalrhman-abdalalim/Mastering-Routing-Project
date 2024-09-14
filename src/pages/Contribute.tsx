import { useLocation } from "react-router-dom";
import Button from "../components/ui/Button";
import TextArea from "../components/ui/TextArea";

const Contribute = () => {
  const { state } = useLocation();
  return (
    <div>
      <h1 className="text-[25px] font-bold text-center">
        your email is {state.email}
      </h1>
      <h1 className="text-[25px] font-bold text-center">issue: Bug Report</h1>
      <div className="flex items-center justify-center mt-4">
        <TextArea></TextArea>
      </div>
      <div className="flex items-center justify-center mt-4">
        <Button className="bg-[#149eca] p-3 w-auto">Submit new issue</Button>
      </div>
    </div>
  );
};
export default Contribute;
