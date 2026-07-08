"use client";
import ProductFeatures from "@/components/product/product-features";
import ProductFloatingPriceCard from "@/components/product/product-floating-price-card";
import { useState } from "react";

export default function ProductImage() {
  const images = [
    "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&amp;auto=format&amp;fit=crop&amp;q=80",
    "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400&amp;auto=format&amp;fit=crop&amp;q=80",
    "https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=400&amp;auto=format&amp;fit=crop&amp;q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&amp;auto=format&amp;fit=crop&amp;q=80",
  ];
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="lg:col-span-8">
      <div
        data-motion="image"
        className="relative rounded-3xl overflow-hidden"
        style={{ opacity: 1, transform: "scale(1)", filter: "blur(0px)" }}
      >
        {/* Main Image */}
        <img
          data-motion="image"
          src={
            selectedImage ||
            "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=1200&amp;auto=format&amp;fit=crop&amp;q=80"
          }
          alt="Premium bluetooth speaker"
          className="w-full aspect-4/3 object-cover"
          style={{
            opacity: 1,
            transform: "scale(1)",
            filter: "blur(0px)",
          }}
        />
        <ProductFeatures />
        <ProductFloatingPriceCard price={0} priceAfterDiscount={45} />
      </div>

      {/* <!-- Thumbnail Row --> */}
      <div
        data-motion="thumbnails"
        className="grid grid-cols-4 gap-4 mt-4"
        style={{
          opacity: 1,
          transform: "translateY(0px)",
          filter: "blur(0px)",
        }}
      >
        {images.map((image, index) => (
          <button
            key={index}
            type="button"
            onClick={() => {
              setSelectedImage(image);
            }}
            className={`rounded-2xl overflow-hidden hover:ring-2 hover:ring-honey dark:hover:ring-honey transition-all ${
              selectedImage === image ? "ring-2 ring-honey ring-offset-2" : ""
            }`}
          >
            <img
              key={index}
              data-motion="image"
              src={image}
              alt="Speaker angle"
              className="w-full aspect-square object-cover"
              style={{
                opacity: 1,
                transform: "scale(1)",
                filter: "blur(0px)",
              }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
