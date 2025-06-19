
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      subject: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      info: "hello@exceltechsolutions.com",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Phone",
      info: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 6pm PST"
    },
    {
      icon: MapPin,
      title: "Office",
      info: "123 Innovation Drive, San Francisco, CA 94107",
      description: "Visit our headquarters"
    },
    {
      icon: Clock,
      title: "Business Hours",
      info: "Monday - Friday: 8am - 6pm PST",
      description: "We're here to help"
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
              Get In <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-body max-w-4xl mx-auto leading-relaxed">
              Ready to transform your digital presence? Let's discuss how we can help you achieve 
              your business goals with innovative solutions tailored to your unique needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="fade-in-up">
              <div className="glass-card p-8">
                <h2 className="text-3xl font-light mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-glass-white border-glass-border text-white placeholder:text-gray-400"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-glass-white border-glass-border text-white placeholder:text-gray-400"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2">
                        Company
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        className="bg-glass-white border-glass-border text-white placeholder:text-gray-400"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="bg-glass-white border-glass-border text-white placeholder:text-gray-400"
                        placeholder="Project inquiry"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-glass-white border-glass-border text-white placeholder:text-gray-400"
                      placeholder="Tell us about your project and how we can help..."
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full neumorphic-btn bg-electric-gradient border-0 text-tech-dark hover:scale-105 transition-all duration-300"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="fade-in-up" style={{ animationDelay: "200ms" }}>
              <h2 className="text-3xl font-light mb-8">Contact Information</h2>
              <div className="space-y-8">
                {contactInfo.map((item, index) => (
                  <div 
                    key={item.title}
                    className="glass-card p-6 hover:scale-105 transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="text-electric-cyan p-3 glass-card rounded-lg">
                        <item.icon size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-medium mb-1">{item.title}</h3>
                        <p className="text-white mb-1">{item.info}</p>
                        <p className="text-body text-sm">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="mt-8">
                <div className="glass-card p-4">
                  <div className="w-full h-64 bg-gradient-to-br from-electric-cyan/20 to-cyber-blue/20 rounded-lg flex items-center justify-center">
                    <p className="text-body">Interactive Map</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ or Quick Info */}
      <section className="py-24 bg-gradient-to-b from-slate-900/50 to-tech-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-light mb-6">
              Response <span className="text-gradient">Guarantee</span>
            </h2>
            <p className="text-xl text-body max-w-3xl mx-auto">
              We understand that time is crucial for your business. Here's what you can expect when you reach out to us.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center glass-card p-8 fade-in-up">
              <div className="text-4xl font-bold text-gradient mb-4">24hr</div>
              <h3 className="text-xl font-medium mb-2">Initial Response</h3>
              <p className="text-body">We'll respond to your inquiry within 24 hours</p>
            </div>
            
            <div className="text-center glass-card p-8 fade-in-up" style={{ animationDelay: "100ms" }}>
              <div className="text-4xl font-bold text-gradient mb-4">48hr</div>
              <h3 className="text-xl font-medium mb-2">Detailed Proposal</h3>
              <p className="text-body">Receive a comprehensive project proposal</p>
            </div>
            
            <div className="text-center glass-card p-8 fade-in-up" style={{ animationDelay: "200ms" }}>
              <div className="text-4xl font-bold text-gradient mb-4">1wk</div>
              <h3 className="text-xl font-medium mb-2">Project Kickoff</h3>
              <p className="text-body">Start your project within one week of approval</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
