"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Package, ShieldCheck, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProductDetailClient({ product }) {
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#1A3A5A] mb-4">
            Product not found
          </h1>
          <Button asChild>
            <Link href="/products">Back to Products</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F8F9FA] min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Button
            variant="ghost"
            asChild
            className="text-[#1A3A5A] hover:text-[#348E4E]"
          >
            <Link href="/products" className="inline-flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Link>
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={product.imageURL}
              alt={product.name}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <span className="inline-block bg-[#348E4E]/10 text-[#348E4E] px-3 py-1 rounded-full text-sm font-medium mb-4">
                {product.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-[#1A3A5A] mb-4">
                {product.name}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[#1A3A5A]">
                Detailed Information
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {product.detailedInfo}
              </p>
              {product.packaging && (
                <div className="text-sm text-gray-700 mt-2">
                  <strong>Packaging:</strong> {product.packaging}
                </div>
              )}
              {product.hsCode && (
                <div className="text-sm text-gray-700 mt-1">
                  <strong>HS Code:</strong> {product.hsCode}
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <Package className="h-8 w-8 text-[#348E4E] mb-2" />
                  <CardTitle className="text-sm">Quality</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-gray-600">WHO-GMP Certified</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <ShieldCheck className="h-8 w-8 text-[#348E4E] mb-2" />
                  <CardTitle className="text-sm">Safety</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-gray-600">FDA Approved</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <Globe className="h-8 w-8 text-[#348E4E] mb-2" />
                  <CardTitle className="text-sm">Global</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-gray-600">Worldwide Shipping</p>
                </CardContent>
              </Card>
            </div>

            <div className="pt-6">
              <Button
                asChild
                size="lg"
                className="bg-[#348E4E] hover:bg-[#348E4E]/90 text-white w-full md:w-auto"
              >
                <Link href="/contact">Request a Quote</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
