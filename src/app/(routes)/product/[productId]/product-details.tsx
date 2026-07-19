"use client";
import ProductDetailedDescription from "../_components/details/product-detailed-description";
import ProductImage from "../_components/details/product-images";
import ProductTitleAndDescription from "../_components/details/product-title-and-description";
import CustomButton from "@/components/ui/custom-button";
import RatingDisplay from "@/components/ui/rating-display";
import { ProductItem } from "../../../../types/product";
import { useState } from "react";

interface ProductDetailsProps {
  product: ProductItem;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [quantity, setQuantity] = useState(1);

  // Calculate discount percentage if actualPrice exists
  const discountPercentage = product.actualPrice
    ? Math.round(
        ((product.actualPrice - (product.price ?? 0)) / product.actualPrice) *
          100,
      )
    : 0;

  // Get product name
  const productName: string = product.name?.defaultName || "Product";

  // Get product description
  const productDescription: string = product.description?.defaultName || "";

  // Get category
  const category = product.category;

  // Get subcategory (if product has subcategory)
  const subcategory = product.category;

  // Get occasions
  const occasions = product.occasions || [];

  // Get colors from variants
  const colors =
    product.productVariant?.map((v) => v.color).filter(Boolean) || [];

  // Calculate rating from reviews
  const rating = product.avgRating || 0;
  const reviewCount = product.reviewsCount || 0;

  const handleQuantityChange = (type: "increase" | "decrease") => {
    if (type === "increase") {
      setQuantity((prev) => prev + 1);
    } else {
      setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    }
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Asymmetric 8/4 Split */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Large Image Section */}
          <div className="lg:col-span-8">
            {/* Breadcrumb-style Category */}
            <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
              {category && (
                <span className="hover:text-slate-600 transition-colors cursor-pointer">
                  {category.name?.defaultName}
                </span>
              )}
              {subcategory && (
                <>
                  <span className="text-slate-300">/</span>
                  <span className="hover:text-slate-600 transition-colors cursor-pointer">
                    {subcategory.name?.defaultName}
                  </span>
                </>
              )}
            </div>
            <ProductImage
              sideImages={product.images || []}
              mainImage={product.mainImage}
              productName={product.name?.defaultName}
              price={product.price ?? 0}
              actualPrice={product.actualPrice}
              isBestSeller={product.tags === "bestseller"}
              isFeatured={product.tags === "featured"}
              isNew={product.tags === "new"}
            />
          </div>

          {/* Compact Details Sidebar */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div className="space-y-4">
              {/* Title */}
              <h1>
                <span
                  data-animate="heading"
                  className="text-2xl font-bold text-black leading-tight block"
                  style={{ opacity: 1 }}
                >
                  <ProductTitleAndDescription title={productName} />
                </span>
              </h1>

              {/* Rating */}
              <RatingDisplay
                rating={rating}
                reviewCount={reviewCount}
                showReviews={reviewCount > 0}
              />

              {/* Description */}
              <p
                data-animate="text"
                className="text-slate-600 leading-relaxed text-sm"
                style={{ opacity: 1 }}
              >
                <ProductTitleAndDescription title={productDescription || ""} />
              </p>

              {/* Best For - Occasions */}
              {occasions.length > 0 && (
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm font-medium text-slate-700">
                    Best for:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {occasions.map((occasion, index) => (
                      <span
                        key={index}
                        className="text-sm text-slate-600 bg-slate-100 px-3 py-1 rounded-full flex items-center gap-1.5"
                      >
                        {occasion.image?.secureUrl && (
                          <img
                            src={occasion.image.secureUrl}
                            alt={occasion.name?.defaultName}
                            className="w-4 h-4 rounded-full object-cover"
                          />
                        )}
                        {occasion.name?.defaultName}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Color Selection */}
              {colors.length > 0 && (
                <div>
                  <p className="text-sm font-medium text-slate-700 mb-3">
                    Available Colors
                  </p>
                  <div className="flex items-center gap-3">
                    {colors.slice(0, 6).map((color, index) => (
                      <button
                        key={index}
                        type="button"
                        className={`w-8 h-8 rounded-full ring-offset-2 transition-all hover:scale-110 ${
                          index === 0 ? "ring-2 ring-primary ring-offset-2" : ""
                        }`}
                        style={{ backgroundColor: `#${color}` }}
                        aria-label={`Color ${index + 1}`}
                      />
                    ))}
                    {colors.length > 6 && (
                      <span className="text-xs text-slate-400">
                        +{colors.length - 6}
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* Product Details Grid */}
              <div className="grid grid-cols-2 gap-2 text-sm">
                {product.dimensionsWCm && (
                  <div className="flex items-center gap-1">
                    <span className="text-slate-400">W:</span>
                    <span className="font-medium text-slate-700">
                      {product.dimensionsWCm}cm
                    </span>
                  </div>
                )}
                {product.dimensionsHCm && (
                  <div className="flex items-center gap-1">
                    <span className="text-slate-400">H:</span>
                    <span className="font-medium text-slate-700">
                      {product.dimensionsHCm}cm
                    </span>
                  </div>
                )}
                {product.dimensionsLCm && (
                  <div className="flex items-center gap-1">
                    <span className="text-slate-400">L:</span>
                    <span className="font-medium text-slate-700">
                      {product.dimensionsLCm}cm
                    </span>
                  </div>
                )}
                {product.weightInKg && (
                  <div className="flex items-center gap-1">
                    <span className="text-slate-400">Weight:</span>
                    <span className="font-medium text-slate-700">
                      {product.weightInKg}kg
                    </span>
                  </div>
                )}
                {/* {product.canBeDeliveredOutsideState !== undefined && (
                  <div className="col-span-2 flex items-center gap-1">
                    <span className="text-slate-400">Delivery:</span>
                    <span
                      className={`font-medium ${product.canBeDeliveredOutsideState ? "text-green-600" : "text-amber-600"}`}
                    >
                      {product.canBeDeliveredOutsideState
                        ? "Nationwide"
                        : "Local Only"}
                    </span>
                  </div>
                )} */}
                {product.doesNeedPreparation &&
                  product.preparationTimeInMinutes && (
                    <div className="col-span-2 flex items-center gap-1">
                      <span className="text-slate-400">Prep Time:</span>
                      <span className="font-medium text-slate-700">
                        {product.preparationTimeInMinutes} mins
                      </span>
                    </div>
                  )}
              </div>

              {/* Detailed Description */}
              {product.detailedDescription?.defaultName && (
                <ProductDetailedDescription
                  title={product.detailedDescription.defaultName}
                />
              )}
            </div>

            {/* Actions */}
            <div className="space-y-4 mt-6 pt-6 border-t border-slate-200">
              {/* Price & Wishlist */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-primary">
                    ${product.price}
                  </span>
                  {product.actualPrice && (
                    <>
                      <span className="text-sm line-through text-slate-400">
                        ${product.actualPrice}
                      </span>
                      <span className="text-xs font-semibold text-white bg-red-500 px-2 py-0.5 rounded-full">
                        {discountPercentage}% OFF
                      </span>
                    </>
                  )}
                </div>
                <button
                  type="button"
                  className="text-slate-400 hover:text-red-500 transition-colors"
                  aria-label="Add to wishlist"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-slate-700">
                  Quantity
                </span>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => handleQuantityChange("decrease")}
                    className="w-8 h-8 flex items-center justify-center rounded-full border border-slate-300 hover:border-primary hover:bg-primary/5 transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <svg
                      className="w-4 h-4 text-slate-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M20 12H4"
                      />
                    </svg>
                  </button>
                  <span className="text-lg font-semibold text-slate-900 w-8 text-center">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleQuantityChange("increase")}
                    className="w-8 h-8 flex items-center justify-center rounded-full border border-slate-300 hover:border-primary hover:bg-primary/5 transition-colors"
                    aria-label="Increase quantity"
                  >
                    <svg
                      className="w-4 h-4 text-slate-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <CustomButton
                className="w-full h-14 rounded-full border-2 border-slate-300 text-black font-semibold hover:border-primary hover:bg-primary/5 hover:text-primary transition-all duration-300 flex items-center justify-center gap-2"
                title="Add to Cart"
                onClick={() => {}}
              />

              <CustomButton
                onClick={() => {}}
                data-motion="button"
                className="w-full h-14 rounded-full bg-primary hover:bg-[#f5a80a] text-white font-semibold hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
                title={`Buy Now — $${((product.price ?? 0) * quantity).toFixed(2)}`}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
