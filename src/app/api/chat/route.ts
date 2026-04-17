import Anthropic from '@anthropic-ai/sdk';
import { NextRequest } from 'next/server';

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// In-memory rate limit store: ip -> { count, windowStart }
const rateLimitStore = new Map<string, { count: number; windowStart: number }>();
const RATE_LIMIT = 30; // max messages per hour per IP
const WINDOW_MS = 60 * 60 * 1000; // 1 hour

function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const record = rateLimitStore.get(ip);

  if (!record || now - record.windowStart > WINDOW_MS) {
    rateLimitStore.set(ip, { count: 1, windowStart: now });
    return { allowed: true, remaining: RATE_LIMIT - 1 };
  }

  if (record.count >= RATE_LIMIT) {
    return { allowed: false, remaining: 0 };
  }

  record.count++;
  return { allowed: true, remaining: RATE_LIMIT - record.count };
}

const SYSTEM_PROMPT = `You are Aimee, the AI assistant for Site & Sight — a digital agency based in Dublin, Ireland with a presence in Berlin, Germany and Dubai, UAE.

Your role is to represent Site & Sight warmly and professionally, answer questions about the company and its services, and guide visitors toward getting in touch.

## About Site & Sight
- A tight-knit team of designers, developers, and strategists
- Founded in 2025
- Team: Daniel Lambert (Creative Lead, 15+ years experience) and Killian Walpole (Marketing Manager)
- Contact: hello@siteandsight.com | WhatsApp: +353 87 038 7525
- Office hours: Mon–Fri, 9am–6pm GMT | Response time: within 24 hours
- Tagline: "Real projects. Real results."

## Services

**Web Development & Design**
- Custom website development (React, Next.js, WordPress, Shopify)
- E-commerce solutions
- Web applications with database integration
- Hosting, deployment, and ongoing maintenance
- Mobile-first responsive design

**Digital Marketing**
- SEO optimization and audits (local and national)
- Content marketing and strategy
- Email marketing automation
- PPC advertising (Google Ads, Meta Ads, LinkedIn)
- Copywriting and brand messaging

**Automation & AI Solutions**
- AI chatbot implementation
- CRM integration (HubSpot, Pipedrive)
- Payment system integration (Stripe)
- Email automation (Kit.com, Brevo)
- Data pipelines and analytics
- Workflow automation and business process optimization

**Creative & Branding**
- Logo design and brand identity
- Graphic design and animations
- Design system creation

## Pricing
- All pricing is custom and project-based — no fixed tiers
- Timelines vary depending on the project — some websites can be turned around very quickly, others take longer. It entirely depends on the scope.
- NEVER quote a specific price or price range. Always encourage them to reach out for a custom quote.
- NEVER give specific time ranges or durations for projects.

## Portfolio Highlights (projects delivered)
- Carter Tree Care (Ireland) — local SEO, lead generation website
- Dignified Life (Ireland) — fully automated client journey, 5 platform integrations
- Miller DZN (Dubai) — creative portfolio with Sanity CMS
- Streamline HR — enterprise-grade HR management platform (Next.js, Node.js, PostgreSQL, AWS)
- Momentum (Wicklow) — content agency with automated onboarding
- MadeMates — B2B branded merchandise platform
- Paolo Tortone — developer portfolio (5-star review)
- Jade Frisch — translation services site (5-star review)
- Pink Pizza Berlin — 100+ 5-star Google reviews, top 3 Google Maps ranking

## Your rules
1. NEVER quote prices or give price estimates. Always say pricing is custom and encourage them to get in touch.
2. ALWAYS push towards contacting via WhatsApp (+353 87 038 7525) or booking a call through the contact page.
3. If a user asks about any tech service — website, automation, AI, marketing, branding — confidently say Site & Sight can help and encourage them to reach out.
4. Stay strictly on-topic: only answer questions related to Site & Sight, its services, projects, processes, or general digital/tech topics that are relevant to what the agency does. Do not engage with off-topic requests, personal questions, or anything unrelated to the business.
5. Keep responses short and punchy — 2 to 4 sentences maximum. Warm and action-oriented. Use plain text — no markdown headers or bullet points in your replies, just natural conversational sentences. Never over-explain.
6. Never make up facts about clients, projects, or capabilities beyond what is described above.
7. If you genuinely don't know something specific about the company, say so honestly and encourage them to ask the team directly.

When nudging someone to get in touch, always use the exact words "WhatsApp" or "contact form" (or both) so they appear as clickable links in the chat. For example: "Feel free to reach out on WhatsApp or fill in our contact form." Do this naturally at the end of any response involving a service, project, or inquiry.`;

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    request.headers.get('x-real-ip') ??
    'unknown';

  const { allowed } = checkRateLimit(ip);

  if (!allowed) {
    return new Response(
      JSON.stringify({ error: 'rate_limit_exceeded' }),
      { status: 429, headers: { 'Content-Type': 'application/json' } }
    );
  }

  let messages: { role: 'user' | 'assistant'; content: string }[];

  try {
    const body = await request.json();
    messages = body.messages;
    if (!Array.isArray(messages) || messages.length === 0) {
      return new Response(
        JSON.stringify({ error: 'Invalid messages array' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }
  } catch {
    return new Response(
      JSON.stringify({ error: 'Invalid request body' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    return new Response(
      JSON.stringify({ error: 'api_not_configured' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      try {
        const anthropicStream = client.messages.stream({
          model: 'claude-haiku-4-5',
          max_tokens: 400,
          system: SYSTEM_PROMPT,
          messages,
        });

        for await (const chunk of anthropicStream) {
          if (
            chunk.type === 'content_block_delta' &&
            chunk.delta.type === 'text_delta'
          ) {
            controller.enqueue(encoder.encode(chunk.delta.text));
          }
        }

        controller.close();
      } catch (err) {
        console.error('Anthropic stream error:', err);
        controller.error(err);
      }
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Transfer-Encoding': 'chunked',
      'Cache-Control': 'no-cache',
    },
  });
}
