"use client";
import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Shield,
  Lock,
  Eye,
  FileText,
} from "lucide-react";

const PrivacyPolicy = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const sections = [
    {
      id: "information-collection",
      title: "Information We Collect",
      icon: <Eye className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <h4 className="font-semibold text-gray-800">Personal Information</h4>
          <p>
            We collect personal information that you provide directly to us,
            including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Name, email address, phone number, and mailing address</li>
            <li>Medical information relevant to our products or services</li>
            <li>Healthcare professional credentials and affiliations</li>
            <li>Prescription and treatment history (when applicable)</li>
            <li>Insurance information for prescription assistance programs</li>
          </ul>

          <h4 className="font-semibold text-gray-800 mt-6">
            Automatically Collected Information
          </h4>
          <p>
            We automatically collect certain information when you visit our
            website:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Device information, IP address, and browser type</li>
            <li>Website usage data and navigation patterns</li>
            <li>Cookies and similar tracking technologies</li>
            <li>Geolocation data (with your consent)</li>
          </ul>
        </div>
      ),
    },
    {
      id: "information-use",
      title: "How We Use Your Information",
      icon: <FileText className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>We use your information for the following purposes:</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div
              className="p-4 rounded-lg"
              style={{ backgroundColor: "#f0f6ff" }}
            >
              <h4 className="font-semibold" style={{ color: "#0A3C66" }}>
                Healthcare Services
              </h4>
              <ul className="text-sm space-y-1">
                <li>• Provide patient support programs</li>
                <li>• Process prescription assistance applications</li>
                <li>• Deliver medical information and resources</li>
                <li>• Facilitate communication with healthcare providers</li>
              </ul>
            </div>
            <div
              className="p-4 rounded-lg"
              style={{ backgroundColor: "#f0f8f2" }}
            >
              <h4 className="font-semibold mb-2" style={{ color: "#3A874C" }}>
                Business Operations
              </h4>
              <ul className="text-sm space-y-1">
                <li>• Improve our products and services</li>
                <li>• Conduct research and development</li>
                <li>• Ensure regulatory compliance</li>
                <li>• Prevent fraud and maintain security</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "information-sharing",
      title: "Information Sharing and Disclosure",
      icon: <Shield className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div
            className="bg-yellow-50 border-l-4 p-4"
            style={{ borderColor: "#3A874C" }}
          >
            <p className="font-semibold" style={{ color: "#3A874C" }}>
              We do not sell your personal health information.
            </p>
          </div>

          <p>We may share your information in the following circumstances:</p>
          <div className="space-y-3">
            <div className="border-l-4 pl-4" style={{ borderColor: "#0A3C66" }}>
              <h4 className="font-semibold">Healthcare Providers</h4>
              <p className="text-sm text-gray-600">
                With your healthcare team to coordinate care and treatment
              </p>
            </div>
            <div className="border-l-4 pl-4" style={{ borderColor: "#3A874C" }}>
              <h4 className="font-semibold">Service Providers</h4>
              <p className="text-sm text-gray-600">
                With trusted partners who assist in delivering our services
              </p>
            </div>
            <div className="border-l-4 pl-4" style={{ borderColor: "#0A3C66" }}>
              <h4 className="font-semibold">Legal Requirements</h4>
              <p className="text-sm text-gray-600">
                When required by law or to protect rights and safety
              </p>
            </div>
            <div className="border-l-4 pl-4" style={{ borderColor: "#3A874C" }}>
              <h4 className="font-semibold">Business Transfers</h4>
              <p className="text-sm text-gray-600">
                In connection with mergers, acquisitions, or asset sales
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "data-security",
      title: "Data Security and Protection",
      icon: <Lock className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>
            We implement comprehensive security measures to protect your
            information:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-semibold flex items-center gap-2">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "#3A874C" }}
                ></div>
                Technical Safeguards
              </h4>
              <ul className="text-sm space-y-1 pl-4">
                <li>• SSL/TLS encryption for data transmission</li>
                <li>• Advanced firewalls and intrusion detection</li>
                <li>• Regular security audits and penetration testing</li>
                <li>• Multi-factor authentication for access</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold flex items-center gap-2">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "#0A3C66" }}
                ></div>
                Administrative Safeguards
              </h4>
              <ul className="text-sm space-y-1 pl-4">
                <li>• Employee training on data protection</li>
                <li>• Access controls and authorization protocols</li>
                <li>• Data breach response procedures</li>
                <li>• Compliance with HIPAA and FDA regulations</li>
              </ul>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-red-800">
              Data Breach Notification
            </h4>
            <p className="text-sm text-red-700 mt-1">
              In the unlikely event of a data breach affecting your personal
              health information, we will notify you within 60 days as required
              by law.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "your-rights",
      title: "Your Privacy Rights",
      icon: <Shield className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>
            You have the following rights regarding your personal information:
          </p>
          <div className="grid gap-4">
            <div
              className="p-4 rounded-lg"
              style={{
                background: "linear-gradient(to right, #f0f6ff, #f0f4ff)",
              }}
            >
              <h4 className="font-semibold" style={{ color: "#0A3C66" }}>
                Access and Portability
              </h4>
              <p className="text-sm mt-1">
                Request copies of your personal information and transfer to
                another provider
              </p>
            </div>
            <div
              className="p-4 rounded-lg"
              style={{
                background: "linear-gradient(to right, #f0f8f2, #f0f8f2)",
              }}
            >
              <h4 className="font-semibold" style={{ color: "#3A874C" }}>
                Correction and Updates
              </h4>
              <p className="text-sm mt-1">
                Request corrections to inaccurate or incomplete information
              </p>
            </div>
            <div
              className="p-4 rounded-lg"
              style={{
                background: "linear-gradient(to right, #f0f6ff, #f0f4ff)",
              }}
            >
              <h4 className="font-semibold" style={{ color: "#0A3C66" }}>
                Deletion
              </h4>
              <p className="text-sm mt-1">
                Request deletion of your personal information (subject to legal
                requirements)
              </p>
            </div>
            <div
              className="p-4 rounded-lg"
              style={{
                background: "linear-gradient(to right, #f0f8f2, #f0f8f2)",
              }}
            >
              <h4 className="font-semibold" style={{ color: "#3A874C" }}>
                Opt-out
              </h4>
              <p className="text-sm mt-1">
                Opt out of marketing communications and data processing for
                certain purposes
              </p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold">How to Exercise Your Rights</h4>
            <p className="text-sm mt-2">
              To exercise any of these rights, please contact our Privacy
              Officer using the information provided in the Contact section
              below. We will respond to your request within 30 days.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "cookies-tracking",
      title: "Cookies and Tracking Technologies",
      icon: <Eye className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>
            We use cookies and similar technologies to enhance your browsing
            experience:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border border-gray-300 p-3 text-left">
                    Cookie Type
                  </th>
                  <th className="border border-gray-300 p-3 text-left">
                    Purpose
                  </th>
                  <th className="border border-gray-300 p-3 text-left">
                    Duration
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">
                    Essential
                  </td>
                  <td className="border border-gray-300 p-3">
                    Required for website functionality
                  </td>
                  <td className="border border-gray-300 p-3">Session</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-medium">
                    Analytics
                  </td>
                  <td className="border border-gray-300 p-3">
                    Understand website usage patterns
                  </td>
                  <td className="border border-gray-300 p-3">2 years</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">
                    Functional
                  </td>
                  <td className="border border-gray-300 p-3">
                    Remember your preferences
                  </td>
                  <td className="border border-gray-300 p-3">1 year</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-medium">
                    Marketing
                  </td>
                  <td className="border border-gray-300 p-3">
                    Personalized advertising (opt-in)
                  </td>
                  <td className="border border-gray-300 p-3">90 days</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm">
            You can manage cookie preferences through your browser settings or
            our cookie consent banner.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50"
      style={{
        background:
          "linear-gradient(135deg, #f0f6ff 0%, #ffffff 50%, #f0f8f2 100%)",
      }}
    >
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-3">
            <div
              className="p-2 rounded-lg"
              style={{ backgroundColor: "#0A3C66" }}
            >
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold" style={{ color: "#0A3C66" }}>
                Privacy Policy
              </h1>
              <p className="text-gray-600 mt-1">
                Your privacy and data protection are our top priorities
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              This Privacy Policy describes how [Your Pharmaceutical Company
              Name] ("we," "us," or "our") collects, uses, and protects your
              personal information when you use our website, products, and
              services. As a pharmaceutical company, we are committed to
              maintaining the highest standards of privacy protection and
              regulatory compliance.
            </p>

            <div
              className="border-l-4 p-4 my-6"
              style={{ backgroundColor: "#f0f6ff", borderColor: "#0A3C66" }}
            >
              <p className="font-medium" style={{ color: "#0A3C66" }}>
                <strong>Last Updated:</strong> July 22, 2025
              </p>
              <p className="text-sm mt-1" style={{ color: "#0A3C66" }}>
                We may update this policy periodically. Material changes will be
                notified via email or prominent website notice.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 my-6">
              <div
                className="text-center p-4 rounded-lg"
                style={{ backgroundColor: "#f0f8f2" }}
              >
                <Shield
                  className="w-8 h-8 mx-auto mb-2"
                  style={{ color: "#3A874C" }}
                />
                <h3 className="font-semibold" style={{ color: "#3A874C" }}>
                  HIPAA Compliant
                </h3>
                <p className="text-sm" style={{ color: "#3A874C" }}>
                  Healthcare data protection
                </p>
              </div>
              <div
                className="text-center p-4 rounded-lg"
                style={{ backgroundColor: "#f0f6ff" }}
              >
                <Lock
                  className="w-8 h-8 mx-auto mb-2"
                  style={{ color: "#0A3C66" }}
                />
                <h3 className="font-semibold" style={{ color: "#0A3C66" }}>
                  FDA Regulated
                </h3>
                <p className="text-sm" style={{ color: "#0A3C66" }}>
                  Pharmaceutical compliance
                </p>
              </div>
              <div
                className="text-center p-4 rounded-lg"
                style={{ backgroundColor: "#f0f8f2" }}
              >
                <Eye
                  className="w-8 h-8 mx-auto mb-2"
                  style={{ color: "#3A874C" }}
                />
                <h3 className="font-semibold" style={{ color: "#3A874C" }}>
                  Transparent
                </h3>
                <p className="text-sm" style={{ color: "#3A874C" }}>
                  Clear data practices
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Expandable Sections */}
        <div className="space-y-4 mb-8">
          {sections.map((section) => (
            <div
              key={section.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex items-center space-x-3">
                  <div
                    className="p-2 rounded-lg"
                    style={{ backgroundColor: "#f0f6ff" }}
                  >
                    {section.icon}
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    {section.title}
                  </h2>
                </div>
                {expandedSection === section.id ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>

              {expandedSection === section.id && (
                <div className="px-6 pb-6 border-t border-gray-100">
                  <div className="pt-4 prose max-w-none">{section.content}</div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            This privacy policy is compliant with HIPAA, FDA regulations, and
            applicable state and federal laws.
          </p>
          <p className="mt-2">© 2025 Keshav Exporters. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
