import { Hero } from "@/components/sections/Hero";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { FinalCta } from "@/components/sections/FinalCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <HowItWorks />
      <PartnersSection />
      <FinalCta />
    </>
  );
}
