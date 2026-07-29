import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Spotlight } from "@/components/core/spotlight";

export const metadata = {
  title: "Privacy Policy | Chaos Digital",
  description: "Privacy Policy and Data Protection guidelines for Chaos Digital.",
};

export default function PrivacyPage() {
  return (
    <main className="bg-[var(--color-ivory)] min-h-screen text-[var(--color-amethyst)] font-inter selection:bg-[var(--color-amethyst)]/20 selection:text-[var(--color-amethyst)] relative overflow-hidden">
      <Navigation />
      
      {/* Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <Spotlight className="from-accent1 via-accent2 to-accent3 blur-3xl opacity-10" size={600} />
      </div>
      
      <div className="pt-32 pb-16 md:pt-48 md:pb-32 px-6 relative z-10">
        <div className="container mx-auto max-w-4xl bg-white/60 backdrop-blur-xl border border-[var(--color-amethyst)]/10 rounded-[2rem] p-8 md:p-16 shadow-[0_20px_50px_-15px_rgba(40,10,60,0.1)]">
          <h1 className="text-4xl md:text-6xl font-playfair font-medium uppercase tracking-tighter mb-4 text-[var(--color-amethyst)]">
            Privacy <span className="italic text-[var(--color-amethyst)]/50 capitalize">Policy</span>
          </h1>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent1 mb-12">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
          
          <div className="space-y-8 text-[var(--color-amethyst)]/80 font-light leading-relaxed text-lg">
            <section>
              <h2 className="text-2xl font-playfair font-medium uppercase tracking-tighter mb-4 text-[var(--color-amethyst)]">1. Introduction</h2>
              <p>Welcome to Chaos Digital. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-playfair font-medium uppercase tracking-tighter mb-4 text-[var(--color-amethyst)]">2. The Data We Collect</h2>
              <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
                <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
                <li><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location.</li>
                <li><strong>Usage Data</strong> includes information about how you use our website and services.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-playfair font-medium uppercase tracking-tighter mb-4 text-[var(--color-amethyst)]">3. How We Use Your Data</h2>
              <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                <li>Where we need to comply with a legal obligation.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-playfair font-medium uppercase tracking-tighter mb-4 text-[var(--color-amethyst)]">4. Data Security</h2>
              <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-playfair font-medium uppercase tracking-tighter mb-4 text-[var(--color-amethyst)]">5. Your Legal Rights</h2>
              <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data and (where the lawful ground of processing is consent) to withdraw consent.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-playfair font-medium uppercase tracking-tighter mb-4 text-[var(--color-amethyst)]">6. Contact Us</h2>
              <p>If you have any questions about this privacy policy or our privacy practices, please contact us at:</p>
              <p className="mt-2 font-medium">Email: info.chaosdigital@gmail.com</p>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
