
import { ArrowRight, Users, Zap, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CareersPreview = () => {
  const featuredRoles = [
    {
      title: "Senior Full Stack Developer",
      department: "Engineering",
      type: "Full-time"
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      type: "Full-time"
    },
    {
      title: "Digital Marketing Specialist",
      department: "Marketing",
      type: "Full-time"
    }
  ];

  const perks = [
    { icon: Users, text: "Collaborative team environment" },
    { icon: Zap, text: "Cutting-edge technology stack" },
    { icon: Heart, text: "Work-life balance focus" }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-light mb-6">
            Join Our <span className="text-gradient">Team</span>
          </h2>
          <p className="text-xl text-body max-w-3xl mx-auto">
            Build your career with a company that values innovation, growth, and making a real impact 
            in the digital world.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div className="fade-in-up">
            <h3 className="text-2xl font-medium mb-6">Featured Opportunities</h3>
            <div className="space-y-4">
              {featuredRoles.map((role, index) => (
                <div 
                  key={role.title} 
                  className="glass-card p-6 hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-medium">{role.title}</h4>
                    <span className="text-electric-cyan text-sm">{role.type}</span>
                  </div>
                  <p className="text-body">{role.department}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="fade-in-up" style={{ animationDelay: "200ms" }}>
            <h3 className="text-2xl font-medium mb-6">Why Work With Us</h3>
            <div className="space-y-6">
              {perks.map((perk, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="text-electric-cyan">
                    <perk.icon size={24} />
                  </div>
                  <span className="text-body">{perk.text}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link to="/careers">
                <Button className="neumorphic-btn border border-electric-cyan text-electric-cyan hover:bg-electric-cyan hover:text-tech-dark transition-all duration-300 group">
                  View All Positions
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersPreview;
