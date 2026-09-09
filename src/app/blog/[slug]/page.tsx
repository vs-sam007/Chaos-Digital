import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Spotlight } from "@/components/core/spotlight";
import { blogsData, BlogPost } from "@/data/blogs";
import { 
  ArrowLeft, 
  ArrowUpRight, 
  Calendar, 
  CheckCircle2, 
  ChevronRight, 
  Clock, 
  HelpCircle, 
  Layers, 
  Share2, 
  Sparkles, 
  User 
} from "lucide-react";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogsData.map((b) => ({
    slug: b.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogsData.find((b) => b.slug === slug);
  if (!blog) return { title: "Blog Post Not Found | Chaos Digital" };

  const canonicalUrl = `https://chaosdigital.in/blog/${blog.slug}`;

  return {
    title: `${blog.title} | Chaos Digital Lucknow`,
    description: blog.excerpt,
    keywords: blog.targetKeywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      url: canonicalUrl,
      type: "article",
      publishedTime: blog.datePublished,
      modifiedTime: blog.dateModified,
      authors: [blog.author.name],
      tags: blog.tags,
      images: [
        {
          url: blog.coverImage,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt,
      images: [blog.coverImage],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const blog = blogsData.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  const relatedBlogs = blogsData.filter((b) => b.slug !== slug).slice(0, 2);

  // Structured Schema for Article + Breadcrumb + FAQPage
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blog.title,
    "description": blog.excerpt,
    "image": blog.coverImage,
    "datePublished": blog.datePublished,
    "dateModified": blog.dateModified,
    "author": {
      "@type": "Person",
      "name": blog.author.name,
      "jobTitle": blog.author.role,
    },
    "publisher": {
      "@type": "Organization",
      "name": "Chaos Digital",
      "url": "https://chaosdigital.in",
      "logo": {
        "@type": "ImageObject",
        "url": "https://chaosdigital.in/icon.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://chaosdigital.in/blog/${blog.slug}`
    },
    "keywords": blog.targetKeywords.join(", "),
    "articleSection": blog.category,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": blog.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://chaosdigital.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://chaosdigital.in/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": blog.title,
        "item": `https://chaosdigital.in/blog/${blog.slug}`
      }
    ]
  };

  return (
    <main className="bg-[var(--color-ivory)] min-h-screen text-[var(--color-amethyst)] font-inter selection:bg-[var(--color-amethyst)] selection:text-[var(--color-ivory)] relative overflow-hidden">
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navigation />

      {/* Ambient Lighting Background */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <Spotlight className="from-accent1 via-accent2 to-accent3 blur-3xl opacity-15" size={600} />
        <div className="absolute top-[10%] right-[-10%] w-[50vw] h-[50vw] bg-purple-500/5 rounded-full blur-[140px]" />
        <div className="absolute top-[50%] left-[-10%] w-[45vw] h-[45vw] bg-amber-500/5 rounded-full blur-[120px]" />
      </div>

      <article className="pt-32 pb-24 md:pt-48 md:pb-32 px-6">
        <div className="container mx-auto max-w-5xl">
          
          {/* Breadcrumb Navigation */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-amethyst)]/60 mb-8">
            <Link href="/" className="hover:text-[var(--color-amethyst)] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[var(--color-amethyst)]/30" />
            <Link href="/blog" className="hover:text-[var(--color-amethyst)] transition-colors">Blog</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[var(--color-amethyst)]/30" />
            <span className="text-[var(--color-amethyst)] truncate max-w-xs">{blog.category}</span>
          </div>

          {/* Article Header */}
          <div className="mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-4 py-1.5 rounded-full bg-[var(--color-amethyst)] text-white text-xs font-semibold uppercase tracking-wider">
                {blog.category}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-[var(--color-amethyst)]/70 font-medium">
                <Calendar className="w-3.5 h-3.5" /> {blog.date}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-[var(--color-amethyst)]/70 font-medium">
                <Clock className="w-3.5 h-3.5" /> {blog.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[68px] font-playfair font-medium uppercase tracking-tight text-[var(--color-amethyst)] leading-[1.1] mb-8">
              {blog.title}
            </h1>

            <p className="text-lg sm:text-2xl text-[var(--color-amethyst)]/80 font-light leading-relaxed mb-8">
              {blog.subtitle}
            </p>

            {/* Author Profile Card */}
            <div className="flex items-center justify-between p-4 sm:p-6 rounded-2xl bg-white/70 border border-[var(--color-amethyst)]/15 backdrop-blur-md">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-amethyst)] to-purple-800 text-white font-bold flex items-center justify-center text-sm tracking-wider shadow-md border border-[var(--color-amethyst)]/20 shrink-0">
                  SVS
                </div>
                <div>
                  <div className="font-semibold text-[var(--color-amethyst)] text-base">{blog.author.name}</div>
                  <div className="text-xs text-[var(--color-amethyst)]/60">{blog.author.role}</div>
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-amethyst)]/50">
                <span>📍 Lucknow, India</span>
              </div>
            </div>
          </div>

          {/* Cover Image Banner */}
          <div className="relative h-72 sm:h-96 md:h-[480px] rounded-[2.5rem] overflow-hidden mb-12 shadow-2xl border border-[var(--color-amethyst)]/10">
            <Image
              src={blog.coverImage}
              alt={blog.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover"
            />
          </div>

          {/* AEO / GEO Direct Answer Box (Crucial for AI Overviews & Perplexity) */}
          <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-purple-900 via-[var(--color-amethyst)] to-purple-950 text-white shadow-xl relative overflow-hidden border border-purple-800">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-xs font-bold uppercase tracking-widest text-[#E0FF5F] mb-4">
                <Sparkles className="w-3.5 h-3.5" /> Direct Answer for Search & AI Assistants
              </div>
              <h2 className="text-lg sm:text-2xl font-playfair font-semibold mb-3 !text-white text-white">
                Key Strategic Summary
              </h2>
              <p className="text-sm sm:text-base text-white/90 font-light leading-relaxed">
                {blog.aeoDirectAnswer}
              </p>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="mb-16 p-6 sm:p-8 rounded-3xl bg-white/80 border border-[var(--color-amethyst)]/15 shadow-sm">
            <div className="text-xs font-bold uppercase tracking-widest text-[var(--color-amethyst)]/60 mb-4 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[var(--color-amethyst)]" /> Table of Contents
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {blog.sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-sm text-[var(--color-amethyst)]/80 hover:text-[var(--color-amethyst)] font-medium hover:underline transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-amethyst)]/40" />
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Article Main Sections */}
          <div className="space-y-16 text-[var(--color-amethyst)]/90 leading-relaxed font-light text-lg">
            {blog.sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-32">
                <h2 className="text-2xl sm:text-4xl font-playfair font-medium uppercase tracking-tight text-[var(--color-amethyst)] mb-6">
                  {section.title}
                </h2>

                <div className="prose prose-lg max-w-none text-[var(--color-amethyst)]/80 space-y-4 mb-6 leading-relaxed">
                  {section.content.split('\n\n').map((para, i) => (
                    <p key={i} className="text-base sm:text-lg">{para}</p>
                  ))}
                </div>

                {/* Key Takeaway Box */}
                {section.keyTakeaway && (
                  <div className="my-8 p-6 rounded-2xl bg-amber-500/10 border-l-4 border-amber-500 text-[var(--color-amethyst)]">
                    <div className="text-xs font-bold uppercase tracking-widest text-amber-900 mb-1">
                      💡 Strategic Takeaway
                    </div>
                    <p className="text-base sm:text-lg font-medium text-[var(--color-amethyst)]">
                      {section.keyTakeaway}
                    </p>
                  </div>
                )}

                {/* Bullet Points */}
                {section.bulletPoints && (
                  <ul className="my-6 space-y-3 p-6 rounded-2xl bg-white/60 border border-[var(--color-amethyst)]/10">
                    {section.bulletPoints.map((bp, i) => (
                      <li key={i} className="flex items-start gap-3 text-base sm:text-lg">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-1" />
                        <span>{bp}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Comparison Table */}
                {section.tableData && (
                  <div className="my-8 overflow-x-auto rounded-2xl border border-[var(--color-amethyst)]/15 shadow-sm bg-white">
                    <table className="w-full text-left text-sm sm:text-base border-collapse">
                      <thead>
                        <tr className="bg-[var(--color-amethyst)] text-white">
                          {section.tableData.headers.map((h, i) => (
                            <th key={i} className="p-4 font-playfair font-semibold tracking-wide !text-white">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[var(--color-amethyst)]/10">
                        {section.tableData.rows.map((row, rIdx) => (
                          <tr key={rIdx} className={rIdx % 2 === 0 ? "bg-white" : "bg-purple-50/30"}>
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className="p-4 text-[var(--color-amethyst)]/90">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Frequently Asked Questions (FAQ Accordion & Schema Target) */}
          <div className="mt-20 pt-16 border-t border-[var(--color-amethyst)]/15">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--color-amethyst)]/5 text-xs font-semibold uppercase tracking-wider text-[var(--color-amethyst)] mb-4">
              <HelpCircle className="w-4 h-4" /> FAQ & Local Insights
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-playfair font-medium uppercase tracking-tight text-[var(--color-amethyst)] mb-8">
              Frequently Asked <span className="italic text-[var(--color-amethyst)]/60 capitalize">Questions</span>
            </h2>

            <div className="space-y-4">
              {blog.faqs.map((faq, i) => (
                <div key={i} className="p-6 sm:p-8 rounded-2xl bg-white border border-[var(--color-amethyst)]/15 shadow-sm">
                  <h3 className="text-lg sm:text-xl font-playfair font-semibold text-[var(--color-amethyst)] mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-[var(--color-amethyst)]/80 text-base leading-relaxed font-light">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tags & Keywords */}
          <div className="mt-14 pt-8 border-t border-[var(--color-amethyst)]/10 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-amethyst)]/50 mr-2">
              Topic Tags:
            </span>
            {blog.tags.map((tag) => (
              <span key={tag} className="px-3.5 py-1.5 rounded-full bg-[var(--color-amethyst)]/5 border border-[var(--color-amethyst)]/10 text-xs font-medium text-[var(--color-amethyst)]">
                #{tag}
              </span>
            ))}
          </div>

          {/* In-Article Conversion Banner */}
          <div className="my-20 p-8 sm:p-12 rounded-[2.5rem] bg-[var(--color-amethyst)] text-white relative overflow-hidden shadow-2xl">
            <div className="max-w-2xl relative z-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E0FF5F] mb-3 block">
                Take Action Today
              </span>
              <h3 className="text-2xl sm:text-4xl font-playfair font-medium uppercase tracking-tight mb-4 leading-snug !text-white text-white">
                Ready to dominate your market in Lucknow?
              </h3>
              <p className="text-white/80 font-light text-base sm:text-lg mb-8">
                Work directly with Chaos Digital to build weightless Next.js web applications, rank #1 in Local SEO, and automate customer acquisition with AI.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#E0FF5F] text-[var(--color-amethyst)] rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-white transition-colors"
              >
                Schedule Free Strategy Session <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Related Articles */}
          {relatedBlogs.length > 0 && (
            <div className="pt-12 border-t border-[var(--color-amethyst)]/15">
              <div className="text-xs font-bold uppercase tracking-widest text-[var(--color-amethyst)]/50 mb-8">
                More Growth Guides
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedBlogs.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/blog/${rel.slug}`}
                    className="group p-6 rounded-2xl bg-white border border-[var(--color-amethyst)]/15 hover:border-[var(--color-amethyst)]/40 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-purple-700 mb-2 block">
                        {rel.category}
                      </span>
                      <h4 className="text-xl font-playfair font-medium text-[var(--color-amethyst)] group-hover:text-purple-900 transition-colors mb-2">
                        {rel.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[var(--color-amethyst)]/70 line-clamp-2">
                        {rel.excerpt}
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-[var(--color-amethyst)]/10 text-xs font-bold uppercase tracking-widest text-[var(--color-amethyst)] flex items-center justify-between">
                      <span>{rel.readTime}</span>
                      <span className="group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">Read Guide →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Back to Blog Hub */}
          <div className="mt-16 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--color-amethyst)]/70 hover:text-[var(--color-amethyst)] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to All Articles
            </Link>
          </div>

        </div>
      </article>

      <Footer />
    </main>
  );
}
