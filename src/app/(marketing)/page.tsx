import { Header } from '@/components/layout/header';
import { Hero } from '@/components/sections/hero';
import { WhyChooseUs } from '@/components/sections/why-choose-us';
import { WhatWeDo } from '@/components/sections/what-we-do';
import { ResultsAndIndustries } from '@/components/sections/results-and-industries';

export default function MarketingHome() {
  return (
    <>
      <Header />
      <Hero />
      <WhyChooseUs />
      <WhatWeDo />
      <ResultsAndIndustries />
    </>
  );
} 