import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Container from "./Container";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { navConfig } from "@/config/navConfig";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import type { RootState } from "@/redux/store";
import NavActions from "./navActions";


const Navbar = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  console.log("User in Navbar:", user);

  const role = user?.type ?? "guest"; 
  const navItems = navConfig[role];
  console.log("Navigation Items:", navItems);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSignIn = () => {
    navigate("/signin");
  };

  const handleSignUp = () => {
    navigate("/signup");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <Container>
        <div className="flex justify-between py-5 items-center">
          <div className="flex items-center">
            <h1 className="font-Montserrat text-4xl font-black text-gray-900">
              LocalJobs
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block font-inter font-bold">
            <ul className="flex list-none gap-12 text-[#959595]">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.href}
                    className="text-gray-700 hover:text-cyan-600 transition"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex gap-2">
           {<NavActions/>}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <FaTimes className="w-6 h-6 text-gray-600" />
            ) : (
              <FaBars className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100">
            <ul className="flex flex-col gap-4 pt-4 font-inter font-medium">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="text-[#959595] hover:text-gray-700 cursor-pointer transition-colors py-2"
                >
                  {item.title}
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 mt-6">
              <Button variant="default" onClick={handleSignIn}>
                Sign-in
              </Button>
              <Button variant="ghost" onClick={handleSignUp}>
                Get started
              </Button>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
};

export default Navbar;
