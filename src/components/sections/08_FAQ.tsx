
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "Is it really just 1 day to launch?",
    answer: "Absolutely. Our AI assistance is elaborate and will save you most of the work!."
  },
  {
    question: "Do I need coding skills?",
    answer: "Initial integration will require adding 2 lines of code. After that, no coding at all."
  },
  {
    question: "What if my UI changes?",
    answer: "We keep track of element updates automatically—no tour breakages."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="section">
      <div className="container">
        <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
        <div className="mt-12 max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="feature-card">
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <p className="mt-2 text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button className="cta-button">
            View All FAQs
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
