"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Certificates", href: "/certificates" },
  ];

  return (
    <header className="bg-white shadow-xl sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-18 lg:h-20 py-3">
          {/* Logo */}
          <div className="flex items-center">
            <div className="relative">
              <Link href="/">
                <img
                  src="/Keshavlogoheader.png"
                  alt="Keshav Exporters Logo"
                  className="h-16 w-auto sm:h-18 lg:h-20 object-contain hover:opacity-80 transition-opacity duration-200"
                  style={{ cursor: "pointer" }}
                />
              </Link>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex items-center space-x-2"
            aria-label="Main navigation"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[#0A3C66] font-semibold px-6 py-3 rounded-full text-sm uppercase tracking-wide transition-colors duration-200 hover:text-[#3A874C]"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Phone */}
          <div className="hidden lg:flex items-center space-x-3 bg-gradient-to-r from-[#0A3C66] to-[#3A874C] text-white rounded-full px-6 py-3 cursor-pointer hover:opacity-90 transition-opacity duration-200">
            <Phone className="w-5 h-5" />
            <a
              href="tel:+91-7900472933"
              className="font-bold text-sm tracking-wide"
              aria-label="Call us"
            >
              +91-7900472933
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-[#0A3C66] focus:outline-none focus:ring-2 focus:ring-[#0A3C66] rounded-lg p-2 hover:text-[#3A874C] transition-colors duration-200"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            type="button"
          >
            {isMenuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        <div
          id="mobile-menu"
          className={`lg:hidden transition-all duration-300 origin-top ${
            isMenuOpen
              ? "max-h-[500px] opacity-100 visible"
              : "max-h-0 opacity-0 invisible"
          } overflow-hidden`}
        >
          <div className="px-4 pt-4 pb-6 space-y-3 bg-white border-t border-gray-100 shadow-2xl rounded-b-2xl">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-6 py-4 font-semibold rounded-xl text-sm uppercase tracking-wide transition-colors duration-200 text-[#0A3C66] hover:text-[#3A874C]"
                onClick={() => setIsMenuOpen(false)}
                scroll={false}
                tabIndex={isMenuOpen ? 0 : -1}
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Phone */}
            <div className="px-6 py-4 mt-6 border-t border-gray-100">
              <a
                href="tel:+91-7900472933"
                className="flex items-center space-x-3 text-white font-bold bg-gradient-to-r from-[#0A3C66] to-[#3A874C] px-6 py-4 rounded-xl hover:opacity-90 transition-opacity duration-200"
                aria-label="Call us"
              >
                <Phone className="w-5 h-5" />
                <span className="text-sm tracking-wide">+91-7900472933</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
