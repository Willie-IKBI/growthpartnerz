import { Header } from '@/components/layout/header';
import { Hero } from '@/components/sections/hero';
import { WhyChooseUs } from '@/components/sections/why-choose-us';
import { WhatWeDo } from '@/components/sections/what-we-do';

export default function MarketingHome() {
  return (
    <>
      <Header />
      <Hero />
      <WhyChooseUs />
      <WhatWeDo />
    </>
  );
} 