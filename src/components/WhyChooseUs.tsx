
import { Award, Clock, MessageSquare } from "lucide-react";

const WhyChooseUs = () => {
  const stats = [
    {
      icon: Award,
      title: "Proven Results",
      stat: "200+",
      description: "Successful projects delivered with measurable ROI"
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      stat: "30%",
      description: "Faster delivery than industry average"
    },
    {
      icon: MessageSquare,
      title: "Transparent Communication",
      stat: "24/7",
      description: "Always available support and project updates"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-tech-dark to-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-light mb-6">
            Why Choose <span className="text-gradient">Us</span>
          </h2>
          <p className="text-xl text-body max-w-3xl mx-auto">
            We combine technical expertise with business acumen to deliver solutions that drive real results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {stats.map((item, index) => (
            <div 
              key={item.title}
              className="text-center glass-card p-8 hover:scale-105 transition-all duration-300 fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-electric-cyan mb-6 flex justify-center">
                <item.icon size={48} />
              </div>
              <div className="text-4xl font-bold text-gradient mb-2">{item.stat}</div>
              <h3 className="text-xl font-medium mb-4">{item.title}</h3>
              <p className="text-body">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
