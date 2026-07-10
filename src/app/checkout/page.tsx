"use client";
import OrderSummary from "@/components/cart/order-summary";
import { useEffect, useRef, useState } from "react";

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("card");
  return (
    <section className="py-20 sm:py-24 bg-gray-50">
      <h1 className="sr-only">Checkout</h1>
      <div className="px-4 md:px-8 mt-6">
        <div className="max-w-xl md:max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 lg:gap-x-12">
            <div className="lg:col-span-2">
              {/* <!-- Delivery Details form --> */}
              <section className="w-full h-max">
                <form>
                  <fieldset>
                    <legend className="text-xl text-slate-900 font-semibold mb-6">
                      Delivery Details
                    </legend>
                    <div className="grid gap-6">
                      <div>
                        <label
                          htmlFor="address"
                          className="mb-2 text-slate-900 font-medium text-sm inline-block"
                        >
                          Address
                        </label>
                        <input
                          type="text"
                          id="address"
                          name="address"
                          placeholder="123 Main Street"
                          required
                          className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="notes"
                          className="mb-2 text-slate-900 font-medium text-sm inline-block"
                        >
                          Notes
                        </label>
                        <textarea
                          // type="text"
                          id="notes"
                          name="notes"
                          placeholder="add any additional notes"
                          required={false}
                          // minlength="10"
                          rows={4}
                          className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                        />
                      </div>

                      {/* <!-- Payment methods --> */}

                      <label
                        htmlFor="payment"
                        className="mb-2 text-slate-900 font-medium text-sm inline-block"
                      >
                        Payment method
                      </label>
                      <div className="grid gap-4 lg:grid-cols-2">
                        <div className="flex items-center">
                          <input
                            type="radio"
                            name="method"
                            id="card"
                            value="card"
                            onChange={(e) => setPaymentMethod(e.target.id)}
                            className="w-[18px] h-[18px] appearance-none rounded-full border border-slate-300 bg-white focus:outline-blue-500 checked:ring-2 checked:ring-inset checked:ring-white checked:bg-blue-600"
                            checked={paymentMethod === "card"}
                          />
                          <label
                            htmlFor="card"
                            className="ml-4 flex gap-2 cursor-pointer"
                          >
                            <img
                              src="https://readymadeui.com/images/visa.webp"
                              className="w-12"
                              alt="visa"
                            />
                            <img
                              src="https://readymadeui.com/images/american-express.webp"
                              className="w-12"
                              alt="american-express"
                            />
                            <img
                              src="https://readymadeui.com/images/master.webp"
                              className="w-12"
                              alt="master"
                            />
                          </label>
                        </div>

                        <div className="flex items-center">
                          <input
                            type="radio"
                            name="method"
                            id="paypal"
                            value="paypal"
                            onChange={(e) => setPaymentMethod(e.target.id)}
                            className="w-[18px] h-[18px] appearance-none rounded-full border border-slate-300 bg-white focus:outline-blue-500 checked:ring-2 checked:ring-inset checked:ring-white checked:bg-blue-600"
                            checked={paymentMethod === "paypal"}
                          />
                          <label
                            htmlFor="paypal"
                            className="ml-4 flex gap-2 cursor-pointer"
                          >
                            <img
                              src="https://readymadeui.com/images/paypal.webp"
                              className="w-20"
                              alt="paypalCard"
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  </fieldset>

                  {/* <!-- billing address checkbox --> */}
                  {/* <label className="inline-flex items-center group has-[input:checked]:text-slate-900 mt-6">
                    <input
                      id="billing-address"
                      name="billing-address"
                      type="checkbox"
                      required
                      className="sr-only"
                      checked
                    />
                    <span
                      className="flex h-4 w-4 shrink-0 items-center justify-center rounded outline-1 outline-slate-300 bg-white group-has-[input:checked]:bg-blue-600 group-has-[input:checked]:outline-blue-600 group-focus-within:outline-2 group-focus-within:outline-blue-600"
                      aria-hidden="true"
                    >
                      <svg
                        className="size-3 text-white opacity-0 group-has-[input:checked]:opacity-100"
                        viewBox="0 0 12 10"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path d="M1 5l3 3 7-7" />
                      </svg>
                    </span>
                    <span className="ml-3 text-sm text-slate-700">
                      Billing address is the same as shipping address
                    </span>
                  </label> */}
                </form>

                {/* <!-- Promo Code Form --> */}
                {/* <form className="max-w-sm mt-8">
                  <label
                    htmlFor="promocode"
                    className="mb-2 block text-sm font-medium text-slate-900"
                  >
                    Do you have a promo code?
                  </label>
                  <div className="flex flex-col gap-4 sm:items-center sm:flex-row">
                    <input
                      type="text"
                      id="promocode"
                      name="promocode"
                      required
                      placeholder="Enter promo code"
                      className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                    />
                    <button
                      type="submit"
                      className="py-2 px-3.5 text-sm w-max rounded-md font-semibold cursor-pointer text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    >
                      Apply
                    </button>
                  </div>
                </form> */}
              </section>
            </div>

            {/* <!-- Order Summary --> */}
            <OrderSummary />
          </div>
        </div>
      </div>
    </section>
  );
}
