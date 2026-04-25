// Static content source. Matches the shape of lib/content.ts so pages can be
// switched to Firestore later by changing one import.

export type EventDoc = {
  id: string;
  slug: string;
  title: string;
  tagline?: string;
  status: "upcoming" | "completed";
  startsAt: string;
  endsAt?: string;
  timezone?: string;
  location: string;
  mode: "virtual" | "in-person";
  speaker?: { name: string; title: string };
  body?: string;
  highlights?: string[];
  coverAccent?: string;
};

export type BlogDoc = {
  id: string;
  slug: string;
  title: string;
  excerpt?: string;
  body?: string;
  publishedAt: string;
};

export type CaseStudyDoc = {
  id: string;
  slug: string;
  title: string;
  excerpt?: string;
  body?: string;
  publishedAt: string;
};

export type TestimonialDoc = {
  id: string;
  name: string;
  role: string;
  quote: string;
};

export type FaqDoc = {
  id: string;
  order: number;
  question: string;
  answer: string;
};

const EVENTS: EventDoc[] = [
  {
    id: "real-estate-legal-strategies-compliance",
    slug: "real-estate-legal-strategies-compliance",
    title: "Real Estate Legal Strategies & Compliance",
    tagline: "Structure smart. Raise capital. Protect your deals.",
    status: "upcoming",
    startsAt: "2026-04-30T21:00:00Z",
    endsAt: "2026-04-30T22:00:00Z",
    timezone: "CST",
    location: "Live Virtual Webinar",
    mode: "virtual",
    speaker: { name: "Chris Barsness", title: "Partner, PSBP Law" },
    body:
      "REF (Real Estate Forum) invites business owners, real estate investors, developers, and industry professionals to an exclusive educational webinar focused on legal structuring, capital raising, and partnership protection. In today's complex regulatory environment, structuring your deals correctly and staying compliant is not optional — it's critical to protecting your investments and scaling confidently.",
    highlights: [
      "Legal entity structuring strategies for real estate investments (LLCs, LPs, and more)",
      "Capital raising best practices while staying compliant with securities laws",
      "Partnership agreements designed to protect your interests and exits",
      "Proven methods to safeguard your portfolio from disputes and legal risks",
      "Practical, real-world legal strategies you can apply in your next deal",
    ],
    coverAccent: "from-[#1a3fea] to-[#0a1e8f]",
  },
  {
    id: "estate-planning-asset-protection",
    slug: "estate-planning-asset-protection",
    title: "Estate Planning & Asset Protection",
    tagline: "Safeguard your legacy. Structure your future.",
    status: "completed",
    startsAt: "2026-04-10T21:00:00Z",
    timezone: "CST",
    location: "Live Virtual Webinar",
    mode: "virtual",
    body: "A comprehensive session on protecting personal wealth and real estate holdings through modern estate-planning structures.",
    coverAccent: "from-slate-700 to-slate-900",
  },
  {
    id: "ref-connect-dfw-chapter",
    slug: "ref-connect-dfw-chapter",
    title: "REF CONNECT – DFW Chapter",
    tagline: "Dallas-Fort Worth developer roundtable.",
    status: "completed",
    startsAt: "2026-03-20T23:00:00Z",
    timezone: "CST",
    location: "Dallas, TX",
    mode: "in-person",
    body: "A hands-on evening connecting DFW developers, investors, and city leaders for structured networking and peer-led discussions.",
    coverAccent: "from-indigo-600 to-indigo-900",
  },
];

const BLOG: BlogDoc[] = [
  {
    id: "commercial-vs-residential-real-estate-roi-2026",
    slug: "commercial-vs-residential-real-estate-roi-2026",
    title: "Commercial vs Residential Real Estate ROI in 2026",
    excerpt:
      "Breaking down return profiles, risk exposure, and market timing across commercial and residential segments in 2026.",
    body:
      "In 2026, the gap between commercial and residential return profiles has widened as interest-rate volatility continues to reshape underwriting assumptions. This post breaks down where returns actually come from, which risks are mispriced, and how to think about allocation across both segments.",
    publishedAt: "2026-04-16",
  },
  {
    id: "7-ways-to-reduce-construction-delays",
    slug: "7-ways-to-reduce-construction-delays",
    title: "7 Ways to Reduce Construction Delays in Large-Scale Developments",
    excerpt: "Practical delivery tactics from developers who have shipped through labor shortages and permit bottlenecks.",
    body:
      "Construction delays rarely have a single cause — they compound. Here are seven tactical moves that consistently cut months off large-scale projects: early trade commitments, long-lead procurement, stacked permit submittals, integrated schedule reviews, dedicated owner-rep coverage, conflict-resolved 3D coordination, and weekly risk logs.",
    publishedAt: "2026-03-31",
  },
  {
    id: "parking-ratios-first-time-commercial-developers",
    slug: "parking-ratios-first-time-commercial-developers",
    title:
      "Commonly Overlooked by First-Time Commercial Developers: The True Impact of Parking Ratios",
    excerpt:
      "Why parking math quietly makes or breaks your pro forma — and how experienced developers plan for it early.",
    body:
      "Parking ratios influence everything from site plan efficiency to financing. A ratio that looks reasonable on paper can eat 10% of your rentable area and destroy your returns. Understanding the tradeoffs early saves rework and keeps your pro forma honest.",
    publishedAt: "2026-03-04",
  },
  {
    id: "how-ai-is-changing-real-estate-decisions",
    slug: "how-ai-is-changing-real-estate-decisions",
    title: "How AI is quietly changing real estate decision-making",
    excerpt:
      "From market scouting to underwriting, AI is reshaping how developers and investors move.",
    body:
      "AI is less about flashy forecasts and more about closing the gap between data, decision, and action. Market scouts, underwriting copilots, and diligence accelerators are already compressing weeks of work into days for serious shops.",
    publishedAt: "2026-01-30",
  },
  {
    id: "from-permits-to-progress",
    slug: "from-permits-to-progress",
    title:
      "From permits to progress: how cities and developers can move faster together",
    excerpt:
      "A playbook for public-private collaboration that accelerates entitlements without sacrificing quality.",
    body:
      "Speed and quality aren't in conflict — misaligned incentives are. When cities and developers align on shared milestones, clear review windows, and transparent feedback loops, entitlement timelines collapse.",
    publishedAt: "2026-01-09",
  },
  {
    id: "why-real-estate-still-breaks",
    slug: "why-real-estate-still-breaks",
    title: "Why real estate still breaks, and how collaboration actually fixes it",
    excerpt:
      "The structural reasons development stalls — and why shared networks outperform siloed workflows.",
    body:
      "Development keeps breaking in the same places: capital timing, entitlement ambiguity, and trade coordination. None of those get solved by working harder alone. They get solved by networks that move information faster than the market does.",
    publishedAt: "2026-01-01",
  },
];

const CASE_STUDIES: CaseStudyDoc[] = [
  {
    id: "building-lending-relationships-through-ref",
    slug: "building-lending-relationships-through-ref",
    title: "Building Lending Relationships Through REF",
    excerpt:
      "A mortgage lending professional was looking to expand their residential lending business, particularly in the Austin market — and used REF's chapter network to do it.",
    body:
      "A mortgage lending professional was looking to expand their residential lending business, particularly in the Austin market. Through REF's chapter events and AI-powered matching, they connected with three developers in their first month and closed two lending relationships within the quarter. This case study breaks down what worked, where friction showed up, and the key patterns that made conversations convert into deals.",
    publishedAt: "2026-04-14",
  },
];

const TESTIMONIALS: TestimonialDoc[] = [
  {
    id: "t-nicole",
    name: "Nicole Thompson",
    role: "Mayor Pro Tem, City of Leander",
    quote:
      "REF helps bring developers and small businesses to the table so we can identify challenges, improve processes, and grow business in Leander.",
  },
  {
    id: "t-shay",
    name: "Shay",
    role: "Representative, Destination Title Group",
    quote:
      "REF brings together real investors and professionals across DFW and Austin, helping us build meaningful connections beyond our day-to-day work.",
  },
  {
    id: "t-natomie",
    name: "Natomie Blair",
    role: "City Council Candidate, Leander",
    quote:
      "REF creates real connection between city leadership, developers, and the community — ensuring that the priorities of our citizens stay front and center.",
  },
];

const FAQS: FaqDoc[] = [
  {
    id: "faq-1",
    order: 1,
    question: "What is REF?",
    answer:
      "REF (Real Estate Forum) is a collaborative platform that connects the entire real estate ecosystem — cities, developers, investors, and service providers — under one network to reduce friction and speed up deals.",
  },
  {
    id: "faq-2",
    order: 2,
    question: "Who is REF for?",
    answer:
      "REF is for developers, investors, city officials, builders, and service providers who want to collaborate on real estate projects and build long-term relationships in their markets.",
  },
  {
    id: "faq-3",
    order: 3,
    question: "What happens at REF Connect events?",
    answer:
      "REF Connect events are curated, city-led gatherings featuring roundtables, panels with policy-makers, and structured networking so you leave with real relationships and actionable insights.",
  },
  {
    id: "faq-4",
    order: 4,
    question: "How does REF help me beyond networking?",
    answer:
      "Beyond events, the REF app provides AI-powered matching, chapter feeds, curated resources, and year-round visibility so your network keeps compounding.",
  },
  {
    id: "faq-5",
    order: 5,
    question: "How to join REF chapter?",
    answer:
      "Apply through the Membership page — pick your city chapter, complete a short application, and our team will onboard you and invite you to the next chapter event.",
  },
];

export async function getEvents() { return EVENTS; }
export async function getUpcomingEvent() {
  return EVENTS.find((e) => e.status === "upcoming") ?? null;
}
export async function getEventBySlug(slug: string) {
  return EVENTS.find((e) => e.slug === slug) ?? null;
}
export async function getBlogPosts() { return BLOG; }
export async function getBlogBySlug(slug: string) {
  return BLOG.find((p) => p.slug === slug) ?? null;
}
export async function getCaseStudies() { return CASE_STUDIES; }
export async function getCaseStudyBySlug(slug: string) {
  return CASE_STUDIES.find((c) => c.slug === slug) ?? null;
}
export async function getTestimonials() { return TESTIMONIALS; }
export async function getFaqs() { return FAQS; }
