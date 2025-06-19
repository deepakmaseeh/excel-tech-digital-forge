
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTABanner = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-electric-cyan/10 to-cyber-blue/10 relative overflow-hidden">
      <div className="absolute inset-0 tech-grid-bg opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto fade-in-up">
          <h2 className="text-4xl lg:text-6xl font-light mb-6">
            Ready to Transform Your
            <span className="block text-gradient font-medium">Digital Presence?</span>
          </h2>
          <p className="text-xl text-body mb-10 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your business goals with innovative 
            digital solutions tailored to your unique needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button 
                size="lg" 
                className="neumorphic-btn bg-electric-gradient border-0 text-tech-dark hover:scale-105 transition-all duration-300 group"
              >
                Start a Project
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <Button 
              size="lg" 
              variant="outline"
              className="neumorphic-btn border border-electric-cyan text-electric-cyan hover:bg-electric-cyan hover:text-tech-dark transition-all duration-300 group"
            >
              <Calendar className="mr-2" size={20} />
              Schedule a Free Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
