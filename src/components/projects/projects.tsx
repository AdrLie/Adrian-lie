"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { IconRocket } from "@tabler/icons-react";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

interface ProjectsProps {
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

export function Projects({ fadeIn }: ProjectsProps) {
  const projects: Project[] = [
    {
      title: "Rumah Berkat (House of blessing)",
      description:
        "Rumah Berkat is an online donation and crowdfunding platform in Indonesia that helps individuals and organizations raise funds for social and humanitarian causes.",
      image: "/images/rumahberkat.png",
      link: "https://rumahberkat.com",
    },
    {
      title: "Rumah Berkat Event",
      description: "Event website for rumah berkat",
      image: "/images/rumahberkat-event.png",
      link: "https://staging-event.rumahberkat.com",
    },
    {
      title: "Sellez",
      description: "A website for sneakers online shopping",
      image: "/images/sellez.png",
      link: "https://github.com/Final-Project-Success",
    },
    {
      title: "Space Candid (On development)",
      description:
        "A landing page website for AI image maker, mobile apps based",
      image: "/images/spacecandid.png",
      link: "",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.h2
            variants={fadeIn}
            custom={0}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            My Projects
          </motion.h2>
          <motion.div
            variants={fadeIn}
            custom={1}
            className="h-1 w-20 bg-emerald-600 mx-auto mb-8"
          />
          <motion.p
            variants={fadeIn}
            custom={2}
            className="text-lg text-zinc-600"
          >
            Some of my recent work
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow min-h-[350px]"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 pb-16">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-zinc-600 mb-4">{project.description}</p>
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    className="absolute bottom-6 left-6 inline-flex items-center gap-2 text-emerald-600 font-medium hover:text-emerald-700 transition-colors"
                  >
                    View Project
                    <ExternalLink size={16} />
                  </a>
                ) : (
                  <a className="absolute bottom-6 left-6 inline-flex items-center gap-2 text-emerald-600 font-medium hover:text-emerald-700 transition-colors">
                    Soon
                    <IconRocket size={16} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
