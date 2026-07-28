"use client";

import { motion } from "framer-motion";
import { Globe, MessageSquare, Share2, Camera } from "lucide-react";
import Link from "next/link";
import { Logo } from "./Logo";

export default function Footer() {
  return (
    <footer className="relative bg-[#0A0A0A] border-t border-white/10 pt-24 pb-12 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[300px] bg-transparent/10 blur-[120px] pointer-events-none rounded-t-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 lg:col-span-1 flex flex-col items-start">
            <div className="mb-6 transform scale-75 origin-left">
              <Logo />
            </div>
            <p className="text-[var(--color-ivory)]/70 font-light mt-4 max-w-xs">
              Websites that defy gravity. We engineer weightless, high-converting digital experiences.
            </p>
            <div className="flex gap-4 mt-8">
              {[Globe, MessageSquare, Share2, Camera].map((Icon, i) => (
                <a key={i} href="#" className="text-[var(--color-ivory)]/40 hover:text-[var(--color-ivory)] transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-outfit font-bold text-[var(--color-ivory)] uppercase tracking-wider mb-6">
              Navigation
            </h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/work" className="text-[var(--color-ivory)]/70 hover:text-[var(--color-ivory)] transition-colors">Work</Link></li>
              <li><Link href="/services" className="text-[var(--color-ivory)]/70 hover:text-[var(--color-ivory)] transition-colors">Services</Link></li>
              <li><Link href="/pricing" className="text-[var(--color-ivory)]/70 hover:text-[var(--color-ivory)] transition-colors">Pricing</Link></li>
              <li><Link href="/about" className="text-[var(--color-ivory)]/70 hover:text-[var(--color-ivory)] transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-[var(--color-ivory)]/70 hover:text-[var(--color-ivory)] transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-outfit font-bold text-[var(--color-ivory)] uppercase tracking-wider mb-6">
              Locations
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="text-[var(--color-ivory)]/70">Lucknow, Uttar Pradesh</li>
              <li className="text-[var(--color-ivory)]/70">Serving PAN India</li>
              <li className="text-[var(--color-ivory)]/70">Remote-First Team</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-outfit font-bold text-[var(--color-ivory)] uppercase tracking-wider mb-6">
              Contact
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="mailto:hello@chaosdigital.in" className="text-[var(--color-ivory)]/70 hover:text-[var(--color-ivory)] transition-colors">
                  hello@chaosdigital.in
                </a>
              </li>
              <li>
                <a href="tel:+919876543210" className="text-[var(--color-ivory)]/70 hover:text-[var(--color-ivory)] transition-colors">
                  +91 98765 43210
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--color-ivory)]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[var(--color-ivory)]/50 text-sm">
            &copy; {new Date().getFullYear()} Chaos Digital. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-[var(--color-ivory)]/50 hover:text-[var(--color-ivory)] text-sm transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-[var(--color-ivory)]/50 hover:text-[var(--color-ivory)] text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
