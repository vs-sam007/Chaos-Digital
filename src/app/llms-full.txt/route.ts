import { NextResponse } from 'next/server';
import { servicesData } from '@/data/services';
import { blogsData } from '@/data/blogs';

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

  content += `\n## Strategic Growth Articles & Guides (SEO/AEO/GEO)\n`;

  blogsData.forEach((blog) => {
    content += `\n### ${blog.title}\n`;
    content += `**URL**: https://chaosdigital.in/blog/${blog.slug}\n`;
    content += `**Category**: ${blog.category} | **Published**: ${blog.date}\n`;
    content += `**Excerpt**: ${blog.excerpt}\n\n`;
    content += `**Direct Answer / AEO Summary**: ${blog.aeoDirectAnswer}\n\n`;
    
    blog.sections.forEach((section) => {
      content += `#### ${section.title}\n`;
      content += `${section.content}\n\n`;
      if (section.keyTakeaway) {
        content += `*Key Takeaway: ${section.keyTakeaway}*\n\n`;
      }
    });

    content += `**Frequently Asked Questions:**\n`;
    blog.faqs.forEach((faq) => {
      content += `Q: ${faq.question}\nA: ${faq.answer}\n\n`;
    });
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
