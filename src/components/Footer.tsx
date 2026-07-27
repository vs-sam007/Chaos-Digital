"use client";

import { motion } from "framer-motion";
import { Globe, MessageSquare, Share2, Camera } from "lucide-react";
import { Logo } from "./Logo";

export default function Footer() {
  return (
    <footer className="relative bg-void border-t border-white/5 pt-24 pb-12 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[300px] bg-lime/5 blur-[120px] pointer-events-none rounded-t-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 lg:col-span-1 flex flex-col items-start">
            <div className="mb-6 transform scale-75 origin-left">
              <Logo />
            </div>
            <p className="text-offwhite/60 font-light mt-4 max-w-xs">
              Websites that defy gravity. We engineer weightless, high-converting digital experiences.
            </p>
            <div className="flex gap-4 mt-8">
              {[Globe, MessageSquare, Share2, Camera].map((Icon, i) => (
                <a key={i} href="#" className="text-offwhite/40 hover:text-lime transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-outfit font-bold text-offwhite uppercase tracking-wider mb-6">
              Navigation
            </h4>
            <ul className="flex flex-col gap-3">
              <li><a href="/#work" className="text-offwhite/60 hover:text-lime transition-colors">Work</a></li>
              <li><a href="/services" className="text-offwhite/60 hover:text-lime transition-colors">Services</a></li>
              <li><a href="/pricing" className="text-offwhite/60 hover:text-lime transition-colors">Pricing</a></li>
              <li><a href="/#about" className="text-offwhite/60 hover:text-lime transition-colors">About</a></li>
              <li><a href="/#contact" className="text-offwhite/60 hover:text-lime transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-outfit font-bold text-offwhite uppercase tracking-wider mb-6">
              Locations
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="text-offwhite/60">Lucknow, Uttar Pradesh</li>
              <li className="text-offwhite/60">Serving PAN India</li>
              <li className="text-offwhite/60">Remote-First Team</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-outfit font-bold text-offwhite uppercase tracking-wider mb-6">
              Contact
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="mailto:hello@chaosdigital.in" className="text-offwhite/60 hover:text-lime transition-colors">
                  hello@chaosdigital.in
                </a>
              </li>
              <li>
                <a href="tel:+919876543210" className="text-offwhite/60 hover:text-lime transition-colors">
                  +91 98765 43210
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-offwhite/40 text-sm">
            &copy; {new Date().getFullYear()} Chaos Digital. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-offwhite/40 hover:text-lime text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-offwhite/40 hover:text-lime text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
