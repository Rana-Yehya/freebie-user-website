interface ProductFloatingPriceCardProps {
  price: number;
  priceAfterDiscount?: number;
  currency?: string;
}

export default function ProductFloatingPriceCard({
  price,
  priceAfterDiscount = undefined,
  currency = "EGP",
}: ProductFloatingPriceCardProps) {
  return (
    <div className="flex flex-col items-center absolute bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-6 md:right-6 p-3 sm:p-4 md:p-5 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg">
      <span
        className={`text-2xl sm:text-3xl md:text-4xl font-bold block relative ${
          priceAfterDiscount ? "text-neutral-500" : "text-honey"
        }`}
      >
        {currency} {price.toFixed(2)}
        {priceAfterDiscount && (
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="w-full h-0.5 bg-neutral-400 rotate-[-15deg] scale-110"></span>
          </span>
        )}
      </span>
      {priceAfterDiscount && (
        <span className="text-honey text-xl sm:text-2xl md:text-2xl font-bold">
          {currency} {priceAfterDiscount.toFixed(2)}
        </span>
      )}
    </div>
  );
}
