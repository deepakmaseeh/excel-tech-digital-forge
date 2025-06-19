
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Target, Lightbulb, Award, Clock } from "lucide-react";

const WhoWeAre = () => {
  const timeline = [
    { 
      year: "2020", 
      event: "Founded with a mission to democratize digital excellence",
      description: "Started as a small team of passionate developers with a vision to make enterprise-level digital solutions accessible to businesses of all sizes."
    },
    { 
      year: "2021", 
      event: "Launched our first major enterprise solution",
      description: "Successfully delivered our first large-scale project, establishing our reputation for handling complex technical challenges."
    },
    { 
      year: "2022", 
      event: "Expanded team to 25+ professionals",
      description: "Grew our team with specialized talent in design, development, and digital marketing to better serve our growing client base."
    },
    { 
      year: "2023", 
      event: "Achieved 200+ successful project milestone",
      description: "Reached a significant milestone in project delivery, with clients spanning from innovative startups to Fortune 500 companies."
    },
    { 
      year: "2024", 
      event: "Opened new innovation lab and design studio",
      description: "Invested in cutting-edge facilities and tools to stay at the forefront of emerging technologies and design trends."
    }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We stay ahead of technology trends to provide cutting-edge solutions that give our clients a competitive advantage."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in transparent communication and working closely with our clients as true partners in their success."
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Every project is measured by its impact on our client's business goals and long-term success."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in code quality, design, and project delivery."
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
              Who <span className="text-gradient">We Are</span>
            </h1>
            <p className="text-xl text-body max-w-4xl mx-auto leading-relaxed">
              We're a passionate team of technologists, designers, and strategists united by a shared vision: 
              to help businesses thrive in the digital age through innovative solutions and exceptional service.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gradient-to-b from-slate-900/50 to-tech-dark">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="fade-in-up">
              <h2 className="text-4xl font-light mb-6">Our <span className="text-gradient">Mission</span></h2>
              <p className="text-body text-lg leading-relaxed mb-6">
                To empower businesses of all sizes with innovative digital solutions that drive growth, 
                enhance user experiences, and create lasting competitive advantages in an ever-evolving digital landscape.
              </p>
              <p className="text-body leading-relaxed">
                We believe that great technology should be accessible to everyone, and we're committed to 
                making cutting-edge digital solutions attainable for businesses at every stage of their journey.
              </p>
            </div>
            
            <div className="fade-in-up" style={{ animationDelay: "200ms" }}>
              <h2 className="text-4xl font-light mb-6">Our <span className="text-gradient">Vision</span></h2>
              <p className="text-body text-lg leading-relaxed mb-6">
                To be the leading digital innovation partner that businesses trust to transform their ideas 
                into powerful, scalable, and user-centric digital experiences.
              </p>
              <p className="text-body leading-relaxed">
                We envision a future where every business, regardless of size or industry, has access to 
                the same level of digital excellence that drives the world's most successful companies.
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
              <h2 className="text-4xl lg:text-5xl font-light">
                Our <span className="text-gradient">Journey</span>
              </h2>
            </div>
            <p className="text-xl text-body max-w-3xl mx-auto">
              From a small startup to a trusted digital partner, here's how we've grown alongside our clients.
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
                    <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-electric-cyan rounded-full border-4 border-tech-dark shadow-lg shadow-electric-cyan/50"></div>
                    
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
      <section className="py-24 bg-gradient-to-b from-tech-dark to-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-light mb-6">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-body max-w-3xl mx-auto">
              These core principles guide everything we do and shape how we work with our clients and each other.
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
                <h3 className="text-xl font-medium mb-4">{value.title}</h3>
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
            <h2 className="text-4xl lg:text-5xl font-light mb-6">
              Meet Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-xl text-body max-w-3xl mx-auto">
              Behind every successful project is a team of dedicated professionals who are passionate 
              about creating exceptional digital experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Alex Chen", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face" },
              { name: "Sarah Rodriguez", role: "Head of Design", image: "https://images.unsplash.com/photo-1494790108755-2616b332752b?w=300&h=300&fit=crop&crop=face" },
              { name: "Marcus Johnson", role: "Lead Developer", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face" },
              { name: "Emily Davis", role: "Marketing Director", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face" },
              { name: "David Park", role: "Tech Lead", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face" },
              { name: "Lisa Thompson", role: "Project Manager", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face" }
            ].map((member, index) => (
              <div 
                key={member.name}
                className="glass-card p-6 text-center hover:scale-105 transition-all duration-300 fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-medium mb-2">{member.name}</h3>
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
