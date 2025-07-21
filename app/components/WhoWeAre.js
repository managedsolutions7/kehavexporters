import React from "react";
import {
  Shield,
  Globe,
  Award,
  Heart,
  CheckCircle,
  Building,
} from "lucide-react";

const WhoWeAre = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-50/40 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#e0f2fe]/30 to-transparent rounded-full blur-2xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#2563eb] to-[#38bdf8] rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <img
              src="https://images.pexels.com/photos/3652097/pexels-photo-3652097.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Keshav Exporters pharmaceutical facility"
              className="relative w-full h-96 object-cover rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
            />

            {/* Floating credential badges */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-blue-100">
              <div className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-[#2563eb]" />
                <div>
                  <div className="text-sm font-bold text-[#1A3A5A]">
                    Licensed & Certified
                  </div>
                  <div className="text-xs text-gray-500">
                    Drug License & IEC
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              {/* <div className="inline-block">
                <span className="bg-gradient-to-r from-[#2563eb] to-[#38bdf8] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  Established in Khurja, UP, India
                </span>
              </div> */}
              <h2 className="text-4xl md:text-5xl font-bold text-[#1A3A5A] leading-tight">
                Who We Are
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                We are{" "}
                <span className="font-semibold text-[#2563eb]">
                  Keshav Exporters
                </span>
                , a dedicated pharmaceutical export company based in Khurja,
                Uttar Pradesh, India. Our mission is simple: to deliver quality
                Indian medicines to global markets with{" "}
                <span className="font-semibold text-[#1A3A5A]">
                  honesty, care, and consistency
                </span>
                .
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Built on the foundation of{" "}
                <span className="font-semibold text-[#2563eb]">
                  ethics and reliability
                </span>
                , we are officially registered under the name{" "}
                <span className="font-semibold text-[#1A3A5A]">
                  Keshav Surgical and Medicos
                </span>{" "}
                and operate with all valid licenses, including Drug License and
                Import Export Code (IEC). Our leadership combines decades of
                experience and youthful energy to serve international buyers
                with trust and professionalism.
              </p>
            </div>

            {/* Key features grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-center space-x-3 bg-blue-50/50 rounded-xl p-4 border border-blue-100/50">
                <div className="bg-[#2563eb] p-2 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-[#1A3A5A] text-sm">
                    Fully Licensed
                  </div>
                  <div className="text-xs text-gray-600">
                    Drug License & IEC Certified
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3 bg-blue-50/50 rounded-xl p-4 border border-blue-100/50">
                <div className="bg-[#38bdf8] p-2 rounded-lg">
                  <Globe className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-[#1A3A5A] text-sm">
                    Global Reach
                  </div>
                  <div className="text-xs text-gray-600">
                    Serving international markets
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3 bg-blue-50/50 rounded-xl p-4 border border-blue-100/50">
                <div className="bg-[#22d3ee] p-2 rounded-lg">
                  <Heart className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-[#1A3A5A] text-sm">
                    Ethics First
                  </div>
                  <div className="text-xs text-gray-600">
                    Built on trust & reliability
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3 bg-blue-50/50 rounded-xl p-4 border border-blue-100/50">
                <div className="bg-[#2563eb] p-2 rounded-lg">
                  <Award className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-[#1A3A5A] text-sm">
                    Quality Focus
                  </div>
                  <div className="text-xs text-gray-600">
                    Premium Indian medicines
                  </div>
                </div>
              </div>
            </div>

            {/* Company registration info */}
            {/* <div className="bg-gradient-to-r from-[#f8fafc] to-[#e0f2fe]/30 rounded-2xl p-6 border border-blue-100/50 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-xl shadow-sm border border-blue-100">
                  <Building className="h-6 w-6 text-[#2563eb]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A3A5A] mb-2">
                    Official Registration
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    <span className="font-semibold">Registered as:</span> Keshav
                    Surgical and Medicos
                    <br />
                    <span className="font-semibold">Location:</span> Khurja,
                    Uttar Pradesh, India
                    <br />
                    <span className="font-semibold">Compliance:</span> All
                    regulatory standards met with valid Drug License and Import
                    Export Code (IEC)
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
