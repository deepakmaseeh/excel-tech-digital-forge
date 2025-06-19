
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Animated Tech Grid Background */}
      <div className="absolute inset-0 tech-grid-bg opacity-30"></div>
      
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-tech-dark via-tech-dark to-blue-950/20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left fade-in-up">
            <h1 className="text-5xl lg:text-7xl font-light mb-6 leading-tight">
              Digital Innovation
              <span className="block text-gradient font-medium">
                That Delivers
              </span>
            </h1>
            <p className="text-xl text-body mb-8 max-w-2xl">
              Transform your business with cutting-edge web development, strategic digital marketing, 
              and innovative design solutions. We build digital experiences that drive growth.
            </p>
            <Button 
              size="lg" 
              className="neumorphic-btn border border-electric-cyan text-electric-cyan hover:bg-electric-cyan hover:text-tech-dark transition-all duration-300 group"
            >
              Let's Build Together
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="relative lg:justify-self-end fade-in-up" style={{ animationDelay: "200ms" }}>
            <div className="glass-card p-8 max-w-lg">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop" 
                alt="Modern dashboard interface" 
                className="w-full h-80 object-cover rounded-lg"
              />
              <div className="mt-6">
                <h3 className="text-xl font-medium mb-2">Modern Web Solutions</h3>
                <p className="text-body">
                  Responsive, fast, and user-friendly applications built with the latest technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
