"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import MagneticButton from "./MagneticButton";

const plans = [
  {
    name: "Grow Plan",
    price: "₹7,999",
    priceMax: "₹14,999",
    target: "Startups & Local MSMEs",
    features: [
      "Social Media Management (8-12 posts)",
      "Graphic Design (12 creatives)",
      "Basic SEO (On-page + GBP)",
      "Content Writing (2 blogs)",
      "Email Marketing (2 campaigns)",
      "WhatsApp Basic Automation",
    ],
    highlighted: false,
  },
  {
    name: "Standard Plan",
    price: "₹19,999",
    priceMax: "₹34,999",
    target: "Growing D2C Brands & Scaling Startups",
    features: [
      "Social Media Management (20-25 posts)",
      "Full SEO + Backlinks",
      "Paid Ads Management (up to ₹50K spend)",
      "Lead Generation Funnel & CRM",
      "Video Editing (4 short-form)",
      "Influencer Marketing (2 nano-influencers)",
    ],
    highlighted: true,
  },
  {
    name: "Premium Plan",
    price: "₹49,999",
    priceMax: "₹89,999",
    target: "Established Brands & Companies Ready to Dominate",
    features: [
      "Social Media Management (30+ posts)",
      "Full Automation & Advanced Flows",
      "Performance Marketing (Multi-channel)",
      "Video Editing (10+ videos)",
      "AI Chatbot & WhatsApp Suite",
      "SEM (Full Google Ads Management)",
    ],
    highlighted: false,
  }
];

export default function PricingSection() {
  return (
    <section id="pricing" className="relative py-32 bg-void overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-6xl font-playfair font-medium text-offwhite uppercase tracking-tighter"
          >
            Pricing Without <span className="italic text-white/40 capitalize">Chaos</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-offwhite/60 text-lg"
          >
            Transparent, retainer-based growth systems. No hidden costs. Choose your trajectory.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2 }}
              className={`relative bg-white/5 border ${plan.highlighted ? 'border-white/30 shadow-2xl scale-105 z-10' : 'border-white/10'} rounded-3xl p-8 overflow-hidden`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 inset-x-0 h-1 bg-white" />
              )}
              
              <h3 className={`text-2xl font-playfair font-medium uppercase tracking-tighter mb-2 ${plan.highlighted ? 'text-white' : 'text-offwhite/80'}`}>
                {plan.name}
              </h3>
              
              <p className="text-offwhite/50 text-sm mb-6 h-10 font-inter">
                Ideal for: {plan.target}
              </p>
              
              <div className="mb-8">
                <span className="text-4xl md:text-5xl font-playfair font-medium text-offwhite tracking-tighter">
                  {plan.price}
                </span>
                <span className="text-offwhite/50 font-inter"> to {plan.priceMax} /mo</span>
              </div>
              
              <div className="space-y-4 mb-10 font-inter">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className={`w-5 h-5 shrink-0 ${plan.highlighted ? 'text-white' : 'text-offwhite/30'}`} />
                    <span className="text-sm text-offwhite/80">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Link href="/pricing" className={`block w-full py-4 text-center font-inter font-bold uppercase tracking-wider rounded-xl transition-colors ${plan.highlighted ? 'bg-white text-black hover:bg-white/80' : 'bg-white/10 text-offwhite hover:bg-white/20'}`}>
                Select Plan
              </Link>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-offwhite/50 mb-6 font-inter">Want to see the full breakdown or looking for one-time projects?</p>
          <Link href="/pricing">
            <MagneticButton className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-full text-sm font-inter hover:bg-white hover:text-black transition-colors uppercase font-bold tracking-wider mx-auto flex items-center gap-2">
              View Detailed Comparison
              <ArrowRight className="w-5 h-5" />
            </MagneticButton>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
