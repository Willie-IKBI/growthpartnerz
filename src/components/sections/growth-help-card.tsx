import { Button } from '@/components/ui/button';

export function GrowthHelpCard() {
  return (
    <section className="py-10 flex justify-center">
      <div className="bg-brand-dark rounded-2xl shadow-xl p-8 flex flex-col md:flex-row items-center gap-8 max-w-3xl w-full">
        <div className="w-40 h-40 bg-gradient-to-r from-[#2300FF] via-[#7B2FF2] to-[#F900BF] rounded-xl flex items-center justify-center">
          {/* Placeholder for image */}
          <span className="text-white font-bold">Image</span>
        </div>
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-xl font-semibold mb-2">How do we help you grow?</h3>
          <p className="text-brand-light mb-4">Our team works as a true partner to unlock your business’s full potential. We combine strategy, technology, and marketing to deliver measurable results.</p>
          <Button className="bg-gradient-to-r from-[#2300FF] via-[#7B2FF2] to-[#F900BF] text-white font-semibold px-6 py-2 rounded-full">
            View client results
          </Button>
        </div>
      </div>
    </section>
  );
} 