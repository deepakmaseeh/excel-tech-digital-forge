
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What types of businesses do you work with?",
      answer: "We work with a diverse range of clients, from innovative startups to established enterprises across various industries. Whether you're a tech company, e-commerce business, healthcare provider, or service-based organization, we tailor our solutions to meet your specific needs and industry requirements."
    },
    {
      question: "How long does a typical project take to complete?",
      answer: "Project timelines vary depending on complexity and scope. A simple website might take 4-6 weeks, while a complex web application could take 3-6 months. We provide detailed timelines during our initial consultation and maintain transparent communication throughout the development process."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Absolutely! We offer comprehensive maintenance and support packages to ensure your digital assets continue to perform optimally. This includes security updates, content management, performance monitoring, and technical support whenever you need it."
    },
    {
      question: "What is your approach to SEO and digital marketing?",
      answer: "Our SEO and digital marketing strategies are data-driven and customized to your business goals. We conduct thorough research, implement best practices, and continuously optimize campaigns based on performance metrics. Our approach focuses on sustainable, long-term growth rather than quick fixes."
    },
    {
      question: "Can you help redesign an existing website?",
      answer: "Yes, we specialize in website redesigns and migrations. We'll analyze your current site, identify improvement opportunities, and create a modern, user-friendly design that maintains your brand identity while enhancing performance and user experience."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-tech-dark to-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-light mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-body max-w-3xl mx-auto">
            Get answers to common questions about our services, process, and approach.
          </p>
        </div>

        <div className="max-w-4xl mx-auto fade-in-up" style={{ animationDelay: "200ms" }}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass-card border border-glass-border rounded-xl px-6"
              >
                <AccordionTrigger className="text-left text-white hover:text-electric-cyan transition-colors duration-300">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-body leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
