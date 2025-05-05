'use client'

import { motion } from "framer-motion";
import { useState } from "react";

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
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              whileHover={{ 
                y: -5, 
                scale: 1.03,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              onHoverStart={() => setHoveredSkill(skill)}
              onHoverEnd={() => setHoveredSkill(null)}
              className={`bg-white rounded-xl p-6 shadow-sm border border-zinc-100 transition-all duration-300 relative overflow-hidden ${
                hoveredSkill === skill ? 'border-emerald-200' : ''
              }`}
            >
              {/* Animated background effect on hover */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent opacity-0 transition-opacity duration-300"
                animate={{ opacity: hoveredSkill === skill ? 0.6 : 0 }}
              />
              
              {/* Animated accent line */}
              <motion.div 
                className="absolute top-0 left-0 h-1 bg-emerald-500 w-0"
                animate={{ width: hoveredSkill === skill ? '100%' : '0%' }}
                transition={{ duration: 0.3 }}
              />
              
              <div className="relative z-10 flex items-center justify-center h-full">
                <motion.h3 
                  className="font-medium text-lg text-center"
                  animate={{ 
                    scale: hoveredSkill === skill ? 1.05 : 1,
                    color: hoveredSkill === skill ? '#059669' : '#18181b'
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {skill}
                </motion.h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
