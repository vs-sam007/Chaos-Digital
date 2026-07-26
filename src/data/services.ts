export interface ServiceData {
  id: string;
  title: string;
  slug: string;
  subtitle: string;
  description: string;
  includes: string[];
  deliverables: string[];
  iconName: string;
}

export const servicesData: ServiceData[] = [
  {
    id: "1",
    title: "Website Development",
    slug: "website-development",
    subtitle: "Your digital storefront — built to convert visitors into customers.",
    description: "We design and develop fully responsive, SEO-friendly websites tailored to your business goals — from simple landing pages to complex multi-page business websites.",
    includes: [
      "Custom website design (UI/UX)",
      "Mobile-first responsive development",
      "On-page SEO setup (meta tags, schema, sitemap)",
      "Contact forms, WhatsApp chat integration",
      "Google Analytics & Search Console setup",
      "Speed optimisation (Core Web Vitals)",
      "CMS integration (WordPress / Webflow)",
      "1 month free post-launch support"
    ],
    deliverables: [
      "Live website",
      "Admin panel access",
      "Domain & hosting guidance",
      "Basic SEO report"
    ],
    iconName: "Monitor"
  },
  {
    id: "2",
    title: "Website Optimisation",
    slug: "website-optimisation",
    subtitle: "Speed, performance, and conversions — optimised to the core.",
    description: "Already have a website? We audit and optimise it for speed, user experience, and conversion rate — so your existing traffic actually turns into business.",
    includes: [
      "Full website audit (technical + UX)",
      "Page speed optimisation (image compression, lazy load, caching)",
      "Core Web Vitals improvement",
      "Conversion Rate Optimisation (CRO)",
      "Broken links & error fixing",
      "Mobile responsiveness fixes",
      "Heatmap integration (Hotjar / Microsoft Clarity)",
      "A/B testing recommendations"
    ],
    deliverables: [
      "Audit report",
      "Before vs after performance scores",
      "Recommendations deck"
    ],
    iconName: "Zap"
  },
  {
    id: "3",
    title: "Shopify Website",
    slug: "shopify-website",
    subtitle: "Launch your D2C store the right way — built for sales from Day 1.",
    description: "We build and customise Shopify stores for D2C brands and product businesses — from theme setup to full custom development, payment integrations, and launch.",
    includes: [
      "Shopify store setup & theme customisation",
      "Product listing (up to 50 products)",
      "Payment gateway integration (Razorpay, PayU, COD)",
      "Shipping & logistics plugin setup",
      "Abandoned cart recovery setup",
      "Trust badges, reviews, and social proof integration",
      "WhatsApp and email notification setup",
      "Basic SEO for product pages"
    ],
    deliverables: [
      "Live Shopify store",
      "Admin training session",
      "Basic analytics setup"
    ],
    iconName: "ShoppingCart"
  },
  {
    id: "4",
    title: "SEO — Search Engine Optimisation",
    slug: "seo-search-engine-optimisation",
    subtitle: "Rank higher. Get found. Grow organically — for free, forever.",
    description: "We help your business rank on Google for the keywords your customers are searching. Our SEO is a long-term growth engine that compounds over time.",
    includes: [
      "Keyword research & strategy",
      "On-page SEO (all pages)",
      "Technical SEO (crawl errors, schema, sitemaps)",
      "Google Business Profile optimisation (Local SEO)",
      "Backlink building (Off-page SEO)",
      "Competitor SEO analysis",
      "Content SEO (blog strategy & writing)",
      "Monthly ranking report"
    ],
    deliverables: [
      "Keyword ranking report",
      "SEO audit",
      "Monthly progress dashboard"
    ],
    iconName: "Search"
  },
  {
    id: "5",
    title: "Social Media Marketing (SMM)",
    slug: "social-media-marketing",
    subtitle: "Build a brand your audience follows, trusts, and buys from.",
    description: "We manage your social media presence end-to-end — strategy, content creation, posting, community management, and growth — across Instagram, Facebook, LinkedIn, and more.",
    includes: [
      "Social media strategy & content calendar",
      "Graphic design for posts, reels, stories",
      "Caption writing & hashtag research",
      "Scheduled posting (12–30 posts/month based on plan)",
      "Community management (comments/DM handling)",
      "Competitor analysis",
      "Monthly analytics report",
      "Reel scripting & short-form video strategy"
    ],
    deliverables: [
      "Content calendar",
      "Monthly report",
      "Growth analytics"
    ],
    iconName: "Share2"
  },
  {
    id: "6",
    title: "Content Writing",
    slug: "content-writing",
    subtitle: "Words that sell. Content that ranks. Stories that stick.",
    description: "From website copy to blog articles, product descriptions to LinkedIn posts — we write content that speaks to your audience and search engines simultaneously.",
    includes: [
      "Website copy (Home, About, Services, Contact)",
      "SEO blog articles",
      "Product descriptions",
      "Social media captions",
      "Email newsletters",
      "Case studies & whitepapers",
      "LinkedIn thought leadership posts",
      "Ad copywriting"
    ],
    deliverables: [
      "Proofread content files",
      "SEO-optimised drafts",
      "Plagiarism-free reports"
    ],
    iconName: "PenTool"
  },
  {
    id: "7",
    title: "Paid Marketing (PPC / Meta Ads)",
    slug: "paid-marketing",
    subtitle: "Every rupee you spend — tracked, optimised, and maximised.",
    description: "We run and manage paid ad campaigns on Google, Meta (Facebook/Instagram), and other platforms with a laser focus on ROI — not just impressions.",
    includes: [
      "Campaign strategy & audience research",
      "Ad creative (copy + design)",
      "Campaign setup (Google Ads / Meta Ads)",
      "Audience targeting & retargeting",
      "A/B testing of ads",
      "Budget management & optimisation",
      "Landing page recommendations",
      "Weekly performance reports"
    ],
    deliverables: [
      "Campaign dashboard access",
      "Weekly reports",
      "Monthly ROI summary"
    ],
    iconName: "TrendingUp"
  },
  {
    id: "8",
    title: "Lead Generation",
    slug: "lead-generation",
    subtitle: "Stop waiting for leads — we build systems that deliver them daily.",
    description: "We design and execute lead generation funnels using a combination of paid ads, landing pages, lead magnets, and CRM integrations to fill your sales pipeline consistently.",
    includes: [
      "Lead funnel strategy & design",
      "Landing page creation (optimised for conversion)",
      "Lead magnet creation (eBook, checklist, free audit)",
      "Meta Lead Ads / Google Lead Form campaigns",
      "CRM integration (Zoho, HubSpot, Salesforce, Meritto)",
      "Lead nurturing sequence setup",
      "WhatsApp follow-up automation",
      "Monthly lead quality report"
    ],
    deliverables: [
      "Live lead funnel",
      "CRM dashboard",
      "Monthly lead report"
    ],
    iconName: "Target"
  },
  {
    id: "9",
    title: "Email Marketing",
    slug: "email-marketing",
    subtitle: "The highest ROI channel in digital marketing — done right.",
    description: "We build, manage, and optimise email marketing campaigns that nurture leads, retain customers, and drive repeat purchases — with automation at the core.",
    includes: [
      "Email strategy & segmentation",
      "Email template design (branded)",
      "Welcome series / drip campaign setup",
      "Promotional campaign emails",
      "Abandoned cart emails (e-commerce)",
      "List cleaning & deliverability optimisation",
      "A/B testing (subject lines, CTAs)",
      "Monthly open rate & click report"
    ],
    deliverables: [
      "Email sequence files",
      "Performance report",
      "Subscriber growth tracking"
    ],
    iconName: "Mail"
  },
  {
    id: "10",
    title: "Performance Marketing",
    slug: "performance-marketing",
    subtitle: "Data-in. Revenue-out. Full-funnel performance, tracked to the last rupee.",
    description: "Performance marketing is where paid ads, analytics, and conversion strategy meet. We manage campaigns across channels with full-funnel attribution — so you know exactly what is working.",
    includes: [
      "Full-funnel campaign strategy (Awareness → Conversion)",
      "Multi-channel campaign management (Google + Meta + YouTube)",
      "UTM tracking & attribution setup",
      "Pixel setup (Meta Pixel, Google Tag Manager)",
      "Conversion tracking (purchases, sign-ups, calls)",
      "ROAS & CPA optimisation",
      "Monthly P&L-style performance summary",
      "Scaling strategy for winning campaigns"
    ],
    deliverables: [
      "Live performance dashboard",
      "Attribution report",
      "Monthly strategy review"
    ],
    iconName: "BarChart2"
  },
  {
    id: "11",
    title: "SEM — Search Engine Marketing",
    slug: "sem-search-engine-marketing",
    subtitle: "Be at the top of Google the moment someone searches for you.",
    description: "SEM puts your business at the top of search results instantly through paid search ads — while SEO builds long-term organic traffic. Together, they dominate the SERP.",
    includes: [
      "Google Search Ads setup & management",
      "Keyword bidding strategy",
      "Ad copy writing & testing",
      "Quality Score improvement",
      "Negative keyword management",
      "Display & remarketing ads",
      "Google Shopping Ads (for e-commerce)",
      "Monthly spend & performance report"
    ],
    deliverables: [
      "Google Ads account access",
      "Keyword report",
      "Monthly performance deck"
    ],
    iconName: "MousePointerClick"
  },
  {
    id: "12",
    title: "Influencer Marketing",
    slug: "influencer-marketing",
    subtitle: "The right voice, the right audience — real conversions from real people.",
    description: "We identify, outreach, negotiate, and manage influencer collaborations — from nano-influencers (affordable, high trust) to macro influencers — tailored to your brand and budget.",
    includes: [
      "Influencer research & vetting (fake follower check)",
      "Campaign brief creation",
      "Outreach, negotiation & contracting",
      "Content approval & brand alignment",
      "Campaign tracking (reach, engagement, conversions)",
      "Gifting / barter / paid collaboration management",
      "UGC (User Generated Content) rights management",
      "Post-campaign performance report"
    ],
    deliverables: [
      "Influencer report",
      "Campaign results deck",
      "UGC content files"
    ],
    iconName: "Users"
  },
  {
    id: "13",
    title: "AI & Automations",
    slug: "ai-automations",
    subtitle: "Work smarter. Automate the repetitive. Scale the strategic.",
    description: "We help businesses implement AI-powered tools and automations that save time, reduce costs, and improve customer experience — without needing a tech team.",
    includes: [
      "Business process automation audit",
      "Zapier / Make (Integromat) workflow setup",
      "AI content tools integration (ChatGPT, Jasper)",
      "CRM automation (lead assignment, follow-ups)",
      "Social media scheduling automation",
      "Automated reporting dashboards (Google Looker Studio)",
      "AI-based ad optimisation setup",
      "Custom workflow design for your business"
    ],
    deliverables: [
      "Automation flowchart",
      "Live workflow access",
      "Training session"
    ],
    iconName: "Cpu"
  },
  {
    id: "14",
    title: "AI Chatbots & WhatsApp Automation",
    slug: "ai-chatbots-whatsapp",
    subtitle: "Your 24/7 sales rep and support agent — powered by AI.",
    description: "We build and deploy AI-powered chatbots for websites and WhatsApp Business — so your leads are captured, answered, and nurtured even when you are asleep.",
    includes: [
      "WhatsApp Business API setup",
      "Chatbot flow design (welcome, FAQ, lead capture)",
      "AI-powered response training",
      "Catalogue & product showcase via WhatsApp",
      "Appointment booking automation",
      "Broadcast campaigns via WhatsApp",
      "Website chatbot integration",
      "Monthly conversation analytics"
    ],
    deliverables: [
      "Live chatbot",
      "Flow documentation",
      "Monthly report"
    ],
    iconName: "MessageSquare"
  },
  {
    id: "15",
    title: "E-Commerce Solutions",
    slug: "e-commerce-solutions",
    subtitle: "From zero to a revenue-generating online store — end-to-end.",
    description: "We set up and manage complete e-commerce ecosystems — Shopify, WooCommerce, or custom — with everything from product listing to payment gateway to returns management.",
    includes: [
      "Platform recommendation & setup (Shopify / WooCommerce)",
      "Custom store design & development",
      "Product catalog upload & optimisation",
      "Payment gateway & logistics integration",
      "Inventory management setup",
      "Upsell / cross-sell plugins",
      "Customer review & loyalty programme setup",
      "Post-launch marketing strategy"
    ],
    deliverables: [
      "Live store",
      "Operations handbook",
      "Analytics dashboard"
    ],
    iconName: "Store"
  },
  {
    id: "16",
    title: "Video Editing",
    slug: "video-editing",
    subtitle: "Scroll-stopping videos that make your brand impossible to ignore.",
    description: "From reels and YouTube videos to ads and product demos — we edit and produce videos that are optimised for the platform, the audience, and the algorithm.",
    includes: [
      "Short-form video editing (Reels, Shorts, TikTok)",
      "Long-form video editing (YouTube)",
      "Ad video editing (15s, 30s, 60s cuts)",
      "Motion graphics & lower thirds",
      "Subtitles & captions (multilingual)",
      "Brand intro/outro creation",
      "Colour grading & audio mastering",
      "Thumbnail design"
    ],
    deliverables: [
      "Edited video files (1080p / 4K)",
      "Thumbnail files",
      "Multiple format exports"
    ],
    iconName: "Video"
  },
  {
    id: "17",
    title: "Graphic Designing",
    slug: "graphic-designing",
    subtitle: "Visuals that stop the scroll. Designs that speak before words.",
    description: "We create high-quality branded visual content — from social media posts and ad creatives to brand identity kits and print materials — that make your brand look premium at every touchpoint.",
    includes: [
      "Social media post & story designs",
      "Ad creatives (static + animated)",
      "Brand identity kit (logo, colours, typography)",
      "Brochures, flyers, and presentations",
      "Packaging design",
      "Email template design",
      "Banner & hoarding designs",
      "Pitch deck / investor deck design"
    ],
    deliverables: [
      "Source files (AI / PSD)",
      "Print-ready PDFs",
      "Social media optimised exports"
    ],
    iconName: "Paintbrush"
  },
  {
    id: "18",
    title: "Customised Services",
    slug: "customised-services",
    subtitle: "Your business is unique. Your marketing plan should be too.",
    description: "Not every business fits a standard package. We offer fully customised service bundles built around your specific goals, industry, team size, and budget — with dedicated strategy sessions to define the right roadmap.",
    includes: [
      "One-on-one strategy consultation",
      "Custom service bundle design",
      "Dedicated project manager",
      "Flexible billing (monthly / quarterly / project-based)",
      "White-label solutions available for agencies",
      "Priority support & SLA agreements"
    ],
    deliverables: [
      "Custom proposal document",
      "Project roadmap",
      "Dedicated Slack/WhatsApp group"
    ],
    iconName: "Wrench"
  }
];
