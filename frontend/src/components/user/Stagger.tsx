
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState, useEffect } from "react";



const jobs = [
  "Job",
  "Tiler",
  "Mason",
  "Driver",
  "Welder",
  "Painter",
  "Plumber",
  "Gardener",
  "Mechanic",
  "Carpenter",
  "Electrician",
];


const Stagger = () => {
  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey] = useState(0); // force re-render for new word
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const job = jobs[current];

  useEffect(() => {
    letterRefs.current = [];
  }, [current]);

  useGSAP(() => {
    const validRefs = letterRefs.current.filter(Boolean);
    if (!validRefs.length) return;
    const inTl = gsap.timeline();
    inTl.fromTo(
      validRefs,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.07,
        duration: 0.4,
        ease: "power2.out",
      }
    );

    inTl.to(
      validRefs.slice().reverse(),
      {
        opacity: 0,
        y: -20,
        stagger: 0.07,
        duration: 0.4,
        delay: 1.5,
        ease: "power2.in",
        onComplete: () => {
          setTimeout(() => {
            setCurrent((prev) => (prev + 1) % jobs.length);
            setAnimKey((k) => k + 1); 
          }, 200);
        },
      }
    );
  }, [current, animKey]);

  return (
    <span className="app">
      <span className="title">
        {job.split("").map((char, i) => (
          <span
            key={i}
            ref={el => { letterRefs.current[i] = el; }}
            style={{ display: "inline-block", opacity: 0 }}
          >
            {char}
          </span>
        ))}
      </span>
    </span>
  );
};

export default Stagger