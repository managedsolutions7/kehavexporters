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

  // Helper for current route (improve with usePathname in App Router!)
  // Here it's basic; for full functionality, use `const pathname = usePathname()` from 'next/navigation'
  const isActive = (href) =>
    typeof window !== "undefined" && window.location.pathname === href;

  return (
    <header className="bg-white shadow-xl sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-18 lg:h-20 py-3">
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="relative">
              <Link href="/">
                <img
                  src="/logo.jpg"
                  alt="Keshav Exporters Logo"
                  className="h-16 w-auto sm:h-18 lg:h-20 object-contain transition-transform duration-300 hover:scale-105"
                  style={{ cursor: "pointer" }}
                />
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center space-x-2"
            aria-label="Main navigation"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-[#0A3C66] font-semibold transition-all duration-300 px-6 py-3 rounded-full text-sm uppercase tracking-wide ${
                  isActive(item.href)
                    ? "bg-gradient-to-r from-[#0A3C66] to-[#3A874C] text-white shadow-lg transform translate-y-0"
                    : "hover:bg-gradient-to-r hover:from-[#0A3C66] hover:to-[#3A874C] hover:text-white hover:shadow-lg hover:transform hover:-translate-y-0.5"
                }`}
                aria-current={isActive(item.href) ? "page" : undefined}
                scroll={false}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Phone Number */}
          <div className="hidden lg:flex items-center space-x-3 bg-gradient-to-r from-[#0A3C66] to-[#3A874C] text-white rounded-full px-6 py-3 hover:shadow-xl hover:transform hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer">
            <Phone className="w-5 h-5 group-hover:rotate-6 transition-transform duration-300" />
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
            className="lg:hidden text-[#0A3C66] hover:text-[#3A874C] focus:outline-none focus:ring-2 focus:ring-[#0A3C66] rounded-lg p-2 transition-all duration-200 hover:bg-gray-50 active:scale-95"
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

        {/* Mobile Navigation */}
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
                className={`block px-6 py-4 font-semibold transition-all duration-300 rounded-xl text-sm uppercase tracking-wide ${
                  isActive(item.href)
                    ? "bg-gradient-to-r from-[#0A3C66] to-[#3A874C] text-white shadow-lg"
                    : "text-[#0A3C66] hover:bg-gradient-to-r hover:from-[#0A3C66] hover:to-[#3A874C] hover:text-white hover:shadow-lg hover:transform hover:-translate-y-0.5"
                }`}
                aria-current={isActive(item.href) ? "page" : undefined}
                onClick={() => setIsMenuOpen(false)}
                scroll={false}
                tabIndex={isMenuOpen ? 0 : -1}
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Phone Number */}
            <div className="px-6 py-4 mt-6 border-t border-gray-100">
              <a
                href="tel:+91-7900472933"
                className="flex items-center space-x-3 text-white font-bold bg-gradient-to-r from-[#0A3C66] to-[#3A874C] px-6 py-4 rounded-xl hover:shadow-lg hover:transform hover:-translate-y-0.5 transition-all duration-300 active:scale-95"
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
