
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Sarah Chen",
      company: "TechStartup Inc.",
      role: "CEO",
      result: "+300% traffic increase",
      quote: "Excel Tech Solutions transformed our online presence completely. Their SEO strategies and modern website design helped us triple our organic traffic in just 6 months."
    },
    {
      name: "Marcus Rodriguez",
      company: "E-commerce Plus",
      role: "Founder",
      result: "+150% conversion rate",
      quote: "The e-commerce platform they built for us is incredible. Our conversion rate increased by 150% and our customers love the seamless shopping experience."
    },
    {
      name: "Dr. Emily Watson",
      company: "MedTech Solutions",
      role: "CTO",
      result: "40% faster deployment",
      quote: "Working with Excel Tech Solutions was a game-changer. They delivered our complex web application 40% faster than expected without compromising on quality."
    },
    {
      name: "James Thompson",
      company: "Digital Dynamics",
      role: "Marketing Director",
      result: "+250% lead generation",
      quote: "Their digital marketing expertise is unmatched. We've seen a 250% increase in qualified leads since implementing their strategic campaigns."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-light mb-6">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-xl text-body max-w-3xl mx-auto">
            Don't just take our word for it. See how we've helped businesses achieve remarkable results.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="glass-card p-8 lg:p-12 text-center fade-in-up">
            <div className="mb-8">
              <div className="text-3xl font-bold text-gradient mb-2">
                {testimonials[currentIndex].result}
              </div>
              <p className="text-lg text-body leading-relaxed mb-6">
                "{testimonials[currentIndex].quote}"
              </p>
              <div>
                <div className="font-medium text-white">{testimonials[currentIndex].name}</div>
                <div className="text-body">
                  {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center space-x-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              className="neumorphic-btn border-electric-cyan text-electric-cyan hover:bg-electric-cyan hover:text-tech-dark"
            >
              <ChevronLeft size={20} />
            </Button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-electric-cyan' : 'bg-gray-600'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="neumorphic-btn border-electric-cyan text-electric-cyan hover:bg-electric-cyan hover:text-tech-dark"
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
