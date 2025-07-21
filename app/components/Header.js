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
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 lg:h-18 py-2">
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="relative">
              <Link href="/">
                <img
                  src="/logo.jpg"
                  alt="Keshav Exporters Logo"
                  className="h-12 w-auto sm:h-14 lg:h-16 object-contain transition-transform duration-300 hover:scale-105"
                  style={{ cursor: "pointer" }}
                />
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center space-x-8"
            aria-label="Main navigation"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-blue-900 font-medium hover:text-blue-600 transition-all duration-300 relative group px-3 py-2${
                  isActive(item.href) ? " underline font-bold" : ""
                }`}
                aria-current={isActive(item.href) ? "page" : undefined}
                scroll={false}
              >
                {item.name}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-400 to-green-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop Phone Number */}
          <div className="hidden lg:flex items-center space-x-2 bg-blue-50 border border-blue-200 rounded-lg px-4 py-2 hover:bg-blue-100 transition-all duration-300 group">
            <Phone className="w-4 h-4 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
            <a
              href="tel:+91-7900472933"
              className="text-blue-900 font-semibold group-hover:text-blue-700 transition-colors duration-300"
              aria-label="Call us"
            >
              +91-7900472933
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-blue-900 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded transition-colors duration-200"
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
              ? "max-h-[400px] opacity-100 visible"
              : "max-h-0 opacity-0 invisible"
          } overflow-hidden`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200 shadow-lg rounded-b-lg">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-3 text-blue-900 font-medium hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 rounded-md"
                aria-current={isActive(item.href) ? "page" : undefined}
                onClick={() => setIsMenuOpen(false)}
                scroll={false}
                tabIndex={isMenuOpen ? 0 : -1}
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Phone Number */}
            <div className="px-3 py-3 mt-4 border-t border-gray-200">
              <a
                href="tel:+91-7900472933"
                className="flex items-center space-x-2 text-blue-900 font-semibold hover:text-blue-600 transition-colors duration-300"
                aria-label="Call us"
              >
                <Phone className="w-4 h-4" />
                <span>+91-7900472933</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
