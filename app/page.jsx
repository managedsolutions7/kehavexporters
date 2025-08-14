"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Globe, Shield, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

import SectionTitle from "@/components/SectionTitle";
import PharmaceuticalImpactSection from "@/components/PharmaceuticalImpactSection";
import { products } from "@/data/products";
import HeroSection from "@/components/HeroSection";
import MyClients from "@/components/MyClients";
import WhoWeAre from "@/components/WhoWeAre";
import WhyChooseUs from "./components/WhyChooseUs";
export default function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="bg-[#F8F9FA]">
      {/* Hero Section */}
      <HeroSection />
      {/* Category Section */}
      <section id="categories" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Product Categories"
            subtitle="Explore our main pharmaceutical categories"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
            {/* Analgesics / Antipyretics Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col items-center p-6 group hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src="https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=500"
                alt="Analgesics / Antipyretics"
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <div className="text-2xl font-bold text-[#1A3A5A] mb-2 text-center">
                Analgesics / Antipyretics
              </div>
              <div className="text-md text-gray-700 mb-4 text-center">
                HS Code: <span className="font-semibold">30049099</span>
              </div>
              <Button
                asChild
                className="bg-[#348E4E] hover:bg-[#348E4E]/90 text-white mt-auto"
              >
                <Link href="/products">View Products</Link>
              </Button>
            </motion.div>
            {/* Antibiotic-Based Medicants Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col items-center p-6 group hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src="https://images.pexels.com/photos/4099468/pexels-photo-4099468.jpeg?auto=compress&cs=tinysrgb&w=500"
                alt="Antibiotic-Based Medicants"
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <div className="text-2xl font-bold text-[#1A3A5A] mb-2 text-center">
                Antibiotic-Based Medicants
              </div>
              <div className="text-md text-gray-700 mb-4 text-center">
                HS Code: <span className="font-semibold">30042099</span>
              </div>
              <Button
                asChild
                className="bg-[#348E4E] hover:bg-[#348E4E]/90 text-white mt-auto"
              >
                <Link href="/products">View Products</Link>
              </Button>
            </motion.div>
          </div>
          <div className="text-center mt-8">
            <Button
              asChild
              size="lg"
              className="bg-[#1A3A5A] hover:bg-[#348E4E] text-white text-lg px-8 py-3"
            >
              <Link href="/products">Go to All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      <WhoWeAre />
      <WhyChooseUs />
      <PharmaceuticalImpactSection />
      <MyClients />
    </div>
  );
}
