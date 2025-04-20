import { EDUCATION } from "../constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const EducationSection = () => {
  return (
    <section className="mx-auto p-4 lg:w-3/4 pt-20" id="education">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-4xl font-semibold tracking-tighter"
      >
        Education
      </motion.h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-6 py-6 px-0 md:px-4"
      >
        {EDUCATION.map((edu, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="rounded-xl border border-stone-50/30 bg-white/10 p-4 md:p-6"
          >
            <h3 className="text-xl font-semibold">{edu.degree}</h3>
            <p className="text-lg">{edu.institution}</p>
            <p className="text-sm text-stone-300">{edu.duration}</p>
            <p className="mt-2">{edu.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default EducationSection;
