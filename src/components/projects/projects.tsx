'use client'

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

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
            title: "Project One",
            description: "A modern web application built with React and Next.js",
            image: "/placeholder.svg?height=400&width=600",
            link: "#",
        },
        {
            title: "Project Two",
            description: "An e-commerce platform with a custom CMS",
            image: "/placeholder.svg?height=400&width=600",
            link: "#",
        },
        {
            title: "Project Three",
            description: "A responsive dashboard with data visualization",
            image: "/placeholder.svg?height=400&width=600",
            link: "#",
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
                    <motion.h2 variants={fadeIn} custom={0} className="text-3xl md:text-4xl font-bold mb-4">
                        My Projects
                    </motion.h2>
                    <motion.div variants={fadeIn} custom={1} className="h-1 w-20 bg-emerald-600 mx-auto mb-8" />
                    <motion.p variants={fadeIn} custom={2} className="text-lg text-zinc-600">
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
                            className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={project.image || "/placeholder.svg"}
                                    alt={project.title}
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-zinc-600 mb-4">{project.description}</p>
                                <a
                                    href={project.link}
                                    className="inline-flex items-center gap-2 text-emerald-600 font-medium hover:text-emerald-700 transition-colors"
                                >
                                    View Project
                                    <ExternalLink size={16} />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
