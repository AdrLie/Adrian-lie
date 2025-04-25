'use client'

import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="py-8 bg-white border-t border-zinc-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div></div>
                    <div className="flex gap-6">
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-600 hover:text-emerald-600 transition-colors"
                        >
                            <Github size={20} />
                            <span className="sr-only">GitHub</span>
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-600 hover:text-emerald-600 transition-colors"
                        >
                            <Linkedin size={20} />
                            <span className="sr-only">LinkedIn</span>
                        </a>
                        <a
                            href="mailto:your.email@example.com"
                            className="text-zinc-600 hover:text-emerald-600 transition-colors"
                        >
                            <Mail size={20} />
                            <span className="sr-only">Email</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
