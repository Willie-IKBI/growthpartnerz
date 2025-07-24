import { industries } from '@/data/industries';

export function Industries() {
  return (
    <section className="py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Industries We’ve Helped</h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center">
        {industries.map((industry) => (
          <div key={industry.title} className="flex-1 bg-white/5 rounded-xl p-6 shadow-lg flex flex-col items-center">
            <div className="w-24 h-24 bg-brand-gradient rounded-full mb-4 flex items-center justify-center">
              {/* Placeholder for image */}
              <span className="text-white font-bold">Img</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">{industry.title}</h3>
            <p className="text-brand-light text-center">{industry.blurb}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="bg-brand-gradient text-white font-semibold px-6 py-2 rounded-full">See the full client list</button>
      </div>
    </section>
  );
} 