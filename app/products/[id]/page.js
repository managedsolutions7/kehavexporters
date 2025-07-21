import { products } from "@/data/products";
import ProductDetailClient from "./productDetailClient";

export async function generateStaticParams() {
  return products.map((product) => ({ id: product.id.toString() }));
}

export default function ProductDetailPage({ params }) {
  const product = products.find((p) => p.id.toString() === params.id);
  return <ProductDetailClient product={product} />;
}
