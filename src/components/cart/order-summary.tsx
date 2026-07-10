import CustomButton from "@/components/utils/custom-button";

export default function OrderSummary() {
  return (
    <div className="lg:p-6 lg:pr-0 h-full lg:border-l lg:border-slate-300 lg:sticky lg:top-0">
      <h3 className="text-lg font-semibold text-slate-900 border-b border-slate-300 pb-4">
        Order Summary
      </h3>
      <div className="space-y-3 py-4">
        <div className="flex justify-between text-sm">
          <span className="text-slate-600">Subtotal (2 items)</span>
          <span className="font-semibold text-slate-900">$92.00</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-slate-600">Shipping</span>
          <span className="text-slate-400 text-sm">Calculated at checkout</span>
        </div>
        <div className="flex justify-between text-base font-semibold text-slate-900 pt-4 border-t border-slate-200">
          <span>Total</span>
          <span>$92.00</span>
        </div>
      </div>

      <div className="mt-6 space-y-3 flex flex-col items-center justify-center text-center">
        <CustomButton
          onClick={() => {}}
          title="Proceed to Checkout →"
          className="w-full bg-primary hover:border-neutral-200 hover:bg-honey hover:text-white font-semibold py-3 px-4 rounded-lg transition-colors text-center"
        />
        <CustomButton
          onClick={() => {}}
          title="Continue Shopping"
          className="w-fit bg-transparent text-sm font-medium text-neutral-600 hover:text-[#fbb72c] relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-[#fbb72c] hover:after:w-full after:transition-all px-3 py-2"
        />
      </div>
    </div>
  );
}
