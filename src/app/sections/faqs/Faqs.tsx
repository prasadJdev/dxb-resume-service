import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    title: "What is an ATS CV?",
    description: (
      <p>
        An <strong>ATS CV</strong> refers to a resume that is optimized for{" "}
        <strong>Applicant Tracking Systems (ATS).</strong> ATS is software used by recruiters and employers to scan,
        sort, and rank job applications based on specific criteria, such as keywords, skills, and experience.
      </p>
    ),
  },
  {
    title: "What is a Euro Pass CV?",
    description: (
      <p>
        A <strong>Euro Pass ATS CV</strong> combines the standardized <strong>Euro pass format</strong> with{" "}
        <strong>ATS-friendly design</strong>, making it suitable for European job applications while ensuring
        compatibility with Applicant Tracking Systems.
      </p>
    ),
  },
  {
    title: "Where are you distributing CVs?",
    description: (
      <p>
        We distribute CVs across <strong>Europe, the Gulf, and Canada</strong>, targeting key industries and regions to
        maximize your job opportunities.
      </p>
    ),
  },
  {
    title: "I need my CV in an emergency",
    description: (
      <p>
        If you require your CV on an <strong>urgent basis</strong>, we&apos;ve got you covered! Simply pay an additional
        <strong>30 AED</strong> on top of the CV package cost, and we&apos;ll deliver your professionally crafted CV
        within <strong>3-5 hours</strong>.
      </p>
    ),
  },
  {
    title: "What is LinkedIn optimization?",
    description: (
      <p>
        <strong>LinkedIn optimization</strong> involves enhancing your LinkedIn profile to maximize visibility,
        engagement, and opportunities on the platform. The goal is to create a professional, polished, and keyword-rich
        profile that attracts recruiters, hiring managers, and industry professionals.
      </p>
    ),
  },
  {
    title: "Do you provide Job or Visa Guarantees?",
    description: (
      <div>
        <p>
          {" "}
          We <strong>do not promise or guarantee:</strong>
        </p>
        <ul className="list-disc pl-5">
          <li>Job offers</li>
          <li>Employment visas</li>
        </ul>
      </div>
    ),
  },
];

function Faqs() {
  return (
    <section
      id="faqs"
      className="px-4 sm:px-12 p-4 sm:p-8 md:p-12 lg:p-16 py-12 sm:py-8 md:py-12 xl:py-12 container max-w-4xl w-full mx-auto"
    >
      <h2 className="text-5xl mb-8 font-bold text-center font-secondary">FAQ&apos;s</h2>

      <div className="container max-w-3xl w-full mx-auto flex flex-col gap-6">
        {faqs.map((faq) => (
          <Accordion key={faq.title} type="single" collapsible className="bg-primary/5 p-4 rounded-sm">
            <AccordionItem value={faq.title} className=" border-none rounde">
              <AccordionTrigger className="font-bold text-primary">{faq.title}</AccordionTrigger>
              {faq.description && (
                <AccordionContent className="p-4 text-primary/75">{faq.description}</AccordionContent>
              )}
            </AccordionItem>
          </Accordion>
        ))}
      </div>
      {/* 
      <div className="max-w-4xl mx-auto flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 justify-between">
        {faqs.map((faq) => (
          <Accordion key={faq.title} type="single" collapsible>
            <AccordionItem value={faq.title} className=" border-none rounde">
              <AccordionTrigger>{faq.title}</AccordionTrigger>
              {faq.description && <AccordionContent className="p-4">{faq.description}</AccordionContent>}
            </AccordionItem>
          </Accordion>
        ))}
      </div> */}
    </section>
  );
}

export default Faqs;
