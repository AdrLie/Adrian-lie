'use client'

import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

interface ContactProps {
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

export function Contact({ fadeIn }: ContactProps) {
  return (
    <section id="contact" className="py-24 bg-zinc-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.h2 variants={fadeIn} custom={0} className="text-3xl md:text-4xl font-bold mb-4">
            Get In Touch
          </motion.h2>
          <motion.div variants={fadeIn} custom={1} className="h-1 w-20 bg-emerald-600 mx-auto mb-8" />
          <motion.p variants={fadeIn} custom={2} className="text-lg text-zinc-600">
            Have a question or want to work together?
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-1 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">Contact Information</h3>
            <p className="text-zinc-600">
              Feel free to reach out to me through any of the following methods. I&apos;m always open to discussing new
              projects, creative ideas, or opportunities to be part of your vision.
            </p>

            {/* Social Links */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-emerald-100 p-3 rounded-full text-emerald-600">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:adrianlie.al04gmail.com"
                    className="text-zinc-600 hover:text-emerald-600 transition-colors"
                  >
                    adrianlie.al04@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-emerald-100 p-3 rounded-full text-emerald-600">
                  <Linkedin size={20} />
                </div>
                <div>
                  <h4 className="font-medium">LinkedIn</h4>
                  <a
                    href="https://github.com/AdrLie"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-600 hover:text-emerald-600 transition-colors"
                  >
                    linkedin.com/in/Adrian-lie
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-emerald-100 p-3 rounded-full text-emerald-600">
                  <Github size={20} />
                </div>
                <div>
                  <h4 className="font-medium">GitHub</h4>
                  <a
                    href="https://github.com/AdrLie"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-600 hover:text-emerald-600 transition-colors"
                  >
                    github.com/AdrLie
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
