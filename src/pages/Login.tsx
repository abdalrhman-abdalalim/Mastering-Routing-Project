import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

interface IProps {}
const Login = ({}: IProps) => {
  return (
    <div>
      <h1 style={{ fontSize: 30 }} className="text-center mb-3 font-bold">
        Login to Contribute
      </h1>
      <form className="space-y-3 max-w-sm mx-auto">
        <div className="m-7">
          <Input placeholder="Email address" />
          <Input placeholder="Password" />
          <Button className="bg-[#149eca] mt-5 p-4">Submit</Button>
        </div>
      </form>
    </div>
  );
};
export default Login;
