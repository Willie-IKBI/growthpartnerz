"use client";

import { services } from '@/data/services';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export function WhatWeDo() {
  const [selected, setSelected] = useState(0);
  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto rounded-3xl bg-white flex flex-col md:flex-row items-center gap-8 md:gap-12 p-6 md:p-12">
        <div className="flex-1 flex flex-col gap-2 text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-sora font-bold tracking-wide leading-tight text-left mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            What we Do
          </h2>
          {services.map((service, idx) => (
            <button
              key={service.title}
              className={`text-left px-4 py-2 rounded-lg transition-colors font-medium ${selected === idx ? 'bg-brand-gradient text-white' : 'bg-white/5 text-brand-light hover:bg-brand-pink/10'}`}
              onClick={() => setSelected(idx)}
            >
              {service.title}
            </button>
          ))}
          <Button className="mt-4 bg-brand-gradient text-white font-semibold px-6 py-2 rounded-full">
            View all services
          </Button>
        </div>
        <div className="flex-1 bg-white/5 rounded-xl p-6 shadow-lg flex flex-col justify-center">
          <h3 className="text-xl font-semibold mb-2">{services[selected].title}</h3>
          <p className="text-brand-light mb-4">{services[selected].description}</p>
          <Button className="bg-brand-gradient text-white font-semibold px-6 py-2 rounded-full">
            Explore Service
          </Button>
        </div>
      </div>
    </section>
  );
} 