"use client";
import { useRouter } from "next/navigation";
import CustomButton from "@/components/ui/custom-button";
import { useState, useEffect } from "react";
import { Cart, CartProduct } from "../../../../types/cart";
import { OrderSummary } from "../../../../types/order-summary";
import ErrorAlert from "@/components/shared/alerts/error-alert";

interface OrderSummaryProps {
  itemCount?: number;
  discount?: number;
  isInCheckout?: boolean;
  couponDiscount?: number;
  onClickOnProceed: () => void;
  disabledCheckoutButton?: boolean;
}

export default function OrderSummaryDisplay({
  itemCount,
  disabledCheckoutButton,
  isInCheckout,
  onClickOnProceed,
}: OrderSummaryProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [orderSummary, setOrderSummary] = useState<OrderSummary | null>(null);

  useEffect(() => {
    handleSearch();
  }, []);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      const response = await fetch("/api/order/summary");
      const data: Cart = await response.json();
      if (!data.isSuccess) {
        throw new Error(
          data?.message || "Something went wrong. Please try again.",
        );
      } else {
        setOrderSummary(data);
        setSuccess(data.message ?? "Cart loaded successfully.");
        setError(null);
      }
    } catch (err: any) {
      setError(
        err.message || "Failed to load order summary. Please try again.",
      );
      setSuccess(null);
    } finally {
      setLoading(false);
    }
  };

  // Format currency
  const formatCurrency = (amount?: number) => {
    return `$${amount?.toFixed(2)}`;
  };

  // Check if total is zero or invalid
  const totalAmount = orderSummary?.totalAmount ?? 0;
  const isTotalZero = totalAmount <= 0 || itemCount === 0;

  // Loading skeleton
  if (loading) {
    return (
      <div className="lg:p-6 lg:pr-0 h-full lg:border-l lg:border-slate-300 lg:sticky lg:top-0">
        <div className="h-8 w-40 bg-gray-200 rounded animate-pulse border-b border-slate-300 pb-4" />

        <div className="space-y-3 py-4">
          <div className="flex justify-between text-sm">
            <span className="text-slate-600">Subtotal</span>
            <div className="h-5 w-20 bg-gray-200 rounded animate-pulse" />
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-slate-600">Shipping</span>
            <div className="h-5 w-24 bg-gray-200 rounded animate-pulse" />
          </div>
          <div className="flex justify-between text-base font-semibold text-slate-900 pt-4 border-t border-slate-200">
            <span>Total</span>
            <div className="h-6 w-24 bg-gray-200 rounded animate-pulse" />
          </div>
        </div>

        <div className="mt-6 space-y-3 flex flex-col items-center justify-center text-center">
          <div className="w-full h-12 bg-gray-200 rounded-lg animate-pulse" />
          <div className="w-32 h-5 bg-gray-200 rounded animate-pulse" />
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="lg:p-6 lg:pr-0 h-full lg:border-l lg:border-slate-300 lg:sticky lg:top-0">
        <h3 className="text-lg font-semibold text-slate-900 border-b border-slate-300 pb-4">
          Order Summary
        </h3>
        <div className="py-8">
          <ErrorAlert error={error} />
          <button
            onClick={handleSearch}
            className="mt-4 text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            Try again
          </button>
        </div>
      </div>
    );
  }

  // Empty cart state (no items)
  // if (itemCount === 0) {
  //   return (
  //     <div className="lg:p-6 lg:pr-0 h-full lg:border-l lg:border-slate-300 lg:sticky lg:top-0">
  //       <h3 className="text-lg font-semibold text-slate-900 border-b border-slate-300 pb-4">
  //         Order Summary
  //       </h3>
  //       <div className="py-8 text-center">
  //         <div className="text-4xl mb-3">🛒</div>
  //         <p className="text-slate-500 text-sm">Your cart is empty</p>
  //         <p className="text-slate-400 text-xs mt-1">
  //           Add items to see order summary
  //         </p>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="lg:p-6 lg:pr-0 h-full lg:border-l lg:border-slate-300 lg:sticky lg:top-0">
      <h3 className="text-lg font-semibold text-slate-900 border-b border-slate-300 pb-4">
        Order Summary
      </h3>

      <div className="space-y-3 py-4">
        {/* Subtotal */}
        <div className="flex justify-between text-sm">
          {itemCount && (
            <span className="text-slate-600">
              Subtotal ({itemCount} {itemCount === 1 ? "item" : "items"})
            </span>
          )}
          {!itemCount && <span className="text-slate-600">Subtotal</span>}
          <span className="font-semibold text-slate-900">
            {formatCurrency(orderSummary?.subtotal)}
          </span>
        </div>

        {/* Shipping */}
        <div className="flex justify-between text-sm">
          <span className="text-slate-600">Shipping</span>
          {orderSummary?.deliveryFee && orderSummary?.deliveryFee > 0 ? (
            <span className="font-semibold text-slate-900">
              {formatCurrency(orderSummary?.deliveryFee)}
            </span>
          ) : (
            <span className="text-slate-400 text-sm">
              Calculated at checkout
            </span>
          )}
        </div>

        {/* Total */}
        <div className="flex justify-between text-base font-semibold text-slate-900 pt-4 border-t border-slate-200">
          <span>Total</span>
          <span>{formatCurrency(orderSummary?.totalAmount)}</span>
        </div>
      </div>

      <div className="mt-6 space-y-3 flex flex-col items-center justify-center text-center">
        <CustomButton
          onClick={onClickOnProceed}
          title={
            isTotalZero
              ? "Cart is empty"
              : isInCheckout
                ? "Place Order →"
                : "Proceed to Checkout →"
          }
          className={`w-full font-semibold py-3 px-4 rounded-lg transition-colors text-center ${
            isTotalZero
              ? "bg-gray-300 text-gray-500 cursor-not-allowed hover:bg-gray-300"
              : "bg-primary hover:border-neutral-200 hover:bg-honey hover:text-white"
          }`}
          disabled={isTotalZero || disabledCheckoutButton}
        />
        {!isInCheckout && (
          <CustomButton
            onClick={() => {
              router.push("/product/search");
            }}
            title="Continue Shopping"
            className="w-fit bg-transparent text-sm font-medium text-neutral-600 hover:text-[#fbb72c] relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-[#fbb72c] hover:after:w-full after:transition-all px-3 py-2"
          />
        )}
      </div>
    </div>
  );
}
