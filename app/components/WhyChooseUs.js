"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Shield,
  Clock,
  Users,
  Heart,
  Target,
  CheckCircle,
  Globe,
  Award,
} from "lucide-react";

export default function WhyChooseUs() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const reasons = [
    {
      icon: <Shield className="w-8 h-8 text-[#348E4E]" />,
      title: "High-Quality Products",
      description:
        "Every medicine is tested, compliant, and safe. We work only with trusted manufacturers and follow strict quality standards to ensure every batch meets the highest pharmaceutical requirements.",
    },
    {
      icon: <Globe className="w-8 h-8 text-[#1A3A5A]" />,
      title: "Wide Product Range",
      description:
        "From essential daily medicines to specialized treatments, we cover common and specialty medicines across tablets, syrups, and capsules to meet diverse healthcare needs.",
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      title: "On-Time Delivery",
      description:
        "Our consistent and dependable supply chain ensures timely delivery every time. We understand that medicines are a lifeline and prioritize punctual service.",
    },
    {
      icon: <Users className="w-8 h-8 text-[#348E4E]" />,
      title: "Customer-First Approach",
      description:
        "We listen, understand, and deliver. Our focus is on building long-term relationships with healthcare providers based on trust, reliability, and mutual growth.",
    },
    {
      icon: <Heart className="w-8 h-8 text-pink-500" />,
      title: "Partners in Healthcare",
      description:
        "We are more than suppliers — we are partners in your journey to better healthcare. Making quality medicines accessible and affordable for everyone is our core mission.",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-green-500" />,
      title: "Ethical Business Practices",
      description:
        "Transparent dealings, fair pricing, and ethical business practices form the foundation of our operations. We believe good business is built on trust and consistency.",
    },
  ];

  return (
    <section className="bg-white min-h-screen">
      <div ref={containerRef} className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A3A5A] mb-4">
              Why Choose Keshav Pharmaceuticals?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At Keshav Pharmaceuticals, our mission is simple — to make quality
              medicines accessible and affordable for everyone.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Left side - Sticky Mission & Commitment */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Mission Section */}
                <div className="bg-gradient-to-br from-[#e8f5e9] to-[#e3f2fd] rounded-2xl p-8 shadow-lg border-l-4 border-[#348E4E]">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#1A3A5A] mb-4 flex items-center leading-tight">
                    <Target className="w-7 h-7 mr-3 text-[#348E4E]" />
                    Our Mission
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    We understand that medicines are more than just products —
                    they are a lifeline. That's why we work only with trusted
                    manufacturers, follow strict quality standards, and ensure
                    every batch is carefully checked before it reaches our
                    customers.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Based in Khurja, Uttar Pradesh, we specialize in supplying a
                    wide range of human medicines to clinics, hospitals, and
                    pharmacies across India.
                  </p>
                </div>

                {/* Commitment Section */}
                <div className="bg-[#1A3A5A] rounded-2xl p-8 text-white shadow-lg">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 flex items-center">
                    <Award className="w-6 h-6 mr-3 text-[#348E4E]" />
                    Our Commitment
                  </h3>
                  <p className="text-blue-100 text-lg leading-relaxed mb-4">
                    Whether it's essential daily medicines or specialized
                    treatments, we are committed to timely delivery, transparent
                    dealings, and ethical business practices.
                  </p>
                  <p className="text-blue-100 text-lg leading-relaxed">
                    Our focus is on building long-term relationships with
                    healthcare providers, based on trust, reliability, and
                    mutual growth.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right side - Scrolling timeline */}
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 hidden sm:block">
                <motion.div
                  className="w-full bg-gradient-to-b from-[#1A3A5A] to-[#348E4E] origin-top"
                  style={{
                    scaleY: useTransform(scrollYProgress, [0, 1], [0, 1]),
                  }}
                />
              </div>

              {/* Timeline steps */}
              <div className="space-y-12 lg:space-y-16">
                {reasons.map((reason, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="relative flex items-start space-x-6"
                  >
                    {/* Icon circle */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.1 + 0.2,
                        type: "spring",
                        stiffness: 200,
                      }}
                      viewport={{ once: true }}
                      className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-100 relative z-10"
                    >
                      {reason.icon}
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.1 + 0.3,
                        }}
                        viewport={{ once: true }}
                        className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                      >
                        <motion.h3
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{
                            duration: 0.4,
                            delay: index * 0.1 + 0.4,
                          }}
                          viewport={{ once: true }}
                          className="text-xl sm:text-2xl font-bold text-[#1A3A5A] mb-3"
                        >
                          {reason.title}
                        </motion.h3>

                        <motion.p
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{
                            duration: 0.4,
                            delay: index * 0.1 + 0.5,
                          }}
                          viewport={{ once: true }}
                          className="text-gray-600 text-base sm:text-lg leading-relaxed"
                        >
                          {reason.description}
                        </motion.p>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-r from-[#1A3A5A] to-[#348E4E] rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Partner With Us?
            </h3>
            <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
              Join hundreds of healthcare providers who trust Keshav
              Pharmaceuticals for their medicine supply needs. Experience the
              difference of working with a truly committed partner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center bg-white/10 rounded-lg px-4 py-2"
              >
                <CheckCircle className="w-5 h-5 mr-2 text-green-300" />
                <span className="text-sm">Quality Assured</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center bg-white/10 rounded-lg px-4 py-2"
              >
                <Clock className="w-5 h-5 mr-2 text-blue-300" />
                <span className="text-sm">On-Time Delivery</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center bg-white/10 rounded-lg px-4 py-2"
              >
                <Heart className="w-5 h-5 mr-2 text-pink-300" />
                <span className="text-sm">Trusted Partner</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
