export function Newsletter() {
  return (
    <section className="py-16 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Subscribe to our newsletter to get latest news on your inbox.</h2>
      <p className="text-brand-light mb-6">No spam. Only useful growth tips, case studies, and exclusive offers.</p>
      <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 rounded-full bg-white/10 text-white placeholder:text-brand-light focus:outline-none focus:ring-2 focus:ring-brand-pink"
        />
        <button type="submit" className="bg-gradient-to-r from-[#2300FF] via-[#7B2FF2] to-[#F900BF] text-white font-semibold px-8 py-3 rounded-full">
          Subscribe
        </button>
      </form>
    </section>
  );
} 