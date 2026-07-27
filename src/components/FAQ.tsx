"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer: "Most website builds and rebranding projects take between 4 to 8 weeks. For complex pan-India marketing campaigns or enterprise applications, timelines can extend to 12 weeks. We move fast, but we don't compromise on quality.",
  },
  {
    question: "Do you work with startups in India?",
    answer: "Absolutely. From early-stage tech startups in Bengaluru to established enterprises in Mumbai, we partner with companies ready to scale aggressively. If you have the ambition, we have the firepower.",
  },
  {
    question: "How do you measure success?",
    answer: "Vanity metrics like impressions mean nothing to us. We measure success in hard numbers: ROI, conversion rates, customer acquisition cost (CAC), and revenue generated in INR. If it doesn't move the needle, we don't do it.",
  },
  {
    question: "What's the investment required?",
    answer: "Our engagements typically start at ₹5,00,000 for foundational projects. We are not a budget agency; we are a premium partner focused on delivering exponential returns on your investment.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-32 bg-offwhite border-t border-void/5 overflow-hidden">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-outfit font-bold text-void uppercase tracking-tighter">
            System <span className="text-lime">Queries</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`border ${
                openIndex === index ? "border-lime/50 bg-void/5" : "border-void/10"
              } rounded-2xl overflow-hidden transition-colors`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-6 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="text-xl font-outfit font-bold text-void pr-8">
                  {faq.question}
                </span>
                <span className="text-lime flex-shrink-0">
                  {openIndex === index ? <Minus /> : <Plus />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-void/70">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
