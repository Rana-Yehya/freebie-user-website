import { useLanguage } from "@/components/shared/language-provider";

export default function ProductQuantity({
  quantity,
  handleQuantityChange,
}: {
  quantity: number;
  handleQuantityChange: (value: "decrease" | "increase") => void;
}) {
  const { t } = useLanguage();
  return (
    <div className="flex items-center gap-4">
      <span className="text-sm font-medium text-slate-700">{t("quantity")}</span>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => handleQuantityChange("decrease")}
          className="w-8 h-8 flex items-center justify-center rounded-full border border-slate-300 hover:border-primary hover:bg-primary/5 transition-colors"
          aria-label={t("decreaseQuantity")}
        >
          <img src="/minus.svg" alt="" className="w-4 h-4" />
        </button>
        <span className="text-lg font-semibold text-slate-900 w-8 text-center">
          {quantity}
        </span>
        <button
          type="button"
          onClick={() => handleQuantityChange("increase")}
          className="w-8 h-8 flex items-center justify-center rounded-full border border-slate-300 hover:border-primary hover:bg-primary/5 transition-colors"
          aria-label={t("increaseQuantity")}
        >
          <img src="/plus.svg" alt="" className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
