"use client";
import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  Play,
  Shield,
  Globe,
  Award,
  ArrowDown,
} from "lucide-react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image:
        "https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "Delivering Health, Globally",
      subtitle:
        "Premium pharmaceutical exports from India to the world, ensuring quality healthcare reaches every corner of the globe.",
    },
    {
      image:
        "https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "Quality You Can Trust",
      subtitle:
        "Licensed and certified pharmaceutical solutions with rigorous quality control and international compliance standards.",
    },
    {
      image:
        "https://images.pexels.com/photos/4021779/pexels-photo-4021779.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "Innovation in Healthcare",
      subtitle:
        "Advanced pharmaceutical manufacturing and export services connecting Indian medicines to global healthcare needs.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt="Pharmaceutical facility"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#0A3C66]/80 via-[#0A3C66]/70 to-[#3A874C]/60" />
          </div>
        ))}
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-pulse">
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
          <Shield className="h-8 w-8 text-white" />
        </div>
      </div>
      <div
        className="absolute top-20 right-16 animate-pulse"
        style={{ animationDelay: "1s" }}
      >
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
          <Globe className="h-8 w-8 text-white" />
        </div>
      </div>
      {/* <div
        className="hidden md:block absolute bottom-32 left-10 animate-pulse"
        style={{ animationDelay: "2s" }}
      >
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
          <Award className="h-8 w-8 text-white" />
        </div>
      </div> */}

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-sm font-medium">
            <span className="w-2 h-2 bg-[#3A874C] rounded-full mr-3 animate-pulse"></span>
            Trusted by Healthcare Partners Worldwide
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-green-100 bg-clip-text text-transparent">
              {slides[currentSlide].title}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto text-blue-100">
            {slides[currentSlide].subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
            <button
              onClick={() => (window.location.href = "/products")}
              className="group flex items-center space-x-3 bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105"
            >
              <span>Explore My Products</span>
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-[#3A874C] to-white bg-clip-text text-transparent">
                50+
              </div>
              <div className="text-sm text-blue-200 mt-1">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-[#3A874C] to-white bg-clip-text text-transparent">
                1000+
              </div>
              <div className="text-sm text-blue-200 mt-1">
                Products Exported
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-[#3A874C] to-white bg-clip-text text-transparent">
                24/7
              </div>
              <div className="text-sm text-blue-200 mt-1">Customer Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 right-8 animate-bounce">
        <button
          onClick={scrollToContent}
          className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-full p-3 hover:bg-white/20 transition-all duration-300 group"
        >
          <ArrowDown className="h-6 w-6 text-white group-hover:translate-y-1 transition-transform duration-300" />
        </button>
      </div>

      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
