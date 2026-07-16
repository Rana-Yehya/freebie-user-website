// components/product/ProductCard.tsx
import Link from "next/link";
import { ProductItem } from "../../../../types/product";

interface ProductCardProps {
  product: ProductItem;
}

export default function ProductCard({ product }: ProductCardProps) {
  // Safely get data with fallbacks
  const productName = product.name?.defaultName || "Unnamed Product";
  const categoryName = product.category?.name?.defaultName || null;
  const imageUrl = product.mainImage?.secureUrl || null;

  // Get all occasion names
  const occasionNames =
    product.occasions
      ?.map((occasion) => occasion.name?.defaultName)
      .filter((name): name is string => name !== null && name !== undefined) ||
    [];

  // Check if product has multiple variants/colors
  const hasVariants =
    product.productVariant && product.productVariant.length > 0;
  const hasMultipleColors = hasVariants && product.productVariant!.length > 1;

  // Get unique colors (filter out null/undefined)
  const colors = hasVariants
    ? product
        .productVariant!.map((v) => v.color)
        .filter(
          (color): color is string => color !== null && color !== undefined,
        )
    : [];

  // Check if product is on sale
  const isOnSale =
    product.actualPrice !== null && product.actualPrice !== undefined;

  // Format occasion text
  const occasionText =
    occasionNames.length > 0 ? `Perfect for ${occasionNames.join(", ")}` : "";

  // Check if content exists
  const hasRating = product.avgRating !== undefined && product.avgRating > 0;
  const hasSpecs = product.dimensionsWCm || product.weightInKg;

  return (
    <Link href={`/product/${product.id}`} className="block h-full">
      <div className="h-full flex flex-col bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 group relative">
        {/* Badge - Featured */}
        {product.tags && (
          <div className="absolute left-0 top-4 uppercase text-xs font-bold bg-red-600 text-white px-3 py-1 rounded-r-md z-10">
            {product.tags.toUpperCase()}
          </div>
        )}

        {/* Badge - On Sale */}
        {isOnSale && (
          <div className="absolute right-4 top-4 z-10 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            {Math.round(
              ((product.actualPrice! - product.price!) / product.actualPrice!) *
                100,
            )}
            % OFF
          </div>
        )}

        {/* Product Image */}
        <div className="flex-shrink-0 flex items-center justify-center h-64 sm:h-72 p-8 bg-gray-50 rounded-t-xl">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={productName}
              className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 animate-pulse rounded-lg" />
          )}
        </div>

        {/* Product Details */}
        <div className="flex-1 flex flex-col p-5 sm:p-6">
          {/* Category - Optional */}
          {categoryName && (
            <span className="block text-xs font-bold uppercase text-gray-400 mb-2 tracking-wider">
              {categoryName}
            </span>
          )}

          {/* Product Name */}
          <h4 className={categoryName ? "mb-2" : "mb-2"}>
            <span className="font-semibold block text-gray-800 hover:text-primary transition-colors duration-300 text-base sm:text-lg line-clamp-2">
              {productName}
            </span>
          </h4>

          {/* Occasion Text - Optional */}
          {occasionText && (
            <p className="text-xs text-gray-500 italic mb-3 truncate">
              {occasionText}
            </p>
          )}

          {/* Rating - Optional */}
          {hasRating && (
            <div className="flex items-center gap-1 mb-3">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>
                    {i < Math.floor(product.avgRating!) ? "★" : "☆"}
                  </span>
                ))}
              </div>
              <span className="text-sm font-medium ml-1">
                {product.avgRating!.toFixed(1)}
              </span>
              <span className="text-xs text-gray-400">
                ({product.reviewsCount} reviews)
              </span>
            </div>
          )}

          {/* Product Specifications - Optional */}
          {hasSpecs && (
            <div className="flex flex-wrap gap-2 text-xs text-gray-400 mb-3">
              {product.dimensionsWCm && (
                <span className="bg-gray-50 px-2 py-0.5 rounded">
                  {product.dimensionsWCm}×{product.dimensionsHCm}×
                  {product.dimensionsLCm} cm
                </span>
              )}
              {product.weightInKg && (
                <span className="bg-gray-50 px-2 py-0.5 rounded">
                  {product.weightInKg} kg
                </span>
              )}
            </div>
          )}

          {/* Spacer to push price to bottom */}
          <div className="flex-1" />

          {/* Price & Colors */}
          <div className="pt-4 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <div className="text-lg font-semibold text-primary">
                {isOnSale ? (
                  <>
                    <span className="text-sm font-normal line-through text-gray-400 mr-2">
                      LE {product.actualPrice}
                    </span>
                    LE {product.price}
                  </>
                ) : (
                  <>LE {product.price}</>
                )}
              </div>

              {/* Color Variants */}
              {hasMultipleColors && (
                <div className="flex items-center gap-1.5">
                  {colors.slice(0, 4).map((color, index) => (
                    <div
                      key={index}
                      className="w-5 h-5 rounded-full border-2 border-gray-200 hover:border-indigo-500 transition-colors cursor-pointer"
                      style={{ backgroundColor: `#${color}` }}
                      title={`Color: ${color}`}
                    />
                  ))}
                  {colors.length > 4 && (
                    <span className="text-xs text-gray-400 ml-1">
                      +{colors.length - 4}
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
