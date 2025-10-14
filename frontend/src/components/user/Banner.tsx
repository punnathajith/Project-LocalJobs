import React, { useRef, useMemo } from "react";
import banner from "@/assets/banner.webp";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaChartLine } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";

gsap.registerPlugin(ScrollTrigger);

const Banner = React.memo(() => {
  const bannerRef = useRef(null);
  const imgRef = useRef(null);
  const badgeRef = useRef(null);

  const easeType = useMemo(() => "power2.out", []);

  useGSAP(() => {
    gsap.to(imgRef.current, {
      scrollTrigger: {
        trigger: bannerRef.current,
        start: "top 70%",
        end: "top -20%",
        scrub: true,
      },
      scale: 0.9,
      borderRadius: "1rem",
      ease: easeType,
    });

    gsap.fromTo(
      badgeRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: easeType,
        scrollTrigger: {
          trigger: bannerRef.current,
          start: "top 50%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, [easeType]);

  return (
    <div className="flex justify-center my-5">
      <div
        ref={bannerRef}
        className="relative flex items-center justify-center w-full h-[500px]"
      >
        <div ref={badgeRef} className="absolute bottom-15 right-15 z-10">
          <Badge
            variant="default"
            className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors"
          >
            <FaChartLine className="w-4 h-4" />
            100+ jobs posted this Day !!
          </Badge>
        </div>
        <img
          ref={imgRef}
          src={banner}
          alt="banner"
          className="h-full w-full object-cover object-center md:object-left-top"
        />
      </div>
    </div>
  );
});

export default Banner;
