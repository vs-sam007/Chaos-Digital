"use client";

import { motion } from "framer-motion";
import TiltCard from "./TiltCard";
import { Code2, Search, TrendingUp, Share2, Paintbrush, Bot } from "lucide-react";
import Image from "next/image";

const services = [
  {
    title: "Web & E-Commerce",
    icon: <Code2 className="w-8 h-8 text-white/70" />,
    description: "Custom websites and high-converting Shopify stores built to drive revenue from day one.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800",
  },
  {
    title: "Performance Marketing",
    icon: <TrendingUp className="w-8 h-8 text-white/70" />,
    description: "Data-in, revenue-out. Laser-focused campaigns across Google and Meta optimized for ROI.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
  },
  {
    title: "SEO & Content",
    icon: <Search className="w-8 h-8 text-white/70" />,
    description: "Long-term organic growth engines. We rank you higher and craft stories that stick.",
    image: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=800",
  },
  {
    title: "Social & Influencers",
    icon: <Share2 className="w-8 h-8 text-white/70" />,
    description: "Build an audience that trusts and buys. End-to-end management and creator collaborations.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800",
  },
  {
    title: "AI & Automations",
    icon: <Bot className="w-8 h-8 text-white/70" />,
    description: "Work smarter. We deploy 24/7 AI chatbots, CRM workflows, and WhatsApp automations.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800",
  },
  {
    title: "Creative & Branding",
    icon: <Paintbrush className="w-8 h-8 text-white/70" />,
    description: "Scroll-stopping visuals. From brand identity kits to high-impact short-form video editing.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800",
  }
];

export default function Services() {
  return (
    <section className="relative py-32 bg-[var(--color-banana)] overflow-hidden">
      {/* Ambient Glows */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-white/40 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[60vw] h-[60vw] bg-[var(--color-mauve)]/10 rounded-full blur-[120px] pointer-events-none translate-y-1/3 -translate-x-1/4" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-6xl md:text-8xl text-[var(--color-amethyst)] uppercase tracking-tighter font-playfair"
            >
              OUR <span className="text-transparent" style={{ WebkitTextStroke: "1px var(--color-amethyst)" }}>ARSENAL</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-[var(--color-amethyst)]/70 max-w-md font-inter text-lg"
          >
            Everything you need to break through the noise and scale your digital presence to the next dimension.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: "1000px" }}>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <TiltCard className="h-[450px] w-full !p-0 overflow-hidden group shadow-xl rounded-3xl border border-white/30 relative flex flex-col justify-end">
                {/* Full Card Background Image */}
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 z-0"
                />
                
                {/* Premium Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-void)]/95 via-[var(--color-void)]/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500 z-10" />

                {/* Content Reveal */}
                <div className="relative z-20 p-8 transform translate-y-12 group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col">
                  <div className="mb-6 bg-white/10 backdrop-blur-md w-14 h-14 flex items-center justify-center rounded-2xl border border-white/20 shadow-lg group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-3xl text-[var(--color-ivory)] font-playfair font-bold uppercase tracking-wide mb-3 drop-shadow-md">
                    {service.title}
                  </h3>
                  
                  <p className="text-[var(--color-ivory)]/80 font-inter text-base leading-relaxed drop-shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {service.description}
                  </p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
