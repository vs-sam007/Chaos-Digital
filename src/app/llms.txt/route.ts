import { NextResponse } from 'next/server';

export async function GET() {
  const content = `# Chaos Digital

> Premium digital marketing, SEO, and web development agency based in Lucknow. We build revenue-driven growth systems and AI automations for ambitious brands.

## Documentation
- [Full Markdown Mirror](https://chaosdigital.in/llms-full.txt) - The complete text content of the website

## Key Pages
- [Home](https://chaosdigital.in/) - Main landing page
- [About Us](https://chaosdigital.in/about) - Information about Chaos Digital
- [Services](https://chaosdigital.in/services) - Overview of our digital marketing services
- [Work](https://chaosdigital.in/work) - Our portfolio and past projects
- [Blog & Insights](https://chaosdigital.in/blog) - Guides on SEO, GEO, and AI growth in Lucknow
- [Pricing](https://chaosdigital.in/pricing) - Pricing details
- [Contact](https://chaosdigital.in/contact) - Contact information

## Featured Articles & Masterclasses
- [Generative Engine Optimization (GEO) in Lucknow: How Local Brands Get Recommended by ChatGPT & Perplexity](https://chaosdigital.in/blog/generative-engine-optimization-geo-lucknow-ai-search)
- [The 2026 Guide to Local SEO & GEO in Lucknow](https://chaosdigital.in/blog/local-seo-lucknow-geo-guide)
- [Why Lucknow Enterprises Are Replacing WordPress with Next.js & AI Agents](https://chaosdigital.in/blog/nextjs-website-development-ai-automation-lucknow)
- [10x Growth: Proven Digital Marketing Strategies for Lucknow Brands](https://chaosdigital.in/blog/top-digital-marketing-strategies-lucknow-brands)

## Technical Details
This site is built with Next.js, React, and Tailwind CSS.
`;

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
