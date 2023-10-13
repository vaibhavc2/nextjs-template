import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {};

const Login = ({}: Props) => {
  return (
    <>
      <div>LOGIN</div>
      <div>
        <Button>
          <Link href={"/"}>Go to Home</Link>
        </Button>
      </div>
    </>
  );
};

export default Login;
