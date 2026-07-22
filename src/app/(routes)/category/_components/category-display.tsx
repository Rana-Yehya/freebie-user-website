"use client";

import { useState, useEffect } from "react";
import { CategoryItem } from "../../../../types/category";
export default function CategoryDisplay() {
  // THE SMART COLLAGE ALGORITHM
  // Maps the exact number of subcategories to a perfectly justified, asymmetric grid layout.
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [categories, setCategories] = useState<CategoryItem[]>([]);

  useEffect(() => {
    handleSearch();
  }, []);
  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    setCategories([]);
    try {
      const response = await fetch("/api/category");
      console.log(typeof response);
      console.log(response);
      const data = await response.json();
      if (!data?.isSuccess) {
        throw new Error(
          data?.message || "Something went wrong. Please try again.",
        );
      } else {
        setCategories(data?.data ?? []);
        setSuccess(data.message ?? "We'll get back to you within 24 hours.");
        setError(null);
      }

      // Success

      // Optionally redirect after delay
      // setTimeout(() => {
      //   router.push("/");
      // }, 3000);
    } catch (err: any) {
      setError(err.message || "Failed to send message. Please try again.");
      setSuccess(null);
    } finally {
      setLoading(false);
    }
  };
  const getCollagePattern = (totalCount: number) => {
    // Base patterns to mix and match
    const full = ["md:col-span-12"]; // 1 item
    const halfs = ["md:col-span-7", "md:col-span-5"]; // 2 items
    const butterflyTop = ["md:col-span-4", "md:col-span-3", "md:col-span-5"]; // 3 items
    const checker = [
      "md:col-span-7",
      "md:col-span-5",
      "md:col-span-5",
      "md:col-span-7",
    ]; // 4 items
    const butterflyTopPlusHalfs = [
      ...butterflyTop,
      "md:col-span-6",
      "md:col-span-6",
    ]; // 5 items
    const fullButterfly = [
      ...butterflyTop,
      "md:col-span-6",
      "md:col-span-3",
      "md:col-span-3",
    ]; // 6 items

    switch (totalCount) {
      case 1:
        return full;
      case 2:
        return halfs;
      case 3:
        return butterflyTop;
      case 4:
        return checker;
      case 5:
        return butterflyTopPlusHalfs;
      case 6:
        return fullButterfly;
      case 7:
        return [...fullButterfly, ...full]; // 6 + 1
      case 8:
        return [...fullButterfly, ...halfs]; // 6 + 2
      case 9:
        return [...fullButterfly, ...butterflyTop]; // 6 + 3
      case 10:
        return [...fullButterfly, ...checker]; // 6 + 4
      case 11:
        return [...fullButterfly, ...butterflyTopPlusHalfs]; // 6 + 5
      case 12:
        return [...fullButterfly, ...fullButterfly]; // 6 + 6 (Double Butterfly)
      default:
        return full;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex gap-2 border-b border-slate-300 pb-4">
        <h1 className="text-2xl font-bold text-slate-900 flex-1">Categories</h1>
      </div>
      <div className="max-w-7xl mx-auto p-4 md:p-8 bg-gray-50 min-h-screen space-y-16">
        {categories.map((category) => {
          const subCount = category?.subcategories?.length ?? 0;
          const patternMap = getCollagePattern(subCount);

          return (
            <div
              key={category.id}
              className="w-full bg-gray-200 border border-gray-200 grid grid-cols-1 lg:grid-cols-12 gap-[2px] shadow-sm hover:shadow-lg transition-shadow duration-500"
            >
              {/* === LEFT SIDE: MAIN CATEGORY ANCHOR === */}
              <div className="bg-white lg:col-span-4 xl:col-span-3 flex flex-col h-full min-h-[300px]">
                <div className="p-8 border-b border-gray-200 flex items-center justify-between z-10 bg-white">
                  <h2 className="text-6xl font-black text-black tracking-tighter">
                    {category.name?.defaultName}
                  </h2>
                  {/* <div className="text-right">
                    <span className="block text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">
                      Count
                    </span>
                    <span className="block text-xs font-bold text-black mt-1">
                      {subCount}
                    </span>
                  </div> */}
                </div>

                <div className="flex-1 p-8 flex items-center justify-center bg-gray-50/30 group cursor-default relative overflow-hidden">
                  <img
                    src={category.image?.secureUrl}
                    alt={category.name?.defaultName}
                    className="w-full max-w-[200px] object-contain drop-shadow-xl transition-transform duration-700 group-hover:scale-105 relative z-10"
                  />
                </div>
              </div>

              {/* === RIGHT SIDE: THE DYNAMIC COLLAGE === */}
              <div className="bg-white lg:col-span-8 xl:col-span-9 grid grid-cols-1 md:grid-cols-12 gap-[2px] bg-gray-200 p-[2px]">
                {(category.subcategories ?? []).map((sub, index) => {
                  // Grab the specific class from our pattern map based on the item's index
                  const spanClass = patternMap[index];

                  return (
                    <div
                      key={sub.id}
                      className={`group relative flex flex-col items-center justify-center cursor-pointer min-h-[220px] overflow-hidden col-span-1 ${spanClass}`}
                    >
                      {/* Background Image */}
                      <img
                        src={sub.image?.secureUrl}
                        alt={sub.name?.defaultName}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                      {/* Hover Title */}
                      <div className="relative z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 text-center">
                        <h3 className="text-sm font-bold text-white uppercase tracking-[0.2em]">
                          {sub.name?.defaultName}
                        </h3>
                        <span className="text-[10px] text-gray-300 uppercase tracking-widest mt-1 block">
                          View Details
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
