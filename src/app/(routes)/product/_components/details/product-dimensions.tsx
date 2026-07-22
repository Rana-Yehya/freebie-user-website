import { ProductItem } from "../../../../../types/product";

export default function ProductDimensions({
  product,
}: {
  product: ProductItem;
}) {
  return (
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
      {product.doesNeedPreparation && product.preparationTimeInMinutes && (
        <div className="col-span-2 flex items-center gap-1">
          <span className="text-slate-400">Prep Time:</span>
          <span className="font-medium text-slate-700">
            {product.preparationTimeInMinutes} mins
          </span>
        </div>
      )}
    </div>
  );
}
