"use client";
import React, { useState, useEffect } from "react";

const ChevronLeft = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const ChevronRight = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);

const Star = ({ className }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" className={className}>
    <path
      fill="currentColor"
      d="m12,2l3.09,6.26L22,9.27l-5,4.87l1.18,6.88L12,17.77l-6.18,3.25L7,14.14l-5-4.87l6.91-1.01L12,2Z"
    />
  </svg>
);

const Quote = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
  </svg>
);

const Users = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="m22 21-3-3m3 0a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z" />
  </svg>
);

const Globe = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="m12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </svg>
);

const Heart = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" />
  </svg>
);

const CheckCircle = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <path d="m9 11 3 3L22 4" />
  </svg>
);

const SectionTitle = ({ title, subtitle }) => (
  <div className="text-center mb-16">
    <h2 className="text-4xl md:text-5xl font-bold text-[#0A3C66] mb-4">
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
    <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-4xl mx-auto relative overflow-hidden border border-[#0A3C66]/10">
      {/* Background decorative elements */}
      <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-[#0A3C66]/15 to-[#3A874C]/10 rounded-full blur-xl" />
      <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-tr from-[#3A874C]/15 to-[#0A3C66]/10 rounded-full blur-lg" />

      {/* Quote icon */}
      <div className="flex justify-center mb-6">
        <div className="bg-gradient-to-br from-[#0A3C66] to-[#3A874C] p-4 rounded-full shadow-lg">
          <Quote />
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
        <div className="w-16 h-16 bg-gradient-to-br from-[#0A3C66] to-[#3A874C] rounded-full flex items-center justify-center mb-4 shadow-lg">
          <Users />
        </div>
        <div className="font-bold text-[#0A3C66] text-xl mb-2">
          {client.name}
        </div>
        <div className="text-[#3A874C] font-semibold mb-1">
          {client.company}
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <Globe />
          <span className="ml-1">{client.location}</span>
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
    <section className="py-24 bg-gradient-to-br from-white via-[#0A3C66]/5 to-[#3A874C]/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-[#0A3C66]/8 to-[#3A874C]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tr from-[#3A874C]/8 to-[#0A3C66]/5 rounded-full blur-3xl" />

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
            className="absolute left-4 md:-left-16 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white shadow-xl rounded-full p-3 transition-all duration-300 hover:scale-110 border border-[#0A3C66]/20 hover:border-[#3A874C]/30"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 md:-right-16 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white shadow-xl rounded-full p-3 transition-all duration-300 hover:scale-110 border border-[#0A3C66]/20 hover:border-[#3A874C]/30"
          >
            <ChevronRight />
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
                  ? "bg-[#0A3C66] scale-125"
                  : "bg-gray-300 hover:bg-[#3A874C]/50"
              }`}
            />
          ))}
        </div>

        {/* Trust indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="flex items-center justify-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#0A3C66]/10 hover:border-[#3A874C]/20 transition-all duration-300">
            <CheckCircle />
            <div className="ml-3">
              <div className="font-bold text-[#0A3C66] text-lg">
                100% Verified
              </div>
              <div className="text-gray-600 text-sm">
                All testimonials authenticated
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#0A3C66]/10 hover:border-[#3A874C]/20 transition-all duration-300">
            <div style={{ color: "#0A3C66" }}>
              <Globe />
            </div>
            <div className="ml-3">
              <div className="font-bold text-[#0A3C66] text-lg">
                Global Reach
              </div>
              <div className="text-gray-600 text-sm">
                Partners in 65+ countries
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#0A3C66]/10 hover:border-[#3A874C]/20 transition-all duration-300">
            <div style={{ color: "#ef4444" }}>
              <Heart />
            </div>
            <div className="ml-3">
              <div className="font-bold text-[#0A3C66] text-lg">
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
          <div className="inline-block bg-gradient-to-r from-[#0A3C66] via-[#3A874C] to-[#0A3C66] p-1 rounded-full shadow-2xl">
            <button className="bg-white hover:bg-gray-50 text-[#0A3C66] px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:text-[#3A874C]">
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
