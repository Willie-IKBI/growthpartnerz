"use client";

import { GlassButton } from '@/components/ui/glass-button';

export function ResultsAndIndustries() {
  const results = [
    {
      icon: <div className="w-16 h-16 rounded-full bg-[#2300FF]/30 backdrop-blur-md border border-[#7B2FF2]/30 shadow-lg flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-[#2300FF] group-hover:via-[#7B2FF2] group-hover:to-[#F900BF] group-hover:backdrop-blur-0 group-hover:border-[#7B2FF2]">
        <img src="/images/leads_icon.png" alt="Leads icon" className="w-8 h-8 object-contain" />
      </div>,
      title: "30% Increase in Lead Conversions:",
      description: "Our targeted lead generation campaigns and automation strategies drive significant improvements in conversion rates."
    },
    {
      icon: <div className="w-16 h-16 rounded-full bg-[#2300FF]/30 backdrop-blur-md border border-[#7B2FF2]/30 shadow-lg flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-[#2300FF] group-hover:via-[#7B2FF2] group-hover:to-[#F900BF] group-hover:backdrop-blur-0 group-hover:border-[#7B2FF2]">
        <img src="/images/boost_icon.png" alt="Boost icon" className="w-8 h-8 object-contain" />
      </div>,
      title: "25% Boost in Close Rates:",
      description: "HighLevel's automated follow-ups, drip campaigns, and strategic engagement have led to a 25% improvement in close rates, helping businesses close deals faster and more efficiently."
    },
    {
      icon: <div className="w-16 h-16 rounded-full bg-[#2300FF]/30 backdrop-blur-md border border-[#7B2FF2]/30 shadow-lg flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-[#2300FF] group-hover:via-[#7B2FF2] group-hover:to-[#F900BF] group-hover:backdrop-blur-0 group-hover:border-[#7B2FF2]">
        <img src="/images/eff_icon.png" alt="Efficiency icon" className="w-8 h-8 object-contain" />
      </div>,
      title: "50% Boost in Operational Efficiency:",
      description: "Our custom software and automation workflows eliminate manual tasks and speed up sales and internal processes."
    },
    {
      icon: <div className="w-16 h-16 rounded-full bg-[#2300FF]/30 backdrop-blur-md border border-[#7B2FF2]/30 shadow-lg flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-[#2300FF] group-hover:via-[#7B2FF2] group-hover:to-[#F900BF] group-hover:backdrop-blur-0 group-hover:border-[#7B2FF2]">
        <img src="/images/engage_icon.png" alt="Engagement icon" className="w-8 h-8 object-contain" />
      </div>,
      title: "60% Faster Client Engagement:",
      description: "By using real-time lead tracking and automated responses, we help you engage with leads faster, closing deals quicker than ever before."
    }
  ];

  const industries = [
    {
      image: "/images/ecommerce_bw.jpg",
      imageHover: "/images/ecommerce.jpg",
      title: "E-commerce",
      description: "Custom-built platforms that integrate seamlessly with payment gateways and inventory management systems."
    },
    {
      image: "/images/finance_bw.jpg",
      imageHover: "/images/finance.jpg",
      title: "Finance",
      description: "CRM systems and automation tools to manage client pipelines and improve financial planning services."
    },
    {
      image: "/images/industries_bw.jpg",
      imageHover: "/images/industries.jpg",
      title: "Other Industries",
      description: "We provided software and automation solutions that enhanced efficiency and improved client eng. read more>"
    }
  ];

  return (
    <section className="relative mb-16 p-0 bg-white">
      {/* SVG Curve as Background - Dynamic Height */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <svg preserveAspectRatio="none" viewBox="0 0 1440 1000" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <defs>
            <linearGradient id="curveGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#2300FF" />
              <stop offset="50%" stopColor="#7B2FF2" />
              <stop offset="100%" stopColor="#F900BF" />
            </linearGradient>
          </defs>
          <path d="M0,0 Q720,30 1440,0 L1440,1000 L0,1000 Z" fill="url(#curveGradient)" />
        </svg>
      </div>
      {/* Content */}
      <div className="relative z-10 pt-20 pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Results Section */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-white text-center mb-6 tracking-tight">
              Results that Drive Real Growth
            </h2>
            <p className="text-white text-center text-lg md:text-xl mb-12 max-w-[800px] mx-auto leading-relaxed">
              Our clients don't just see improvements—they experience transformational growth. Here are some of the results we've delivered for businesses like yours:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
              {results.map((result, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col bg-white/10 backdrop-blur-md border border-white/30 rounded-xl shadow-lg p-4 md:p-6 min-h-[240px] md:min-h-[260px] transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:bg-white hover:backdrop-blur-0 hover:border-gray-100"
                >
                  <div className="mb-4 self-start">{result.icon}</div>
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-2 text-left group-hover:text-black transition-colors duration-300">
                    {result.title}
                  </h3>
                  <p className="text-white text-sm leading-snug text-left group-hover:text-black transition-colors duration-300">
                    {result.description}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-white text-center text-lg max-w-4xl mx-auto">
              HighLevel's all-in-one platform consolidates marketing tasks, CRM management, and client communication into one system, significantly streamlining business operations and saving time by reducing manual tasks.
            </p>
          </div>

          {/* Industries Section */}
          <div className="mt-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-12">
              Industries We've Helped
            </h2>
                        <div className="bg-white w-screen py-16 pb-20 -ml-[calc(50vw-50%)] -mr-[calc(50vw-50%)]">
              <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
                  {industries.map((industry, idx) => (
                    <div key={idx} className="group bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                      <div className="relative h-40 md:h-48 overflow-hidden border border-white/20 p-2">
                        <img 
                          src={industry.image} 
                          alt={industry.title}
                          className="w-full h-full object-cover rounded-t-xl transition-all duration-300"
                        />
                        <img 
                          src={industry.imageHover} 
                          alt={industry.title}
                          className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover rounded-t-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        />
                      </div>
                      <div className="p-4 md:p-6">
                        <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-3 text-center tracking-wide">
                          {industry.title}
                        </h3>
                        <p className="text-gray-600 text-center text-sm md:text-[14.5px] leading-[1.5] tracking-[0.2px]">
                          {industry.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <GlassButton className="mx-auto text-sm font-medium px-8 py-3 w-fit">
                    See the Full Success Stories
                  </GlassButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 