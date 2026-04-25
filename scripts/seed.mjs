// One-shot Firestore seeder. Run with: node scripts/seed.mjs
// Requires: GOOGLE_APPLICATION_CREDENTIALS env var pointing to your service-account JSON.
import "dotenv/config";
import { initializeApp, cert, applicationDefault } from "firebase-admin/app";
import { getFirestore, Timestamp } from "firebase-admin/firestore";
import { readFileSync } from "node:fs";

const saPath = process.env.GOOGLE_APPLICATION_CREDENTIALS;
if (saPath) {
  const json = JSON.parse(readFileSync(saPath, "utf8"));
  initializeApp({
    credential: cert({
      projectId: json.project_id,
      clientEmail: json.client_email,
      privateKey: json.private_key,
    }),
  });
} else {
  initializeApp({ credential: applicationDefault() });
}

const db = getFirestore();

const ts = (iso) => Timestamp.fromDate(new Date(iso));

const events = [
  {
    slug: "real-estate-legal-strategies-compliance",
    title: "Real Estate Legal Strategies & Compliance",
    tagline: "Structure smart. Raise capital. Protect your deals.",
    status: "upcoming",
    startsAt: ts("2026-04-30T21:00:00Z"),
    endsAt: ts("2026-04-30T22:00:00Z"),
    timezone: "CST",
    location: "Live Virtual Webinar",
    mode: "virtual",
    speaker: { name: "Chris Barsness", title: "Partner, PSBP Law" },
    body: "REF (Real Estate Forum) invites business owners, real estate investors, developers, and industry professionals to an exclusive educational webinar focused on legal structuring, capital raising, and partnership protection. In today's complex regulatory environment, structuring your deals correctly and staying compliant is not optional — it's critical to protecting your investments and scaling confidently.",
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
    slug: "estate-planning-asset-protection",
    title: "Estate Planning & Asset Protection",
    tagline: "Safeguard your legacy. Structure your future.",
    status: "completed",
    startsAt: ts("2026-04-10T21:00:00Z"),
    timezone: "CST",
    location: "Live Virtual Webinar",
    mode: "virtual",
    body: "A comprehensive session on protecting personal wealth and real estate holdings through modern estate-planning structures.",
    coverAccent: "from-slate-700 to-slate-900",
  },
  {
    slug: "ref-connect-dfw-chapter",
    title: "REF CONNECT – DFW Chapter",
    tagline: "Dallas-Fort Worth developer roundtable.",
    status: "completed",
    startsAt: ts("2026-03-20T23:00:00Z"),
    timezone: "CST",
    location: "Dallas, TX",
    mode: "in-person",
    body: "A hands-on evening connecting DFW developers, investors, and city leaders for structured networking and peer-led discussions.",
    coverAccent: "from-indigo-600 to-indigo-900",
  },
];

const blog = [
  {
    slug: "commercial-vs-residential-real-estate-roi-2026",
    title: "Commercial vs Residential Real Estate ROI in 2026",
    excerpt: "Breaking down return profiles, risk exposure, and market timing across commercial and residential segments in 2026.",
    publishedAt: ts("2026-04-16"),
  },
  {
    slug: "7-ways-to-reduce-construction-delays",
    title: "7 Ways to Reduce Construction Delays in Large-Scale Developments",
    excerpt: "Practical delivery tactics from developers who have shipped through labor shortages and permit bottlenecks.",
    publishedAt: ts("2026-03-31"),
  },
  {
    slug: "parking-ratios-first-time-commercial-developers",
    title: "Commonly Overlooked by First-Time Commercial Developers: The True Impact of Parking Ratios",
    excerpt: "Why parking math quietly makes or breaks your pro forma — and how experienced developers plan for it early.",
    publishedAt: ts("2026-03-04"),
  },
  {
    slug: "how-ai-is-changing-real-estate-decisions",
    title: "How AI is quietly changing real estate decision-making",
    excerpt: "From market scouting to underwriting, AI is reshaping how developers and investors move.",
    publishedAt: ts("2026-01-30"),
  },
  {
    slug: "from-permits-to-progress",
    title: "From permits to progress: how cities and developers can move faster together",
    excerpt: "A playbook for public-private collaboration that accelerates entitlements without sacrificing quality.",
    publishedAt: ts("2026-01-09"),
  },
  {
    slug: "why-real-estate-still-breaks",
    title: "Why real estate still breaks, and how collaboration actually fixes it",
    excerpt: "The structural reasons development stalls — and why shared networks outperform siloed workflows.",
    publishedAt: ts("2026-01-01"),
  },
];

const caseStudies = [
  {
    slug: "building-lending-relationships-through-ref",
    title: "Building Lending Relationships Through REF",
    excerpt:
      "A mortgage lending professional was looking to expand their residential lending business, particularly in the Austin market — and used REF's chapter network to do it.",
    publishedAt: ts("2026-04-14"),
  },
];

const testimonials = [
  {
    name: "Nicole Thompson",
    role: "Mayor Pro Tem, City of Leander",
    quote:
      "REF helps bring developers and small businesses to the table so we can identify challenges, improve processes, and grow business in Leander.",
  },
  {
    name: "Shay",
    role: "Representative, Destination Title Group",
    quote:
      "REF brings together real investors and professionals across DFW and Austin, helping us build meaningful connections beyond our day-to-day work.",
  },
  {
    name: "Natomie Blair",
    role: "City Council Candidate, Leander",
    quote:
      "REF creates real connection between city leadership, developers, and the community — ensuring that the priorities of our citizens stay front and center.",
  },
];

const faqs = [
  {
    order: 1,
    question: "What is REF?",
    answer:
      "REF (Real Estate Forum) is a collaborative platform that connects the entire real estate ecosystem — cities, developers, investors, and service providers — under one network to reduce friction and speed up deals.",
  },
  {
    order: 2,
    question: "Who is REF for?",
    answer:
      "REF is for developers, investors, city officials, builders, and service providers who want to collaborate on real estate projects and build long-term relationships in their markets.",
  },
  {
    order: 3,
    question: "What happens at REF Connect events?",
    answer:
      "REF Connect events are curated, city-led gatherings featuring roundtables, panels with policy-makers, and structured networking so you leave with real relationships and actionable insights.",
  },
  {
    order: 4,
    question: "How does REF help me beyond networking?",
    answer:
      "Beyond events, the REF app provides AI-powered matching, chapter feeds, curated resources, and year-round visibility so your network keeps compounding.",
  },
  {
    order: 5,
    question: "How to join REF chapter?",
    answer:
      "Apply through the Membership page — pick your city chapter, complete a short application, and our team will onboard you and invite you to the next chapter event.",
  },
];

async function seedCollection(name, docs, idFn = (d) => d.slug ?? d.id) {
  const col = db.collection(name);
  const batch = db.batch();
  for (const d of docs) {
    const id = idFn(d);
    batch.set(col.doc(id), d, { merge: true });
  }
  await batch.commit();
  console.log(`✓ seeded ${docs.length} → ${name}`);
}

async function main() {
  await seedCollection("events", events);
  await seedCollection("blog", blog);
  await seedCollection("caseStudies", caseStudies);
  await seedCollection("testimonials", testimonials, (d, i) => `t-${i ?? d.name.replace(/\s+/g, "-").toLowerCase()}`);
  await seedCollection("faqs", faqs, (d) => `faq-${d.order}`);
  console.log("done.");
  process.exit(0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
