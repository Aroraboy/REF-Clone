import { getFaqs } from "@/lib/content";
import { FAQClient } from "./FAQClient";

export async function FAQ() {
  const faqs = await getFaqs();
  return <FAQClient faqs={faqs.map((f) => ({ q: f.question, a: f.answer }))} />;
}
