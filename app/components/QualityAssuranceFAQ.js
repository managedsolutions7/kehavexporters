"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const QualityAssuranceFAQ = () => {
  return (
    <section className="bg-white rounded-lg shadow-lg p-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold text-[#1A3A5A] mb-8 text-center">
          Quality Assurance - Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-[#1A3A5A] hover:text-[#348E4E]">
              What quality standards do you follow?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              We follow WHO-GMP (World Health Organization Good Manufacturing
              Practice) standards, ISO 9001:2015 quality management systems, and
              maintain FDA approval for all our products. Our manufacturing
              processes are regularly audited by international regulatory
              bodies.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-[#1A3A5A] hover:text-[#348E4E]">
              How do you ensure product safety during transit?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              We use temperature-controlled packaging, secure transportation
              methods, and provide complete documentation including certificates
              of analysis. Each shipment is tracked and monitored throughout the
              journey to ensure product integrity.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-[#1A3A5A] hover:text-[#348E4E]">
              What documentation do you provide with pharmaceutical?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              We provide comprehensive documentation including Certificate of
              Analysis, Manufacturing License, WHO-GMP Certificate, and all
              necessary customs documentation as per the destination country's
              requirements.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-[#1A3A5A] hover:text-[#348E4E]">
              How often are your facilities inspected?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              Our facilities undergo regular inspections by regulatory
              authorities including annual WHO-GMP audits, quarterly internal
              quality audits, and periodic inspections by international
              regulatory bodies from importing countries.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.div>
    </section>
  );
};

export default QualityAssuranceFAQ;
