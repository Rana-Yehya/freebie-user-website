import { Suspense } from "react";
import ProductDetails from "./product-details";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Product Details",
};
export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const productId = (await params).productId;

  return (
    <section className="py-20 sm:py-24 bg-white">
      <ProductDetails />
    </section>
  );
}
