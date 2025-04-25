'use client'

import { motion } from "framer-motion";

interface DesktopNavProps {
  navItems: { name: string; section: string }[];
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

export function DesktopNav({ navItems, activeSection, scrollToSection }: DesktopNavProps) {
  return (
    <nav className="hidden md:flex space-x-8">
      {navItems.map((item, index) => (
        <motion.button
          key={item.section}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          onClick={() => scrollToSection(item.section)}
          className={`text-sm font-medium transition-colors hover:text-emerald-600 ${activeSection === item.section ? "text-emerald-600" : "text-zinc-600"}`}
        >
          {item.name}
        </motion.button>
      ))}
    </nav>
  );
}
