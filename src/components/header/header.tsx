'use client'

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { MobileNav } from "./mobileNav";
import { DesktopNav } from "./dekstopNav";

interface HeaderProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  navItems: { name: string; section: string }[];
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

export function Header({ isMenuOpen, toggleMenu, navItems, activeSection, scrollToSection }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-zinc-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold"
          >
            <span className="text-emerald-600">Adrian Lie</span>
          </motion.div>
          <DesktopNav navItems={navItems} activeSection={activeSection} scrollToSection={scrollToSection} />
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>
      <MobileNav isMenuOpen={isMenuOpen} navItems={navItems} activeSection={activeSection} />
    </header>
  );
}
