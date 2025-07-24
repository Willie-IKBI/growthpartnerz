export function ServicesStrip() {
  return (
    <div className="w-full overflow-x-auto py-2 bg-brand-dark/80 border-b border-white/10">
      <div className="flex gap-4 min-w-max px-4">
        {['Website Development', 'Mobile App Development', 'Web App Development', 'E-commerce', 'AI Solutions', 'CRM', 'Automation', 'Landing Pages'].map((service) => (
          <span key={service} className="bg-white/10 text-white px-4 py-1 rounded-full text-sm whitespace-nowrap">
            {service}
          </span>
        ))}
      </div>
    </div>
  );
} 