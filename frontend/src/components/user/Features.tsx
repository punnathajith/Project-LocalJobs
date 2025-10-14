import React, { useMemo } from "react";
import FeatureCard from "./FeatureCard";
import { motion } from "motion/react";
import {
  IconShieldLock,
  IconMessages,
  IconMapPin,
  IconClockHour7,
} from "@tabler/icons-react";

const Features: React.FC = React.memo(() => {
  const features = useMemo(
    () => [
      {
        icon: <IconShieldLock size={28} />,
        title: "DigiLocker Verified",
        description:
          "All users verified through DigiLocker for trust and safety",
      },
      {
        icon: <IconMessages size={28} />,
        title: "Instant Communication",
        description:
          "Chat, call, or video chat directly with job posters",
      },
      {
        icon: <IconMapPin size={28} />,
        title: "Location-Based",
        description:
          "Find jobs within walking distance or your preferred radius",
      },
      {
        icon: <IconClockHour7 size={28} />,
        title: "Real-Time Updates",
        description:
          "Get notified instantly when matching jobs are posted",
      },
    ],
    []
  );


  return (
    <div className="w-full py-10 bg-neutral-50 dark:bg-neutral-950 rounded-xl mb-3">
      <div className="flex flex-col items-center justify-center mb-6">
        <motion.h1
          whileHover={{ y: -20 }}
           transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="text-3xl md:text-6xl leading-normal font-black font-Montserrat text-center bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent fea-head"
        >
          Why Choose Us ?
        </motion.h1>
        <p className="font-inter text-black text-center font-medium hover:text-[#676767] text-sm sm:text-base md:text-lg leading-relaxed sm:px-2 md:px-4">
          Built for the local job market with features that matter most to
          workers and employers
        </p>
      </div>
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
});

Features.displayName = "Features"; 
export default Features;
