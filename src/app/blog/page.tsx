import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Spotlight } from "@/components/core/spotlight";
import { blogsData } from "@/data/blogs";
import { ArrowUpRight, BookOpen, Calendar, Clock, Sparkles, Tag, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog & Insights | SEO, AEO & Growth Systems | Chaos Digital Lucknow",
  description: "Expert strategies on Local SEO, GEO (Generative Engine Optimization), Web Engineering, and Performance Marketing specifically for Lucknow businesses.",
  alternates: {
    canonical: "https://chaosdigital.in/blog",
  },
  openGraph: {
    title: "Blog & Insights | Chaos Digital Lucknow",
    description: "Read the latest in Local SEO, GEO, Next.js web development, and digital marketing strategies for Lucknow enterprises.",
    url: "https://chaosdigital.in/blog",
    siteName: "Chaos Digital",
    locale: "en_IN",
    type: "website",
  },
};

export default function BlogIndexPage() {
  const featuredBlog = blogsData[0];
  const remainingBlogs = blogsData.slice(1);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Chaos Digital Blog & Growth Insights",
    "description": "Expert guides on SEO, AEO, Next.js Web Development, and Digital Marketing for Lucknow brands.",
    "url": "https://chaosdigital.in/blog",
    "publisher": {
      "@type": "LocalBusiness",
      "name": "Chaos Digital",
      "url": "https://chaosdigital.in",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lucknow",
        "addressRegion": "Uttar Pradesh",
        "addressCountry": "IN"
      }
    },
    "hasPart": blogsData.map((blog) => ({
      "@type": "BlogPosting",
      "headline": blog.title,
      "url": `https://chaosdigital.in/blog/${blog.slug}`,
      "datePublished": blog.datePublished,
      "dateModified": blog.dateModified,
      "description": blog.excerpt,
    }))
  };

  return (
    <main className="bg-[var(--color-ivory)] min-h-screen text-[var(--color-amethyst)] font-inter selection:bg-[var(--color-amethyst)] selection:text-[var(--color-ivory)] relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />

      {/* Ambient Lighting Background */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <Spotlight className="from-accent1 via-accent2 to-accent3 blur-3xl opacity-15" size={600} />
        <div className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] bg-purple-500/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-[20%] left-[-10%] w-[45vw] h-[45vw] bg-amber-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="pt-32 pb-24 md:pt-48 md:pb-32 px-6">
        <div className="container mx-auto max-w-7xl">
          
          {/* Header Section */}
          <div className="max-w-4xl mb-16 md:mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-amethyst)]/20 bg-[var(--color-amethyst)]/5 text-xs font-semibold uppercase tracking-widest text-[var(--color-amethyst)] mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[var(--color-amethyst)]" />
              Strategic Growth Journal & SEO Insights
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-playfair font-medium uppercase tracking-tighter mb-6 leading-[1.08] text-[var(--color-amethyst)]">
              Engineering <span className="italic text-[var(--color-amethyst)]/60 capitalize">Unfair Advantage</span> in Lucknow.
            </h1>

            <p className="text-lg md:text-2xl text-[var(--color-amethyst)]/80 font-light leading-relaxed max-w-3xl">
              Deep dives into Local SEO, Generative Engine Optimization (GEO), Next.js web architectures, and high-ROI digital marketing systems built for ambitious Indian enterprises.
            </p>
          </div>

          {/* Featured Spotlight Article */}
          {featuredBlog && (
            <div className="mb-20">
              <div className="text-xs font-bold uppercase tracking-widest text-[var(--color-amethyst)]/50 mb-6 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-purple-700" /> Featured Masterclass
              </div>
              
              <Link 
                href={`/blog/${featuredBlog.slug}`}
                className="group block relative rounded-[2.5rem] bg-white border border-[var(--color-amethyst)]/15 overflow-hidden shadow-[0_20px_60px_-15px_rgba(40,10,60,0.08)] hover:shadow-[0_30px_70px_-10px_rgba(40,10,60,0.15)] transition-all duration-500"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 md:p-12">
                  
                  {/* Left Content */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-6">
                        <span className="px-3.5 py-1 rounded-full bg-[var(--color-amethyst)]/10 text-[var(--color-amethyst)] text-xs font-semibold uppercase tracking-wider">
                          {featuredBlog.category}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-[var(--color-amethyst)]/60 font-medium">
                          <Calendar className="w-3.5 h-3.5" /> {featuredBlog.date}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-[var(--color-amethyst)]/60 font-medium">
                          <Clock className="w-3.5 h-3.5" /> {featuredBlog.readTime}
                        </span>
                      </div>

                      <h2 className="text-2xl sm:text-4xl md:text-5xl font-playfair font-medium text-[var(--color-amethyst)] mb-6 group-hover:text-purple-800 transition-colors leading-tight">
                        {featuredBlog.title}
                      </h2>

                      <p className="text-[var(--color-amethyst)]/75 text-base sm:text-lg font-light leading-relaxed mb-8">
                        {featuredBlog.excerpt}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-[var(--color-amethyst)]/10">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-amethyst)] to-purple-800 text-white font-bold flex items-center justify-center text-xs tracking-wider border border-[var(--color-amethyst)]/20 shadow-sm shrink-0">
                          SVS
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-[var(--color-amethyst)]">{featuredBlog.author.name}</div>
                          <div className="text-xs text-[var(--color-amethyst)]/60">{featuredBlog.author.role}</div>
                        </div>
                      </div>

                      <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--color-amethyst)] group-hover:translate-x-1 transition-transform">
                        Read Guide <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Right Image */}
                  <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-[380px] rounded-2xl overflow-hidden bg-[var(--color-amethyst)]/5 shadow-inner">
                    <Image
                      src={featuredBlog.coverImage}
                      alt={featuredBlog.title}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>

                </div>
              </Link>
            </div>
          )}

          {/* Remaining Blogs Grid */}
          <div className="mb-24">
            <div className="text-xs font-bold uppercase tracking-widest text-[var(--color-amethyst)]/50 mb-8">
              All Articles & Analysis
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {remainingBlogs.map((blog) => (
                <Link
                  key={blog.slug}
                  href={`/blog/${blog.slug}`}
                  className="group flex flex-col justify-between rounded-[2rem] bg-white border border-[var(--color-amethyst)]/15 overflow-hidden p-6 sm:p-8 shadow-sm hover:shadow-xl hover:border-[var(--color-amethyst)]/30 transition-all duration-300"
                >
                  <div>
                    {/* Cover Thumbnail */}
                    <div className="relative h-52 sm:h-64 rounded-xl overflow-hidden mb-6 bg-[var(--color-amethyst)]/5">
                      <Image
                        src={blog.coverImage}
                        alt={blog.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                    </div>

                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="px-3 py-1 rounded-full bg-[var(--color-amethyst)]/10 text-[var(--color-amethyst)] text-xs font-semibold uppercase tracking-wider">
                        {blog.category}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-[var(--color-amethyst)]/60 font-medium">
                        <Clock className="w-3.5 h-3.5" /> {blog.readTime}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-playfair font-medium text-[var(--color-amethyst)] mb-4 group-hover:text-purple-800 transition-colors leading-snug">
                      {blog.title}
                    </h3>

                    <p className="text-[var(--color-amethyst)]/70 text-sm sm:text-base font-light leading-relaxed mb-6 line-clamp-3">
                      {blog.excerpt}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-[var(--color-amethyst)]/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[var(--color-amethyst)] to-purple-800 text-white font-bold flex items-center justify-center text-[10px] shrink-0">
                        SVS
                      </div>
                      <span className="text-xs text-[var(--color-amethyst)]/70 font-medium">
                        {blog.author.name}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[var(--color-amethyst)] group-hover:translate-x-1 transition-transform">
                      Read Article <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom Lead Gen Box */}
          <div className="rounded-[2.5rem] bg-[var(--color-amethyst)] text-white p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="max-w-3xl relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white text-xs font-semibold uppercase tracking-widest mb-6">
                Direct Growth Consultation
              </div>
              <h2 className="text-3xl sm:text-5xl font-playfair font-medium uppercase tracking-tight mb-6 leading-tight !text-white text-white">
                Want to dominate <span className="text-[#E0FF5F]">Google & AI Search</span> in Lucknow?
              </h2>
              <p className="text-white/80 text-lg font-light leading-relaxed mb-8 max-w-2xl">
                Get a custom Local SEO, GEO, and Web Architecture Audit for your Lucknow business. We will diagnose your competitor rankings and lay out a 90-day execution roadmap.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#E0FF5F] text-[var(--color-amethyst)] rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Book Your Growth Audit <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}
