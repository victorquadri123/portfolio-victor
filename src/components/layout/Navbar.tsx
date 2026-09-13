"use client";

import { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "ABOUT", href: "#about" },
  { name: "SKILLS", href: "#skills" },
  { name: "PROJECTS", href: "#projects" },
  { name: "EXPERIENCE", href: "#experience" },
  { name: "CONTACT", href: "#contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Check if scrolled past top
    if (latest > 50) setIsScrolled(true);
    else setIsScrolled(false);
  });

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled ? "py-4" : "py-8"
        )}
      >
        <div className={cn(
          "mx-auto flex items-center justify-between transition-all duration-500 px-6",
          isScrolled 
            ? "max-w-3xl glass rounded-full py-3 mx-4 md:mx-auto border border-white/5" 
            : "max-w-7xl"
        )}>
          <Link href="#home" className="text-xl font-bold tracking-tighter mix-blend-difference z-10">
            Q.V.<span className="text-primary">A</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[11px] font-mono tracking-[0.2em] text-muted-foreground hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white z-50 relative"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-background/98 backdrop-blur-3xl flex flex-col items-center justify-center"
          >
            <button
              className="absolute top-8 right-6 text-white p-2 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
            <nav className="flex flex-col items-center space-y-8 w-full px-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="w-full text-center overflow-hidden"
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-4xl font-bold tracking-tighter hover:text-primary transition-colors block py-2"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
