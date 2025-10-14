import React, { useMemo } from "react";
import Stagger from "./Stagger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { CiSearch, CiLocationOn } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Hero: React.FC = React.memo(() => {
  const isLoggedIn = true; 
  const gsapDefaults = useMemo(
    () => ({
      opacity: 0,
      y: -20,
      duration: 0.5,
      ease: "power1.out",
    }),
    []
  );

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: gsapDefaults });

    tl.from(".heading", { delay: 0.2 })
      .from(".para", {}, "-=0.3")
      .from(".search", {}, "-=0.3")
      .from(".hero-buttons", {}, "-=0.3");
  }, [gsapDefaults]);

  return (
    <>
    {isLoggedIn && <p className="text-xl font-inter font-black text-center">Hey user 👋</p>}
    <div className="text-center py-20">
      <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 font-Montserrat heading">
        Find a <Stagger />{" "}
        <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
          Near You
        </span>
      </h1>
      <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto font-inter font-medium para">
        Instantly connect with verified local employers. Find daily wage or
        part-time work nearby, with secure DigiLocker verification.
      </p>

      <div className="w-full flex justify-center items-center my-5 px-4 search">
        <div className="max-w-3xl p-2 border border-gray-200 rounded-full flex items-center bg-white shadow-lg w-full">
          <CiSearch className="text-xl text-gray-400 mx-3" />
          <Input
            type="text"
            placeholder="What kind of jobs..."
            className="flex-1 placeholder-gray-400 text-gray-700"
          />
          <div className="w-px h-6 bg-gray-200 mx-2"></div>
          <CiLocationOn className="text-xl text-gray-400 mx-2" />
          <Input
            type="text"
            placeholder="Location"
            className="flex-1 placeholder-gray-400 text-gray-700"
          />
          <Button
            variant="default"
            className="ml-2 rounded-full px-6 py-2 transition-colors"
          >
            Search Jobs
          </Button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center hero-buttons">
        <Button variant="default">Find Work</Button>
        <Button variant="outline">Post a Job</Button>
      </div>
    </div>
    </> 
  );
});

Hero.displayName = "Hero";

export default Hero;
