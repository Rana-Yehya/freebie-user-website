export default function ProductQuantity({
  quantity,
  handleQuantityChange,
}: {
  quantity: number;
  handleQuantityChange: (value: "decrease" | "increase") => void;
}) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-sm font-medium text-slate-700">Quantity</span>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => handleQuantityChange("decrease")}
          className="w-8 h-8 flex items-center justify-center rounded-full border border-slate-300 hover:border-primary hover:bg-primary/5 transition-colors"
          aria-label="Decrease quantity"
        >
          <img src="/minus.svg" className="w-4 h-4" />
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
          <img src="/plus.svg" className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
