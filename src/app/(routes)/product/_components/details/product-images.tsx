"use client";
import { Image } from "../../../../../types/image";
import ProductFeatures from "./product-features";
import { useState } from "react";

interface ProductImageProps {
  images: Image[];
  mainImage: Image;
  productName?: string;
  price: number;
  actualPrice?: number;
  discountPercentage?: number;
  isBestSeller?: boolean;
  isFeatured?: boolean;
  isNew?: boolean;
}

export default function ProductImage({
  images,
  mainImage,
  productName = "Product",
  price,
  actualPrice,
  discountPercentage = 0,
  isBestSeller = false,
  isFeatured = false,
  isNew = false,
}: ProductImageProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Calculate discount percentage
  const calculatedDiscount = actualPrice
    ? Math.round(((actualPrice - price) / actualPrice) * 100)
    : discountPercentage;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <div className="lg:col-span-8">
      <div
        data-motion="image"
        className="relative rounded-3xl overflow-hidden bg-gray-50 group"
        style={{ opacity: 1, transform: "scale(1)", filter: "blur(0px)" }}
        onMouseEnter={() => setIsZoomed(true)}
        onMouseLeave={() => setIsZoomed(false)}
        onMouseMove={handleMouseMove}
      >
        {/* Main Image with Zoom Effect */}
        <div className="relative overflow-hidden">
          <img
            data-motion="image"
            src={selectedImage || mainImage?.secureUrl || "/placeholder.png"}
            alt={productName}
            className={`w-full aspect-4/3 object-cover transition-transform duration-500 ${
              isZoomed ? "scale-150" : "scale-100"
            }`}
            style={{
              opacity: 1,
              transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
              filter: "blur(0px)",
            }}
          />
        </div>

        {/* Product Features Badges */}
        <ProductFeatures
          isBestSeller={isBestSeller}
          discountPercentage={calculatedDiscount}
          hasDiscount={!!actualPrice}
          isFeatured={isFeatured}
          isNew={isNew}
        />

        {/* Zoom Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {isZoomed ? "🔍 Zoomed" : "🔍 Hover to zoom"}
        </div>

        {/* Image Counter */}
        {images && images.length > 1 && (
          <div className="absolute bottom-4 right-4 z-10 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full text-white text-xs">
            {images.findIndex(
              (img) =>
                img.secureUrl === (selectedImage || mainImage?.secureUrl),
            ) + 1}
            / {images.length}
          </div>
        )}
      </div>

      {/* Thumbnail Row */}
      {images && images.length > 0 && (
        <div
          data-motion="thumbnails"
          className="grid grid-cols-4 gap-4 mt-4"
          style={{
            opacity: 1,
            transform: "translateY(0px)",
            filter: "blur(0px)",
          }}
        >
          {images.slice(0, 4).map((image, index) => (
            <button
              key={index}
              type="button"
              onClick={() => {
                image.secureUrl && setSelectedImage(image.secureUrl);
              }}
              className={`rounded-2xl overflow-hidden hover:ring-2 hover:ring-honey dark:hover:ring-honey transition-all ${
                selectedImage === image.secureUrl ||
                (!selectedImage && index === 0)
                  ? "ring-2 ring-honey ring-offset-2"
                  : ""
              }`}
            >
              <img
                data-motion="image"
                src={image.secureUrl}
                alt={`${productName} view ${index + 1}`}
                className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-300"
                style={{
                  opacity: 1,
                  transform: "scale(1)",
                  filter: "blur(0px)",
                }}
              />
            </button>
          ))}
          {images.length > 4 && (
            <button className="rounded-2xl overflow-hidden bg-gray-100 flex items-center justify-center text-sm font-medium text-slate-600 hover:bg-gray-200 transition-colors">
              +{images.length - 4} more
            </button>
          )}
        </div>
      )}
    </div>
  );
}
