"use client";
import ProductDetailedDescription from "../_components/details/product-detailed-description";
import ProductFeatures from "../_components/details/product-features";
import ProductFloatingPriceCard from "../_components/details/product-floating-price-card";
import ProductImage from "../_components/details/product-images";
import ProductTitleAndDescription from "../_components/details/product-title-and-description";
import CustomButton from "@/components/ui/custom-button";
import HeartButton from "@/components/ui/heart-button";
import IconButton from "@/components/ui/icon-button";
import RatingDisplay from "@/components/ui/rating-display";
import Image from "next/image";
import { Suspense } from "react";
export default function ProductDetails() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <!-- Asymmetric 8/4 Split --> */}

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* <!-- Large Image Section --> */}
          <ProductImage />
          {/* <!-- Compact Details Sidebar --> */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <span
                  data-motion="badge"
                  className="text-honey text-sm font-semibold tracking-wide uppercase"
                  style={{
                    opacity: 1,
                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                  }}
                >
                  Audio / Premium
                </span>
                <h1>
                  <span
                    data-animate="heading"
                    className="text-3xl font-bold text-black leading-tight mt-2 block"
                    style={{ opacity: 1 }}
                  >
                    <ProductTitleAndDescription title="SoundWave Pro Speaker" />
                  </span>
                </h1>
              </div>

              <p
                data-animate="text"
                className="text-slate-600 dark:text-neutral-400 leading-relaxed"
                style={{ opacity: 1 }}
              >
                <ProductTitleAndDescription title="Room-filling 360° sound with deep bass and crystal-clear highs. Perfect for any space." />
              </p>

              {/* <!-- Rating --> */}

              <RatingDisplay rating={4.5} />

              {/* <!-- Color Selection --> */}
              <div
                data-motion="card"
                className="p-5 bg-slate-50 dark:bg-neutral-900 rounded-2xl"
                style={{
                  opacity: 1,
                  transform: "translateY(0px)",
                  filter: "blur(0px)",
                }}
              >
                <p className="text-sm font-semibold text-slate-900 dark:text-white mb-3">
                  Color
                </p>
                <div className="flex items-center gap-3">
                  <button
                    data-motion="button"
                    type="button"
                    className="w-10 h-10 rounded-full bg-slate-900 ring-2 ring-offset-2 ring-indigo-500 dark:ring-offset-neutral-900"
                    aria-label="Black"
                    style={{
                      opacity: 1,
                      transform: "translateY(0px)",
                      filter: "blur(0px)",
                    }}
                  ></button>
                  <button
                    type="button"
                    className="w-10 h-10 rounded-full bg-white border border-slate-200"
                    aria-label="White"
                  ></button>
                  <button
                    data-motion="button"
                    type="button"
                    className="w-10 h-10 rounded-full bg-indigo-600"
                    aria-label="Purple"
                    style={{
                      opacity: 1,
                      transform: "translateY(0px)",
                      filter: "blur(0px)",
                    }}
                  ></button>
                  <button
                    data-motion="button"
                    type="button"
                    className="w-10 h-10 rounded-full bg-indigo-600"
                    aria-label="Green"
                    style={{
                      opacity: 1,
                      transform: "translateY(0px)",
                      filter: "blur(0px)",
                    }}
                  ></button>
                </div>
              </div>

              {/* <!-- Features --> */}

              <ProductDetailedDescription />
            </div>

            {/* <!-- Actions --> */}
            <div className="space-y-4 mt-8">
              <div className="flex items-center gap-4">
                {/* <div className="flex items-center gap-3">
                  <IconButton icon="/minus.svg" />
                  <span className="text-xl font-bold text-slate-900 w-6 text-center">
                    1
                  </span>
                  <IconButton icon="/plus.svg" />
                </div>
                <HeartButton /> */}
              </div>
              <CustomButton
                className="w-full h-14 rounded-full border border-slate-300 dark:border-neutral-700 text-black hover:text-white font-semibold hover:bg-slate-50 dark:hover:bg-neutral-900 transition-colors flex items-center justify-center gap-2"
                title="Add to Cart"
                onClick={() => {}}
              />
              {/* <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: currentColor;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg> */}

              <CustomButton
                onClick={() => {}}
                data-motion="button"
                className="w-full h-14 rounded-full bg-primary hover:border-neutral-200 hover:bg-[#f5a80a] hover:text-white font-semibold transition-colors"
                title="Buy Now — $179"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
