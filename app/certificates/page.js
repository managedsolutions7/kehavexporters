// "use client";

// import { motion } from "framer-motion";
// import SectionTitle from "@/components/SectionTitle";
// import { certificates } from "@/data/certificates";
// import QualityAssuranceFAQ from "../components/QualityAssuranceFAQ";
// import QualityStandards from "../components/QualityStandards";

// // Import new components
// import CertificatesHero from "./components/CertificatesHero";
// import CertificatesGrid from "./components/CertificatesGrid";
// import TrustIndicators from "./components/TrustIndicators";

// export default function Certificates() {
//   return (
//     <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50/30 min-h-screen">
//       <CertificatesHero />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         <CertificatesGrid certificates={certificates} />
//         <TrustIndicators certificatesCount={certificates.length} />
//         <QualityStandards />
//         <QualityAssuranceFAQ />
//       </div>
//     </div>
//   );
// }
"use client";

import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Shield, CheckCircle, Eye, Download } from "lucide-react";

import SectionTitle from "@/components/SectionTitle";
import { certificates } from "@/data/certificates";
import QualityAssuranceFAQ from "../components/QualityAssuranceFAQ";
import QualityStandards from "../components/QualityStandards";

export default function Certificates() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50/30 min-h-screen">
      {/* Enhanced Hero Banner */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background with parallax effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-slate-900/90 to-emerald-900/80" />
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.3) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)",
            backgroundSize: "400% 400%",
          }}
        />

        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-32 right-32 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-emerald-400/20 rounded-lg backdrop-blur-sm"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 right-20 w-16 h-16 border-2 border-white/30 rotate-45"
          animate={{ rotate: [45, 225, 45] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-20 w-full max-w-6xl mx-auto px-4 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/20">
              <Award className="w-5 h-5 text-yellow-400" />
              <span className="text-white font-medium">Quality Certified</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              Our{" "}
              <span className="bg-gradient-to-r from-yellow-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent">
                Certificates
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
              Committed to excellence through rigorous standards and continuous
              certification
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Badge
                variant="secondary"
                className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm"
              >
                <Shield className="w-4 h-4 mr-2" />
                ISO Certified
              </Badge>
              <Badge
                variant="secondary"
                className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm"
              >
                <CheckCircle className="w-4 h-4 mr-2" />
                Quality Assured
              </Badge>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Award className="w-4 h-4" />
            Certifications
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Industry Standards &
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
              {" "}
              Compliance
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Our commitment to quality is validated through comprehensive
            certifications from leading industry authorities
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="cursor-pointer group relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
                    {/* Premium badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0">
                        Verified
                      </Badge>
                    </div>

                    <CardContent className="p-0">
                      <div className="relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <img
                          src={certificate.imageURL}
                          alt={certificate.name}
                          className="w-full h-56 object-cover transition-all duration-500 group-hover:scale-110"
                        />

                        {/* Hover overlay with actions */}
                        <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="flex gap-3">
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              className="bg-white/90 p-3 rounded-full shadow-lg"
                            >
                              <Eye className="w-5 h-5 text-slate-700" />
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              className="bg-white/90 p-3 rounded-full shadow-lg"
                            >
                              <Download className="w-5 h-5 text-slate-700" />
                            </motion.button>
                          </div>
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                          {certificate.name}
                        </h3>
                        <p className="text-sm text-slate-500 mb-4">
                          Valid • Active Certification
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Shield className="w-4 h-4 text-green-500" />
                            <span className="text-sm text-green-600 font-medium">
                              Verified
                            </span>
                          </div>
                          <motion.div
                            className="text-blue-500"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Eye className="w-5 h-5" />
                          </motion.div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>

                <DialogContent className="max-w-5xl p-0 bg-transparent border-0 shadow-2xl">
                  <div className="relative bg-white rounded-2xl overflow-hidden">
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className="bg-green-500 text-white">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        Verified Certificate
                      </Badge>
                    </div>
                    <img
                      src={certificate.imageURL}
                      alt={certificate.name}
                      className="w-full h-auto"
                    />
                    <div className="p-6 bg-gradient-to-r from-slate-50 to-blue-50">
                      <h3 className="text-2xl font-bold text-slate-800 mb-2">
                        {certificate.name}
                      </h3>
                      <p className="text-slate-600">
                        This certificate validates our commitment to maintaining
                        the highest standards of quality and compliance in our
                        industry.
                      </p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-3xl p-8 mb-20 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5" />
          <div className="relative z-10 text-center">
            <h3 className="text-3xl font-bold mb-4">
              Trusted by Industry Leaders
            </h3>
            <p className="text-xl text-white/90 mb-6">
              Our certifications represent our unwavering commitment to
              excellence
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold">{certificates.length}+</div>
                <div className="text-white/80">Active Certificates</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold">100%</div>
                <div className="text-white/80">Compliance Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold">24/7</div>
                <div className="text-white/80">Quality Monitoring</div>
              </div>
            </div>
          </div>
        </motion.div>

        <QualityStandards />
        <QualityAssuranceFAQ />
      </div>
    </div>
  );
}
