
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "Head of Customer Experience at FinTech Global",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "Integrating leezyAI has been a game-changer for our customer support workflow. We've seen a 40% decrease in response times and a significant uptick in customer satisfaction scores.",
    rating: 5,
  },
  {
    id: 2,
    name: "Elijah Ramirez",
    role: "Director of Operations at EcoHome Solutions",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    review:
      "leezyAI's chatbot isn't just another tool; it's like having a highly skilled assistant that's learning and improving every day.",
    rating: 4,
  },
  {
    id: 3,
    name: "Mia Song",
    role: "CTO at HealthBridgeTech",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "We were amazed at how quickly leezyAI adapted to our unique industry jargon and data. The customer interactions have added a layer of interactivity that keeps users engaged and satisfied.",
    rating: 5,
  },
];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  // Auto slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center w-full py-10  bg-gradient-to-b from-white to-cyan-50 rounded-2xl">
      <div className="mb-5">
        <h1 className="text-3xl font-Montserrat font-black"> <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
         What Our Users Say
        </span> </h1>
      </div>
      <div className="relative flex overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <TestimonialCard {...testimonials[index]} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination Dots */}
      <div className="flex gap-2 mt-6">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === index ? "bg-cyan-500 w-6" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
