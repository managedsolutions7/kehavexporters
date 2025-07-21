import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
  Users,
  Globe,
  Heart,
  CheckCircle,
} from "lucide-react";

const SectionTitle = ({ title, subtitle }) => (
  <div className="text-center mb-16">
    <h2 className="text-4xl md:text-5xl font-bold text-[#1A3A5A] mb-4">
      {title}
    </h2>
    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
      {subtitle}
    </p>
  </div>
);

const TestimonialCard = ({ client, isActive }) => (
  <div
    className={`transition-all duration-700 ease-in-out ${
      isActive ? "opacity-100 scale-100" : "opacity-40 scale-95"
    }`}
  >
    <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-4xl mx-auto relative overflow-hidden border border-blue-100/50">
      {/* Background decorative elements */}
      <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-[#38bdf8]/20 to-[#2563eb]/10 rounded-full blur-xl" />
      <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-tr from-[#22d3ee]/20 to-[#38bdf8]/10 rounded-full blur-lg" />

      {/* Quote icon */}
      <div className="flex justify-center mb-6">
        <div className="bg-gradient-to-br from-[#2563eb] to-[#38bdf8] p-4 rounded-full shadow-lg">
          <Quote className="h-8 w-8 text-white" />
        </div>
      </div>

      {/* Star rating */}
      <div className="flex justify-center mb-6">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
        ))}
      </div>

      {/* Review text */}
      <div className="text-xl md:text-2xl text-gray-700 text-center mb-8 leading-relaxed font-medium">
        "{client.review}"
      </div>

      {/* Client info */}
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 bg-gradient-to-br from-[#38bdf8] to-[#2563eb] rounded-full flex items-center justify-center mb-4 shadow-lg">
          <Users className="h-8 w-8 text-white" />
        </div>
        <div className="font-bold text-[#1A3A5A] text-xl mb-2">
          {client.name}
        </div>
        <div className="text-blue-600 font-semibold mb-1">{client.company}</div>
        <div className="flex items-center text-sm text-gray-500">
          <Globe className="h-4 w-4 mr-1" />
          {client.location}
        </div>
      </div>
    </div>
  </div>
);

const MyClients = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      review:
        "Keshav Exporters has revolutionized our pharmaceutical supply chain. Their commitment to quality assurance and regulatory compliance is exceptional, making them our most trusted partner.",
      name: "Dr. Ayesha Khan",
      company: "MediCare Solutions",
      location: "Dubai, UAE",
    },
    {
      review:
        "Outstanding professionalism and transparency in every transaction. Their pharmaceutical expertise and global logistics capabilities have significantly enhanced our operations.",
      name: "Ivan Petrov",
      company: "PharmaRus International",
      location: "Moscow, Russia",
    },
    {
      review:
        "Exceptional service quality with genuine pharmaceutical products. Their dedicated team consistently exceeds expectations and demonstrates true commitment to healthcare excellence.",
      name: "Nguyen Thi Lan",
      company: "VietHealth Corporation",
      location: "Ho Chi Minh City, Vietnam",
    },
    {
      review:
        "Our strategic partnership with Keshav Exporters has enabled remarkable business growth and enhanced our ability to serve patients across the Middle East region.",
      name: "Ahmed Al-Farsi",
      company: "Dubai Medical Group",
      location: "Dubai, UAE",
    },
    {
      review:
        "Reliable communication, competitive pricing, and unwavering quality standards. We value this long-term partnership and look forward to continued collaboration in advancing global healthcare.",
      name: "Svetlana Ivanova",
      company: "GlobalMed Solutions",
      location: "St. Petersburg, Russia",
    },
    {
      review:
        "Keshav Exporters consistently delivers on their commitments with precision and care. They are our go-to partner for all bulk pharmaceutical requirements and regulatory compliance needs.",
      name: "Dr. Rahul Sharma",
      company: "CarePlus Healthcare",
      location: "Mumbai, India",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  return (
    <section className="py-24 bg-gradient-to-br from-white via-blue-50/30 to-[#e0f2fe]/50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-[#38bdf8]/5 to-[#2563eb]/3 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tr from-[#22d3ee]/5 to-[#38bdf8]/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          title="Trusted by Healthcare Leaders Worldwide"
          subtitle="Discover why pharmaceutical companies across the globe choose us as their preferred partner"
        />

        {/* Testimonial display */}
        <div
          className="relative mb-12"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <TestimonialCard
            client={testimonials[currentIndex]}
            isActive={true}
          />

          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 md:-left-16 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white shadow-xl rounded-full p-3 transition-all duration-300 hover:scale-110 border border-blue-100"
          >
            <ChevronLeft className="h-6 w-6 text-[#2563eb]" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 md:-right-16 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white shadow-xl rounded-full p-3 transition-all duration-300 hover:scale-110 border border-blue-100"
          >
            <ChevronRight className="h-6 w-6 text-[#2563eb]" />
          </button>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center space-x-2 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-[#2563eb] scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Trust indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="flex items-center justify-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100/50">
            <CheckCircle className="h-8 w-8 text-green-500 mr-3" />
            <div>
              <div className="font-bold text-[#1A3A5A] text-lg">
                100% Verified
              </div>
              <div className="text-gray-600 text-sm">
                All testimonials authenticated
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100/50">
            <Globe className="h-8 w-8 text-[#2563eb] mr-3" />
            <div>
              <div className="font-bold text-[#1A3A5A] text-lg">
                Global Reach
              </div>
              <div className="text-gray-600 text-sm">
                Partners in 65+ countries
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100/50">
            <Heart className="h-8 w-8 text-red-500 mr-3" />
            <div>
              <div className="font-bold text-[#1A3A5A] text-lg">
                Healthcare Focus
              </div>
              <div className="text-gray-600 text-sm">
                Improving lives worldwide
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-[#2563eb] via-[#38bdf8] to-[#22d3ee] p-1 rounded-full shadow-2xl">
            <button className="bg-white hover:bg-gray-50 text-[#2563eb] px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg">
              Join Our Network of Global Healthcare Partners
            </button>
          </div>
          <p className="text-gray-600 mt-4 text-sm">
            Experience the difference of working with a trusted pharmaceutical
            partner
          </p>
        </div>
      </div>
    </section>
  );
};

export default MyClients;
