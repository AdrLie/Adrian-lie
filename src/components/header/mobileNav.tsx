'use client'

import { motion, AnimatePresence } from "framer-motion";

interface MobileNavProps {
  isMenuOpen: boolean;
  navItems: { name: string; section: string }[];
  activeSection: string;
}

export function MobileNav({ isMenuOpen, navItems, activeSection }: MobileNavProps) {
  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-16 left-0 right-0 z-40 bg-white border-b border-zinc-200 md:hidden"
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.section}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  className={`text-sm font-medium py-2 transition-colors hover:text-emerald-600 ${activeSection === item.section ? "text-emerald-600" : "text-zinc-600"}`}
                >
                  {item.name}
                </motion.button>
              ))}
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
