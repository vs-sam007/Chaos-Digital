import { projects, Project } from "@/data/projects";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Globe, ShieldCheck, Sparkles, Layers, Clock, Users, Cpu } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";
import ProjectDetailClient from "./ProjectDetailClient";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Case Study | Chaos Digital`,
    description: project.shortDescription,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Find next and previous projects for navigation
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="min-h-screen bg-[var(--color-ivory)] selection:bg-[var(--color-amethyst)] selection:text-[var(--color-ivory)]">
      <Navigation />

      {/* Hero Header */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden">
        {/* Background Ambient Glow */}
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[140px] animate-pulse" />
          <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          
          {/* Back Navigation Button */}
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-inter uppercase tracking-widest text-[var(--color-amethyst)]/70 hover:text-[var(--color-amethyst)] font-bold mb-10 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to All Work</span>
          </Link>

          {/* Category & Status Pills */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-[var(--color-amethyst)]/20 bg-[var(--color-amethyst)]/5 text-xs font-inter uppercase tracking-widest text-[var(--color-amethyst)] font-bold">
              <Sparkles className="w-3.5 h-3.5 text-[var(--color-amethyst)]" />
              {project.industry}
            </span>

            {project.isUnderProduction ? (
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-800 text-xs font-inter font-semibold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                Under Active Production
              </span>
            ) : project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 text-xs font-inter font-semibold uppercase tracking-wider hover:bg-emerald-500/25 transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Live Production Build ↗
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-900/15 border border-purple-900/30 text-purple-900 text-xs font-inter font-semibold uppercase tracking-wider">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-700" />
                Deployed Project
              </span>
            )}
          </div>

          {/* Title & Tagline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-playfair font-medium text-[var(--color-amethyst)] leading-[1.05] tracking-tight mb-8 max-w-5xl">
            {project.title}
          </h1>

          <p className="font-inter text-lg md:text-2xl text-[var(--color-amethyst)]/80 font-light leading-relaxed max-w-3xl mb-12">
            {project.shortDescription}
          </p>

          {/* Metadata Quick Specs Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-6 md:p-8 rounded-[2rem] bg-white/70 border border-[var(--color-amethyst)]/15 backdrop-blur-lg shadow-xl mb-16">
            <div>
              <div className="text-[11px] font-inter uppercase tracking-widest text-[var(--color-amethyst)]/50 font-bold mb-1 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5" /> Client
              </div>
              <div className="text-sm md:text-base font-inter font-semibold text-[var(--color-amethyst)]">
                {project.clientInfo.clientName}
              </div>
            </div>

            <div>
              <div className="text-[11px] font-inter uppercase tracking-widest text-[var(--color-amethyst)]/50 font-bold mb-1 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" /> Duration
              </div>
              <div className="text-sm md:text-base font-inter font-semibold text-[var(--color-amethyst)]">
                {project.clientInfo.duration}
              </div>
            </div>

            <div>
              <div className="text-[11px] font-inter uppercase tracking-widest text-[var(--color-amethyst)]/50 font-bold mb-1 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" /> Team Size
              </div>
              <div className="text-sm md:text-base font-inter font-semibold text-[var(--color-amethyst)]">
                {project.clientInfo.teamSize}
              </div>
            </div>

            <div>
              <div className="text-[11px] font-inter uppercase tracking-widest text-[var(--color-amethyst)]/50 font-bold mb-1 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5" /> Services
              </div>
              <div className="text-xs md:text-sm font-inter font-semibold text-[var(--color-amethyst)] truncate">
                {project.services.join(", ")}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Interactive Media Showcase (Client Component for Gallery / Carousel) */}
      <ProjectDetailClient project={project} />

      {/* Problem & Solution Deep Dive */}
      <section className="py-16 md:py-24 bg-white/50 border-y border-[var(--color-amethyst)]/10">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-playfair font-medium text-[var(--color-amethyst)] mb-12 uppercase">
              Project <span className="italic text-[var(--color-amethyst)]/70 capitalize">Overview</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Challenge Card */}
              <div className="p-8 md:p-10 rounded-[2.5rem] bg-gradient-to-b from-white to-purple-50/40 border border-purple-900/10 shadow-lg">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 text-rose-700 text-xs font-inter font-bold uppercase tracking-wider mb-6">
                  The Challenge
                </div>
                <h3 className="text-2xl font-playfair font-medium text-[var(--color-amethyst)] mb-4">
                  Problem Statement
                </h3>
                <p className="font-inter text-sm md:text-base font-light text-[var(--color-amethyst)]/80 leading-relaxed">
                  {project.clientInfo.problem}
                </p>
              </div>

              {/* Solution Card */}
              <div className="p-8 md:p-10 rounded-[2.5rem] bg-gradient-to-b from-white to-emerald-50/40 border border-emerald-900/10 shadow-lg">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 text-xs font-inter font-bold uppercase tracking-wider mb-6">
                  The Solution
                </div>
                <h3 className="text-2xl font-playfair font-medium text-[var(--color-amethyst)] mb-4">
                  Our Engineering Approach
                </h3>
                <p className="font-inter text-sm md:text-base font-light text-[var(--color-amethyst)]/80 leading-relaxed">
                  {project.clientInfo.solution}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics / Highlights Grid */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair font-medium text-[var(--color-amethyst)] mb-10 text-center uppercase">
              Measured <span className="italic text-[var(--color-amethyst)]/70 capitalize">Impact</span>
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="p-6 rounded-[2rem] bg-white/80 border border-[var(--color-amethyst)]/15 text-center shadow-lg">
                  <div className="text-3xl md:text-4xl font-playfair font-bold text-[var(--color-amethyst)] mb-2">
                    {metric.value}
                  </div>
                  <div className="text-xs font-inter uppercase tracking-wider text-[var(--color-amethyst)]/60 font-semibold">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Step-by-Step Breakdown */}
      <section className="py-20 md:py-28 bg-white/60 border-t border-[var(--color-amethyst)]/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-playfair font-medium text-[var(--color-amethyst)] mb-14 text-center uppercase">
              Execution <span className="italic text-[var(--color-amethyst)]/70 capitalize">Roadmap</span>
            </h2>

            <div className="space-y-8">
              {project.caseStudy.map((step, idx) => (
                <div 
                  key={step.step}
                  className="relative p-8 rounded-[2rem] bg-white border border-[var(--color-amethyst)]/15 shadow-md flex flex-col md:flex-row items-start gap-6"
                >
                  <div className="w-12 h-12 rounded-full bg-[var(--color-amethyst)] text-white font-playfair font-bold text-lg flex items-center justify-center shrink-0">
                    {idx + 1}
                  </div>

                  <div>
                    <div className="text-xs font-inter uppercase tracking-widest text-[var(--color-amethyst)]/50 font-bold mb-1">
                      {step.step}
                    </div>
                    <h3 className="text-xl md:text-2xl font-playfair font-semibold text-[var(--color-amethyst)] mb-3">
                      {step.title}
                    </h3>
                    <p className="font-inter text-sm md:text-base font-light text-[var(--color-amethyst)]/80 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Used Bar */}
      <section className="py-16 bg-transparent">
        <div className="container mx-auto px-6 text-center">
          <h4 className="text-xs font-inter uppercase tracking-widest text-[var(--color-amethyst)]/60 font-bold mb-6">
            Technologies & Tools Employed
          </h4>
          <div className="flex flex-wrap items-center justify-center gap-3 max-w-3xl mx-auto">
            {project.technologies.map((tech) => (
              <span key={tech} className="px-4 py-2 rounded-full bg-[var(--color-amethyst)]/10 text-xs font-inter font-semibold text-[var(--color-amethyst)]">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Next / Previous Project Navigation */}
      <section className="py-16 border-t border-[var(--color-amethyst)]/15 bg-white/70">
        <div className="container mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 max-w-5xl mx-auto">
            <Link
              href={`/work/${prevProject.slug}`}
              className="group flex flex-col items-start p-6 rounded-2xl border border-[var(--color-amethyst)]/10 hover:bg-purple-50/50 transition-colors w-full sm:w-1/2"
            >
              <span className="text-[10px] font-inter uppercase tracking-widest text-[var(--color-amethyst)]/50 font-bold mb-1">
                ← Previous Project
              </span>
              <span className="text-xl font-playfair font-medium text-[var(--color-amethyst)] group-hover:text-purple-900">
                {prevProject.title}
              </span>
            </Link>

            <Link
              href={`/work/${nextProject.slug}`}
              className="group flex flex-col items-end text-right p-6 rounded-2xl border border-[var(--color-amethyst)]/10 hover:bg-purple-50/50 transition-colors w-full sm:w-1/2"
            >
              <span className="text-[10px] font-inter uppercase tracking-widest text-[var(--color-amethyst)]/50 font-bold mb-1">
                Next Project →
              </span>
              <span className="text-xl font-playfair font-medium text-[var(--color-amethyst)] group-hover:text-purple-900">
                {nextProject.title}
              </span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
