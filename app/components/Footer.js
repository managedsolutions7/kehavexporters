"use client";
import React from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
  Award,
  Globe,
  Shield,
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Products", href: "/products" },
    { name: "Certificates", href: "/certificates" },
    { name: "Contact", href: "/contact" },
  ];

  const productCategories = [
    { name: "Paracetamol 500mg Tablets", href: "/products/1" },
    { name: "Amlodipine 5mg Tablets", href: "/products/2" },
    { name: "Azithromycin 250/500mg Tablets", href: "/products/3" },
    { name: "Norfloxacin + Tinidazole Tablets", href: "/products/4" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://facebook.com/",
      color: "hover:text-blue-600",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://twitter.com/",
      color: "hover:text-blue-400",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/",
      color: "hover:text-blue-700",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/",
      color: "hover:text-pink-600",
    },
  ];

  return (
    <footer className="bg-[#1A3A5A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <img
                src="/logo.jpg"
                alt="Keshav Exporters Logo"
                className="h-16 w-auto object-contain mr-3"
              />
              <div>
                <h3 className="text-xl font-bold">KESHAV</h3>
                <p className="text-sm text-blue-200">EXPORTERS</p>
              </div>
            </div>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Leading exporters of high-quality pharmaceutical and medical
              products, committed to excellence and global healthcare standards.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-blue-200">
                <Award className="w-4 h-4 mr-2 text-green-400" />
                <span className="text-sm">ISO Certified</span>
              </div>
              <div className="flex items-center text-blue-200">
                <Globe className="w-4 h-4 mr-2 text-green-400" />
                <span className="text-sm">Global Reach</span>
              </div>
              <div className="flex items-center text-blue-200">
                <Shield className="w-4 h-4 mr-2 text-green-400" />
                <span className="text-sm">Quality Assured</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer Quick Links">
            <h4 className="text-lg font-semibold mb-6 relative">
              Quick Links
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-green-500 mt-1"></div>
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Product Categories */}
          <nav aria-label="Footer Product Categories">
            <h4 className="text-lg font-semibold mb-6 relative">
              Our Products
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-green-500 mt-1"></div>
            </h4>
            <ul className="space-y-3">
              {productCategories.map((category) => (
                <li key={category.name}>
                  <Link
                    href={category.href}
                    className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-sm">{category.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info */}
          <section aria-label="Contact Information">
            <h4 className="text-lg font-semibold mb-6 relative">
              Contact Info
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-green-500 mt-1"></div>
            </h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 text-green-400 flex-shrink-0" />
                <a
                  href="https://www.google.com/maps/place/Khurja,+Uttar+Pradesh,+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-200 text-sm leading-relaxed not-italic hover:text-white underline transition-colors duration-200"
                >
                  Khurja, Uttar Pradesh, India
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-green-400" />
                <a
                  href="tel:+91-7900472933"
                  className="text-blue-200 hover:text-white transition-colors duration-300"
                >
                  +91-7900472933
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-green-400" />
                <a
                  href="mailto:Keshavexporters123@gmail.com"
                  className="text-blue-200 hover:text-white transition-colors duration-300"
                >
                  Keshavexporters123@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-3 text-green-400" />
                <span className="text-blue-200 text-sm">
                  Mon - Sat: 9:00 AM - 6:00 PM
                </span>
              </div>
            </div>
            {/* Social Links */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3 text-blue-200">
                Follow Us
              </h5>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-white/10 p-2 rounded-lg ${social.color} transition-all duration-300 hover:bg-white/20 hover:scale-110`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t bg-[#1A3A5A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm">
            <p className="text-blue-300 mb-2 md:mb-0">
              © {new Date().getFullYear()} Keshav Exporters. All rights
              reserved.
            </p>
            <div className="flex space-x-6 text-blue-300">
              <Link
                href="/privacypolicy"
                className="hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/privacypolicy"
                className="hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
