import { CartProduct } from "../../../../types/cart";

export default function CartProductItem({
  item,
  confirmRemove,
  updateQuantity,
  //   quantity,
}: {
  item: CartProduct;
  confirmRemove: () => void;
  updateQuantity: (quantity: number) => void;
  //   quantity: number;
}) {
  const product = item.productStock.productVariant.product;
  const variant = item.productStock.productVariant;
  const productName = product.name?.defaultName || "Product";
  const imageUrl = product.mainImage?.secureUrl || "/placeholder.png";
  const color = variant.color;
  const additionalPrice = variant.additionalPrice || 0;
  const additionalInfo = variant.additionalInfo;
  const price = (product.price || 0) + additionalPrice;
  const actualPrice = product.actualPrice
    ? product.actualPrice + additionalPrice
    : null;
  const isOnSale = actualPrice !== null && actualPrice !== undefined;
  const subtotal = item.subtotal || price * (item.quantity ?? 0);

  // Get variant details for display
  const variantDetails = [];
  if (color) {
    variantDetails.push({
      label: "Color",
      value: color,
      isColor: true,
    });
  }
  if (additionalInfo) {
    variantDetails.push({
      label: "Variant",
      value: additionalInfo,
      isColor: false,
    });
  }
  // Check if product has size/dimensions
  if (product.dimensionsWCm) {
    variantDetails.push({
      label: "Size",
      value: `${product.dimensionsWCm}×${product.dimensionsHCm}×${product.dimensionsLCm} cm`,
      isColor: false,
    });
  }

  return (
    <li
      key={item.productStockId}
      className="flex flex-col gap-6 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 sm:items-center sm:flex-row"
    >
      {/* Product Image - Square and fit */}
      <div className="w-32 h-32 shrink-0 bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center">
        <img
          src={imageUrl}
          className="w-full h-full object-cover"
          alt={productName}
        />
      </div>

      <div className="flex items-start gap-4 w-full">
        <div className="flex-1">
          {/* Product Name */}
          <h3 className="text-base font-semibold text-slate-900 mb-2">
            {productName}
          </h3>

          {/* Variant Details */}
          {variantDetails.length > 0 && (
            <div className="space-y-1.5 mb-3">
              {variantDetails.map((detail, index) => (
                <p
                  key={index}
                  className="text-sm text-slate-600 flex items-center gap-2"
                >
                  <span className="text-slate-400">{detail.label}:</span>
                  {detail.isColor ? (
                    <span className="inline-flex items-center gap-1.5">
                      <span
                        className="inline-block w-4 h-4 rounded-full border border-slate-200"
                        style={{
                          backgroundColor: `#${detail.value}`,
                        }}
                      />
                      <span className="font-medium text-slate-700">
                        #{detail.value}
                      </span>
                    </span>
                  ) : (
                    <span className="font-medium text-slate-700">
                      {detail.value}
                    </span>
                  )}
                </p>
              ))}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => confirmRemove}
              className="font-medium text-red-600 text-sm flex items-center gap-2 shrink-0 cursor-pointer hover:text-red-700 transition-colors"
            >
              <img
                src="/delete.svg"
                alt="Delete"
                width={18}
                height={18}
                className="align-middle"
                style={{
                  filter:
                    "invert(14%) sepia(72%) saturate(7262%) hue-rotate(350deg) brightness(99%) contrast(127%)",
                }}
              />
              Remove
            </button>
          </div>
        </div>

        <div className="ml-auto text-right shrink-0">
          {/* Quantity Selector */}
          <div className="flex items-center w-max ml-auto px-2.5 py-1.5 border border-slate-300 text-slate-900 font-medium text-xs rounded-md">
            <button
              type="button"
              onClick={() => {
                if (item.quantity ?? 0 > 1) {
                  updateQuantity(
                    // item.productStockId ?? "",
                    (item.quantity ?? 0) - 1,
                  );
                }
              }}
              aria-label="Decrease quantity"
              className="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-1"
            >
              <img src="/minus.svg" className="w-4 h-4" />
            </button>
            <span className="mx-3 min-w-[20px] text-center">
              {item.quantity}
            </span>
            <button
              type="button"
              onClick={() =>
                updateQuantity(
                  //   item.productStockId ?? "",
                  (item.quantity ?? 0) + 1,
                )
              }
              aria-label="Increase quantity"
              className="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-1"
            >
              <img src="/plus.svg" className="w-4 h-4" />
            </button>
          </div>

          {/* Price */}
          <div className="mt-6">
            <p className="text-base font-semibold text-slate-900">
              ${subtotal.toFixed(2)}
            </p>
            {isOnSale && (
              <p className="text-base text-slate-500 mt-1">
                <s className="font-medium">
                  ${(actualPrice * (item.quantity ?? 0)).toFixed(2)}
                </s>
              </p>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}
