interface ProductFloatingPriceCardProps {
  price: number; // 0-5
  priceAfterDiscount?: number;
}

export default function ProductFloatingPriceCard({
  price,
  priceAfterDiscount = undefined,
}: ProductFloatingPriceCardProps) {
  {
    /* <!-- Floating Price Card --> */
  }

  return (
    <div className="flex flex-col  items-center absolute bottom-6 right-6 p-5 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xs rounded-2xl">
      <span
        className={`text-4xl font-bold block
      ${
        priceAfterDiscount
          ? "text-neutral strikethrough-diagonal"
          : "text-honey"
      }
      `}
      >
        LE {price}
      </span>
      {priceAfterDiscount && (
        <span className="text-honey text-2xl font-bold">
          LE {priceAfterDiscount}
        </span>
      )}
    </div>
  );
}
