"use client";

import { motion } from "framer-motion";
import TiltCard from "./TiltCard";
import { Code2, Search, TrendingUp, Share2, Paintbrush, Bot } from "lucide-react";
import Image from "next/image";

const services = [
  {
    title: "Web & E-Commerce",
    icon: <Code2 className="w-8 h-8 text-lime" />,
    description: "Custom websites and high-converting Shopify stores built to drive revenue from day one.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800",
  },
  {
    title: "Performance Marketing",
    icon: <TrendingUp className="w-8 h-8 text-lime" />,
    description: "Data-in, revenue-out. Laser-focused campaigns across Google and Meta optimized for ROI.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
  },
  {
    title: "SEO & Content",
    icon: <Search className="w-8 h-8 text-lime" />,
    description: "Long-term organic growth engines. We rank you higher and craft stories that stick.",
    image: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=800",
  },
  {
    title: "Social & Influencers",
    icon: <Share2 className="w-8 h-8 text-lime" />,
    description: "Build an audience that trusts and buys. End-to-end management and creator collaborations.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800",
  },
  {
    title: "AI & Automations",
    icon: <Bot className="w-8 h-8 text-lime" />,
    description: "Work smarter. We deploy 24/7 AI chatbots, CRM workflows, and WhatsApp automations.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800",
  },
  {
    title: "Creative & Branding",
    icon: <Paintbrush className="w-8 h-8 text-lime" />,
    description: "Scroll-stopping visuals. From brand identity kits to high-impact short-form video editing.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800",
  }
];

export default function Services() {
  return (
    <section className="relative py-32 bg-void overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-4xl md:text-6xl font-outfit font-bold text-offwhite uppercase tracking-tighter"
            >
              Our <span className="text-lime">Arsenal</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-offwhite/60 max-w-md"
          >
            Everything you need to break through the noise and scale your digital presence to the next dimension.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ perspective: "1000px" }}>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <TiltCard className="h-full !p-0 overflow-hidden">
                <div className="relative w-full h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-void to-transparent" />
                  <div className="absolute bottom-4 left-6 p-3 bg-lime/10 backdrop-blur-md rounded-xl group-hover:bg-lime/20 transition-all duration-300">
                    {service.icon}
                  </div>
                </div>
                <div className="p-6 pt-2">
                  <h3 className="text-2xl font-outfit font-bold text-offwhite group-hover:text-lime transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-offwhite/70">
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
