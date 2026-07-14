"use client";
import FilterContent, {
  Color,
  Entry,
} from "../_components/search/filter-content";
import StarRating from "../_components/search/star-rating";
import { useState } from "react";

const INITIAL_RECENT = ["Jackets", "Tommy Hilfiger", "Orange", "Zara", "XL"];

export default function ProductFilter() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(750);
  const [selectedCategories, setSelectedCategories] = useState<Entry[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<Entry[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<Color[]>([]);
  const [recentSearches, setRecentSearches] = useState(INITIAL_RECENT);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const clearAll = () => {
    setMinPrice(0);
    setMaxPrice(750);
    setSelectedCategories([]);
    setSelectedBrands([]);
    setSelectedSizes([]);
    setSelectedColors([]);
  };

  const removeRecentSearch = (tag: string) => {
    setRecentSearches((prev) => prev.filter((t) => t !== tag));
  };

  const totalFilters =
    selectedCategories.length +
    selectedBrands.length +
    selectedSizes.length +
    selectedColors.length;

  const products = [
    {
      id: 1,
      name: "Fjallraven - Foldsack No.1 Backpack, Fits",
      price: 109.95,
      rating: 4,
      category: "men's clothing",
    },
    {
      id: 2,
      name: "Mens Casual Premium Slim Fit T-Shirts",
      price: 22.3,
      rating: 5,
      category: "men's clothing",
    },
    {
      id: 3,
      name: "Mens Cotton Jacket",
      price: 55.99,
      rating: 5,
      category: "men's clothing",
    },
    {
      id: 4,
      name: "15 Laptops",
      price: 109.95,
      rating: 3,
      category: "electronics",
    },
  ];

  const SearchBar = ({
    placeholder = "Search products...",
    className = "",
  }) => (
    <div className={`relative ${className}`}>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder={placeholder}
        className="w-full h-9 pl-9 pr-4 text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
      />
      <svg
        className="absolute left-2.5 top-2 h-4 w-4 text-slate-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* HEADER SECTION - Mirroring the 2 and 7 Layout Exactly */}
      <div className="flex flex-col sm:flex-row items-center gap-6 mb-6 w-full flex-nowrap">
        {/* Left Side: Title (Matches sidebar width proportion) */}
        <div className="flex-[2] min-w-0 w-full sm:w-auto text-left">
          <h1 className="text-2xl font-bold text-slate-900 whitespace-nowrap">
            Products
          </h1>
        </div>

        {/* Right Side: Search + Action Buttons (Matches main grid proportion) */}
        <div className="flex flex-[7] min-w-0 items-center gap-3 w-full flex-nowrap">
          {/* SearchBar takes all remaining horizontal space on desktop */}
          <SearchBar
            placeholder="Search..."
            className="hidden lg:block flex-1 min-w-0 ml-6"
          />

          {/* Controls Container */}
          <div className="flex items-center gap-2 shrink-0 ml-auto flex-nowrap">
            <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-gray-50 hover:border-slate-300 transition-all whitespace-nowrap">
              Sort
            </button>

            <button
              onClick={() => setIsDrawerOpen(true)}
              className="lg:hidden flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-gray-50 hover:border-slate-300 transition-all whitespace-nowrap"
            >
              Filter
              {totalFilters > 0 && (
                <span className="text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full">
                  {totalFilters}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* BODY CONTENT */}
      <div className="flex gap-6">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block flex-[2] shrink-0 bg-white rounded-xl border border-slate-200 p-4">
          <FilterContent
            clearAll={clearAll}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            minPrice={minPrice}
            maxPrice={maxPrice}
            setMinPrice={setMinPrice}
            setMaxPrice={setMaxPrice}
          />
          <button
            type="button"
            className="w-full mt-6 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Apply
          </button>
        </aside>

        {/* Main Product Grid */}
        <div className="flex-[7] min-w-0">
          <div className="mb-6">
            <h3 className="text-slate-900 text-sm font-medium mb-3">
              Recent Searches
            </h3>
            <div className="flex flex-wrap gap-2">
              {recentSearches.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => removeRecentSearch(tag)}
                  className="flex items-center gap-1.5 border border-slate-200 rounded-md text-xs text-slate-600 font-medium py-1 px-2 hover:bg-gray-50 transition-colors"
                >
                  {tag}
                  <svg
                    className="w-2.5 h-2.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-slate-200 rounded-xl p-4 hover:shadow-lg transition-shadow"
              >
                <div className="h-40 bg-gray-100 rounded-lg mb-3"></div>
                <h4 className="text-sm font-medium text-slate-800 line-clamp-2">
                  {product.name}
                </h4>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-lg font-bold text-slate-900">
                    ${product.price}
                  </span>
                  <StarRating rating={product.rating} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsDrawerOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-[300px] bg-white shadow-2xl overflow-y-auto">
            <div className="p-5">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-slate-900">
                  Filters
                </h2>
                <button
                  type="button"
                  onClick={() => setIsDrawerOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-slate-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">
                  Filters
                </h3>
                <button
                  onClick={clearAll}
                  className="text-xs text-blue-600 hover:text-blue-700 font-medium"
                >
                  Clear all
                </button>
              </div>
              <div className="mb-4">
                <SearchBar placeholder="Search Profile" />
              </div>
              <FilterContent
                clearAll={clearAll}
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
                minPrice={minPrice}
                maxPrice={maxPrice}
                setMinPrice={setMinPrice}
                setMaxPrice={setMaxPrice}
              />
              <button
                type="button"
                onClick={() => setIsDrawerOpen(false)}
                className="w-full mt-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
