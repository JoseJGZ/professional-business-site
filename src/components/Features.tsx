const featuresData = [
  {
    title: "Expert Analysis",
    description:
      "We review your financial profile to ensure you meet all bank requirements.",
    icon: "📊",
  },
  {
    title: "Bank Negotiation",
    description:
      "Our team talks directly with the banks to get you lowest interest rates.",
    icon: "🤝",
  },
  {
    title: "Fast Aproval",
    description:
      "Get your loan approved in record time thanks to our optimized process.",
    icon: "⚡",
  },
];
function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
          Our Core Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresData.map((item, index) => (
            <div
              key={index}
              className="p-8 border border-slate-100 rounded-2xl hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
