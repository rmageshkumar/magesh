import { SKILLS } from "../constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8, // Reduced from 1 to 0.8 for a slightly snappier animation
      delay: 0.3,
      staggerChildren: 0.15,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: (index) => ({
    opacity: 0,
    x: index % 2 === 0 ? -50 : 50,
    y: 20,
    scale: 0.95,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80, // Reduced from 100 for smoother motion
      damping: 15,   // Increased from 12 for less oscillation
      mass: 1.2,     // Added mass to make movement more substantial
      velocity: 0.5  // Control initial velocity
    },
  },
};

const progressVariants = {
  hidden: { width: 0 },
  visible: { 
    width: "100%",
    transition: { 
      duration: 1.5,
      ease: [0.25, 0.1, 0.25, 1.0], // Custom cubic bezier for smoother animation
      delay: 0.5
    }
  }
};

const iconVariants = {
  hidden: { scale: 0, rotate: -30 },
  visible: { 
    scale: 1, 
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      delay: 0.2
    }
  },
  hover: { 
    scale: 1.2, 
    rotate: 5, 
    transition: { 
      type: "spring", 
      stiffness: 400, 
      damping: 10 
    } 
  }
};

const Skills = () => {
  // Function to determine progress bar width based on experience
  const getProgressWidth = (experience) => {
    if (experience.includes("2+")) return "w-full";
    if (experience.includes("1.5+")) return "w-3/4";
    if (experience.includes("1+")) return "w-1/2";
    return "w-1/4";
  };

  // Function to get color based on skill name
  const getSkillColor = (skillName) => {
    const colors = {
      "React": "from-cyan-400 to-blue-500",
      "Next.js": "from-gray-600 to-black",
      "MongoDB": "from-green-500 to-green-700",
      "Redis": "from-red-500 to-red-700",
      "Node.js": "from-green-400 to-green-600",
      "PostgreSQL": "from-sky-600 to-blue-800"
    };
    
    return colors[skillName] || "from-purple-500 to-indigo-600";
  };

  return (
    <section className="container mx-auto px-4" id="skills">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-12 mt-20 text-center text-4xl font-semibold"
      >
        Skills & Expertise
      </motion.h2>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
      >
        {SKILLS.map((skill, index) => (
          <motion.div
            variants={itemVariants}
            custom={index}
            key={index}
            whileHover={{ 
              y: -8, 
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
              transition: { duration: 0.3 } 
            }}
            className="bg-stone-900/30 backdrop-blur-sm rounded-xl border border-stone-50/20 p-6 hover:border-stone-50/40 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <motion.div 
                  variants={iconVariants}
                  whileHover="hover"
                  className="mr-3 text-5xl"
                >
                  {skill.icon}
                </motion.div>
                <h3 className="text-xl lg:text-2xl font-medium">{skill.name}</h3>
              </div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="text-md font-semibold px-3 py-1 rounded-full bg-stone-800/50 text-stone-200"
              >
                {skill.experience}
              </motion.div>
            </div>
            <div className="h-3 w-full bg-stone-800/70 rounded-full overflow-hidden">
              <motion.div 
                variants={progressVariants}
                className={`h-full ${getProgressWidth(skill.experience)} bg-gradient-to-r ${getSkillColor(skill.name)} rounded-full shadow-lg`}
              ></motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
