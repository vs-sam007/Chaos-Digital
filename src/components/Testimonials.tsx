"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    quote: "Chaos Digital didn't just build a website; they built a conversion machine. Our leads in Mumbai doubled in 30 days.",
    name: "Aarav Sharma",
    role: "CMO, RelianceTech",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    quote: "Working with them feels like having an unfair advantage. Their design aesthetic is lightyears ahead of anyone in Bangalore.",
    name: "Priya Desai",
    role: "Founder, Lumina India",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  {
    quote: "Finally, an agency that understands that pretty doesn't pay the bills. They delivered both beauty and ROI across our pan-India operations.",
    name: "Rohan Kapoor",
    role: "VP Marketing, Tata Orbit",
    image: "https://randomuser.me/api/portraits/men/68.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-32 bg-void overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-outfit font-bold text-offwhite uppercase tracking-tighter">
            Voices of <span className="text-lime">Impact</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-6 group hover:bg-white/10 transition-colors"
            >
              <Quote className="w-10 h-10 text-lime/40 group-hover:text-lime transition-colors" />
              <p className="text-xl text-offwhite font-light italic flex-grow">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-lime/30 group-hover:border-lime transition-colors">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-outfit font-bold text-offwhite">
                    {testimonial.name}
                  </h4>
                  <p className="text-lime text-sm tracking-widest uppercase">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
