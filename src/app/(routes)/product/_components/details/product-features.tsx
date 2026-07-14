interface ProductFeaturesProps {
  price: number; // 0-5
  priceAfterDiscount?: number;
}
/*
{
  // price,
  // priceAfterDiscount = undefined,
}: ProductFeaturesProps
*/
export default function ProductFeatures() {
  return (
    <div className="absolute top-6 left-6 flex items-center gap-3">
      <span
        data-motion="badge"
        className="px-4 py-2 bg-honey text-white text-sm font-semibold rounded-full"
        style={{
          opacity: 1,
          transform: "translateY(0px)",
          filter: "blur(0px)",
        }}
      >
        Best Seller
      </span>
      <span
        data-motion="badge"
        className="px-4 py-2 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xs text-slate-900 dark:text-white text-sm font-semibold rounded-full"
        style={{
          opacity: 1,
          transform: "translateY(0px)",
          filter: "blur(0px)",
        }}
      >
        -22%
      </span>
    </div>
  );
}
