import { NextResponse } from 'next/server';
import { servicesData } from '@/data/services';

export async function GET() {
  let content = `# Chaos Digital - Full Documentation

> Premium digital marketing, SEO, and web development agency based in Lucknow. We build revenue-driven growth systems and AI automations for ambitious brands.

## About Us
Chaos Digital is a premium digital marketing, SEO, and web development agency based in Lucknow, Uttar Pradesh, serving clients across India. We believe in building revenue-driven growth systems.

## Services Overview
`;

  servicesData.forEach((service) => {
    content += `\n### ${service.title}\n`;
    content += `**Subtitle**: ${service.subtitle}\n\n`;
    content += `${service.description}\n\n`;
    
    content += `**What's Included:**\n`;
    service.includes.forEach(inc => content += `- ${inc}\n`);
    
    content += `\n**Deliverables:**\n`;
    service.deliverables.forEach(del => content += `- ${del}\n`);
  });

  content += `\n## Contact Information
Website: https://chaosdigital.in
Location: Lucknow, Uttar Pradesh, IN
`;

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
