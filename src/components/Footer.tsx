
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Who We Are", href: "/who-we-are" },
    { name: "What We Do", href: "/what-we-do" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" }
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-900/50 to-tech-dark border-t border-glass-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="fade-in-up">
            <h3 className="text-2xl font-bold text-gradient mb-4">Excel Tech Solutions</h3>
            <p className="text-body mb-6 leading-relaxed">
              Transforming businesses through innovative digital solutions and cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-electric-cyan hover:text-white transition-colors duration-300 p-2 glass-card rounded-lg"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="fade-in-up" style={{ animationDelay: "100ms" }}>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-body hover:text-electric-cyan transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="fade-in-up" style={{ animationDelay: "200ms" }}>
            <h4 className="text-lg font-medium mb-4">Services</h4>
            <ul className="space-y-2">
              <li><span className="text-body">Web Development</span></li>
              <li><span className="text-body">SEO & Digital Marketing</span></li>
              <li><span className="text-body">UI/UX Design</span></li>
              <li><span className="text-body">E-commerce Solutions</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="fade-in-up" style={{ animationDelay: "300ms" }}>
            <h4 className="text-lg font-medium mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-electric-cyan" />
                <span className="text-body">hello@exceltechsolutions.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-electric-cyan" />
                <span className="text-body">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-electric-cyan" />
                <span className="text-body">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-glass-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-body text-center md:text-left">
              © 2024 Excel Tech Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-body hover:text-electric-cyan transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-body hover:text-electric-cyan transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
