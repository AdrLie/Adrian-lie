"use client";

import { useState, useEffect } from "react";
import {
  Header,
  Contact,
  Footer,
  Hero,
  Projects,
  Skills,
  WorkHistory,
} from "../components";
import { section } from "framer-motion/client";

const navItems = [
  { name: "Home", section: "hero" },
  { name: "Skills", section: "skills" },
  { name: "Projects", section: "projects" },
  { name: "Work History", section: "work-history" },
  { name: "Contact", section: "contact" },
];

export default function ClientPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "projects", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;

        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 50,
        behavior: "smooth",
      });
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <Header
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        navItems={navItems}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
      <Hero isLoaded={isLoaded} scrollToSection={scrollToSection} />
      <Skills fadeIn={fadeIn} />
      <Projects fadeIn={fadeIn} />
      {/* <WorkHistory /> */}
      <Contact fadeIn={fadeIn} />
      <Footer />
    </div>
  );
}
