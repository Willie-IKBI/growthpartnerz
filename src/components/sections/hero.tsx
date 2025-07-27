'use client';

import { Button } from '@/components/ui/button';
import { GlassButton } from '@/components/ui/glass-button';

export function Hero() {
  return (
    <section
      className="relative min-h-[80vh] md:min-h-[60vh] flex flex-col justify-center items-center text-center px-4 md:px-8 bg-cover bg-center bg-no-repeat pt-24 md:pt-0"
      style={{ backgroundImage: "url('/images/hero-bg.png.png')" }}
    >
      {/* Overlay 1: hero-bg-overlay.png */}
      <div
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: "url('/images/hero-bg-overlay.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.7,
        }}
      />

      {/* Overlay 2: Darker blue glow */}
      <div
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(circle at 60% 40%, rgba(30,64,175,0.22) 0%, rgba(30,64,175,0.10) 60%, transparent 100%)',
          filter: 'blur(8px)',
        }}
      />

      {/* Foreground content */}
      <div className="relative z-10 max-w-5xl px-4 md:px-6 flex flex-col items-center text-white space-y-6 md:space-y-4">
        <h1 className="text-2xl md:text-2xl font-bold font-sora leading-tight text-center">
          Accelerate Your Sales
        </h1>
        <div className="text-3xl md:text-4xl font-sora font-light tracking-wide leading-tight text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
          Custom Software & Proven Lead Generation
        </div>
        <p className="text-base md:text-base lg:text-base text-slate-200/90 leading-relaxed text-center max-w-3xl">
          We deliver custom software solutions and data-driven lead generation systems to help your
          business scale fast. Whether it's websites, mobile apps, CRM tools, or lead gen strategies,
          we provide everything you need to grow quickly and efficiently.
        </p>
        {/* Enhanced CTA Button with better mobile touch target */}
        <div className="mt-8 md:mt-8 w-full max-w-sm md:max-w-none">
          <GlassButton className="w-full md:w-auto text-sm md:text-base font-thin px-8 py-4 md:py-3 min-h-[48px] md:min-h-[44px] flex items-center justify-center">
            Discover How We Can Help You Grow Today
          </GlassButton>
        </div>
      </div>
    </section>
  );
}
