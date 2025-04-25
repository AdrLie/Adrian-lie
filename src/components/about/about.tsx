'use client'

import { motion } from "framer-motion";

interface AboutProps {
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

export function About({ fadeIn }: AboutProps) {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.h2 variants={fadeIn} custom={0} className="text-3xl md:text-4xl font-bold mb-4">
            About Me
          </motion.h2>
          <motion.div variants={fadeIn} custom={1} className="h-1 w-20 bg-emerald-600 mx-auto mb-8" />
          <motion.p variants={fadeIn} custom={2} className="text-lg text-zinc-600">
            Get to know more about me and my background
          </motion.p>
        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Add Image and Details */}
        </div>
      </div>
    </section>
  );
}
