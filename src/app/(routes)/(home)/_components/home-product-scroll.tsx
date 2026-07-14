"use client";
import { useEffect, useRef, useState } from "react";
interface ScrollableContainerProps {
  children: React.ReactNode;
}

export default function ScrollableContainer({
  children,
}: ScrollableContainerProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };
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
  return (
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
        <img src="/arrow-left.svg" width={24} height={24}></img>
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
        {children}
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
        <img src="/arrow-right.svg" width={24} height={24}></img>

        {/* <svg
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
                  </svg> */}
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
  );
}
