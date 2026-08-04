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
  galleryImages?: string[];
  isFeatured?: boolean;
  liveUrl?: string;
  instagramUrl?: string;
  isUnderProduction?: boolean;
}

export const projects: Project[] = [
  {
    id: "proj-00",
    slug: "pandit-ji-mobile-app",
    title: "Pandit Ji Mobile App",
    isUnderProduction: true,
    industry: "Spiritual Services & E-Commerce",
    shortDescription: "A comprehensive mobile application (currently under active production) connecting users with verified Pandits and astrologers for seamless booking of pujas, consultations, and ritual samagri.",
    services: ["Mobile App Development", "UI/UX Design", "Backend Architecture"],
    metrics: [
      { label: "App Status", value: "In Production" },
      { label: "Verified Pandits", value: "500+" },
      { label: "Consultation Sync", value: "Real-Time" },
      { label: "Launch Phase", value: "Active Dev" }
    ],
    technologies: ["React Native", "Node.js", "MongoDB", "Firebase", "Razorpay"],
    caseStudy: [
      { step: "Challenge", title: "Fragmented Ritual Booking", description: "Devotees struggled to find trusted, verified Pandits for specific rituals with transparent pricing." },
      { step: "Design", title: "Spiritual & Modern UI", description: "Crafted a warm, accessible mobile aesthetic featuring auspicious Muhurat calendars and intuitive service cards." },
      { step: "Development", title: "Real-Time Chat & Video Engine", description: "Integrated web-sockets and WebRTC SDKs for instant audio/video astrology consultations." },
      { step: "E-Commerce", title: "Puja Samagri Checkout", description: "Built an integrated e-commerce store with automated Razorpay checkout for ritual kits." },
      { step: "Results", title: "Rapid Adoption & Growth", description: "Onboarded 500+ verified pandits and processed thousands of successful ritual bookings." }
    ],
    clientInfo: {
      clientName: "Pandit Ji Services",
      duration: "4 Weeks",
      teamSize: "4 Experts",
      problem: "Devotees and families across urban and rural regions face immense friction when attempting to organize authentic spiritual ceremonies, pujas, and astrology consultations. The traditional process suffers from a lack of verified practitioner credentials, unstandardized pricing, unreliable scheduling for auspicious Muhurats, and difficulties in sourcing complete, authentic Puja Samagri kits. This fragmented ecosystem leads to missed rituals, poor user trust, and logistical headaches.",
      solution: "We architected an end-to-end digital ecosystem connecting devotees with a nationwide network of 500+ verified, background-checked Pandits and astrologers. The platform combines real-time video/audio consultation capabilities, automated calendar synchronization for precise Muhurat calculation, transparent ritual package pricing, and an integrated e-commerce marketplace for doorstep delivery of curated Samagri kits—ensuring a seamless, trustworthy, and elevated spiritual experience."
    },
    imagePreview: "/projects/pandit-ji-1.png",
    imageDesktop: "/projects/pandit-ji-1.png",
    imageMobile: "/projects/pandit-ji-2.png",
    galleryImages: [
      "/projects/pandit-ji-1.png",
      "/projects/pandit-ji-2.png",
      "/projects/pandit-ji-3.png",
      "/projects/pandit-ji-4.png"
    ],
    isFeatured: true
  },
  {
    id: "proj-01",
    slug: "real-estate-premium",
    title: "Real Estate Premium",
    industry: "Real Estate",
    shortDescription: "A premium property listing platform that connects buyers with high-end real estate through advanced filtering and high-quality image galleries.",
    services: ["Web Development", "Database Integration"],
    metrics: [
      { label: "Search Speed", value: "Sub-100ms" },
      { label: "Landing Pages", value: "High-Conv" },
      { label: "Filtering", value: "Advanced" },
      { label: "Delivery", value: "3 Weeks" }
    ],
    technologies: ["Next.js", "Node.js", "React", "Tailwind CSS", "PostgreSQL"],
    caseStudy: [
      { step: "Challenge", title: "Complex Filtering & Slow Queries", description: "Buyers needed an ultra-fast, high-end property search experience without lag or UI clutter." },
      { step: "Architecture", title: "High-Performance Data Layer", description: "Designed optimized database indexing and client-side filtering for instant search feedback." },
      { step: "Design", title: "Editorial Luxury UI", description: "Built an immersive gallery and property showcase with smooth image loading and elegant typography." },
      { step: "Development", title: "Next.js & API Integration", description: "Engineered a responsive web app with fast database querying and dynamic property filtering." },
      { step: "Results", title: "High Conversion & Speed", description: "Delivered sub-100ms response times and significantly boosted lead generation for premium listings." }
    ],
    clientInfo: {
      clientName: "Real Estate Premium",
      duration: "3 Weeks",
      teamSize: "3 Experts",
      problem: "Ultra-high-net-worth real estate buyers and investors encountered significant friction on legacy property portals due to cluttered visual layouts, sluggish search filter performance, outdated listing photos, and slow database queries. These technical bottlenecks resulted in high bounce rates, degraded brand perception for high-end developments, and lost high-ticket sales opportunities.",
      solution: "We designed and built a bespoke, high-performance real estate discovery platform using Next.js and optimized database indexing. The solution delivers sub-100ms client-side filter response times, high-resolution editorial image galleries, interactive floor-plan previews, and instant lead capture routing—creating an effortless luxury browsing experience that significantly elevated lead conversion rates and client acquisition pipelines."
    },
    imagePreview: "/projects/real-estate-premium.png",
    imageDesktop: "/projects/real-estate-premium.png",
    imageMobile: "/projects/real-estate-premium.png",
    isFeatured: false,
    liveUrl: "https://real-estate-premium-nine.vercel.app/"
  },
  {
    id: "proj-02",
    slug: "pro-tournament",
    title: "Pro Tournament",
    industry: "Gaming / Sports Entertainment",
    shortDescription: "A tournament management and tracking application built to organize competitive brackets, schedules, and live updates.",
    services: ["Web Application Development"],
    metrics: [
      { label: "Updates", value: "Real-time" },
      { label: "Architecture", value: "Scalable" },
      { label: "Latency", value: "Sub-50ms" },
      { label: "Delivery", value: "4 Weeks" }
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel", "WebSocket"],
    caseStudy: [
      { step: "Challenge", title: "Bracket Sync & High Traffic", description: "Organizers faced lag and desynchronized brackets during peak concurrent tournament traffic." },
      { step: "Architecture", title: "Real-Time WebSocket Engine", description: "Built an event-driven pub/sub data layer ensuring zero-delay score and bracket sync." },
      { step: "Design", title: "Esports Cyber UI", description: "Crafted a dark-mode esports aesthetic with instant match highlighting and live standings." },
      { step: "Development", title: "Vercel & Next.js Deployment", description: "Engineered scalable serverless endpoints capable of handling thousands of simultaneous viewers." },
      { step: "Results", title: "Flawless Live Execution", description: "Powering live competitive events with 99.9% uptime and instant bracket updates." }
    ],
    clientInfo: {
      clientName: "Pro Tournament",
      duration: "4 Weeks",
      teamSize: "3 Experts",
      problem: "Esports tournament organizers and sports broadcasters struggled to maintain live bracket synchronization and real-time score updates during peak concurrent user traffic. Legacy tracking platforms frequently suffered from database latency, UI freezes, and manual result entry errors, resulting in frustrated competitive players and disengaged tournament viewers.",
      solution: "We engineered a real-time, scalable tournament tracking web application leveraging a WebSocket pub/sub architecture and serverless Next.js edge deployment. The system automates tournament bracket progression, handles thousands of simultaneous viewers with sub-50ms score synchronization, and provides event admins with an intuitive control suite to manage single-elimination, double-elimination, and round-robin competitions seamlessly."
    },
    imagePreview: "/projects/pro-tournament.png",
    imageDesktop: "/projects/pro-tournament.png",
    imageMobile: "/projects/pro-tournament.png",
    isFeatured: false,
    liveUrl: "https://pro-tournament.vercel.app/"
  },
  {
    id: "proj-03",
    slug: "healing-nature-clinic",
    title: "Healing Nature Clinic",
    industry: "Healthcare & Wellness",
    shortDescription: "A professional holistic healthcare platform bridging traditional botanical wisdom with modern clinical excellence for natural recovery.",
    services: ["Web Design", "Web Development"],
    metrics: [
      { label: "Patient Inquiries", value: "+210%" },
      { label: "Page Speed", value: "99/100" },
      { label: "User Engagement", value: "4m 15s" },
      { label: "Delivery", value: "2 Weeks" }
    ],
    technologies: ["HTML5", "CSS3", "JavaScript"],
    caseStudy: [
      { step: "Challenge", title: "Establishing Digital Trust", description: "The clinic needed a calming, trustworthy web presence to build patient confidence and streamline consultation requests." },
      { step: "Strategy", title: "Botanical & Clinical Design System", description: "Selected a calming color palette and structured patient care pathways for effortless site navigation." },
      { step: "Design", title: "Serene & Accessible Layout", description: "Designed an intuitive interface highlighting holistic treatments, practitioner credentials, and real patient stories." },
      { step: "Development", title: "Lightweight Native Stack", description: "Engineered ultra-fast, responsive HTML5/CSS3/JS pages ensuring instant loading on mobile & desktop." },
      { step: "Results", title: "Increased Patient Bookings", description: "Achieved a 210% increase in patient appointment inquiries and exceptional patient satisfaction." }
    ],
    clientInfo: {
      clientName: "Healing Nature Homoeopathic Clinic",
      duration: "2 Weeks",
      teamSize: "2 Experts",
      problem: "Patients seeking holistic healthcare and homeopathic treatments frequently encounter outdated, confusing medical websites that fail to establish digital trust, lack verified practitioner credentials, and make booking consultation appointments difficult on mobile devices.",
      solution: "We designed and developed a serene, highly accessible healthcare platform bridging traditional botanical wisdom with modern clinical presentation. Built on a lightweight, ultra-fast native web architecture, the platform features structured treatment guides, verified practitioner profiles, patient outcome testimonials, and an effortless 1-tap consultation scheduling workflow that increased appointment inquiries by 210%."
    },
    imagePreview: "/projects/healing-nature.png",
    imageDesktop: "/projects/healing-nature.png",
    imageMobile: "/projects/healing-nature.png",
    isFeatured: false,
    liveUrl: "https://glistening-truffle-d70300.netlify.app/"
  },
  {
    id: "proj-04",
    slug: "caffee001",
    title: "Caffee001",
    industry: "Food & Beverage / Hospitality",
    shortDescription: "A digital storefront and menu platform designed for a modern cafe to enhance online visibility and customer engagement.",
    services: ["Web Development", "UI/UX Design"],
    metrics: [
      { label: "Mobile Engagement", value: "+175%" },
      { label: "Menu Views", value: "3.5x" },
      { label: "Table Conversions", value: "+95%" },
      { label: "Delivery", value: "2 Weeks" }
    ],
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    caseStudy: [
      { step: "Challenge", title: "Outdated Physical Menus", description: "The cafe needed an engaging, mobile-first storefront to showcase seasonal specials and improve foot traffic conversions." },
      { step: "Design", title: "Appetizing Visual Layout", description: "Crafted a warm, high-contrast cafe visual aesthetic featuring interactive category filters and rich imagery." },
      { step: "Development", title: "Fast Component Architecture", description: "Built a responsive React & Tailwind storefront optimized for instant mobile loading and fluid menu interactions." },
      { step: "UX Optimization", title: "One-Tap Navigation", description: "Simplified location, opening hours, and menu discovery to minimize friction for on-the-go patrons." },
      { step: "Results", title: "Increased Foot Traffic & Orders", description: "Boosted digital menu engagement by 175% and drove significant growth in repeat customer visits." }
    ],
    clientInfo: {
      clientName: "Caffee001",
      duration: "2 Weeks",
      teamSize: "2 Experts",
      problem: "A modern artisan cafe struggled to stand out in a competitive local market where static physical menus and basic search directory listings failed to engage mobile visitors or effectively showcase seasonal gourmet culinary offerings.",
      solution: "We designed and developed an interactive digital storefront and mobile menu platform with dynamic category filtering, high-definition culinary visual cards, one-tap location directions, and table-side QR code integration—boosting digital engagement by 175% and expanding foot traffic conversions."
    },
    imagePreview: "/projects/caffee001.png",
    imageDesktop: "/projects/caffee001.png",
    imageMobile: "/projects/caffee001.png",
    isFeatured: false,
    liveUrl: "https://caffee001.netlify.app/"
  },
  {
    id: "proj-05",
    slug: "integrity",
    title: "Integrity",
    industry: "Corporate / Security SaaS",
    shortDescription: "A high-trust enterprise compliance and security audit platform built to ensure data integrity, role-based access, and real-time audit logging.",
    services: ["Software Development", "Security Architecture"],
    metrics: [
      { label: "Audit Speed", value: "Real-time" },
      { label: "Security Score", value: "100/100" },
      { label: "Compliance Rate", value: "99.9%" },
      { label: "Deployment", value: "Vercel Edge" }
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel", "TypeScript"],
    caseStudy: [
      { step: "Challenge", title: "Compliance Verification & Transparency", description: "Enterprise organizations needed a secure, tamper-proof system to verify operational compliance and track real-time audit trails." },
      { step: "Architecture", title: "Immutable Audit Pipeline", description: "Engineered encrypted logging pipelines and role-based access control (RBAC) to enforce zero-trust security principles." },
      { step: "Design", title: "Clean Enterprise UI", description: "Designed an authoritative dark dashboard with clear compliance heatmaps and instant verification status." },
      { step: "Development", title: "Next.js Edge Deployment", description: "Built serverless Next.js modules deployed on Vercel Edge for sub-second response times globally." },
      { step: "Results", title: "Automated Compliance Audits", description: "Reduced manual audit verification effort by 80% while ensuring complete operational transparency for enterprise stakeholders." }
    ],
    clientInfo: {
      clientName: "Integrity Systems",
      duration: "3 Weeks",
      teamSize: "3 Experts",
      problem: "Multi-department enterprise organizations lacked a unified, real-time security compliance and audit verification platform, forcing compliance teams to rely on fragmented manual logs, vulnerable spreadsheets, and slow audit cycles that exposed the business to operational and regulatory risks.",
      solution: "We developed an immutable enterprise security audit and compliance platform with role-based access control (RBAC), real-time encrypted audit logging, and serverless edge deployment. The platform automates compliance tracking, providing executives with an instant 100/100 security posture heatmap while reducing audit verification effort by 80%."
    },
    imagePreview: "/projects/integrity.png",
    imageDesktop: "/projects/integrity.png",
    imageMobile: "/projects/integrity.png",
    isFeatured: false,
    liveUrl: "https://integrity-j7243s5lv-abhishekyadavapus-coders-projects.vercel.app/"
  },
  {
    id: "proj-06",
    slug: "path-finder-defence-academy",
    title: "Path Finder Defence Academy",
    industry: "Education / EdTech",
    shortDescription: "A comprehensive digital platform for a premier defence coaching institute in Lucknow, designed to showcase NDA, CDS, AFCAT, and SSB courses.",
    services: ["Web Design", "Web Development", "Lead Generation"],
    metrics: [
      { label: "Selections", value: "1,000+" },
      { label: "Demo Bookings", value: "+320%" },
      { label: "Branch Leads", value: "Automated" },
      { label: "Delivery", value: "3 Weeks" }
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Lead Routing API"],
    caseStudy: [
      { step: "Challenge", title: "Fragmented Course Discovery", description: "The academy needed an authoritative digital presence to showcase elite ex-military mentors and streamline NDA/CDS course inquiries." },
      { step: "Design", title: "Military-Grade Authority", description: "Crafted a structured, trustworthy interface featuring mentor badges, student success stories, and course detail breakdowns." },
      { step: "Development", title: "Smart Lead Routing", description: "Engineered a streamlined 'Book Free Demo' system with automated routing to Lucknow offline centers (Alambagh & Indiranagar)." },
      { step: "Optimization", title: "Conversion Funnel", description: "Integrated high-impact CTA banners and exam roadmap guides for defence aspirants and parents." },
      { step: "Results", title: "Record Student Enrollment", description: "Tripled demo bookings within the first month and established PFDA as the top defence coaching portal in the region." }
    ],
    clientInfo: {
      clientName: "Path Finder Defence Academy (PFDA)",
      duration: "3 Weeks",
      teamSize: "3 Experts",
      problem: "A premier defence coaching institute with multiple offline branches struggled to present a unified digital presence, showcase its 1,000+ successful officer selections, and efficiently direct incoming student leads to specific regional centers in Lucknow (Alambagh & Indiranagar).",
      solution: "We created an authoritative edtech web platform featuring interactive course selection roadmaps (NDA, CDS, AFCAT, SSB), elite ex-military mentor showcases, and an automated lead routing system for Lucknow branches that tripled demo class bookings."
    },
    imagePreview: "/projects/pfda.png",
    imageDesktop: "/projects/pfda.png",
    imageMobile: "/projects/pfda.png",
    isFeatured: false,
    liveUrl: "https://pathfinderdefenceacademy.com/"
  },
  {
    id: "proj-07",
    slug: "pfda-academy-management-system",
    title: "PFDA Academy Management System",
    industry: "EdTech / Desktop SaaS",
    shortDescription: "An offline-first desktop application with auto-sync, multi-branch owner analytics, and role-based row-level security.",
    services: ["Software Development", "Database Integration"],
    metrics: [
      { label: "Offline Uptime", value: "100%" },
      { label: "Sync Latency", value: "Auto-Sync" },
      { label: "Data Isolation", value: "Supabase RLS" },
      { label: "Delivery", value: "4 Weeks" }
    ],
    technologies: ["Electron", "React", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL"],
    caseStudy: [
      { step: "Challenge", title: "Network Disruption & Multi-Branch Churn", description: "Academy staff faced operational freezes during internet outages, while leadership lacked consolidated multi-branch financial visibility." },
      { step: "Architecture", title: "Local-to-Cloud Sync Engine", description: "Engineered a local SQLite/Electron transaction buffer with background WebSocket reconnection auto-sync to cloud PostgreSQL." },
      { step: "Security", title: "Row-Level Isolation", description: "Implemented Supabase Row-Level Security (RLS) policies guaranteeing strict data privacy for individual branch managers." },
      { step: "Development", title: "Global Owner Dashboard", description: "Built a centralized web & desktop portal aggregating real-time fee collections, admissions, and attendance across all centers." },
      { step: "Results", title: "Zero Operational Downtime", description: "Eliminated operational disruption during outages and provided leadership with instant cross-branch revenue analytics." }
    ],
    clientInfo: {
      clientName: "Path Finder Defence Academy (PFDA)",
      duration: "4 Weeks",
      teamSize: "3 Experts",
      problem: "Offline educational academies with multiple regional centers suffered severe operational disruptions during frequent local internet outages. Staff were unable to process student admissions, collect fee payments, or track daily attendance, while academy owners lacked real-time multi-branch financial visibility.",
      solution: "We engineered an offline-first desktop application using Electron, React, and Supabase (PostgreSQL). The system features a local transaction buffer that allows staff to work uninterrupted offline, an automatic cloud sync engine that pushes queued data upon internet reconnection, and role-based row-level security (RLS) guaranteeing total multi-branch data isolation and live executive financial reporting."
    },
    imagePreview: "/projects/academy-sync.png",
    imageDesktop: "/projects/academy-sync.png",
    imageMobile: "/projects/academy-sync.png",
    isFeatured: false
  },
  {
    id: "proj-08",
    slug: "sunita-jewellers",
    title: "Sunita Jewellers",
    industry: "Luxury Jewellery & E-Commerce",
    shortDescription: "A bespoke digital storefront and targeted Instagram growth campaign for a premier Delhi-based gold & bridal diamond jewellery brand.",
    services: ["Web Development", "Instagram Growth", "Brand Strategy", "UI/UX Design"],
    metrics: [
      { label: "Web Traffic", value: "+280%" },
      { label: "Social Engagement", value: "4.8x" },
      { label: "Bridal Leads", value: "+190%" },
      { label: "Location", value: "Delhi" }
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Instagram Reels", "Meta Business"],
    caseStudy: [
      { step: "Challenge", title: "Showcase Heritage & Drive Foot Traffic", description: "The luxury brand needed a refined web portal and engaging Instagram presence to capture urban bridal jewelry shoppers." },
      { step: "Design", title: "Royal & Elegant Aesthetic", description: "Crafted a rich gold-and-ivory digital presentation displaying exclusive bridal necklaces, bangles, and diamond collections." },
      { step: "Growth", title: "Instagram Reel Curation", description: "Launched viral reel campaigns highlighting handcrafted artistry and in-store customer experiences." },
      { step: "Results", title: "Surge in Bridal Inquiries", description: "Boosted digital traffic by 280% and generated a 190% increase in high-ticket bridal consultations." }
    ],
    clientInfo: {
      clientName: "Sunita Jewellers",
      duration: "Ongoing Partnership",
      teamSize: "3 Experts",
      problem: "A premier Delhi jewellery establishment sought to modernize its digital presence, showcase authentic diamond and gold bridal collections, and scale engagement on Instagram to reach modern brides and luxury buyers.",
      solution: "We engineered an elegant web platform showcasing authentic bridal collections, coupled with an Instagram growth campaign featuring high-definition reel showcases, local targeted ad funnels, and direct WhatsApp appointment routing."
    },
    imagePreview: "/projects/sunita-jewellers.png",
    imageDesktop: "/projects/sunita-jewellers.png",
    imageMobile: "/projects/sunita-jewellers.png",
    liveUrl: "http://www.sunitajewellers.com",
    instagramUrl: "https://www.instagram.com/sunita.jewellers"
  },
  {
    id: "proj-09",
    slug: "vigoron-sports-nutrition",
    title: "Vigoron (Anytime Sports)",
    industry: "Sports Nutrition & Fitness E-Commerce",
    shortDescription: "A high-performance Next.js e-commerce store and social growth engine for authentic sports nutrition supplements across India.",
    services: ["E-Commerce Development", "Instagram Growth", "Razorpay Checkout", "Performance Marketing"],
    metrics: [
      { label: "Online Sales", value: "+310%" },
      { label: "Checkout Speed", value: "Sub-200ms" },
      { label: "Social Reach", value: "500k+" },
      { label: "Delivery", value: "4 Weeks" }
    ],
    technologies: ["Next.js", "React", "Node.js", "Razorpay", "Instagram Suite"],
    caseStudy: [
      { step: "Challenge", title: "E-Commerce Friction & Trust", description: "Needed a lightning-fast online supplement store with seamless checkout and an active fitness community on Instagram." },
      { step: "Development", title: "Next.js & Razorpay Integration", description: "Engineered a responsive supplement shop with 1-click Razorpay payment and instant product filtering." },
      { step: "Growth", title: "Fitness Influencer Marketing", description: "Executed Instagram reel series and athlete testimonials driving direct traffic to Vigoron.in." },
      { step: "Results", title: "310% Growth in Direct Sales", description: "Expanded brand presence nationwide with 500k+ organic reach and seamless online order processing." }
    ],
    clientInfo: {
      clientName: "Anytime Sports Nutrition (Vigoron)",
      duration: "4 Weeks",
      teamSize: "4 Experts",
      problem: "Fitness enthusiasts and athletes needed a trusted, fast online platform to order authentic whey protein, creatine, and wellness supplements without worrying about counterfeit products or slow checkout processes.",
      solution: "We built an end-to-end Next.js e-commerce platform integrated with Razorpay payments, paired with a dynamic Instagram growth strategy featuring athlete reviews, ingredient transparency reels, and automated order notifications."
    },
    imagePreview: "/projects/vigoron.png",
    imageDesktop: "/projects/vigoron.png",
    imageMobile: "/projects/vigoron.png",
    liveUrl: "https://vigoron.in/",
    instagramUrl: "https://www.instagram.com/anytime_sports_nutrition"
  },
  {
    id: "proj-10",
    slug: "wadhwa-diamonds",
    title: "Wadhwa Diamonds Official",
    industry: "Fine Diamond Jewellery",
    shortDescription: "Instagram content curation, viral reel strategy, and high-ticket customer acquisition for a premier diamond house.",
    services: ["Instagram Growth", "Reel Production", "Social Media Marketing", "Lead Funnels"],
    metrics: [
      { label: "Reel Views", value: "1.2M+" },
      { label: "Profile Visits", value: "+340%" },
      { label: "Qualified Leads", value: "50+/mo" },
      { label: "Engagement", value: "High" }
    ],
    technologies: ["Instagram Business", "Meta Ads Manager", "Canva Pro", "CapCut"],
    caseStudy: [
      { step: "Challenge", title: "High-Ticket Client Acquisition", description: "Reaching discerning buyers interested in certified diamond jewelry and customized diamond bridal sets." },
      { step: "Strategy", title: "Macro Diamond Video Showcases", description: "Produced high-resolution macro videos highlighting diamond clarity, cut brilliance, and solitaire craftsmanship." },
      { step: "Growth", title: "Precision Audience Targeting", description: "Ran hyper-targeted Instagram campaigns aimed at luxury shoppers and wedding planners." },
      { step: "Results", title: "1.2M+ Views & High-Ticket Sales", description: "Drove over 1.2M organic & paid video impressions and delivered 50+ high-intent buyer inquiries monthly." }
    ],
    clientInfo: {
      clientName: "Wadhwa Diamonds Official",
      duration: "Ongoing Partnership",
      teamSize: "2 Experts",
      problem: "Establishing a high-trust digital identity for luxury solitaire and diamond jewelry on social media to attract affluent buyers seeking authentic certifications.",
      solution: "We crafted an aesthetic Instagram growth strategy centered around macro video showcases, diamond education reels, and streamlined DM-to-appointment booking funnels."
    },
    imagePreview: "/projects/wadhwa-diamonds.png",
    imageDesktop: "/projects/wadhwa-diamonds.png",
    imageMobile: "/projects/wadhwa-diamonds.png",
    instagramUrl: "https://www.instagram.com/wadhwadiamonds.official"
  },
  {
    id: "proj-11",
    slug: "marilyn-lucknow",
    title: "Marilyn Lucknow",
    industry: "Fashion Couture & Apparel",
    shortDescription: "Visual branding, viral Instagram Reels campaigns, and boutique foot-traffic growth for an exclusive fashion studio in Lucknow.",
    services: ["Instagram Growth", "Reel Production", "Local Brand Awareness", "Content Strategy"],
    metrics: [
      { label: "Boutique Traffic", value: "+220%" },
      { label: "Reel Impressions", value: "850k+" },
      { label: "DM Inquiries", value: "+180%" },
      { label: "Location", value: "Lucknow" }
    ],
    technologies: ["Instagram Business", "Meta Ads Suite", "Creative Studio", "CapCut"],
    caseStudy: [
      { step: "Challenge", title: "Boutique Visibility in Competitive Market", description: "Standing out among local fashion boutiques and driving in-store visits for handcrafted designer couture." },
      { step: "Strategy", title: "Trending Outfit Lookbooks", description: "Created trendy, fast-paced reel lookbooks showcasing seasonal festive & partywear collections." },
      { step: "Growth", title: "Geo-Targeted Outreach", description: "Focused Instagram content and targeted promotions within Lucknow and surrounding metro regions." },
      { step: "Results", title: "220% Growth in Store Foot Traffic", description: "Generated 850k+ reel impressions and significantly expanded in-person store visits and sales." }
    ],
    clientInfo: {
      clientName: "Marilyn Lucknow",
      duration: "Ongoing Partnership",
      teamSize: "2 Experts",
      problem: "An exclusive fashion boutique wanted to translate its physical collection into viral social content to attract fashion-conscious shoppers across the city.",
      solution: "We produced trendy video lookbooks, behind-the-scenes fitting reels, and geo-targeted Instagram ad campaigns that boosted foot traffic by 220%."
    },
    imagePreview: "/projects/marilyn-lucknow.png",
    imageDesktop: "/projects/marilyn-lucknow.png",
    imageMobile: "/projects/marilyn-lucknow.png",
    instagramUrl: "https://www.instagram.com/marilynlucknow"
  },
  {
    id: "proj-12",
    slug: "kruthika-jewellery",
    title: "Kruthika Jewellery",
    industry: "Heritage & Designer Jewellery",
    shortDescription: "Aesthetic Instagram grid curation, reel marketing, and high-conversion client outreach for handcrafted heritage jewellery collections.",
    services: ["Instagram Growth", "Social Media Marketing", "Brand Styling", "Targeted Campaigns"],
    metrics: [
      { label: "Audience Growth", value: "+260%" },
      { label: "Engagement Rate", value: "5.4%" },
      { label: "Direct Inquiries", value: "+145%" },
      { label: "Delivery", value: "Ongoing" }
    ],
    technologies: ["Instagram Reels", "Content Strategy", "Meta Ads Suite"],
    caseStudy: [
      { step: "Challenge", title: "Highlighting Intricate Artistry", description: "Communicating the unique value and traditional craftsmanship of temple and heritage jewellery pieces." },
      { step: "Strategy", title: "Curated Grid & Detail Shorts", description: "Designed an elegant grid aesthetic paired with close-up craftsmanship shorts and customer unboxings." },
      { step: "Growth", title: "Active DM Lead Engine", description: "Implemented automated keyword responses for price and order inquiries directly on Instagram." },
      { step: "Results", title: "145% Surge in Direct Orders", description: "Built a loyal community of jewellery enthusiasts with an exceptional 5.4% engagement rate." }
    ],
    clientInfo: {
      clientName: "Kruthika Jewellery",
      duration: "Ongoing Partnership",
      teamSize: "2 Experts",
      problem: "Crafting a premium Instagram grid that reflects traditional heritage while driving active daily purchase inquiries via DMs.",
      solution: "We designed a cohesive Instagram aesthetic, optimized reel content, and implemented instant DM inquiry workflows that expanded direct client sales by 145%."
    },
    imagePreview: "/projects/kruthika-jewellery.png",
    imageDesktop: "/projects/kruthika-jewellery.png",
    imageMobile: "/projects/kruthika-jewellery.png",
    instagramUrl: "https://www.instagram.com/kruthika_jewellery"
  },
  {
    id: "proj-13",
    slug: "tmu-hospital",
    title: "TMU Hospital & Super Speciality",
    industry: "Healthcare Institution",
    shortDescription: "Digital brand awareness, medical care educational campaigns, and patient trust building for a premier super-specialty hospital.",
    services: ["Social Media Management", "Healthcare Marketing", "Content Strategy", "Patient Awareness"],
    metrics: [
      { label: "Monthly Reach", value: "1.5M+" },
      { label: "Patient Trust", value: "High" },
      { label: "OPD Enquiries", value: "+195%" },
      { label: "Location", value: "Moradabad" }
    ],
    technologies: ["Instagram Business", "Meta Ads Suite", "Healthcare Content Suite"],
    caseStudy: [
      { step: "Challenge", title: "Public Healthcare Awareness & Trust", description: "Educating regional patients on advanced surgical capabilities, emergency care, and specialist doctors." },
      { step: "Strategy", title: "Doctor Q&A & Patient Stories", description: "Produced informative health tips, doctor video interviews, and inspiring patient recovery stories." },
      { step: "Growth", title: "Community Health Campaigns", description: "Ran awareness drives for specialty departments (cardiology, neurology, oncology, emergency)." },
      { step: "Results", title: "1.5M+ Monthly Regional Reach", description: "Established TMU Hospital as the most trusted healthcare brand in the region with a 195% increase in OPD inquiries." }
    ],
    clientInfo: {
      clientName: "TMU Hospital & Research Centre",
      duration: "Ongoing Partnership",
      teamSize: "3 Experts",
      problem: "A major super-specialty hospital needed to communicate its medical infrastructure, expert doctors, and emergency facilities effectively to millions of regional residents.",
      solution: "We architected a comprehensive social media growth and healthcare awareness campaign featuring doctor interviews, health tips, and emergency helpline routing—reaching 1.5M+ users monthly."
    },
    imagePreview: "/projects/tmu-hospital.png",
    imageDesktop: "/projects/tmu-hospital.png",
    imageMobile: "/projects/tmu-hospital.png",
    instagramUrl: "https://www.instagram.com/tmuhospital"
  }
];

