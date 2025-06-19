
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Code, Search, Palette, ShoppingCart, Smartphone, Database, Cloud, Lock } from "lucide-react";

const WhatWeDo = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites and applications built with modern frameworks",
      features: ["React & Next.js", "Node.js Backend", "API Development", "Database Design", "Performance Optimization"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop"
    },
    {
      icon: Search,
      title: "SEO & Digital Marketing",
      description: "Data-driven strategies to increase online visibility and drive traffic",
      features: ["Technical SEO", "Content Strategy", "PPC Campaigns", "Social Media Marketing", "Analytics & Reporting"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design that creates intuitive experiences",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems", "Usability Testing"],
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=500&h=300&fit=crop"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Complete online stores with secure payments and inventory management",
      features: ["Shopify Development", "Custom E-commerce", "Payment Integration", "Inventory Management", "Order Processing"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop"
    }
  ];

  const techStack = [
    { icon: Code, name: "React/Next.js", category: "Frontend" },
    { icon: Database, name: "Node.js/Express", category: "Backend" },
    { icon: Database, name: "PostgreSQL/MongoDB", category: "Database" },
    { icon: Cloud, name: "AWS/Vercel", category: "Cloud" },
    { icon: Smartphone, name: "React Native", category: "Mobile" },
    { icon: Lock, name: "Auth0/Firebase", category: "Security" }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We start by understanding your business goals, target audience, and project requirements through detailed consultation."
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Our design team creates wireframes and prototypes that align with your brand and user experience goals."
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "We build your solution using best practices, conduct thorough testing, and ensure optimal performance."
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "We deploy your project and provide ongoing support, maintenance, and optimization services."
    }
  ];

  return (
    <div className="min-h-screen bg-tech-dark">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 tech-grid-bg opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 fade-in-up">
            <h1 className="text-5xl lg:text-7xl font-light mb-6">
              What <span className="text-gradient">We Do</span>
            </h1>
            <p className="text-xl text-body max-w-4xl mx-auto leading-relaxed">
              We provide comprehensive digital solutions that help businesses thrive in the modern marketplace. 
              From cutting-edge web development to strategic digital marketing, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className={`grid lg:grid-cols-2 gap-12 items-center fade-in-up ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="text-electric-cyan mb-6">
                    <service.icon size={64} />
                  </div>
                  <h2 className="text-4xl font-light mb-6">{service.title}</h2>
                  <p className="text-xl text-body mb-8 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-3">
                    <h3 className="text-lg font-medium text-electric-cyan">Key Features:</h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-electric-cyan rounded-full"></div>
                          <span className="text-body">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="glass-card p-4">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 bg-gradient-to-b from-slate-900/50 to-tech-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-light mb-6">
              Our <span className="text-gradient">Tech Stack</span>
            </h2>
            <p className="text-xl text-body max-w-3xl mx-auto">
              We use cutting-edge technologies and proven frameworks to build scalable, 
              secure, and high-performance solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStack.map((tech, index) => (
              <div 
                key={tech.name}
                className="glass-card p-8 text-center hover:scale-105 transition-all duration-300 fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-electric-cyan mb-4 flex justify-center">
                  <tech.icon size={48} />
                </div>
                <h3 className="text-xl font-medium mb-2">{tech.name}</h3>
                <p className="text-electric-cyan text-sm">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-light mb-6">
              Our <span className="text-gradient">Process</span>
            </h2>
            <p className="text-xl text-body max-w-3xl mx-auto">
              We follow a proven methodology that ensures successful project delivery and exceeds expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div 
                key={item.step}
                className="text-center fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="glass-card p-8 mb-6 hover:scale-105 transition-all duration-300">
                  <div className="text-4xl font-bold text-gradient mb-4">{item.step}</div>
                  <h3 className="text-xl font-medium mb-4">{item.title}</h3>
                  <p className="text-body leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhatWeDo;
