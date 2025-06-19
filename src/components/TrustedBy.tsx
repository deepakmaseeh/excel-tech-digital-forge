
const TrustedBy = () => {
  const logos = [
    "TechCorp", "InnovateLabs", "DigitalFirst", "NextGen Solutions", "CloudPioneer", "DataDriven Co"
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-tech-dark to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 fade-in-up">
          <h2 className="text-3xl font-light mb-4">
            Trusted by <span className="text-gradient">Industry Leaders</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            From innovative startups to established enterprises, companies trust us to deliver exceptional digital solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center fade-in-up" style={{ animationDelay: "200ms" }}>
          {logos.map((logo, index) => (
            <div 
              key={logo} 
              className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="text-white font-medium opacity-70 hover:opacity-100 transition-opacity">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
