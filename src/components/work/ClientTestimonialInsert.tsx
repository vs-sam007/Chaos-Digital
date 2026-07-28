"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

interface ClientTestimonialProps {
  quote: string;
  name: string;
  role: string;
  image: string;
  index: number;
}

export default function ClientTestimonialInsert({ quote, name, role, image, index }: ClientTestimonialProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="w-full rounded-[2.5rem] bg-[var(--color-amethyst)]/5 border border-[var(--color-amethyst)]/10 p-12 md:p-16 flex flex-col items-center text-center my-12"
    >
      <div className="flex gap-1 mb-8">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star key={star} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
        ))}
      </div>
      
      <p className="text-2xl md:text-4xl font-playfair font-medium text-[var(--color-amethyst)] max-w-4xl leading-relaxed mb-10">
        "{quote}"
      </p>

      <div className="flex flex-col items-center gap-4">
        <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[var(--color-amethyst)]/20">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="text-lg font-inter font-bold text-[var(--color-amethyst)]">
            {name}
          </h4>
          <p className="text-[var(--color-amethyst)]/60 text-sm tracking-widest uppercase font-inter mt-1">
            {role}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
