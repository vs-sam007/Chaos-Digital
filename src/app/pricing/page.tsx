import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PricingSection from "@/components/PricingSection";
import { Check, X } from "lucide-react";
import Link from "next/link";
import MagneticButton from "@/components/MagneticButton";

interface ComparisonFeature {
  name: string;
  grow: string | boolean;
  standard: string | boolean;
  premium: string | boolean;
}

const comparisonFeatures: ComparisonFeature[] = [
  { name: "Monthly Price Range", grow: "₹7,999–₹14,999", standard: "₹19,999–₹34,999", premium: "₹49,999–₹89,999" },
  { name: "Social Media Platforms", grow: "2 platforms", standard: "3 platforms", premium: "5 platforms" },
  { name: "Posts Per Month", grow: "8–12 posts", standard: "20–25 posts", premium: "30+ posts" },
  { name: "Graphic Design", grow: "12 creatives", standard: "25 creatives", premium: "Unlimited" },
  { name: "SEO", grow: "Basic on-page", standard: "Full SEO", premium: "Full Suite + National" },
  { name: "Blogs Per Month", grow: "2 blogs", standard: "4 blogs", premium: "8+ blogs" },
  { name: "Paid Ads Management", grow: false, standard: "Up to ₹50K spend", premium: "Multi-channel" },
  { name: "Video Editing", grow: false, standard: "4 videos/month", premium: "10+ videos/month" },
  { name: "Email Marketing", grow: "2 campaigns", standard: "4 campaigns + auto", premium: "Full automation" },
  { name: "Lead Generation", grow: false, standard: "Full funnel", premium: "Multi-step funnel" },
  { name: "Influencer Marketing", grow: false, standard: "2 nano/month", premium: "5–10/month" },
  { name: "WhatsApp Automation", grow: "Basic setup", standard: "Advanced flows", premium: "AI-powered suite" },
  { name: "AI & Automations", grow: false, standard: false, premium: "Full suite" },
  { name: "E-commerce Management", grow: false, standard: false, premium: "Full management" },
  { name: "Account Manager", grow: "Shared", standard: "Dedicated", premium: "Dedicated Team" },
  { name: "Reporting", grow: "Monthly", standard: "Weekly + Monthly", premium: "Real-time Dashboard" },
  { name: "Strategy Calls", grow: false, standard: "Monthly", premium: "Weekly" },
  { name: "Contract", grow: "No lock-in", standard: "3 months min", premium: "3 months min" },
];

const oneTimeProjects = [
  { name: "Website Development", scope: "5–8 page business website", price: "₹12,000 – ₹25,000" },
  { name: "Shopify Store Setup", scope: "Full setup with 50 products", price: "₹15,000 – ₹35,000" },
  { name: "E-commerce (WooCommerce)", scope: "Custom store + payment setup", price: "₹18,000 – ₹40,000" },
  { name: "Brand Identity Kit", scope: "Logo + brand guidelines", price: "₹8,000 – ₹18,000" },
  { name: "Landing Page", scope: "Single high-converting page", price: "₹5,000 – ₹12,000" },
  { name: "AI Chatbot Setup", scope: "Website or WhatsApp bot", price: "₹6,000 – ₹15,000" },
  { name: "WhatsApp Automation Setup", scope: "Flows + broadcast + API", price: "₹5,000 – ₹10,000" },
  { name: "SEO Audit", scope: "Full technical + on-page audit", price: "₹3,000 – ₹6,000" },
  { name: "Video Editing (per video)", scope: "Short-form or long-form", price: "₹800 – ₹3,000" },
  { name: "Social Media Post Pack", scope: "30 designed posts", price: "₹5,000 – ₹9,000" },
  { name: "Pitch Deck / Investor Deck", scope: "12–15 slides, designed", price: "₹6,000 – ₹14,000" },
  { name: "Email Automation Setup", scope: "Welcome + drip sequence", price: "₹4,000 – ₹8,000" },
  { name: "Influencer Campaign (one-time)", scope: "3–5 nano influencers", price: "₹10,000 – ₹25,000" },
];

const onboardingSteps = [
  { step: 1, title: "Discovery Call (Free)", desc: "We understand your business, goals, target audience, and current challenges in a 30-minute call." },
  { step: 2, title: "Audit & Proposal", desc: "We audit your current digital presence and send a customised proposal within 48 hours." },
  { step: 3, title: "Plan Selection", desc: "You choose your plan (Grow / Standard / Premium / Custom). We confirm scope and timelines." },
  { step: 4, title: "Onboarding", desc: "Brand kit collection, access handover, tool setup, and account manager assignment (within 72 hrs)." },
  { step: 5, title: "Strategy Kickoff", desc: "Your account manager presents the first month's strategy — content calendar, ad plan, SEO roadmap." },
  { step: 6, title: "Execution & Reporting", desc: "We execute. You grow. Weekly/monthly reports keep you always in the loop." },
];

export const metadata = {
  title: "Pricing & Packages | Chaos Digital",
  description: "Transparent, retainer-based growth systems. Compare our plans and one-time project pricing.",
};

export default function PricingPage() {
  return (
    <main className="bg-[var(--color-ivory)] min-h-screen text-void font-inter selection:bg-void/20 selection:text-[var(--color-ivory)]">
      <Navigation />
      
      <div className="pt-24 pb-16 md:pt-36 md:pb-32 px-6">
        <PricingSection />
        
        <div className="container mx-auto" id="comparison">
          
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h1 className="text-5xl md:text-8xl font-playfair font-medium uppercase tracking-tighter mb-6 leading-none">
              Pricing <span className="italic text-void/40 capitalize">Catalogue</span>
            </h1>
            <p className="text-xl text-void/70 font-light leading-relaxed">
              End-to-End Digital Marketing Solutions for MSMEs, Startups & D2C Brands. 
              No hidden charges, just transparent growth systems.
            </p>
          </div>

          {/* Quick Plan Comparison Table */}
          <div className="mb-32">
            <h2 className="text-3xl md:text-5xl font-playfair font-medium uppercase tracking-tighter mb-12 text-center">
              Quick Plan <span className="italic text-void/40 capitalize">Comparison</span>
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px] text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-void/10">
                    <th className="p-6 text-xl font-bold uppercase tracking-wider text-void/50 w-1/4">Feature</th>
                    <th className="p-6 text-2xl font-playfair font-bold uppercase tracking-wider text-[var(--color-amethyst)] w-1/4 text-center">Grow</th>
                    <th className="p-6 text-2xl font-playfair font-bold uppercase tracking-wider text-[var(--color-amethyst)] w-1/4 text-center bg-void/5 rounded-t-2xl">Standard</th>
                    <th className="p-6 text-2xl font-playfair font-bold uppercase tracking-wider text-[var(--color-amethyst)] w-1/4 text-center">Premium</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feat, i) => (
                    <tr key={i} className="border-b border-void/5 hover:bg-white/[0.02] transition-colors">
                      <td className="p-6 font-medium text-void/80">{feat.name}</td>
                      <td className="p-6 text-center text-void/60">
                        {feat.grow === false ? <X className="w-5 h-5 mx-auto text-void/30" /> : feat.grow === true ? <Check className="w-5 h-5 mx-auto text-[var(--color-amethyst)]" /> : feat.grow}
                      </td>
                      <td className="p-6 text-center font-semibold text-void bg-void/5">
                        {feat.standard === false ? <X className="w-5 h-5 mx-auto text-void/30" /> : feat.standard === true ? <Check className="w-5 h-5 mx-auto text-[var(--color-amethyst)]" /> : feat.standard}
                      </td>
                      <td className="p-6 text-center text-[var(--color-amethyst)] font-medium">
                        {feat.premium === false ? <X className="w-5 h-5 mx-auto text-void/30" /> : feat.premium === true ? <Check className="w-5 h-5 mx-auto text-[var(--color-amethyst)]" /> : feat.premium}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* One-Time Projects Table */}
          <div className="mb-32">
            <h2 className="text-3xl md:text-5xl font-playfair font-medium uppercase tracking-tighter mb-4 text-center">
              One-Time <span className="italic text-void/40 capitalize">Projects</span>
            </h2>
            <p className="text-center text-void/50 mb-12">Not ready for a monthly retainer? Start with a one-time project.</p>
            
            <div className="overflow-x-auto bg-void/5 rounded-3xl border border-void/10 p-2">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="border-b border-void/10 text-void/50 text-sm uppercase tracking-wider">
                    <th className="p-6">Service</th>
                    <th className="p-6">Scope</th>
                    <th className="p-6 text-right">Starting Price</th>
                  </tr>
                </thead>
                <tbody>
                  {oneTimeProjects.map((project, i) => (
                    <tr key={i} className="border-b border-void/5 last:border-0 hover:bg-void/5 transition-colors">
                      <td className="p-6 font-bold text-void">{project.name}</td>
                      <td className="p-6 text-void/60">{project.scope}</td>
                      <td className="p-6 text-right font-medium text-[var(--color-amethyst)]">{project.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Onboarding Process */}
          <div className="mb-32">
            <h2 className="text-3xl md:text-5xl font-playfair font-medium uppercase tracking-tighter mb-16 text-center">
              Our <span className="italic text-void/40 capitalize">Onboarding</span> Process
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {onboardingSteps.map((step) => (
                <div key={step.step} className="bg-void/5 border border-void/10 rounded-3xl p-8 relative hover:border-void/30 transition-colors">
                  <div className="text-6xl font-playfair font-medium text-void/5 absolute -top-4 -right-4 pointer-events-none">
                    0{step.step}
                  </div>
                  <h3 className="text-2xl font-playfair uppercase tracking-wider mb-4 text-[var(--color-amethyst)]">
                    Step {step.step} - {step.title}
                  </h3>
                  <p className="text-void/70">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Terms & Disclaimers */}
          <div className="bg-offwhite border border-void/10 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold uppercase tracking-tighter mb-6 border-b border-void/10 pb-4">
              Terms, Notes & Disclaimers
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-void/60">
              <div>
                <h4 className="text-void/70 font-inter font-bold uppercase tracking-wider mb-2">Pricing Notes</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li>All prices are excluding GST (18% applicable).</li>
                  <li>Ad spend / influencer fees are NOT included in agency fees.</li>
                  <li>Custom plans available for requirements outside listed packages.</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-void/70 font-inter font-bold uppercase tracking-wider mb-2">Payment Terms</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Monthly retainers are due on the 1st of each month (advance).</li>
                  <li>One-time projects: 50% advance, 50% on delivery.</li>
                  <li>Payments via NEFT / UPI / Bank Transfer / Razorpay.</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-20 text-center">
             <Link href="/#contact">
               <MagneticButton className="bg-[var(--color-amethyst)] text-[var(--color-ivory)] font-inter font-bold uppercase tracking-widest px-12 py-5 rounded-full text-lg hover:bg-[var(--color-amethyst)]/90 transition-all inline-block">
                 Book a Free Discovery Call
               </MagneticButton>
             </Link>
          </div>

        </div>
      </div>
      <Footer />
    </main>
  );
}
