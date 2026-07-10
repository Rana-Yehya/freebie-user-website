"use client";
import HomeMainImage from "@/components/home/home-main-image";
import HomeReasonsToBuy from "@/components/home/home-reasons-to-buy";
import ProductCard from "@/components/product/product-card";
import { useEffect, useRef, useState } from "react";
import FAQMenuHome from "@/components/home/faq-menu-home";

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const updateArrows = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    };

    container.addEventListener("scroll", updateArrows);
    updateArrows();

    return () => {
      container.removeEventListener("scroll", updateArrows);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <HomeMainImage />

      {/* Reasons to Buy */}
      <HomeReasonsToBuy />

      {/* Products Carousel Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
              Featured Products
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Our Best Sellers
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Discover our most loved products, carefully curated for you
            </p>
          </div>

          {/* Carousel */}
          <div className="relative">
            {/* Left Arrow - Always visible when needed */}
            <button
              onClick={() => scroll("left")}
              className={`absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-white/95 backdrop-blur-sm hover:bg-white p-3.5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 -ml-4 border border-gray-200 hover:border-primary cursor-pointer ${
                showLeftArrow
                  ? "opacity-100 translate-x-0 pointer-events-auto"
                  : "opacity-0 -translate-x-8 pointer-events-none"
              }`}
              aria-label="Scroll left"
            >
              <svg
                className="w-5 h-5 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Scroll Container */}
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto pb-6 scroll-smooth"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {[1, 2, 3, 4, 5, 6].map((product, index) => (
                <div
                  key={index}
                  className="w-72 sm:w-80 flex-shrink-0 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                >
                  <ProductCard />
                </div>
              ))}
            </div>

            {/* Right Arrow - Always visible when needed */}
            <button
              onClick={() => scroll("right")}
              className={`absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-white/95 backdrop-blur-sm hover:bg-white p-3.5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 -mr-4 border border-gray-200 hover:border-primary cursor-pointer ${
                showRightArrow
                  ? "opacity-100 translate-x-0 pointer-events-auto"
                  : "opacity-0 translate-x-8 pointer-events-none"
              }`}
              aria-label="Scroll right"
            >
              <svg
                className="w-5 h-5 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Scroll Progress Indicator */}
            <div className="flex justify-center gap-1 mt-6">
              <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden w-48">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-300"
                  style={{
                    width: scrollRef.current
                      ? `${(scrollRef.current.scrollLeft / (scrollRef.current.scrollWidth - scrollRef.current.clientWidth)) * 100}%`
                      : "0%",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hide scrollbar globally */}
      <FAQMenuHome />
    </>
  );
}
