
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Target, Lightbulb, Award, Clock, Heart } from "lucide-react";

const WhoWeAre = () => {
  const timeline = [
    { 
      year: "2020", 
      event: "Founded with a vision of digital harmony",
      description: "Started as a creative collective of passionate developers and designers with a mission to bring beautiful, functional digital experiences to life."
    },
    { 
      year: "2021", 
      event: "First award-winning project launched",
      description: "Successfully delivered our first major design-focused project, earning recognition for our aesthetic approach to digital solutions."
    },
    { 
      year: "2022", 
      event: "Grew to a family of 25+ creatives",
      description: "Expanded our team with talented designers, developers, and strategists who share our passion for beautiful, meaningful digital experiences."
    },
    { 
      year: "2023", 
      event: "Celebrated 200+ beautiful projects",
      description: "Reached a significant milestone in project delivery, creating stunning digital experiences for clients ranging from boutique startups to established brands."
    },
    { 
      year: "2024", 
      event: "Opened our creative studio and innovation space",
      description: "Invested in a beautiful workspace that inspires creativity and collaboration, fostering an environment where great ideas flourish."
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Beauty & Function",
      description: "We believe that beautiful design and seamless functionality should work hand in hand to create exceptional experiences."
    },
    {
      icon: Users,
      title: "Human Connection",
      description: "At the heart of everything we do is genuine care for our clients and users, building relationships that last."
    },
    {
      icon: Lightbulb,
      title: "Creative Innovation",
      description: "We blend artistic vision with cutting-edge technology to create solutions that are both innovative and timeless."
    },
    {
      icon: Award,
      title: "Craftsmanship",
      description: "Every project is approached with meticulous attention to detail and a commitment to exceptional quality."
    }
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 aesthetic-grid-bg opacity-30"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-sage/20 rounded-full blur-3xl floating-element"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-soft-blue/20 rounded-full blur-3xl floating-element" style={{ animationDelay: "2s" }}></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 fade-in-up">
            <h1 className="text-5xl lg:text-7xl font-light mb-6 text-sage-dark">
              Who <span className="text-gradient">We Are</span>
            </h1>
            <p className="text-xl text-body max-w-4xl mx-auto leading-relaxed">
              We're a passionate collective of designers, developers, and dreamers united by a shared vision: 
              to create digital experiences that are not only functional but truly beautiful and meaningful.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gradient-to-b from-champagne/30 to-cream">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="fade-in-up">
              <h2 className="text-4xl font-light mb-6 text-sage-dark">Our <span className="text-gradient">Mission</span></h2>
              <p className="text-body text-lg leading-relaxed mb-6">
                To create digital experiences that inspire, delight, and connect people with brands in meaningful ways. 
                We believe that great design has the power to transform not just businesses, but the lives they touch.
              </p>
              <p className="text-body leading-relaxed">
                Every project is an opportunity to craft something beautiful and purposeful, 
                bringing together aesthetic excellence with thoughtful functionality.
              </p>
            </div>
            
            <div className="fade-in-up" style={{ animationDelay: "200ms" }}>
              <h2 className="text-4xl font-light mb-6 text-sage-dark">Our <span className="text-gradient">Vision</span></h2>
              <p className="text-body text-lg leading-relaxed mb-6">
                To be the creative partner that businesses turn to when they want to create something truly special - 
                digital experiences that stand out in a crowded world through thoughtful design and authentic storytelling.
              </p>
              <p className="text-body leading-relaxed">
                We envision a digital landscape filled with more beauty, intention, and human connection, 
                where every interaction feels crafted with care and purpose.
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
              <Clock className="text-sage mr-3" size={36} />
              <h2 className="text-4xl lg:text-5xl font-light text-sage-dark">
                Our <span className="text-gradient">Journey</span>
              </h2>
            </div>
            <p className="text-xl text-body max-w-3xl mx-auto">
              From a small creative studio to a trusted design partner, here's how we've grown alongside our clients.
            </p>
          </div>

          <div className="max-w-5xl mx-auto relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 w-px h-full bg-gradient-to-b from-sage via-sage/50 to-transparent hidden lg:block"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div 
                  key={item.year}
                  className="relative fade-in-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className={`lg:flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8`}>
                    
                    {/* Timeline Node (Desktop) */}
                    <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-sage rounded-full border-4 border-cream shadow-lg"></div>
                    
                    {/* Year Badge */}
                    <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12'} mb-4 lg:mb-0`}>
                      <div className="inline-block aesthetic-card px-6 py-3">
                        <span className="text-3xl font-bold text-gradient font-serif">{item.year}</span>
                      </div>
                    </div>
                    
                    {/* Content Card */}
                    <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pl-12' : 'lg:pr-12'}`}>
                      <div className="aesthetic-card p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl">
                        <h3 className="text-xl font-medium mb-3 text-sage-dark font-serif">{item.event}</h3>
                        <p className="text-body leading-relaxed">{item.description}</p>
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
      <section className="py-24 bg-gradient-to-b from-cream to-blush/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-light mb-6 text-sage-dark">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-body max-w-3xl mx-auto">
              These guiding principles shape how we approach every project and relationship, 
              ensuring we create work that truly matters.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="aesthetic-card p-8 text-center hover:scale-105 transition-all duration-300 fade-in-up hover:shadow-xl"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-sage mb-6 flex justify-center">
                  <value.icon size={48} />
                </div>
                <h3 className="text-xl font-medium mb-4 text-sage-dark font-serif">{value.title}</h3>
                <p className="text-body leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-light mb-6 text-sage-dark">
              Meet Our <span className="text-gradient">Creative Family</span>
            </h2>
            <p className="text-xl text-body max-w-3xl mx-auto">
              Behind every beautiful project is a team of dedicated creatives who pour their hearts 
              into crafting exceptional digital experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Alex Chen", role: "Creative Director", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face" },
              { name: "Sarah Rodriguez", role: "Design Lead", image: "https://images.unsplash.com/photo-1494790108755-2616b332752b?w=300&h=300&fit=crop&crop=face" },
              { name: "Marcus Johnson", role: "Technical Director", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face" },
              { name: "Emily Davis", role: "Brand Strategist", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face" },
              { name: "David Park", role: "Innovation Lead", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face" },
              { name: "Lisa Thompson", role: "Experience Designer", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face" }
            ].map((member, index) => (
              <div 
                key={member.name}
                className="aesthetic-card p-6 text-center hover:scale-105 transition-all duration-300 fade-in-up hover:shadow-xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-sage/20"
                />
                <h3 className="text-xl font-medium mb-2 text-sage-dark font-serif">{member.name}</h3>
                <p className="text-sage">{member.role}</p>
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
