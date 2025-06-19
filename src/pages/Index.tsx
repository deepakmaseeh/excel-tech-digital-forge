
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import ServicesOverview from "@/components/ServicesOverview";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import WhoWeArePreview from "@/components/WhoWeArePreview";
import CareersPreview from "@/components/CareersPreview";
import CTABanner from "@/components/CTABanner";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-tech-dark">
      <Navbar />
      <Hero />
      <TrustedBy />
      <ServicesOverview />
      <WhyChooseUs />
      <TestimonialsCarousel />
      <WhoWeArePreview />
      <CareersPreview />
      <CTABanner />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
