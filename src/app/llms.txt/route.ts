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
- [Contact](https://chaosdigital.in/contact) - Contact information
- [Pricing](https://chaosdigital.in/pricing) - Pricing details

## Technical Details
This site is built with Next.js, React, and Tailwind CSS.
`;

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
