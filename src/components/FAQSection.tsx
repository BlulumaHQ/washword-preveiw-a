import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What's the difference between soft cloth and touchless wash?",
    a: "Soft cloth provides a deeper, more thorough clean. Touchless is faster and best for lighter dirt.",
  },
  {
    q: "Which wash should I choose?",
    a: "Basic for quick clean, Better for best value, Best for premium results.",
  },
  {
    q: "Are you open 24/7?",
    a: "Yes, all Washworld locations are open 24 hours.",
  },
  {
    q: "Do you offer vacuums and interior cleaning?",
    a: "Yes, self-serve vacuum, shampoo, and fragrance stations are available.",
  },
  {
    q: "Do you offer discounts?",
    a: "Yes, through the Washworld app.",
  },
  {
    q: "How long does a wash take?",
    a: "Just a few minutes depending on the package.",
  },
];

const FAQSection = () => (
  <section className="section-padding bg-background" id="faq">
    <div className="container-tight max-w-3xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-wash-navy">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="mt-10">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`}>
            <AccordionTrigger className="text-left text-base font-semibold text-foreground">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
