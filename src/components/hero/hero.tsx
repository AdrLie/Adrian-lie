'use client'

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

interface HeroProps {
  isLoaded: boolean;
  scrollToSection: (sectionId: string) => void;
}

export  function Hero({ isLoaded, scrollToSection }: HeroProps) {
  return (
    <section id="hero" className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            >
              Hi, I&apos;m <span className="text-emerald-600">Adrian Lie</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-zinc-600 max-w-lg"
            >
              A passionate developer creating beautiful, functional, and user-friendly digital experiences.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex gap-4"
            >
              <button
                onClick={() => scrollToSection("contact")}
                className="px-6 py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors"
              >
                Get in touch
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="px-6 py-3 border border-zinc-300 rounded-lg font-medium hover:bg-zinc-100 transition-colors"
              >
                View my work
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex gap-4 pt-4"
            >
              <a
                href="https://github.com/AdrLie"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 hover:text-emerald-600 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/adrian-lie/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 hover:text-emerald-600 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:adrianlie.al04@gmail.com"
                className="text-zinc-600 hover:text-emerald-600 transition-colors"
              >
                <Mail size={24} />
              </a>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex justify-center mt-16"
        >
          <button
            onClick={() => scrollToSection("about")}
            className="flex flex-col items-center text-zinc-500 hover:text-emerald-600 transition-colors"
          >
            <span className="text-sm font-medium mb-2">Scroll down</span>
            <ArrowDown size={20} className="animate-bounce" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
