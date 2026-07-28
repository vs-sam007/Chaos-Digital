"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    quote: "Bhai, inka design ek number hai! Chaos Digital ne humara website pura transform kar diya. Leads toh literally double ho gaye just within a month.",
    name: "Aarav Sharma",
    role: "CMO, RelianceTech",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    quote: "Market mein sab claim karte hain, but they actually deliver. ROI dekh kar board of directors bhi khush ho gaye. Totally worth the investment.",
    name: "Priya Desai",
    role: "Founder, Lumina India",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  {
    quote: "Website nahi, inlogo ne toh pura ecosystem build kiya hai. The smooth UI/UX is mind-blowing. Desi swag combined with international premium quality.",
    name: "Rohan Kapoor",
    role: "VP Marketing, Tata Orbit",
    image: "https://randomuser.me/api/portraits/men/68.jpg",
  },
  {
    quote: "Tension free kaam karte hain yeh log. Deadline se pehle project deliver kiya aur quality mein koi bhi compromise nahi. Highly professional team.",
    name: "Sneha Reddy",
    role: "Director, Urban Roots",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    quote: "Unbelievable aesthetics! Our brand value literally skyrocketed after the rebrand. Customer retention bhi pehle se significantly badh gaya hai.",
    name: "Vikram Singh",
    role: "CEO, GrowthHackers",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    quote: "Bohot agencies ke saath kaam kiya hai pehle, but Chaos Digital is entirely different. Inka creative approach ekdum out of the box hai.",
    name: "Ananya Patel",
    role: "Brand Lead, Zomato",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    quote: "Traffic laana sabko aata hai, but actual conversion inke jaisa koi nahi karta. Ekdum paisa vasool service hai, I highly recommend them to everyone.",
    name: "Karan Johar",
    role: "Founder, Dharma Drops",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    quote: "Next level animations aur micro-interactions! Clients roz puchte hain ki website kisne design ki. It's just amazing work by the whole team.",
    name: "Meera Menon",
    role: "Creative Head, Vogue IN",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote: "Support and communication ekdum top class. Har choti detail par dhyan diya. The final product was way better than what we actually imagined.",
    name: "Kabir Khan",
    role: "CTO, TechFin",
    image: "https://randomuser.me/api/portraits/men/78.jpg",
  }
];

export default function Testimonials() {
  return (
    <section className="relative py-32 bg-transparent overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-playfair font-medium text-[var(--color-amethyst)] uppercase tracking-tighter">
            Voices of <span className="text-transparent" style={{ WebkitTextStroke: "2px var(--color-amethyst)" }}>Impact</span>
          </h2>
        </motion.div>

        <div className="relative overflow-hidden w-full flex mask-image-linear-gradient">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-8 min-w-max"
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="relative w-[350px] md:w-[450px] p-8 hype-card flex flex-col gap-6 group transition-all duration-300 shrink-0"
              >
                <Quote className="w-10 h-10 text-[var(--color-amethyst)]/20 group-hover:text-[var(--color-amethyst)] transition-colors shrink-0" />
                <p className="text-2xl text-[var(--color-amethyst)] font-light flex-grow font-playfair leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4 shrink-0">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[var(--color-amethyst)]/20 group-hover:border-[var(--color-amethyst)] transition-colors">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-playfair font-medium text-[var(--color-amethyst)]">
                      {testimonial.name}
                    </h4>
                    <p className="text-[var(--color-amethyst)]/50 text-sm tracking-widest uppercase font-inter mt-1">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
