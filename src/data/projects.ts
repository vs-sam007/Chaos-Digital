export interface ProjectMetric {
  label: string;
  value: string;
}

export interface CaseStudyStep {
  step: string;
  title: string;
  description: string;
}

export interface ClientInfo {
  clientName: string;
  duration: string;
  teamSize: string;
  problem: string;
  solution: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  industry: string;
  shortDescription: string;
  services: string[];
  metrics: ProjectMetric[];
  technologies: string[];
  caseStudy: CaseStudyStep[];
  clientInfo: ClientInfo;
  imagePreview: string;
  imageDesktop: string;
  imageMobile: string;
  isFeatured?: boolean;
}

export const projects: Project[] = [
  {
    id: "proj-01",
    slug: "lumina-edge-ecommerce",
    title: "Lumina Edge",
    industry: "E-Commerce",
    shortDescription: "A high-conversion luxury fashion storefront designed for absolute performance.",
    services: ["Web Design", "Web Development", "Branding"],
    metrics: [
      { label: "Traffic", value: "+312%" },
      { label: "Performance", value: "98" },
      { label: "Conversion", value: "2.3x" },
      { label: "Delivery", value: "3 Weeks" }
    ],
    technologies: ["Next.js", "React", "Tailwind", "GSAP", "Shopify"],
    caseStudy: [
      { step: "Challenge", title: "Outdated Tech Stack", description: "Lumina was losing customers due to slow load times and a poor mobile experience." },
      { step: "Research", title: "User Journey Mapping", description: "Analyzed 10k+ sessions to identify drop-off points." },
      { step: "Design", title: "Minimal Luxury", description: "Created a bespoke design language emphasizing negative space and large typography." },
      { step: "Development", title: "Headless Architecture", description: "Built a lightning-fast frontend with Next.js integrated with Shopify." },
      { step: "Results", title: "Massive Growth", description: "Tripled traffic and doubled conversion rates within the first month." }
    ],
    clientInfo: {
      clientName: "Lumina Edge Ltd.",
      duration: "3 Weeks",
      teamSize: "4 Experts",
      problem: "High bounce rate and low mobile conversions due to a dated Shopify template.",
      solution: "A custom headless e-commerce build focused on aesthetic and speed."
    },
    imagePreview: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
    imageDesktop: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
    imageMobile: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600",
    isFeatured: true
  },
  {
    id: "proj-02",
    slug: "nexus-health-ai",
    title: "Nexus Health",
    industry: "Healthcare",
    shortDescription: "An AI-powered patient dashboard revolutionizing remote care.",
    services: ["Web Development", "AI", "Dashboards"],
    metrics: [
      { label: "Patient Adoption", value: "85%" },
      { label: "Accessibility", value: "99" },
      { label: "Load Time", value: "<1s" },
      { label: "Data Processing", value: "Real-time" }
    ],
    technologies: ["React", "Node.js", "OpenAI", "Supabase", "Tailwind"],
    caseStudy: [
      { step: "Challenge", title: "Complex Data", description: "Doctors needed a simple way to view complex AI health predictions." },
      { step: "Research", title: "Clinical Workflow", description: "Shadowed medical professionals to understand daily operations." },
      { step: "Design", title: "Intuitive Dashboard", description: "Designed a distraction-free, data-dense interface." },
      { step: "Development", title: "Secure Backend", description: "Implemented HIPAA-compliant architecture with real-time sockets." },
      { step: "Results", title: "Award Winning", description: "Adopted by 5 major hospital networks." }
    ],
    clientInfo: {
      clientName: "Nexus Health Systems",
      duration: "8 Weeks",
      teamSize: "6 Experts",
      problem: "Legacy systems were too slow to process AI diagnostic data.",
      solution: "A real-time dashboard built on modern tech."
    },
    imagePreview: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800",
    imageDesktop: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200",
    imageMobile: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600",
    isFeatured: false
  },
  {
    id: "proj-03",
    slug: "elevate-real-estate",
    title: "Elevate Properties",
    industry: "Real Estate",
    shortDescription: "A premium property discovery platform for ultra-high-net-worth individuals.",
    services: ["Web Design", "SEO", "Landing Pages"],
    metrics: [
      { label: "Leads", value: "+247" },
      { label: "Organic Growth", value: "+180%" },
      { label: "Time on Site", value: "4m 20s" },
      { label: "Lighthouse", value: "100" }
    ],
    technologies: ["Next.js", "Framer Motion", "MongoDB", "Tailwind"],
    caseStudy: [
      { step: "Challenge", title: "Brand Perception", description: "The old site looked cheap, repelling luxury buyers." },
      { step: "Research", title: "Competitor Analysis", description: "Studied the top 10 global luxury real estate firms." },
      { step: "Design", title: "Editorial Feel", description: "Implemented a magazine-style layout with large imagery." },
      { step: "Development", title: "Smooth Transitions", description: "Added WebGL and Framer Motion for a fluid experience." },
      { step: "Results", title: "Record Sales", description: "Generated $50M in pipeline within 2 months." }
    ],
    clientInfo: {
      clientName: "Elevate Real Estate Group",
      duration: "5 Weeks",
      teamSize: "3 Experts",
      problem: "Low organic traffic and poor luxury perception.",
      solution: "A visually stunning, SEO-optimized platform."
    },
    imagePreview: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800",
    imageDesktop: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200",
    imageMobile: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600",
    isFeatured: false
  },
  {
    id: "proj-04",
    slug: "aura-aesthetics",
    title: "Aura Aesthetics",
    industry: "Beauty",
    shortDescription: "Complete digital rebranding and web presence for a premium skincare line.",
    services: ["Branding", "Web Design", "Web Development"],
    metrics: [
      { label: "Brand Recall", value: "+45%" },
      { label: "Online Sales", value: "3.2x" },
      { label: "Social Engagement", value: "+210%" },
      { label: "Delivery", value: "4 Weeks" }
    ],
    technologies: ["React", "GSAP", "Tailwind"],
    caseStudy: [
      { step: "Challenge", title: "Identity Crisis", description: "Aura's branding was lost in a saturated market." },
      { step: "Research", title: "Visual Audits", description: "Conducted deep dives into modern beauty trends." },
      { step: "Design", title: "Ethereal & Clean", description: "Developed a color palette and typography that feels expensive." },
      { step: "Development", title: "Immersive Web", description: "Built a site that feels like a digital spa." },
      { step: "Results", title: "Market Leader", description: "Sold out 3 product lines post-launch." }
    ],
    clientInfo: {
      clientName: "Aura Beauty Co.",
      duration: "4 Weeks",
      teamSize: "4 Experts",
      problem: "Inconsistent branding across digital touchpoints.",
      solution: "A cohesive, premium brand system and website."
    },
    imagePreview: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800",
    imageDesktop: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200",
    imageMobile: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600",
    isFeatured: false
  },
  {
    id: "proj-05",
    slug: "quantum-dynamics",
    title: "Quantum Dynamics",
    industry: "SaaS",
    shortDescription: "A minimalist dashboard and landing page for an enterprise data visualization startup.",
    services: ["Web Design", "Dashboards", "Web Development"],
    metrics: [
      { label: "Signups", value: "+450%" },
      { label: "Bounce Rate", value: "-22%" },
      { label: "Active Users", value: "12k+" },
      { label: "Delivery", value: "6 Weeks" }
    ],
    technologies: ["React", "Tailwind", "Node.js", "Framer Motion"],
    caseStudy: [
      { step: "Challenge", title: "Information Overload", description: "The original SaaS product was too confusing for non-technical users." },
      { step: "Research", title: "User Testing", description: "Conducted 50+ user interviews to identify pain points." },
      { step: "Design", title: "Clean & Focused", description: "Stripped away unnecessary UI, focusing purely on core data points." },
      { step: "Development", title: "Lightning Fast", description: "Rewrote the frontend for instant interactions." },
      { step: "Results", title: "Explosive Growth", description: "Acquired by a major enterprise within 6 months of relaunch." }
    ],
    clientInfo: {
      clientName: "Quantum Dynamics Inc.",
      duration: "6 Weeks",
      teamSize: "5 Experts",
      problem: "Complex and unintuitive UI was causing high churn.",
      solution: "A completely redesigned, highly intuitive SaaS dashboard."
    },
    imagePreview: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800",
    imageDesktop: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
    imageMobile: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600",
    isFeatured: false
  },
  {
    id: "proj-06",
    slug: "velvet-fashion",
    title: "Velvet Fashion",
    industry: "D2C Brand",
    shortDescription: "An immersive e-commerce experience blending luxury aesthetics with high-performance tech.",
    services: ["Web Development", "Branding", "SEO"],
    metrics: [
      { label: "Revenue", value: "$2M+" },
      { label: "AOV", value: "+34%" },
      { label: "Load Time", value: "0.8s" },
      { label: "Conversion", value: "4.1%" }
    ],
    technologies: ["Next.js", "Shopify", "Tailwind", "GSAP"],
    caseStudy: [
      { step: "Challenge", title: "Slow Shopify Theme", description: "Their standard template was heavily impacting luxury brand perception." },
      { step: "Research", title: "Performance Audit", description: "Identified massive render blocking resources and bloated scripts." },
      { step: "Design", title: "Visual Storytelling", description: "Introduced large video backgrounds and editorial layouts." },
      { step: "Development", title: "Custom Storefront", description: "Built a fully custom Shopify headless storefront." },
      { step: "Results", title: "Record Breaking", description: "Achieved the highest grossing month in the brand's history." }
    ],
    clientInfo: {
      clientName: "Velvet Fashion Co.",
      duration: "5 Weeks",
      teamSize: "4 Experts",
      problem: "A generic website that failed to communicate luxury.",
      solution: "A bespoke headless e-commerce experience."
    },
    imagePreview: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=800",
    imageDesktop: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1200",
    imageMobile: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600",
    isFeatured: false
  }
];
