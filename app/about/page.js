"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Users, Target, Award, Heart, Globe, Shield, Star } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import Gallery from "../components/Gallery";

export default function About() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Stats for hero
  const stats = [
    {
      icon: <Award className="w-6 h-6 text-green-500" />,
      label: "Years of Excellence",
      value: "14+",
    },
    {
      icon: <Globe className="w-6 h-6 text-blue-500" />,
      label: "Countries Served",
      value: "45+",
    },
    {
      icon: <Shield className="w-6 h-6 text-yellow-500" />,
      label: "Certifications",
      value: "ISO, WHO-GMP",
    },
    {
      icon: <Star className="w-6 h-6 text-pink-500" />,
      label: "Clients Worldwide",
      value: "200+",
    },
  ];

  return (
    <div className="bg-[#F8F9FA] min-h-screen">
      {/* Redesigned Hero Section */}
      <section
        className="relative min-h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/3652103/pexels-photo-3652103.jpeg?auto=compress&cs=tinysrgb&w=1200)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A3A5A]/80 to-[#348E4E]/70 z-0" />
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 py-20 flex flex-col items-center text-center">
          <motion.img
            src="/logo.jpg"
            alt="Keshav Exporters Logo"
            className="h-20 w-auto mb-6 rounded-xl shadow-lg bg-white/80 p-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          />
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            About Keshav Exporters
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl text-blue-100 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Leading the way in pharmaceutical exports with integrity, quality,
            and innovation
          </motion.p>
          {/* Stats */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-3xl mx-auto">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="bg-white/90 rounded-xl shadow p-4 flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.6 }}
              >
                <div className="mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-[#1A3A5A]">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-600 mt-1 text-center">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story & Vision/Mission Section (unchanged) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Story & Vision"
            subtitle="How we started, what drives us, and our commitment to global health"
          />
          {/* Company Story */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/3652103/pexels-photo-3652103.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our facility"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-[#1A3A5A]">Our Story</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Keshav Exporters is a growing pharmaceutical export company
                based in Khurja, Uttar Pradesh, India, focused on delivering
                high-quality human generic medicines—including tablets, syrups,
                and capsules—to global markets. Our mission is simple: to make
                trusted, affordable Indian medicines accessible across the
                world.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We operate under the GST-registered firm name, Keshav Surgical
                and Medicos, and hold all essential licenses including a valid
                Drug License and Import Export Code (IEC). This ensures every
                shipment complies with Indian regulatory standards and
                international export requirements.
              </p>
            </motion.div>
          </div>
          {/* Vision & Mission */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6 order-2 lg:order-1"
            >
              <div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  The company is guided by the experience and vision of our
                  Chairperson, Mr. Keshav Dutt Sharma, whose values lay the
                  foundation for everything we do. Day-to-day operations and
                  client engagements are handled by our Director, Mr. Paras
                  Sharma, who brings dedication, efficiency, and a hands-on
                  approach to every aspect of our work.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  At Keshav Exporters, our focus is clear: quality, trust, and
                  timely delivery. Whether fulfilling a small shipment or
                  managing a large bulk export, we are committed to offering
                  genuine products, clear and honest communication, and reliable
                  service that our clients can depend on.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We believe in building long-term relationships with our
                  partners — not just delivering medicines, but delivering
                  confidence.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <img
                src="https://images.pexels.com/photos/3683081/pexels-photo-3683081.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our team"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Redesigned Leadership Section */}
      <section className="py-20 bg-gradient-to-br from-[#e8f5e9] to-[#e3f2fd]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Leadership"
            subtitle="Guided by experienced professionals committed to excellence"
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            {/* Chairperson Card */}
            <div className="relative bg-white rounded-3xl shadow-2xl p-10 md:p-14 flex flex-col items-center border-t-8 border-[#348E4E] w-full max-w-xl mx-auto">
              <img
                src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Mr. Keshav Dutt Sharma - Chairperson"
                className="w-36 h-36 rounded-full object-cover border-4 border-[#1A3A5A] shadow-lg mb-4"
              />
              <h3 className="text-xl md:text-2xl font-bold text-[#1A3A5A] mb-1 text-center">
                Mr. Keshav Dutt Sharma
              </h3>
              <p className="text-[#348E4E] font-semibold mb-3 text-center">
                Chairperson
              </p>
              <blockquote className="italic text-gray-700 border-l-4 border-[#348E4E] pl-4 mb-4 text-sm md:text-base">
                Mr. Keshav Dutt Sharma serves as the guiding force behind Keshav
                Exporters. With decades of experience in the healthcare and
                pharmaceutical industry, he brings deep wisdom, ethical
                leadership, and a long-term vision to our organization. His
                belief has always been simple yet powerful: good business is
                built on trust, quality, and consistency—principles that
                continue to define Keshav Exporters today.
                <br />
                <br />
                Though he prefers to stay behind the scenes, his influence is
                felt in every key decision. His calm presence and clear judgment
                have been the backbone of our steady growth in the international
                market. Mr. Sharma ensures that as we expand globally, we remain
                grounded in the values we started with.
              </blockquote>
            </div>
            {/* Director Card */}
            <div className="relative bg-white rounded-3xl shadow-2xl p-10 md:p-14 flex flex-col items-center border-t-8 border-[#1A3A5A] w-full max-w-xl mx-auto">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Mr. Paras Sharma - Director"
                className="w-36 h-36 rounded-full object-cover border-4 border-[#348E4E] shadow-lg mb-4"
              />
              <h3 className="text-xl md:text-2xl font-bold text-[#1A3A5A] mb-1 text-center">
                Mr. Paras Sharma
              </h3>
              <p className="text-[#1A3A5A] font-semibold mb-3 text-center">
                Director
              </p>
              <blockquote className="italic text-gray-700 border-l-4 border-[#1A3A5A] pl-4 mb-4 text-sm md:text-base">
                As Director of Keshav Exporters, Mr. Paras Sharma brings energy,
                dedication, and a forward-thinking mindset to the company’s
                operations. He manages everything from daily business tasks to
                export orders, client communication, documentation, and
                compliance with a hands-on, professional approach.
                <br />
                <br />
                With a strong focus on global outreach, Mr. Sharma has already
                led the company through its first successful international
                shipment and continues to build new connections in regions like
                Dubai, Russia, and Vietnam. He believes in creating real
                business relationships based on trust, fair pricing, and
                transparency.
              </blockquote>
            </div>
          </motion.div>
          <div className="max-w-3xl mx-auto mt-10 text-center text-gray-700 text-base md:text-lg">
            Together, Mr. Keshav Dutt Sharma and Mr. Paras Sharma form a dynamic
            leadership team—balancing experience with innovation, and tradition
            with modern vision. Their combined strengths drive the company
            forward and ensure that Keshav Exporters delivers more than just
            medicine — we deliver commitment.
          </div>
        </div>
      </section>
      <Gallery />
    </div>
  );
}
