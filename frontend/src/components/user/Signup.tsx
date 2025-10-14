import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useNavigate, useOutletContext } from "react-router-dom";
import {
  IconBrandGoogleFilled,
  IconEye,
  IconEyeClosed,
  IconCircleArrowUpLeftFilled,
} from "@tabler/icons-react";
import { useState } from "react";
import { motion } from "motion/react";
import { userAuthApi,companyAuthApi } from "@/api/apiClient";
import { parseError } from "@/utils/error";

const Signup = () => {
  const { handleExit } = useOutletContext<{ handleExit: () => void }>();
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState<"user" | "company">("user");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [credentials, setCredentials] = useState(false);
  const [error, setError] = useState("");

    const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      if (selectedType === "user") {
        await userAuthApi.register({
          name: `${form.firstName} ${form.lastName}`,
          email: form.email,
          password: form.password,
        });
      } else {
        await companyAuthApi.register({
          name: form.companyName,
          companyName: form.companyName,
          email: form.email,
          password: form.password,
        });
      }

      alert("Registration successful! Please log in.");
      navigate("/signin"); 
    } catch (err: unknown) {
      const error = parseError(err);
      setError(error.message);
    }
  };

  const handleSignIn = () => {
    navigate("/signin");
  };

  return (
    <Card className="relative w-full max-w-sm shadow-lg">
      <button
        onClick={handleExit}
        className="absolute top-0 left-0 text-gray-500 hover:text-gray-700 md:hidden"
      >
        <IconCircleArrowUpLeftFilled size={35} />
      </button>
      <CardHeader>
        <div className="flex items-baseline gap-1">
          <CardTitle className="text-3xl font-bold">Register</CardTitle>
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
        <form onSubmit={handleRegister}>
          {error && <p className="text-red-500">{error}</p>}
          <div className="flex flex-col gap-2">
            {/* ✅ Conditional Rendering */}
            {selectedType === "user" ? (
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-1">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="eg: John"
                    value={form.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="grid gap-1">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    type="text"
                    placeholder="eg: Doe"
                    value={form.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            ) : (
              <div className="grid gap-1">
                <Label htmlFor="companyName">Company Name</Label>
                <Input
                  id="companyName"
                  type="text"
                  placeholder="eg: OpenAI Inc."
                  value={form.companyName}
                  onChange={handleChange}
                  required
                />
              </div>
            )}

            <div className="grid gap-1">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="relative grid gap-1">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="********"
                required
                className="pe-10"
                value={form.password}
                onChange={handleChange}
                onFocus={() => setCredentials(true)}
                onBlur={() => setCredentials(false)}
              />
              {credentials && (
                <div className="overflow-x-hidden">
                  <motion.p
                    animate={{ x: ["100%", "-100%"] }}
                    transition={{
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 20,
                      ease: "linear",
                    }}
                    className="text-xs text-gray-500 text-nowrap px-2"
                  >
                    Password must be at least{" "}
                    <span className="text-blue-500">8 characters long</span>. It
                    should include a{" "}
                    <span className="text-blue-500">
                      mix of uppercase and lowercase
                    </span>{" "}
                    letters, <span className="text-blue-500">numbers</span>, and{" "}
                    <span className="text-blue-500">special characters</span>.
                  </motion.p>
                </div>
              )}
              {showPassword ? (
                <IconEye
                  className="absolute right-2 top-9 transform -translate-y-1/2 cursor-pointer text-[#b6b6b6]"
                  onClick={() => setShowPassword(false)}
                />
              ) : (
                <IconEyeClosed
                  className="absolute right-2 top-9 transform -translate-y-1/2 cursor-pointer text-[#b6b6b6]"
                  onClick={() => setShowPassword(true)}
                />
              )}
            </div>

            <div className="relative grid gap-1">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="********"
                value={form.confirmPassword}
                onChange={handleChange}
                required
                className="pe-10"
              />
              {showConfirmPassword ? (
                <IconEye
                  className="absolute right-2 top-2/3 transform -translate-y-1/2 cursor-pointer text-[#b6b6b6]"
                  onClick={() => setShowConfirmPassword(false)}
                />
              ) : (
                <IconEyeClosed
                  className="absolute right-2 top-2/3 transform -translate-y-1/2 cursor-pointer text-[#b6b6b6]"
                  onClick={() => setShowConfirmPassword(true)}
                />
              )}
            </div>
          </div>
          <Button type="submit" className="w-full mt-5">
          Register
          </Button>
        </form>
      </CardContent>

      <CardFooter className="flex-col gap-1">
        <CardDescription className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <span className="text-blue-500 cursor-pointer" onClick={handleSignIn}>
            Sign In
          </span>
        </CardDescription>

        <div className="flex w-full items-center justify-center gap-4 my-2">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="text-gray-500 text-sm">OR</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        <Button variant="outline" className="w-full">
          Register with Google <IconBrandGoogleFilled />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Signup;
