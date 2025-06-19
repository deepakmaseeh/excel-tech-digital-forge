
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Target, Lightbulb, Award, Clock, Heart } from "lucide-react";

const WhoWeAre = () => {
  const timeline = [
    { 
      year: "2020", 
      event: "Founded with a vision of digital excellence",
      description: "Started as a tech collective of passionate developers and designers with a mission to bring cutting-edge digital solutions to life."
    },
    { 
      year: "2021", 
      event: "First award-winning project launched",
      description: "Successfully delivered our first major tech project, earning recognition for our innovative approach to digital solutions."
    },
    { 
      year: "2022", 
      event: "Grew to a team of 25+ tech experts",
      description: "Expanded our team with talented developers, designers, and strategists who share our passion for technology and innovation."
    },
    { 
      year: "2023", 
      event: "Celebrated 200+ successful projects",
      description: "Reached a significant milestone in project delivery, creating powerful digital experiences for clients ranging from startups to enterprises."
    },
    { 
      year: "2024", 
      event: "Opened our innovation lab and tech hub",
      description: "Invested in a state-of-the-art workspace that fosters innovation and collaboration, where breakthrough ideas come to life."
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Innovation & Excellence",
      description: "We believe that cutting-edge technology and exceptional execution should work together to create transformative experiences."
    },
    {
      icon: Users,
      title: "Client Partnership",
      description: "At the core of everything we do is genuine collaboration with our clients, building relationships that drive success."
    },
    {
      icon: Lightbulb,
      title: "Technical Innovation",
      description: "We blend visionary thinking with advanced technology to create solutions that are both groundbreaking and reliable."
    },
    {
      icon: Award,
      title: "Quality Craftsmanship",
      description: "Every project is approached with meticulous attention to detail and a commitment to technical excellence."
    }
  ];

  return (
    <div className="min-h-screen bg-tech-dark">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 tech-grid-bg opacity-30"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 fade-in-up">
            <h1 className="text-5xl lg:text-7xl font-light mb-6 text-white">
              Who <span className="text-gradient">We Are</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              We're a passionate collective of developers, designers, and tech innovators united by a shared vision: 
              to create digital solutions that are not only powerful but truly transformative.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gradient-to-b from-slate-900/50 to-tech-dark">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="fade-in-up">
              <h2 className="text-4xl font-light mb-6 text-white">Our <span className="text-gradient">Mission</span></h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                To create digital experiences that inspire, innovate, and connect businesses with their audiences in meaningful ways. 
                We believe that great technology has the power to transform not just businesses, but entire industries.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Every project is an opportunity to push boundaries and craft something extraordinary, 
                bringing together technical excellence with strategic thinking.
              </p>
            </div>
            
            <div className="fade-in-up" style={{ animationDelay: "200ms" }}>
              <h2 className="text-4xl font-light mb-6 text-white">Our <span className="text-gradient">Vision</span></h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                To be the technology partner that businesses turn to when they want to create something truly innovative - 
                digital solutions that stand out through cutting-edge technology and strategic execution.
              </p>
              <p className="text-slate-300 leading-relaxed">
                We envision a digital future filled with more intelligent, efficient, and impactful solutions, 
                where every interaction is powered by thoughtful technology and genuine innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in-up">
            <div className="flex items-center justify-center mb-6">
              <Clock className="text-electric-cyan mr-3" size={36} />
              <h2 className="text-4xl lg:text-5xl font-light text-white">
                Our <span className="text-gradient">Journey</span>
              </h2>
            </div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              From a small tech startup to a trusted innovation partner, here's how we've evolved alongside the digital landscape.
            </p>
          </div>

          <div className="max-w-5xl mx-auto relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 w-px h-full bg-gradient-to-b from-electric-cyan via-electric-cyan/50 to-transparent hidden lg:block"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div 
                  key={item.year}
                  className="relative fade-in-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className={`lg:flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8`}>
                    
                    {/* Timeline Node (Desktop) */}
                    <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-electric-cyan rounded-full border-4 border-tech-dark shadow-lg"></div>
                    
                    {/* Year Badge */}
                    <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12'} mb-4 lg:mb-0`}>
                      <div className="inline-block glass-card px-6 py-3">
                        <span className="text-3xl font-bold text-gradient">{item.year}</span>
                      </div>
                    </div>
                    
                    {/* Content Card */}
                    <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pl-12' : 'lg:pr-12'}`}>
                      <div className="glass-card p-6 hover:scale-105 transition-all duration-300">
                        <h3 className="text-xl font-medium mb-3 text-white">{item.event}</h3>
                        <p className="text-slate-300 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-gradient-to-b from-tech-dark to-slate-900/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-light mb-6 text-white">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              These core principles guide how we approach every project and partnership, 
              ensuring we deliver technology that truly makes a difference.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="glass-card p-8 text-center hover:scale-105 transition-all duration-300 fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-electric-cyan mb-6 flex justify-center">
                  <value.icon size={48} />
                </div>
                <h3 className="text-xl font-medium mb-4 text-white">{value.title}</h3>
                <p className="text-slate-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-light mb-6 text-white">
              Meet Our <span className="text-gradient">Tech Team</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Behind every innovative project is a team of dedicated technologists who bring 
              expertise, creativity, and passion to every challenge.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Alex Chen", role: "Technical Director", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face" },
              { name: "Sarah Rodriguez", role: "Lead Developer", image: "https://images.unsplash.com/photo-1494790108755-2616b332752b?w=300&h=300&fit=crop&crop=face" },
              { name: "Marcus Johnson", role: "DevOps Engineer", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face" },
              { name: "Emily Davis", role: "UX Architect", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face" },
              { name: "David Park", role: "Innovation Lead", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face" },
              { name: "Lisa Thompson", role: "Product Strategist", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face" }
            ].map((member, index) => (
              <div 
                key={member.name}
                className="glass-card p-6 text-center hover:scale-105 transition-all duration-300 fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-electric-cyan/20"
                />
                <h3 className="text-xl font-medium mb-2 text-white">{member.name}</h3>
                <p className="text-electric-cyan">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhoWeAre;
