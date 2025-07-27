"use client";

import { services } from '@/data/services';
import { GlassButton } from '@/components/ui/glass-button';
import { useState } from 'react';

export function WhatWeDo() {
  const [selected, setSelected] = useState(0);
  
  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Service Categories */}
          <div className="flex flex-col">
            <h2 className="text-3xl md:text-4xl font-sora font-bold tracking-wide leading-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#2300FF] via-[#7B2FF2] to-[#F900BF]">
              What we Do
            </h2>
            
            <div className="flex flex-col gap-3 mb-8">
              {services.map((service, idx) => (
                <button
                  key={service.title}
                  className={`text-left px-4 py-3 rounded-lg transition-all duration-200 font-medium text-lg ${
                    selected === idx 
                      ? 'bg-gradient-to-r from-[#2300FF]/20 via-[#7B2FF2]/20 to-[#F900BF]/20 backdrop-blur-md border border-[#7B2FF2]/30 text-[#2300FF] shadow-lg' 
                      : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                  }`}
                  onClick={() => setSelected(idx)}
                >
                  {service.title}
                </button>
              ))}
            </div>
            
            <GlassButton className="mt-8 text-sm font-medium px-8 py-3 w-fit">
              View all services
            </GlassButton>
          </div>

          {/* Right Column - Service Details */}
          <div className="flex flex-col">
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              We offer specialized services designed to accelerate your business growth and make your operations more efficient.
            </p>
            
            <div className="space-y-6">
              <div className="transition-all duration-300">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#2300FF] via-[#7B2FF2] to-[#F900BF]">
                  {services[selected].title}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {services[selected].description}
                </p>
                <div className="flex items-center gap-3">
                  <button className="group relative overflow-hidden px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-3 bg-gray-100 text-gray-700 hover:bg-gray-200">
                    {/* Background gradient that slides in on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#2300FF] via-[#7B2FF2] to-[#F900BF] transform translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0"></div>
                    
                    {/* Text and arrow that change color on hover */}
                    <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                      Explore Our Services
                    </span>
                    <div className="relative z-10 w-8 h-8 rounded-full bg-gradient-to-r from-[#2300FF] via-[#7B2FF2] to-[#F900BF] flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:scale-110">
                      <svg 
                        className="w-4 h-4 text-white transition-colors duration-300 group-hover:text-blue-600" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M9 5l7 7-7 7" 
                        />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 