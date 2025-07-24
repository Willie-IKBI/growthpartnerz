const steps = [
  {
    title: 'Discovery Call',
    desc: 'We learn about your goals and challenges to craft a tailored plan.'
  },
  {
    title: 'Customized Strategy',
    desc: 'We design a solution and roadmap to achieve your business objectives.'
  },
  {
    title: 'Execution & Support',
    desc: 'We build, launch, and support your project for ongoing success.'
  }
];

export function ProcessSteps() {
  return (
    <section className="py-16 bg-gradient-to-b from-brand-dark to-brand-purple/40">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">How We Work with You to Achieve Results</h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-start">
        {steps.map((step, idx) => (
          <div key={step.title} className="flex-1 flex flex-col items-center">
            <div className="text-6xl font-bold text-brand-gradient mb-2">{idx + 1}</div>
            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
            <p className="text-brand-light text-center max-w-xs">{step.desc}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="bg-brand-gradient text-white font-semibold px-6 py-2 rounded-full">Book Free Strategy Call</button>
      </div>
    </section>
  );
} 