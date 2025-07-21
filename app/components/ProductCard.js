"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProductCard = ({ product }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card className="h-full overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow duration-300">
        <div className="relative overflow-hidden">
          <img
            src={product.imageURL}
            alt={product.name}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        </div>
        <CardHeader>
          <CardTitle className="text-[#1A3A5A] text-lg">
            {product.name}
          </CardTitle>
          <CardDescription className="text-sm text-gray-600">
            {product.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="flex justify-between items-center">
            <span className="text-sm text-[#348E4E] font-medium bg-[#348E4E]/10 px-2 py-1 rounded">
              {product.category}
            </span>
            <Button
              asChild
              size="sm"
              className="bg-[#348E4E] hover:bg-[#348E4E]/90 text-white"
            >
              <Link href={`/products/${product.id}`}>View Details</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProductCard;
