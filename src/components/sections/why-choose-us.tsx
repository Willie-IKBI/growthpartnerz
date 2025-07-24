"use client";
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { GlassButton } from '@/components/ui/glass-button';
import Image from 'next/image';

export function WhyChooseUs() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      {/* Scrolling marquee line - test with Tailwind default gradient colors */}
      <div className="w-full overflow-hidden bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 py-2 px-0">
        <div className="whitespace-nowrap animate-marquee text-white font-semibold text-base md:text-lg tracking-wide">
          <span className="inline-block mr-8">Front-End Development ✦</span>
          <span className="inline-block mr-8">Full-Stack Development ✦</span>
          <span className="inline-block mr-8">JavaScript ✦</span>
          <span className="inline-block mr-8">React ✦</span>
          <span className="inline-block mr-8">Node.js ✦</span>
          <span className="inline-block mr-8">Databases ✦</span>
          <span className="inline-block mr-8">Machine Learning (ML) ✦</span>
          <span className="inline-block mr-8">Cloud Computing ✦</span>
          <span className="inline-block mr-8">DevOps ✦</span>
          <span className="inline-block mr-8">Front-End Development ✦</span>
          <span className="inline-block mr-8">Full-Stack Development ✦</span>
          <span className="inline-block mr-8">JavaScript ✦</span>
          <span className="inline-block mr-8">React ✦</span>
          <span className="inline-block mr-8">Node.js ✦</span>
          <span className="inline-block mr-8">Databases ✦</span>
          <span className="inline-block mr-8">Machine Learning (ML) ✦</span>
          <span className="inline-block mr-8">Cloud Computing ✦</span>
          <span className="inline-block mr-8">DevOps ✦</span>
        </div>
      </div>
      {/* Second marquee with white background and dark text */}
      <div className="w-full overflow-hidden bg-white py-2 px-0 border-b border-slate-200">
        <div className="whitespace-nowrap animate-marquee-slow text-slate-800 font-semibold text-base md:text-lg tracking-wide">
          <span className="inline-block mr-8">CRM (Customer Relationship Management) ✦</span>
          <span className="inline-block mr-8">Lead Nurturing ✦</span>
          <span className="inline-block mr-8">Lead Scoring ✦</span>
          <span className="inline-block mr-8">Email Marketing ✦</span>
          <span className="inline-block mr-8">Inbound Marketing ✦</span>
          <span className="inline-block mr-8">Content Marketing ✦</span>
          <span className="inline-block mr-8">Landing Pages ✦</span>
          <span className="inline-block mr-8">CRM (Customer Relationship Management) ✦</span>
          <span className="inline-block mr-8">Lead Nurturing ✦</span>
          <span className="inline-block mr-8">Lead Scoring ✦</span>
          <span className="inline-block mr-8">Email Marketing ✦</span>
          <span className="inline-block mr-8">Inbound Marketing ✦</span>
          <span className="inline-block mr-8">Content Marketing ✦</span>
          <span className="inline-block mr-8">Landing Pages ✦</span>
        </div>
      </div>
      <section className="bg-white py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto rounded-3xl bg-white flex flex-col md:flex-row items-center gap-8 md:gap-12 p-6 md:p-12">
          <div className="flex-1 text-center md:text-left">
            <div className="text-sm font-bold text-slate-500 mb-2 tracking-wider">Why choose us</div>
            <h2 className="text-2xl md:text-4xl font-sora font-light tracking-wide leading-tight text-left mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              Why Businesses <span>Choose</span> <span className="font-bold">Growth Partnerz</span>
            </h2>
            <p className="text-slate-600 mb-2 max-w-lg mx-auto md:mx-0">
              In today’s digital landscape, it’s not enough to have a service provider, you need a partner who understands your unique challenges, aligns with your vision, and delivers measurable results.
            </p>
            <p className="text-slate-600 mb-6 max-w-lg mx-auto md:mx-0">
              At Growth Partners, we go beyond generic solutions. We offer personalized software development and lead generation strategies that are tailored to fit your business needs, no matter your industry. With over 200 successful projects and a global team of 50+ development and marketing specialists, we’re equipped to help you scale efficiently and quickly.
            </p>
            <GlassButton className="mt-8 text-sm md:text-base font-thin px-8 py-3">
              See How We’ve Helped Businesses Like Yours
            </GlassButton>
          </div>
          <div className="flex-1 flex justify-center items-center relative">
            {/* Removed decorative gradient circle */}
            <div
              className="relative w-72 h-96 md:w-80 md:h-[28rem] flex items-center justify-center"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Image
                src={isHovered ? "/images/Mobile App Hover.png" : "/images/Mobile App.png"}
                alt="Phone mockup"
                fill
                className={`object-contain transition-all duration-300 transform ${isHovered ? 'translate-x-4' : 'translate-x-0'}`}
                priority
              />
            </div>
          </div>
        </div>
        {/* Lower dark card area */}
        <div className="bg-[#18192a] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 shadow-xl">
          <div className="relative w-full md:w-1/2 h-64 flex items-center justify-center">
            <Image
              src="/images/video_placeholder1.png"
              alt="Video preview"
              fill
              className="object-cover rounded-2xl"
              priority
            />
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16" r="16" fill="#fff" fillOpacity="0.7" />
                  <polygon points="13,11 22,16 13,21" fill="#6C47FF" />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">How do we help you grow?</h3>
            <p className="text-slate-200/90 text-base md:text-lg leading-relaxed">
              We stay ahead of the curve with the latest technologies and industry trends to deliver top-notch solutions.
            </p>
          </div>
        </div>
      </section>
    </>
  );
} 