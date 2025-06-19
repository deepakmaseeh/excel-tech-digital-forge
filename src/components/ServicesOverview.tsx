
import { Code, Search, Palette, ShoppingCart } from "lucide-react";

const ServicesOverview = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites and applications built with modern frameworks and optimized for performance."
    },
    {
      icon: Search,
      title: "SEO & Digital Marketing",
      description: "Data-driven strategies to increase your online visibility and drive qualified traffic to your business."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design that creates intuitive experiences and drives conversions."
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Complete online stores with secure payments, inventory management, and analytics."
    }
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-light mb-6">
            What We <span className="text-gradient">Do</span>
          </h2>
          <p className="text-xl text-body max-w-3xl mx-auto">
            We provide comprehensive digital solutions that help businesses thrive in the modern marketplace.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="glass-card p-8 hover:scale-105 transition-all duration-300 group fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="text-electric-cyan mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon size={48} />
              </div>
              <h3 className="text-xl font-medium mb-4">{service.title}</h3>
              <p className="text-body leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
