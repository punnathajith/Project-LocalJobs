import AuthImage from "@/assets/authimage.webp";
import { Outlet } from "react-router-dom";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import AuthBg from "@/assets/home.webp";
import { IconCircleArrowLeftFilled } from "@tabler/icons-react";

const Authlayout = () => {
  const navigate = useNavigate();
  const handleExitClick = () => {
    navigate("/");
  };
  return (
    <div className="relative flex min-h-screen justify-center items-center bg-gray-50">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${AuthBg})` }}
      ></div>
      <motion.div
        whileHover={{ scale: 1.1, rotate: 45 }}
        transition={{ duration: 0.2 }}
        onClick={handleExitClick}
        className="absolute top-10 left-10 text-[#cbcbcb] hover:cursor-pointer"
      >
        <IconCircleArrowLeftFilled size={50} />
      </motion.div>

      <div className="relative w-full max-w-5xl bg-white/80 backdrop-blur-3xl flex flex-col md:flex-row overflow-hidden rounded-xl border border-gray-200 shadow-lg">
        <div className="flex-1 hidden md:flex items-center justify-center">
          <img
            src={AuthImage}
            alt="Auth Illustration"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="w-full max-w-sm min-h-[569px] flex items-center">
            <Outlet context={{ handleExit: handleExitClick }}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authlayout;
