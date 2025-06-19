
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Clock, Users, Zap, Heart, Coffee, Laptop, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Careers = () => {
  const openRoles = [
    {
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      experience: "5+ years",
      description: "Join our engineering team to build scalable web applications using React, Node.js, and cloud technologies."
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      experience: "3+ years",
      description: "Create beautiful, user-friendly interfaces and lead design thinking for client projects."
    },
    {
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      experience: "2+ years",
      description: "Drive growth through SEO, content marketing, and digital advertising campaigns."
    },
    {
      title: "Project Manager",
      department: "Operations",
      location: "San Francisco, CA",
      type: "Full-time",
      experience: "4+ years",
      description: "Lead cross-functional teams to deliver exceptional client projects on time and within budget."
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      experience: "3+ years",
      description: "Build and maintain our cloud infrastructure, CI/CD pipelines, and deployment processes."
    },
    {
      title: "Business Development Representative",
      department: "Sales",
      location: "San Francisco, CA",
      type: "Full-time",
      experience: "1+ years",
      description: "Identify and develop new business opportunities with potential clients."
    }
  ];

  const perks = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs"
    },
    {
      icon: Laptop,
      title: "Latest Equipment",
      description: "Top-of-the-line MacBooks and equipment for optimal productivity"
    },
    {
      icon: Globe,
      title: "Remote Flexibility",
      description: "Work from anywhere with flexible hours and remote-first culture"
    },
    {
      icon: Coffee,
      title: "Learning Budget",
      description: "$2,000 annual budget for courses, conferences, and skill development"
    },
    {
      icon: Users,
      title: "Team Events",
      description: "Regular team building activities and company retreats"
    },
    {
      icon: Zap,
      title: "Growth Opportunities",
      description: "Clear career progression paths and mentorship programs"
    }
  ];

  const culture = [
    {
      title: "Innovation First",
      description: "We encourage experimentation and aren't afraid to try new technologies and approaches."
    },
    {
      title: "Work-Life Balance",
      description: "We believe that great work comes from well-rested, happy team members."
    },
    {
      title: "Continuous Learning",
      description: "We invest in our team's growth through training, conferences, and skill development."
    },
    {
      title: "Diverse & Inclusive",
      description: "We're building a team that reflects the diversity of the world we serve."
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
              Join Our <span className="text-gradient">Team</span>
            </h1>
            <p className="text-xl text-body max-w-4xl mx-auto leading-relaxed">
              Build your career with a company that values innovation, growth, and making a real impact 
              in the digital world. We're looking for passionate individuals who want to shape the future of technology.
            </p>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-light mb-6">
              Open <span className="text-gradient">Positions</span>
            </h2>
            <p className="text-xl text-body max-w-3xl mx-auto">
              Explore exciting opportunities to grow your career and make an impact with cutting-edge projects.
            </p>
          </div>

          <div className="space-y-6">
            {openRoles.map((role, index) => (
              <div 
                key={role.title}
                className="glass-card p-8 hover:scale-[1.02] transition-all duration-300 fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h3 className="text-2xl font-medium">{role.title}</h3>
                      <span className="px-3 py-1 bg-electric-cyan/20 text-electric-cyan rounded-full text-sm">
                        {role.department}
                      </span>
                    </div>
                    
                    <p className="text-body mb-4 leading-relaxed">{role.description}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-body">
                      <div className="flex items-center space-x-2">
                        <MapPin size={16} className="text-electric-cyan" />
                        <span>{role.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock size={16} className="text-electric-cyan" />
                        <span>{role.type}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users size={16} className="text-electric-cyan" />
                        <span>{role.experience}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:ml-8">
                    <Button className="neumorphic-btn bg-electric-gradient border-0 text-tech-dark hover:scale-105 transition-all duration-300 w-full lg:w-auto">
                      Apply Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-24 bg-gradient-to-b from-slate-900/50 to-tech-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-light mb-6">
              Our <span className="text-gradient">Culture</span>
            </h2>
            <p className="text-xl text-body max-w-3xl mx-auto">
              We've built a culture that values creativity, collaboration, and continuous growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {culture.map((item, index) => (
              <div 
                key={item.title}
                className="glass-card p-8 hover:scale-105 transition-all duration-300 fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <h3 className="text-xl font-medium mb-4 text-electric-cyan">{item.title}</h3>
                <p className="text-body leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perks & Benefits */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-light mb-6">
              Perks & <span className="text-gradient">Benefits</span>
            </h2>
            <p className="text-xl text-body max-w-3xl mx-auto">
              We believe in taking care of our team with competitive benefits and amazing perks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {perks.map((perk, index) => (
              <div 
                key={perk.title}
                className="glass-card p-8 text-center hover:scale-105 transition-all duration-300 fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-electric-cyan mb-6 flex justify-center">
                  <perk.icon size={48} />
                </div>
                <h3 className="text-xl font-medium mb-4">{perk.title}</h3>
                <p className="text-body leading-relaxed">{perk.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-electric-cyan/10 to-cyber-blue/10 relative overflow-hidden">
        <div className="absolute inset-0 tech-grid-bg opacity-20"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-light mb-6">
              Ready to Join Our
              <span className="block text-gradient font-medium">Amazing Team?</span>
            </h2>
            <p className="text-xl text-body mb-10 max-w-2xl mx-auto">
              Don't see a perfect fit? Send us your resume anyway. We're always looking for 
              talented individuals to join our growing team.
            </p>
            
            <Button 
              size="lg" 
              className="neumorphic-btn bg-electric-gradient border-0 text-tech-dark hover:scale-105 transition-all duration-300"
            >
              Send Your Resume
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
