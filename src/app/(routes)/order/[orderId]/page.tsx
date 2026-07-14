import OrderTrackingTimeline from "../_components/order-tracking-timeline";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Order Details",
};

export default async function OrderDetails({
  params,
}: {
  params: Promise<{ orderId: string }>;
}) {
  const orderId = (await params).orderId;
  return (
    <section className="py-20 sm:py-24 bg-gray-50">
      <div className="px-4 md:px-8 mt-6">
        <div className="mb-12">
          <h1 className="text-2xl font-bold text-slate-900">Order Summary</h1>

          <p className="mt-4 text-sm text-slate-900 font-medium">
            Order ID: <span>#658965487</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left */}
          <div className="space-y-6 lg:col-span-2 max-lg:-order-1">
            {/* Items */}
            <section aria-labelledby="items-heading">
              <h2 id="items-heading" className="sr-only">
                Order Items
              </h2>

              <div className="border border-slate-300 rounded-md p-4 space-y-4">
                <ul className="space-y-6">
                  <li className="grid items-center gap-4 sm:grid-cols-3">
                    <div className="flex items-center gap-4 sm:col-span-2">
                      <div className="w-20 h-20 shrink-0 bg-gray-100 p-2 rounded-md sm:w-24 sm:h-24">
                        <img
                          src="https://readymadeui.com/images/watch5.webp"
                          alt="Smart Watch Timex"
                          className="w-full h-full object-contain"
                        />
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold text-slate-900">
                          Smart Watch Timex
                        </h3>
                        <div className="mt-2">
                          <p className="text-xs text-slate-600">
                            Color: <span className="font-medium">Gray</span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="sm:ml-auto">
                      <p className="text-base font-semibold text-slate-900">
                        $60.00
                      </p>
                    </div>
                  </li>
                </ul>

                {/* Order Tracking Timeline */}

                <OrderTrackingTimeline />

                <hr className="border-slate-300 mt-6" />
              </div>
            </section>

            {/* Billing */}
            <section aria-labelledby="billing-heading">
              <div className="border border-slate-300 rounded-md p-4">
                <h2
                  id="billing-heading"
                  className="text-base font-semibold text-slate-900 mb-6"
                >
                  Billing details
                </h2>

                <dl className="font-medium space-y-4">
                  <div className="flex flex-wrap gap-4 text-slate-500 text-sm">
                    <dt>Subtotal</dt>
                    <dd className="ml-auto text-slate-900 font-semibold">
                      $100.00
                    </dd>
                  </div>

                  <div className="flex flex-wrap gap-4 text-slate-500 text-sm">
                    <dt>Shipping</dt>
                    <dd className="ml-auto text-slate-900 font-semibold">
                      $4.00
                    </dd>
                  </div>

                  <div className="flex flex-wrap gap-4 text-slate-500 text-sm">
                    <dt>Tax</dt>
                    <dd className="ml-auto text-slate-900 font-semibold">
                      $6.00
                    </dd>
                  </div>

                  <div className="border-t border-slate-300 pt-4 flex flex-wrap gap-4 text-sm text-slate-900 font-semibold">
                    <dt>Total</dt>
                    <dd className="ml-auto">$110.00</dd>
                  </div>
                </dl>
              </div>
            </section>
          </div>

          {/* Right */}
          <aside className="space-y-6">
            {/* Customer */}
            <section
              aria-labelledby="customer-heading"
              className="border border-slate-300 rounded-md p-4"
            >
              <div className="flex items-start justify-between gap-4">
                <h2
                  id="customer-heading"
                  className="text-base font-semibold text-slate-900 mb-6"
                >
                  Customer Information
                </h2>

                <button
                  type="button"
                  aria-label="Edit customer information"
                  className="inline-block cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 fill-blue-700"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                  </svg>
                </button>
              </div>

              <dl className="space-y-4">
                <div>
                  <dt className="text-slate-500 text-sm font-medium">
                    Customer
                  </dt>
                  <dd className="text-slate-900 text-sm font-medium mt-2">
                    Alex Johnson
                  </dd>
                </div>
                <div>
                  <dt className="text-slate-500 text-sm font-medium">Email</dt>
                  <dd className="text-slate-900 text-sm font-medium mt-2 break-words">
                    alexjohnson45@gmail.com
                  </dd>
                </div>
                <div>
                  <dt className="text-slate-500 text-sm font-medium">Phone</dt>
                  <dd className="text-slate-900 text-sm font-medium mt-2">
                    (555) 123-4567
                  </dd>
                </div>
              </dl>
            </section>

            {/* Shipping */}
            <section
              aria-labelledby="shipping-heading"
              className="border border-slate-300 rounded-md p-4"
            >
              <div className="flex items-start justify-between gap-4">
                <h2
                  id="shipping-heading"
                  className="text-base font-semibold text-slate-900 mb-6"
                >
                  Shipping Information
                </h2>

                <button
                  type="button"
                  aria-label="Edit shipping information"
                  className="inline-block cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 fill-blue-700"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                  </svg>
                </button>
              </div>

              <dl className="space-y-4">
                <div>
                  <dt className="text-slate-500 text-sm font-medium">
                    Customer
                  </dt>
                  <dd className="text-slate-900 text-sm font-medium mt-2">
                    Alex Johnson
                  </dd>
                </div>
                <div>
                  <dt className="text-slate-500 text-sm font-medium">
                    Shipping Method
                  </dt>
                  <dd className="text-slate-900 text-sm font-medium mt-2">
                    Express Delivery
                  </dd>
                </div>
                <div>
                  <dt className="text-slate-500 text-sm font-medium">
                    Address
                  </dt>
                  <dd className="text-slate-900 text-sm font-medium mt-2">
                    425 Park Avenue, San Francisco, CA 94107
                  </dd>
                </div>
              </dl>
            </section>
          </aside>
        </div>
      </div>
    </section>
  );
}
