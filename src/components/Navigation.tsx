"use client";

import { motion, useScroll, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

import { Logo } from "./Logo";

const navLinks = [
  { name: "Index", href: "/" },
  { name: "Work", href: "/work" },
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navigation() {
  const { scrollY } = useScroll();
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Check initial scroll position on mount
    if (window.scrollY > 50) {
      setIsHidden(true);
    }
  }, []);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      // Don't hide the navbar if the mobile menu is open
      if (isMobileMenuOpen) {
        setIsHidden(false);
        return;
      }
      
      // Hide when scrolling down past 50px, show when at the top
      if (latest > 50) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
    });
  }, [scrollY, isMobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: "-100%" }}
        animate={{ y: isHidden ? "-100%" : "0%" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 inset-x-0 z-50 py-2 md:py-4 bg-transparent mix-blend-difference"
      >
        {/* We use mix-blend-difference if we want the logo to invert, but actually let's stick to ivory/amethyst theme. Wait, removing mix-blend to match theme */}
      </motion.header>

      {/* Actual Header with proper z-index */}
      <motion.header
        initial={{ y: "-100%" }}
        animate={{ y: isHidden ? "-100%" : "0%" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 inset-x-0 z-50 py-4 transition-colors duration-500 ${isMobileMenuOpen ? 'bg-[var(--color-ivory)]' : 'bg-transparent'}`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="hover:opacity-80 transition-opacity flex items-center gap-3 -mt-6 relative z-50" onClick={() => setIsMobileMenuOpen(false)}>
            <Logo />
            <span className="font-playfair font-bold text-2xl text-[var(--color-amethyst)] mt-5">Chaos Digital</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 relative z-50">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-base font-bold font-inter text-[var(--color-amethyst)]/70 hover:text-[var(--color-amethyst)] uppercase tracking-widest transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[var(--color-amethyst)] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Mobile Hamburger Button */}
          <button 
            className="md:hidden relative z-50 p-2 text-[var(--color-amethyst)] hover:opacity-70 transition-opacity"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: "0%" }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[var(--color-ivory)] flex flex-col justify-center px-6"
          >
            {/* Ambient Mobile Background */}
            <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
              <div className="absolute bottom-[-10%] right-[-10%] w-[70vw] h-[70vw] bg-[var(--color-amethyst)]/5 rounded-full blur-[100px]" />
            </div>

            <nav className="flex flex-col gap-8 items-center text-center">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 + (i * 0.1), ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-4xl sm:text-5xl font-playfair font-medium uppercase tracking-tighter text-[var(--color-amethyst)] hover:opacity-50 transition-opacity"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute bottom-12 left-0 right-0 flex justify-center gap-6"
            >
              <a href="#" className="text-[var(--color-amethyst)]/50 uppercase tracking-widest text-xs font-semibold hover:text-[var(--color-amethyst)] transition-colors">Instagram</a>
              <a href="#" className="text-[var(--color-amethyst)]/50 uppercase tracking-widest text-xs font-semibold hover:text-[var(--color-amethyst)] transition-colors">LinkedIn</a>
              <a href="#" className="text-[var(--color-amethyst)]/50 uppercase tracking-widest text-xs font-semibold hover:text-[var(--color-amethyst)] transition-colors">Twitter</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
