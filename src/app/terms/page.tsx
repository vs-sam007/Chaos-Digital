import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Spotlight } from "@/components/core/spotlight";

export const metadata = {
  title: "Terms of Service | Chaos Digital",
  description: "Terms and conditions for using Chaos Digital services.",
};

export default function TermsPage() {
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
            Terms of <span className="italic text-[var(--color-amethyst)]/50 capitalize">Service</span>
          </h1>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent1 mb-12">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
          
          <div className="space-y-8 text-[var(--color-amethyst)]/80 font-light leading-relaxed text-lg">
            <section>
              <h2 className="text-2xl font-playfair font-medium uppercase tracking-tighter mb-4 text-[var(--color-amethyst)]">1. Acceptance of Terms</h2>
              <p>By accessing and using the Chaos Digital website and services, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-playfair font-medium uppercase tracking-tighter mb-4 text-[var(--color-amethyst)]">2. Provision of Services</h2>
              <p>Chaos Digital is constantly innovating in order to provide the best possible experience for its users. You acknowledge and agree that the form and nature of the services which Chaos Digital provides may change from time to time without prior notice to you.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-playfair font-medium uppercase tracking-tighter mb-4 text-[var(--color-amethyst)]">3. Use of Services</h2>
              <p>You agree to use the services only for purposes that are permitted by (a) the Terms and (b) any applicable law, regulation or generally accepted practices or guidelines in the relevant jurisdictions.</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>You must not use our services for any illegal or unauthorized purpose.</li>
                <li>You must not transmit any worms or viruses or any code of a destructive nature.</li>
                <li>You agree not to reproduce, duplicate, copy, sell, trade or resell the services for any purpose.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-playfair font-medium uppercase tracking-tighter mb-4 text-[var(--color-amethyst)]">4. Intellectual Property</h2>
              <p>All content included on this site, such as text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software, is the property of Chaos Digital or its content suppliers and protected by international copyright laws. The compilation of all content on this site is the exclusive property of Chaos Digital.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-playfair font-medium uppercase tracking-tighter mb-4 text-[var(--color-amethyst)]">5. Limitation of Liability</h2>
              <p>In no event shall Chaos Digital be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or the inability to use the services or for cost of procurement of substitute goods and services or resulting from any goods or services purchased or obtained or messages received or transactions entered into through or from the services.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-playfair font-medium uppercase tracking-tighter mb-4 text-[var(--color-amethyst)]">6. Governing Law</h2>
              <p>These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.</p>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
