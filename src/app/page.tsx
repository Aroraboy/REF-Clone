import { CTA } from "@/components/CTA";
import { Events } from "@/components/Events";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Intro } from "@/components/Intro";
import { MobilePromo } from "@/components/MobilePromo";
import { Navbar } from "@/components/Navbar";
import { SocialRail } from "@/components/SocialRail";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
import { WhyJoin } from "@/components/WhyJoin";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <>
      <Navbar />
      <SocialRail />
      <main>
        <Hero />
        <Intro />
        <Stats />
        <MobilePromo />
        <WhyJoin />
        <Events />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
