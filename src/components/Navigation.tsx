"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

import { Logo } from "./Logo";

const navLinks = [
  { name: "Index", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navigation() {
  const { scrollY } = useScroll();
  const [isHidden, setIsHidden] = useState(true);
  const [introFinished, setIntroFinished] = useState(false);

  useEffect(() => {
    // Wait for the preloader to finish (4.5s)
    const timer = setTimeout(() => {
      setIntroFinished(true);
      // Only show if we are still at the top
      if (window.scrollY <= 50) {
        setIsHidden(false);
      }
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      if (!introFinished) return;
      
      // Only show when at the very top
      if (latest > 50) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
    });
  }, [scrollY, introFinished]);

  return (
    <motion.header
      initial={{ y: "-100%" }}
      animate={{ y: isHidden ? "-100%" : "0%" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 inset-x-0 z-50 bg-transparent py-8"
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="hover:opacity-80 transition-opacity flex items-center">
          <Logo />
        </Link>

        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-inter text-[var(--color-amethyst)]/70 hover:text-[var(--color-amethyst)] uppercase tracking-widest transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[var(--color-amethyst)] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
