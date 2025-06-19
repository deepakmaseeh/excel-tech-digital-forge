
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const WhoWeArePreview = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-900/50 to-tech-dark">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in-up">
            <img
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop"
              alt="Our team collaboration"
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>
          
          <div className="fade-in-up" style={{ animationDelay: "200ms" }}>
            <h2 className="text-4xl lg:text-5xl font-light mb-6">
              Who <span className="text-gradient">We Are</span>
            </h2>
            <p className="text-xl text-body mb-6 leading-relaxed">
              We're a team of passionate technologists, designers, and strategists who believe 
              that great digital experiences can transform businesses and create lasting impact.
            </p>
            <p className="text-body mb-8 leading-relaxed">
              Founded on the principles of innovation, transparency, and results-driven solutions, 
              Excel Tech Solutions has been helping businesses navigate the digital landscape with 
              confidence since our inception. We combine cutting-edge technology with human-centered 
              design to create solutions that not only meet today's needs but anticipate tomorrow's opportunities.
            </p>
            <Link to="/who-we-are">
              <Button className="neumorphic-btn border border-electric-cyan text-electric-cyan hover:bg-electric-cyan hover:text-tech-dark transition-all duration-300 group">
                Learn More About Us
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeArePreview;
