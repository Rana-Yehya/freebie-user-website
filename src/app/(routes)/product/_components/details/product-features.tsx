import ProductTag from "./product-tag";

interface ProductFeaturesProps {
  isBestSeller?: boolean;
  discountPercentage?: number;
  hasDiscount?: boolean;
  isNew?: boolean;
  isFeatured?: boolean;
}

export default function ProductFeatures({
  isBestSeller = false,
  discountPercentage = 0,
  hasDiscount = false,
  isNew = false,
  isFeatured = false,
}: ProductFeaturesProps) {
  return (
    <div className="absolute top-6 left-6 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
      {/* Best Seller Badge */}
      <ProductTag
        isBestSeller={isBestSeller}
        isNew={isNew}
        isFeatured={isFeatured}
      />
      {/* Discount Badge */}
      {hasDiscount && discountPercentage > 0 && (
        <span
          data-motion="badge"
          className="px-4 py-2 bg-red-500 text-white text-sm font-semibold rounded-full shadow-lg"
          style={{
            opacity: 1,
            transform: "translateY(0px)",
            filter: "blur(0px)",
          }}
        >
          -{discountPercentage}%
        </span>
      )}
    </div>
  );
}
