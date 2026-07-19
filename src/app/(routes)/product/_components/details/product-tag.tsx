interface ProductTagProps {
  isBestSeller?: boolean;
  isNew?: boolean;
  isFeatured?: boolean;
  className?: string;
}

export default function ProductTag({
  isBestSeller,
  isNew,
  isFeatured,
  className,
}: ProductTagProps) {
  return (
    <>
      {isBestSeller && (
        <span
          data-motion="badge"
          className={`px-4 py-2 bg-honey text-white text-sm font-semibold rounded-full shadow-lg ${className}`}
          style={{
            opacity: 1,
            transform: "translateY(0px)",
            filter: "blur(0px)",
          }}
        >
          Best Seller
        </span>
      )}

      {/* New Badge */}
      {isNew && (
        <span
          data-motion="badge"
          className={`px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-full shadow-lg ${className}`}
          style={{
            opacity: 1,
            transform: "translateY(0px)",
            filter: "blur(0px)",
          }}
        >
          New
        </span>
      )}

      {/* Featured Badge */}
      {isFeatured && (
        <span
          data-motion="badge"
          className={`px-4 py-2 bg-purple-500 text-white text-xs font-semibold rounded-full shadow-lg ${className}`}
          style={{
            opacity: 1,
            transform: "translateY(0px)",
            filter: "blur(0px)",
          }}
        >
          Featured
        </span>
      )}
    </>
  );
}
