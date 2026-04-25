import "server-only";
import { getAdminDb } from "./firebase/admin";
import { Timestamp } from "firebase-admin/firestore";

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
  cover?: string;
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

function toISO(v: unknown): string {
  if (v instanceof Timestamp) return v.toDate().toISOString();
  if (v instanceof Date) return v.toISOString();
  if (typeof v === "string") return v;
  return new Date().toISOString();
}

export async function getEvents(): Promise<EventDoc[]> {
  const snap = await getAdminDb()
    .collection("events")
    .orderBy("startsAt", "desc")
    .get();
  return snap.docs.map((d) => {
    const data = d.data();
    return {
      id: d.id,
      slug: data.slug ?? d.id,
      title: data.title,
      tagline: data.tagline,
      status: data.status,
      startsAt: toISO(data.startsAt),
      endsAt: data.endsAt ? toISO(data.endsAt) : undefined,
      timezone: data.timezone,
      location: data.location,
      mode: data.mode,
      speaker: data.speaker,
      body: data.body,
      highlights: data.highlights,
      coverAccent: data.coverAccent,
    };
  });
}

export async function getUpcomingEvent(): Promise<EventDoc | null> {
  const snap = await getAdminDb()
    .collection("events")
    .where("status", "==", "upcoming")
    .orderBy("startsAt", "asc")
    .limit(1)
    .get();
  if (snap.empty) return null;
  const events = await getEvents();
  return events.find((e) => e.id === snap.docs[0].id) ?? null;
}

export async function getEventBySlug(slug: string): Promise<EventDoc | null> {
  const snap = await getAdminDb()
    .collection("events")
    .where("slug", "==", slug)
    .limit(1)
    .get();
  if (snap.empty) return null;
  const events = await getEvents();
  return events.find((e) => e.id === snap.docs[0].id) ?? null;
}

export async function getBlogPosts(): Promise<BlogDoc[]> {
  const snap = await getAdminDb()
    .collection("blog")
    .orderBy("publishedAt", "desc")
    .get();
  return snap.docs.map((d) => {
    const data = d.data();
    return {
      id: d.id,
      slug: data.slug ?? d.id,
      title: data.title,
      excerpt: data.excerpt,
      body: data.body,
      publishedAt: toISO(data.publishedAt),
      cover: data.cover,
    };
  });
}

export async function getBlogBySlug(slug: string): Promise<BlogDoc | null> {
  const snap = await getAdminDb()
    .collection("blog")
    .where("slug", "==", slug)
    .limit(1)
    .get();
  if (snap.empty) return null;
  const posts = await getBlogPosts();
  return posts.find((p) => p.id === snap.docs[0].id) ?? null;
}

export async function getCaseStudies(): Promise<CaseStudyDoc[]> {
  const snap = await getAdminDb()
    .collection("caseStudies")
    .orderBy("publishedAt", "desc")
    .get();
  return snap.docs.map((d) => {
    const data = d.data();
    return {
      id: d.id,
      slug: data.slug ?? d.id,
      title: data.title,
      excerpt: data.excerpt,
      body: data.body,
      publishedAt: toISO(data.publishedAt),
    };
  });
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudyDoc | null> {
  const snap = await getAdminDb()
    .collection("caseStudies")
    .where("slug", "==", slug)
    .limit(1)
    .get();
  if (snap.empty) return null;
  const studies = await getCaseStudies();
  return studies.find((c) => c.id === snap.docs[0].id) ?? null;
}

export async function getTestimonials(): Promise<TestimonialDoc[]> {
  const snap = await getAdminDb().collection("testimonials").get();
  return snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<TestimonialDoc, "id">) }));
}

export async function getFaqs(): Promise<FaqDoc[]> {
  const snap = await getAdminDb().collection("faqs").orderBy("order", "asc").get();
  return snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<FaqDoc, "id">) }));
}
