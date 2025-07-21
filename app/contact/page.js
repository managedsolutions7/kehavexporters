"use client";
import React, { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Globe,
  Clock,
  Shield,
  CheckCircle,
} from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      country: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+91-7900472933",
      link: "tel:+91-7900472933",
      description: "Available 9 AM - 6 PM IST",
    },
    {
      icon: Mail,
      title: "Email",
      value: "Keshavexporters123@gmail.com",
      link: "mailto:Keshavexporters123@gmail.com",
      description: "We respond within 24 hours",
    },
    {
      icon: MapPin,
      title: "Address",
      value: "Khurja, Uttar Pradesh, India",
      description: "Our headquarters & distribution center",
    },
    {
      icon: Globe,
      title: "Global Reach",
      value: "65+ Countries Served",
      description: "Worldwide pharmaceutical exports",
    },
  ];

  return (
    <>
      {/* Main Contact Section */}
      <section className="bg-gradient-to-br from-[#0f4c75] via-[#2e86ab] to-[#a23b72] py-20 px-4 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-tr from-[#a23b72]/20 to-transparent rounded-full blur-2xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
              <Send className="h-5 w-5 text-white" />
              <span className="text-white font-semibold">Get In Touch</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Connect with Our
              <span className="block text-transparent bg-gradient-to-r from-[#22d3ee] to-[#38bdf8] bg-clip-text">
                Pharmaceutical Experts
              </span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Ready to discuss your pharmaceutical sourcing needs? Our team of
              experts is here to provide personalized solutions for your global
              healthcare requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <Shield className="h-6 w-6 text-[#22d3ee]" />
                  Contact Information
                </h2>

                <div className="space-y-6">
                  {contactInfo.map(
                    (
                      { icon: Icon, title, value, link, description },
                      index
                    ) => (
                      <div key={title} className="group">
                        <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20">
                          <div className="bg-gradient-to-br from-[#22d3ee] to-[#38bdf8] p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-white text-lg mb-1">
                              {title}
                            </h3>
                            {link ? (
                              <a
                                href={link}
                                className="text-[#22d3ee] hover:text-white text-lg transition-colors duration-200 break-all block"
                                target={
                                  title === "Email" ? "_blank" : undefined
                                }
                                rel={
                                  title === "Email"
                                    ? "noopener noreferrer"
                                    : undefined
                                }
                              >
                                {value}
                              </a>
                            ) : (
                              <div className="text-[#22d3ee] text-lg font-medium">
                                {value}
                              </div>
                            )}
                            <p className="text-white/70 text-sm mt-1">
                              {description}
                            </p>
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle className="h-6 w-6 text-green-400" />
                    <span className="text-white font-bold">
                      Licensed & Certified
                    </span>
                  </div>
                  <p className="text-white/80 text-sm">
                    Drug License & IEC verified
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <div className="flex items-center gap-3 mb-2">
                    <Clock className="h-6 w-6 text-blue-400" />
                    <span className="text-white font-bold">Quick Response</span>
                  </div>
                  <p className="text-white/80 text-sm">
                    24-hour response guarantee
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-blue-100">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-[#0f4c75] mb-4">
                  Send us a<span className="text-[#2e86ab]"> Message</span>
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24
                  hours
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Enter your first name"
                      required
                      className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2e86ab] focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Enter your last name"
                      required
                      className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2e86ab] focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      required
                      className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2e86ab] focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2e86ab] focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your company name"
                      className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2e86ab] focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">
                      Country
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      placeholder="Your country"
                      className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2e86ab] focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your pharmaceutical requirements, quantities needed, target markets, or any specific questions you have..."
                    rows={5}
                    required
                    className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2e86ab] focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#0f4c75] via-[#2e86ab] to-[#a23b72] text-white font-bold py-4 px-8 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:transform-none flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f4c75] mb-4">
              Visit Our <span className="text-[#2e86ab]">Facility</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Located in Khurja, Uttar Pradesh, our state-of-the-art facility
              serves as the hub for our global pharmaceutical export operations.
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <div className="absolute top-4 left-4 z-10">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-blue-100">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-[#2e86ab]" />
                  <div>
                    <div className="font-bold text-[#0f4c75] text-sm">
                      Keshav Exporters
                    </div>
                    <div className="text-gray-600 text-xs">
                      Khurja, Uttar Pradesh, India
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <iframe
              title="Keshav Exporters Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55940.3339395279!2d77.82276943632977!3d28.25032551579738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390b1a982924198d%3A0x83ad149877993096!2sKhurja%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1663188245671!5m2!1sen!2sin"
              width="100%"
              height="500"
              className="w-full h-[400px] sm:h-[450px] md:h-[500px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
