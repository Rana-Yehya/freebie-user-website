"use client";
import ProductDetailedDescription from "./product-detailed-description";
import ProductImage from "./product-images";
import ProductTitleAndDescription from "./product-title-and-description";
import CustomButton from "@/components/ui/custom-button";
import RatingDisplay from "@/components/ui/rating-display";
import { ProductItem } from "../../../../../types/product";
import { useState } from "react";
import { ProductVariant } from "../../../../../types/product-variant";
import { Info } from "../../../../../types/info";
import SuccessAlert from "@/components/shared/alerts/success-alert";
import ErrorAlert from "@/components/shared/alerts/error-alert";
import { useRouter } from "next/navigation";
import ProductOccasions from "./product-occasions";
import ProductColors from "./product-colors";
import ProductQuantity from "./product-quantity";
import ProductDimensions from "./product-dimensions";
import ProductCategoryAndSubcategory from "./product-category-and-subcategory";

interface ProductDetailsProps {
  product: ProductItem;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [quantity, setQuantity] = useState(1);
  const [loadingCart, setLoadingCart] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(
    product?.productVariant?.at(0) ?? null,
  );
  const router = useRouter();

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
  const colors: string[] | undefined = product?.productVariant?.map(
    (item) => item.color,
  );

  // Calculate rating from reviews
  const rating = product.avgRating || 0;
  const reviewCount = product.reviewsCount || 0;
  const redirectToLogin = () => {
    const currentPath = window.location.pathname;

    router.push(`/login?redirect=${encodeURIComponent(currentPath)}`);
  };
  const handleQuantityChange = (type: "increase" | "decrease") => {
    if (type === "increase") {
      setQuantity((prev) => prev + 1);
    } else {
      setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    }
  };
  const handleAddToCart = async (isAddToCart: boolean) => {
    setLoadingCart(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch("/api/product", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productVariantId: selectedVariant?.id,
          quantity: quantity,
        }),
      });
      const data: Info = await response.json();

      if (!data.isSuccess) {
        if (response.status === 401) {
          redirectToLogin();
        }
        throw new Error(
          data.message || "Something went wrong. Please try again.",
        );
      } else {
        setSuccess(data.message ?? "We'll get back to you within 24 hours.");
        setError(null);
        if (isAddToCart == false) {
          setTimeout(() => {
            router.push("/cart");
          }, 3000);
        }
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
      setLoadingCart(false);
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
            <ProductCategoryAndSubcategory
              category={category}
              subcategory={subcategory}
            />
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
              <ProductOccasions occasions={occasions} />

              {/* Color Selection */}

              <ProductColors
                colors={colors}
                setSelectedVariant={(index) => {
                  setSelectedVariant(
                    product?.productVariant?.at(index) ?? null,
                  );
                }}
                isColorSelected={(index) => {
                  return (
                    index ==
                    product?.productVariant?.findIndex(
                      (item) => item?.color === selectedVariant?.color,
                    )
                  );
                }}
              />
              {/* Product Details Grid */}
              <ProductDimensions product={product} />

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
                {/* <button
                  type="button"
                  className="text-slate-400 hover:text-red-500 transition-colors"
                  aria-label="Add to wishlist"
                >
                  <img src="/heart.svg" />
                </button> */}
              </div>

              {/* Quantity Selector */}

              <ProductQuantity
                quantity={quantity}
                handleQuantityChange={handleQuantityChange}
              />
              <SuccessAlert success={success} />
              <ErrorAlert error={error} />

              <CustomButton
                className="w-full h-14 rounded-full border-2 border-slate-300 text-black font-semibold hover:border-primary hover:bg-primary/5 hover:text-primary transition-all duration-300 flex items-center justify-center gap-2"
                title="Add to Cart"
                disabled={loadingCart}
                onClick={() => handleAddToCart(true)}
              />

              <CustomButton
                onClick={() => handleAddToCart(false)}
                data-motion="button"
                className="w-full h-14 bg-primary font-semibold hover:bg-honey hover:text-white transition-all duration-300"
                title={`Buy Now — $${((product.price ?? 0) * quantity).toFixed(2)}`}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
