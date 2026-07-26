"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import MagneticButton from "./MagneticButton";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Work", href: "/#work" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/#contact" },
];

const services = [
  { name: "Website Development", href: "/services/website-development" },
  { name: "Shopify Website", href: "/services/shopify-website" },
  { name: "SEO Optimization", href: "/services/seo-search-engine-optimisation" },
  { name: "Paid Marketing (Ads)", href: "/services/paid-marketing" },
  { name: "AI & Automations", href: "/services/ai-automations" },
  { name: "View All Services", href: "/services" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-void/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-outfit font-black text-offwhite tracking-tighter relative z-50">
            CHAOS<span className="text-lime">.</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-outfit uppercase tracking-widest text-offwhite/80 hover:text-lime transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-sm font-outfit uppercase tracking-widest text-offwhite/80 hover:text-lime transition-colors">
              About
            </Link>
            
            {/* Services Mega Menu Toggle */}
            <div
              className="relative group py-4"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-outfit uppercase tracking-widest text-offwhite/80 group-hover:text-lime transition-colors">
                Services <ChevronDown className="w-4 h-4" />
              </button>

              {/* Mega Menu */}
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-[400px] bg-void border border-white/10 rounded-2xl p-6 shadow-2xl shadow-black/50 grid grid-cols-2 gap-4"
                  >
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="group/link flex items-center gap-2 p-3 rounded-lg hover:bg-white/5 transition-colors"
                      >
                        <span className="text-offwhite/80 group-hover/link:text-lime text-sm font-medium">
                          {service.name}
                        </span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="#work" className="text-sm font-outfit uppercase tracking-widest text-offwhite/80 hover:text-lime transition-colors">
              Work
            </Link>
            <Link href="#contact" className="text-sm font-outfit uppercase tracking-widest text-offwhite/80 hover:text-lime transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <MagneticButton className="hidden md:inline-flex bg-lime text-void px-6 py-2.5 rounded-full text-sm hover:shadow-[0_0_20px_rgba(204,255,0,0.4)] transition-shadow">
              Book a Consultation
            </MagneticButton>

            <button
              className="md:hidden relative z-50 text-offwhite hover:text-lime transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full Screen Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { delay: 0.2 } }}
            className="fixed inset-0 z-40 bg-void/95 backdrop-blur-xl flex flex-col justify-center px-6"
          >
            <nav className="flex flex-col gap-6">
              {[...navLinks, ...services].map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ delay: i * 0.05 }}
                  className="overflow-hidden"
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-4xl font-outfit font-bold text-offwhite hover:text-lime transition-colors flex items-center gap-4"
                  >
                    <ArrowRight className="w-6 h-6 text-lime opacity-0 hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-12"
            >
              <button className="w-full bg-lime text-void font-outfit font-bold uppercase tracking-widest py-4 rounded-full text-lg">
                Book a Consultation
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
