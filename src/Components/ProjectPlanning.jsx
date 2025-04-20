import React, { useEffect } from "react";
import { PROJECT_PLANNING } from "../constants";
import { motion, useAnimation } from "framer-motion";
import {
  FaLightbulb,
  FaClipboardList,
  FaPencilRuler,
  FaCode,
  FaVial,
  FaRocket,
  FaCogs,
} from "react-icons/fa";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5, // Reduced from 0.8
      delay: 0.2, // Reduced from 0.3
      staggerChildren: 0.15, // Reduced from 0.3
    },
  },
};

const itemVariants = {
  hidden: (index) => ({
    opacity: 0,
    x: index % 2 === 0 ? -50 : 50, // Reduced from -70/70
    y: 15, // Reduced from 20
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80, // Increased from 60
      damping: 10, // Reduced from 12
      duration: 0.5, // Reduced from 0.8
    },
  },
};

const iconVariants = {
  hidden: {
    scale: 0.5,
    opacity: 0,
    rotate: -5, // Reduced from -10
  },
  visible: {
    scale: 1,
    opacity: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 300, // Increased from 260
      damping: 15, // Reduced from 20
      delay: 0.1, // Reduced from 0.2
    },
  },
  hover: {
    scale: 1.1, // Reduced from 1.15
    rotate: 5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 8, // Reduced from 10
    },
  },
};

const lineVariants = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 1.2, // Reduced from 2
      ease: "easeOut",
      delay: 0.2, // Reduced from 0.3
    },
  },
};

const getIcon = (phase) => {
  switch (phase) {
    case "PROCESS":
      return <FaCogs className="text-4xl text-blue-400" />;
    case "IDEA":
      return <FaLightbulb className="text-4xl text-yellow-400" />;
    case "PLANNING":
      return <FaClipboardList className="text-4xl text-green-400" />;
    case "DESIGN":
      return <FaPencilRuler className="text-4xl text-purple-400" />;
    case "DEVELOP":
      return <FaCode className="text-4xl text-cyan-400" />;
    case "TEST":
      return <FaVial className="text-4xl text-red-400" />;
    case "LAUNCH":
      return <FaRocket className="text-4xl text-orange-400" />;
    default:
      return <FaCogs className="text-4xl text-blue-400" />;
  }
};

const ProjectPlanning = () => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("process");
      if (element) {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        if (isVisible) {
          controls.start("visible");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial load

    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <section className="container mx-auto px-4 py-16" id="process">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }} // Reduced from 0.8
        className="mb-16 text-center text-4xl font-semibold"
      >
        My Development Process
      </motion.h2>

      <motion.div
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="relative max-w-5xl mx-auto"
      >
        {/* Animated path connecting all steps */}
        <svg
          className="absolute left-1/2 top-10 h-[calc(100%-80px)] w-20 -translate-x-1/2 hidden lg:block"
          viewBox="0 0 20 100"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M 10,0 Q 15,20 5,40 Q -5,60 10,80 Q 25,100 10,100"
            stroke="url(#processGradient)"
            strokeWidth="2"
            fill="none"
            variants={lineVariants}
            strokeLinecap="round"
            strokeDasharray="1"
          />
          <defs>
            <linearGradient
              id="processGradient"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>

        {PROJECT_PLANNING.map((phase, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={itemVariants}
            className={`flex mb-20 relative ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } flex-col items-center`}
          >
            {/* Step number and icon */}
            <motion.div
              variants={iconVariants}
              whileHover="hover"
              className="flex-shrink-0 w-20 h-20 rounded-full bg-stone-900/70 border border-stone-50/30 flex items-center justify-center z-10 shadow-lg shadow-stone-900/50 lg:mx-8 backdrop-blur-sm"
            >
              {getIcon(phase.phase)}
            </motion.div>

            {/* Content */}
            <motion.div
              whileHover={{
                y: -8,
                boxShadow: "0 20px 35px -15px rgba(0, 0, 0, 0.3)",
              }}
              className={`flex-grow bg-stone-900/30 backdrop-blur-sm rounded-xl border border-stone-50/20 p-6 hover:border-stone-50/40 transition-all duration-300 max-w-lg ${
                index % 2 === 0 ? "lg:text-left" : "lg:text-right"
              }`}
            >
              <h3
                className={`text-xl lg:text-2xl font-medium mb-3 text-stone-50 flex items-center ${
                  index % 2 === 0 ? "" : "lg:flex-row-reverse lg:justify-end"
                }`}
              >
                <span
                  className={` w-8 h-8 rounded-full bg-stone-800 text-center text-sm flex items-center justify-center flex-shrink-0 ${
                    index % 2 === 0 ? "mr-3" : "lg:ml-3 mr-3 lg:mr-0"
                  }`}
                >
                  {index + 1}
                </span>
                {phase.phase}
              </h3>
              <p className="text-stone-300">{phase.description}</p>
            </motion.div>

            {/* Animated connector dots */}
            {index < PROJECT_PLANNING.length - 1 && (
              <motion.div
                className="absolute left-1/2 transform -translate-x-1/2 hidden lg:block"
                style={{ bottom: "-40px" }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: [0.5, 1.1, 1], // Reduced from [0.5, 1.2, 1]
                  opacity: [0, 1, 0.8],
                }}
                transition={{
                  duration: 1.5, // Reduced from 2
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <div className="w-3 h-3 rounded-full bg-purple-500"></div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ProjectPlanning;
