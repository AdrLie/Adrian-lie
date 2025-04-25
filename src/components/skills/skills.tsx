'use client'

import { motion } from "framer-motion";

interface SkillsProps {
  fadeIn: {
    hidden: { opacity: number; y: number };
    visible: (i: number) => {
      opacity: number;
      y: number;
      transition: {
        delay: number;
        duration: number;
        ease: string;
      };
    };
  };
}

export function Skills({ fadeIn }: SkillsProps) {
  const skills = [
    "JavaScript",
    "Python",
    "TypeScript",
    "React",
    "Next js",
    "Node js",  
    "Tailwind CSS",
    "HTML5",
    "CSS3",
    "Git",
    "Figma",
    "Responsive Design",
    "Vue js",
    "ERPNext",
    "PostgreSQL",
    "MongoDB",
    "Express JS",
    "Sequelize",
    "React Native"
  ];

  return (
    <section id="skills" className="py-24 bg-zinc-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.h2 variants={fadeIn} custom={0} className="text-3xl md:text-4xl font-bold mb-4">
            My Skills
          </motion.h2>
          <motion.div variants={fadeIn} custom={1} className="h-1 w-20 bg-emerald-600 mx-auto mb-8" />
          <motion.p variants={fadeIn} custom={2} className="text-lg text-zinc-600">
            Technologies and tools I work with
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <h3 className="font-medium text-lg">{skill}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
