"use client";
import ProductCard from "../../../product/_components/product-card";
import { Products, ProductItem } from "../../../../../types/product";
import { ProductQueryRequest } from "../../../../../types/product-query";
import searchProducts from "../../../product/_components/search/search-products";
import { useEffect, useState } from "react";

export default function ProductDisplay({
  tag,
  name,
  page = 1,
  limit = 12,
  priceSmall,
  priceHigh,
  occasionIds,
  colors,
}: ProductQueryRequest) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [products, setProducts] = useState<ProductItem[]>([]);

  useEffect(() => {
    handleSearch();
  }, []);
  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    setProducts([]);
    try {
      const response = await searchProducts({
        tag: tag,
        limit: limit,
      });
      if (!response?.isSuccess) {
        throw new Error(
          response?.message || "Something went wrong. Please try again.",
        );
      } else {
        setProducts(response?.data ?? []);
        setSuccess(
          response.message ?? "We'll get back to you within 24 hours.",
        );
        setError(null);
      }

      // Success

      // Optionally redirect after delay
      // setTimeout(() => {
      //   router.push("/");
      // }, 3000);
    } catch (err: any) {
      setError(err.message || "Failed to send message. Please try again.");
      setSuccess(null);
    } finally {
      setLoading(false);
    }
  };

  return (products ?? []).map((product, index) => (
    <div
      key={index}
      className="w-72 sm:w-80 flex-shrink-0 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
    >
      <ProductCard product={product} />
    </div>
  ));
}
