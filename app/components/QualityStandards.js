"use client";
import React from "react";
import { motion } from "framer-motion";
import { Award, Shield, CheckCircle, Globe } from "lucide-react";
import SectionTitle from "@/components/SectionTitle"; // Adjust import path as needed

const QualityStandards = () => {
  return (
    <section className="bg-white rounded-lg shadow-lg p-8 mb-16">
      <SectionTitle
        title="Quality Standards"
        subtitle="Our commitment to excellence is reflected in our certifications"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            icon: Award,
            title: "WHO-GMP",
            description:
              "World Health Organization Good Manufacturing Practice certification",
          },
          {
            icon: Shield,
            title: "ISO 9001:2015",
            description: "International quality management system standards",
          },
          {
            icon: CheckCircle,
            title: "FDA Approved",
            description: "US Food and Drug Administration approval for export",
          },
          {
            icon: Globe,
            title: "CE Marking",
            description: "European Conformity marking for product safety",
          },
        ].map((standard, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <standard.icon className="h-12 w-12 text-[#348E4E] mx-auto mb-4" />
            <h3 className="text-lg font-bold text-[#1A3A5A] mb-2">
              {standard.title}
            </h3>
            <p className="text-sm text-gray-600">{standard.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default QualityStandards;
