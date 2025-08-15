"use client";
export const dynamic = "force-dynamic";

import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const initialFormData = {
  firstName: "",
  lastName: "",
  email: "",
  countryCode: "+91",
  phone: "",
  company: "",
  country: "",
  message: "",
};

const ContactSection = () => {
  const [formData, setFormData] = useState(initialFormData);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Check if all required fields are filled
  const isFormValid = () => {
    return (
      formData.firstName.trim() !== "" &&
      formData.lastName.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.message.trim() !== ""
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        // Handle errors, including rate limiting
        throw new Error(result.error || "Something went wrong");
      }

      // Handle success
      toast({
        title: "Message Sent!",
        description: result.message,
      });
      setFormData(initialFormData); // Reset form on success
    } catch (error) {
      toast({
        variant: "destructive",
        title: "An error occurred",
        description: error.message,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      id: "phone",
      icon: "📞",
      title: "Phone",
      value: "+91-7900472933",
      link: "tel:+91-7900472933",
      description: "Available 9 AM - 6 PM IST",
    },
    {
      id: "email",
      icon: "✉️",
      title: "Email",
      value: "Keshavpharmaceuticals99@gmail.com",
      link: "mailto:Keshavpharmaceuticals99@gmail.com",
      description: "We respond within 24 hours",
    },
    {
      id: "address",
      icon: "📍",
      title: "Address",
      value: "Khurja, Uttar Pradesh, India",
      description: "Our headquarters & distribution center",
    },
    {
      id: "global-reach",
      icon: "🌍",
      title: "Global Reach",
      value: "65+ Countries Served",
      description: "Worldwide pharmaceutical supply chain",
    },
  ];

  return (
    <div>
      {/* Main Contact Section */}
      <section className="bg-gradient-to-br from-[#0A3C66] via-[#0A3C66] to-[#3A874C] py-20 px-4 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-tr from-[#3A874C]/20 to-transparent rounded-full blur-2xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
              <span className="text-white text-lg">📤</span>
              <span className="text-white font-semibold">Get In Touch</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Connect with Our
              <span className="block text-transparent bg-gradient-to-r from-[#3A874C] to-[#3A874C] bg-clip-text">
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
                  <span className="text-[#3A874C] text-2xl">🛡️</span>
                  Contact Information
                </h2>

                <div className="space-y-6">
                  {contactInfo.map(
                    ({ id, icon, title, value, link, description }) => (
                      <div key={id} className="group">
                        <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20">
                          <div className="bg-gradient-to-br from-[#3A874C] to-[#3A874C] p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <span className="text-white text-xl">{icon}</span>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-white text-lg mb-1">
                              {title}
                            </h3>
                            {link ? (
                              <a
                                href={link}
                                className="text-[#3A874C] hover:text-white text-lg transition-colors duration-200 break-all block"
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
                              <div className="text-[#3A874C] text-lg font-medium">
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
                    <span className="text-[#3A874C] text-xl">✅</span>
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
                    <span className="text-[#3A874C] text-xl">⏱️</span>
                    <span className="text-white font-bold">Quick Response</span>
                  </div>
                  <p className="text-white/80 text-sm">
                    24-hour response guarantee
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-[#3A874C]/20">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-[#0A3C66] mb-4">
                  Send us a<span className="text-[#3A874C]"> Message</span>
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24
                  hours
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="firstName"
                      className="text-sm font-semibold text-gray-700"
                    >
                      First Name *
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Enter your first name"
                      className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#3A874C] focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="lastName"
                      className="text-sm font-semibold text-gray-700"
                    >
                      Last Name *
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Enter your last name"
                      className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#3A874C] focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="email" // Corrected typo in className
                      className="text-sm font-semibold text-gray-700"
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#3A874C] focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-sm font-semibold text-gray-700"
                    >
                      Phone Number
                    </label>
                    <div className="flex gap-2">
                      <input
                        id="countryCode"
                        type="text"
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleInputChange}
                        placeholder="+91"
                        className="w-20 p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#3A874C] focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white text-center flex-shrink-0"
                      />
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="1234567890"
                        className="flex-1 min-w-0 p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#3A874C] focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="company"
                      className="text-sm font-semibold text-gray-700"
                    >
                      Company Name
                    </label>
                    <input
                      id="company"
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your company name"
                      className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#3A874C] focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="country"
                      className="text-sm font-semibold text-gray-700"
                    >
                      Country
                    </label>
                    <input
                      id="country"
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      placeholder="Your country"
                      className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#3A874C] focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your pharmaceutical requirements, quantities needed, target markets, or any specific questions you have..."
                    rows={5}
                    className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#3A874C] focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !isFormValid()}
                  className={`w-full font-bold py-4 px-8 rounded-xl transition-all duration-300 transform flex items-center justify-center gap-3 ${
                    isFormValid() && !isSubmitting
                      ? "bg-gradient-to-r from-[#0A3C66] via-[#0A3C66] to-[#3A874C] text-white hover:shadow-xl hover:-translate-y-1"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <span className="text-lg">📤</span>
                      {isFormValid()
                        ? "Send Message"
                        : "Please fill all required fields"}
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="bg-gradient-to-br from-gray-50 to-[#3A874C]/10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A3C66] mb-4">
              Visit Our <span className="text-[#3A874C]">Facility</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Located in Khurja, Uttar Pradesh, our state-of-the-art facility
              serves as the hub for our global pharmaceutical operations.
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <div className="absolute top-4 left-4 z-10">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-[#3A874C]/20">
                <div className="flex items-center gap-3">
                  <span className="text-[#3A874C] text-lg">📍</span>
                  <div>
                    <div className="font-bold text-[#0A3C66] text-sm">
                      Keshav Pharmaceutical
                    </div>
                    <div className="text-gray-600 text-xs">
                      Khurja, Uttar Pradesh, India
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <iframe
              title="Keshav Pharmaceutical Office Location"
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
    </div>
  );
};

export default ContactSection;
