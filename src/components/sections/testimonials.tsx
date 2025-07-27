import { testimonials } from '@/data/testimonials';

export function Testimonials() {
  return (
    <section className="py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">What Our Clients Are Saying</h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
        {testimonials.map((t) => (
          <div key={t.name} className="flex-1 bg-white/5 rounded-xl p-6 shadow-lg flex flex-col items-center">
            <div className="w-16 h-16 bg-gradient-to-r from-[#2300FF] via-[#7B2FF2] to-[#F900BF] rounded-full mb-4 flex items-center justify-center">
              {/* Placeholder for image */}
              <span className="text-white font-bold">Img</span>
            </div>
            <p className="text-brand-light text-center mb-2">“{t.quote}”</p>
            <div className="font-semibold text-white">{t.name}</div>
            <div className="text-sm text-brand-light">{t.company}</div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="bg-gradient-to-r from-[#2300FF] via-[#7B2FF2] to-[#F900BF] text-white font-semibold px-6 py-2 rounded-full">Read More Testimonials</button>
      </div>
    </section>
  );
} 