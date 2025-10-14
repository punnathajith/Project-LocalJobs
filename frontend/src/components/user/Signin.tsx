import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useDispatch } from "react-redux";
import { setCredentials } from "@/redux/authSlice";
import { userAuthApi,companyAuthApi } from "@/api/apiClient";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useNavigate, useOutletContext } from "react-router-dom";
import {
  IconBrandGoogleFilled,
  IconCircleArrowUpLeftFilled,
  IconEye,
  IconEyeClosed,
} from "@tabler/icons-react";
import { useState } from "react";
import { parseError } from "@/utils/error";
import { motion } from "motion/react";

const Signin = () => {
  const { handleExit } = useOutletContext<{ handleExit: () => void }>();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [selectedType, setSelectedType] = useState<"user" | "company">("user");


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      let res;
      console.log("Selected Type:", selectedType);

      if (selectedType === "company") {
        res = await companyAuthApi.login({ email, password });
      } else {
        res = await userAuthApi.login({ email, password });
      }
      const { accessToken, user } = res.data;
      dispatch(setCredentials({ user, accessToken }));
      navigate("/home");
    } catch (err: unknown) {
      const error = parseError(err);
      setError(error.message);
    }
  };

  const handleSignUp = () => {
    navigate("/signup");
  };
  return (
    <Card className="reletive w-full max-w-sm shadow-lg">
      <button
        onClick={handleExit}
        className="absolute top-2 left-2 text-gray-500 hover:text-gray-700 md:hidden"
      >
        <IconCircleArrowUpLeftFilled size={35} />
      </button>
      <CardHeader>
        <div className="flex items-baseline gap-1">
          <CardTitle className="text-3xl font-bold">Login</CardTitle>
          <CardTitle>to your account</CardTitle>
        </div>
        <div className="flex justify-center items-center mt-4 max-w-sm">
          <div className="relative flex w-full justify-between bg-[#ebebeb] rounded-md overflow-hidden">
            <motion.div
              className="absolute top-0 bottom-0 w-1/2 bg-white rounded-md shadow"
              initial={false}
              animate={{ x: selectedType === "user" ? "0%" : "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />

            <Button
              variant={selectedType === "user" ? "default" : "ghost"}
              onClick={() => setSelectedType("user")}
              className="relative z-10 w-1/2"
            >
              User
            </Button>

            <Button
              variant={selectedType === "company" ? "default" : "ghost"}
              onClick={() => setSelectedType("company")}
              className="relative z-10 w-1/2"
            >
              Company
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit}>
          {error && <p className="text-red-500">{error}</p>}
          <div className="flex flex-col gap-6 mb-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2 relative">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="*********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="pe-10"
              />
              {showPassword ? (
                <IconEye
                  className="absolute right-2 top-10 transform -translate-y-1/2 cursor-pointer text-[#b6b6b6]"
                  onClick={() => setShowPassword(false)}
                />
              ) : (
                <IconEyeClosed
                  className="absolute right-2 top-10 transform -translate-y-1/2 cursor-pointer text-[#b6b6b6]"
                  onClick={() => setShowPassword(true)}
                />
              )}
            </div>
            <div className="flex items-center">
              <a
                href="#"
                className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
              >
                Forgot your password?
              </a>
            </div>
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      </CardContent>

      <CardFooter className="flex-col gap-2">
        <CardDescription className="text-center text-sm text-muted-foreground">
          Don’t have an account?{" "}
          <span className="text-blue-500 cursor-pointer" onClick={handleSignUp}>
            Sign Up
          </span>
        </CardDescription>
        <div className="flex w-full items-center justify-center gap-4 my-4">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="text-gray-500 text-sm">OR</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>
        <Button variant="outline" className="w-full">
          Login with Google <IconBrandGoogleFilled />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Signin;
