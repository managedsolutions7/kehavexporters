"use client";
import React from "react";
import {
  Globe,
  Microscope,
  ShieldCheck,
  Heart,
  Pill,
  Award,
  Activity,
} from "lucide-react";

const SectionTitle = ({ title, subtitle }) => (
  <div className="text-center mb-16">
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
      {title}
    </h2>
    <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
      {subtitle}
    </p>
  </div>
);

const PharmaceuticalImpactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0A3C66] via-[#0A3C66] via-30% to-[#3A874C] text-white relative overflow-hidden">
      {/* Medical-themed animated gradient blobs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-[#3A874C]/30 to-[#0A3C66]/20 rounded-full blur-3xl opacity-70 animate-pulse z-0" />
      <div
        className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-tr from-[#0A3C66]/25 to-[#3A874C]/15 rounded-full blur-2xl opacity-60 animate-pulse z-0"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tr from-[#3A874C]/30 to-[#0A3C66]/20 rounded-full blur-3xl opacity-70 animate-pulse z-0"
        style={{ animationDelay: "2s" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          title="Advancing Global Health"
          subtitle="Our commitment to improving lives through innovative pharmaceutical solutions worldwide"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Countries & Regions */}
          <div className="bg-white/15 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center hover:scale-105 hover:shadow-[0_12px_40px_0_rgba(58,135,76,0.3)] transition-all duration-500 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="bg-gradient-to-br from-[#3A874C] to-[#0A3C66] p-5 rounded-full mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300 relative z-10">
              <Globe className="h-9 w-9 text-white" />
            </div>
            <div
              className="text-5xl md:text-6xl font-black text-white drop-shadow-lg mb-3 transition-all duration-300 relative z-10"
              style={{
                textShadow: "0 0 20px #3A874C, 0 2px 8px rgba(0,0,0,0.3)",
              }}
            >
              65+
            </div>
            <div className="text-lg font-semibold text-white/95 relative z-10">
              Countries & Regions
            </div>
            <div className="text-sm text-white/70 mt-1 relative z-10">
              Global presence
            </div>
          </div>

          {/* Drug Formulations */}
          <div className="bg-white/15 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center hover:scale-105 hover:shadow-[0_12px_40px_0_rgba(10,60,102,0.3)] transition-all duration-500 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="bg-gradient-to-br from-[#0A3C66] to-[#3A874C] p-5 rounded-full mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300 relative z-10">
              <Pill className="h-9 w-9 text-white" />
            </div>
            <div
              className="text-5xl md:text-6xl font-black text-white drop-shadow-lg mb-3 transition-all duration-300 relative z-10"
              style={{
                textShadow: "0 0 20px #0A3C66, 0 2px 8px rgba(0,0,0,0.3)",
              }}
            >
              250+
            </div>
            <div className="text-lg font-semibold text-white/95 relative z-10">
              Drug Formulations
            </div>
            <div className="text-sm text-white/70 mt-1 relative z-10">
              Developed & manufactured
            </div>
          </div>

          {/* Research Programs */}
          <div className="bg-white/15 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center hover:scale-105 hover:shadow-[0_12px_40px_0_rgba(58,135,76,0.3)] transition-all duration-500 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="bg-gradient-to-br from-[#3A874C] to-[#0A3C66] p-5 rounded-full mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300 relative z-10">
              <Microscope className="h-9 w-9 text-white" />
            </div>
            <div
              className="text-5xl md:text-6xl font-black text-white drop-shadow-lg mb-3 transition-all duration-300 relative z-10"
              style={{
                textShadow: "0 0 20px #3A874C, 0 2px 8px rgba(0,0,0,0.3)",
              }}
            >
              25+
            </div>
            <div className="text-lg font-semibold text-white/95 relative z-10">
              Years of Excellence
            </div>
            <div className="text-sm text-white/70 mt-1 relative z-10">
              Research & development
            </div>
          </div>

          {/* Lives Impacted */}
          <div className="bg-white/15 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center hover:scale-105 hover:shadow-[0_12px_40px_0_rgba(10,60,102,0.3)] transition-all duration-500 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="bg-gradient-to-br from-[#0A3C66] to-[#3A874C] p-5 rounded-full mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300 relative z-10">
              <Heart className="h-9 w-9 text-white" />
            </div>
            <div
              className="text-5xl md:text-6xl font-black text-white drop-shadow-lg mb-3 transition-all duration-300 relative z-10"
              style={{
                textShadow: "0 0 20px #0A3C66, 0 2px 8px rgba(0,0,0,0.3)",
              }}
            >
              10M+
            </div>
            <div className="text-lg font-semibold text-white/95 relative z-10">
              Lives Impacted
            </div>
            <div className="text-sm text-white/70 mt-1 relative z-10">
              Through our medicines
            </div>
          </div>
        </div>

        {/* Additional metrics row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Quality Certifications */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/15 rounded-2xl shadow-xl p-6 flex items-center justify-center text-center hover:bg-white/15 transition-all duration-300 group">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-br from-[#0A3C66] to-[#3A874C] p-3 rounded-full shadow-lg">
                <ShieldCheck className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">
                  ISO 9001:2015
                </div>
                <div className="text-sm text-white/80">
                  Quality Management Certified
                </div>
              </div>
            </div>
          </div>

          {/* FDA Approvals */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/15 rounded-2xl shadow-xl p-6 flex items-center justify-center text-center hover:bg-white/15 transition-all duration-300 group">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-br from-[#3A874C] to-[#0A3C66] p-3 rounded-full shadow-lg">
                <Award className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">
                  50+ Approvals
                </div>
                <div className="text-sm text-white/80">
                  Regulatory submissions
                </div>
              </div>
            </div>
          </div>

          {/* Clinical Trials */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/15 rounded-2xl shadow-xl p-6 flex items-center justify-center text-center hover:bg-white/15 transition-all duration-300 group">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-br from-[#0A3C66] to-[#3A874C] p-3 rounded-full shadow-lg">
                <Activity className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">
                  100+ Studies
                </div>
                <div className="text-sm text-white/80">
                  Clinical research programs
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PharmaceuticalImpactSection;
