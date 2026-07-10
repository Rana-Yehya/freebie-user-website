"use client";
import OrderSummary from "@/components/cart/order-summary";
import Image from "next/image";

export default function ShoppingCart() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex gap-2 border-b border-slate-300 pb-4">
        <h1 className="text-2xl font-bold text-slate-900 flex-1">
          Shopping Cart
        </h1>
        <p className="text-base text-slate-900 font-medium">4 Items</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12 mt-8">
        <ul className="lg:col-span-2 space-y-6">
          <li className="flex flex-col gap-6 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 sm:items-center sm:flex-row">
            <div className="w-32 h-full shrink-0">
              <img
                src="https://readymadeui.com/images/black-sweaters-1.webp"
                className="w-full aspect-full object-contain"
                alt="sweater"
              />
            </div>

            <div className="flex items-start gap-4 w-full">
              <div>
                <h3 className="text-base font-semibold text-slate-900 mb-2">
                  Sweater
                </h3>
                <div className="space-y-2">
                  <p className="text-sm text-slate-600">
                    Size: <span className="ml-2 font-medium">MD</span>
                  </p>
                  <p className="text-sm text-slate-600">
                    Color: <span className="ml-2 font-medium">Black</span>
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-4">
                  <button
                    type="button"
                    className="font-medium text-red-600 text-sm flex items-center gap-2 shrink-0 cursor-pointer"
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
                    {/* Remove */}
                  </button>
                  <button
                    type="button"
                    className="font-medium text-pink-600 text-sm flex items-center gap-2 shrink-0 cursor-pointer"
                  >
                    <Image
                      src="/heart.svg"
                      alt="Wishlist"
                      width={18}
                      height={18}
                      style={{
                        filter:
                          "invert(14%) sepia(85%) saturate(4890%) hue-rotate(317deg) brightness(88%) contrast(114%)",
                      }}
                    />
                    {/* Move to wish list */}
                  </button>
                </div>
              </div>

              <div className="ml-auto text-right">
                <div className="flex items-center w-max ml-auto px-2.5 py-1.5 border border-slate-300 text-slate-900 font-medium text-xs rounded-md">
                  <button
                    type="button"
                    aria-label="Decrease quantity"
                    className="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-2.5 fill-current"
                      viewBox="0 0 124 124"
                    >
                      <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" />
                    </svg>
                  </button>
                  <span className="mx-3">1</span>
                  <button
                    type="button"
                    aria-label="Increase quantity"
                    className="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-2.5 fill-current"
                      viewBox="0 0 42 42"
                    >
                      <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" />
                    </svg>
                  </button>
                </div>
                <div className="mt-6">
                  <p className="text-base font-semibold text-slate-900">
                    $18.50
                  </p>
                  <p className="text-base text-slate-500 mt-1">
                    <s className="font-medium">$22.50</s>
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <OrderSummary />
      </div>
    </div>
  );
}
