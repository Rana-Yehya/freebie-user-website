"use client";
import CustomButton from "@/components/ui/custom-button";
import { CategoryItem, SubcategoryItem } from "../../../../types/category";
import { OccasionItem } from "../../../../types/occasion";
import { ProductItem, Products } from "../../../../types/product";
import ProductCard from "../_components/product-card";
import FilterContent from "../_components/search/filter-content";
import SearchBar from "../_components/search/search-bar";
import searchProducts from "../_components/search/search-products";
import searchQuery from "../_components/search/search-query";
import StarRating from "../_components/search/star-rating";
import { useEffect, useState } from "react";

export default function ProductFilter() {
  const [selectedMinPrice, setSelectedMinPrice] = useState(0);
  const [selectedMaxPrice, setSelectedMaxPrice] = useState(750);
  const [selectedCategories, setSelectedCategories] = useState<CategoryItem[]>(
    [],
  );
  const [selectedSubcategories, setSelectedSubcategories] = useState<
    SubcategoryItem[]
  >([]);
  const [selectedOccasions, setSelectedOccasions] = useState<OccasionItem[]>(
    [],
  );
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [searchQueryString, setSearchQueryString] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [products, setProducts] = useState<ProductItem[]>([]);
  // State for filter data from API
  const [filterData, setFilterData] = useState<{
    categories: CategoryItem[];
    occasions: OccasionItem[];
    colors: string[];
    minPrice: number;
    maxPrice: number;
  }>({
    categories: [],
    occasions: [],
    colors: [],
    minPrice: 0,
    maxPrice: 750,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await searchQuery();
        setFilterData({
          categories: response?.categories ?? [],
          occasions: response?.occasions ?? [],
          colors: response?.colors ?? [],
          minPrice: response?.minPrice ?? 0,
          maxPrice: response?.maxPrice ?? 0,
        });
        setSelectedMaxPrice(response?.maxPrice ?? 0);
      } catch (e) {
        console.error("Error fetching filter data:", e);
      }
    };
    fetchData();
    handleSearch();
  }, []);
  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    setProducts([]);
    try {
      const response = await searchProducts({
        occasionIds: selectedOccasions.map((item) => item.id ?? ""),
        priceSmall: selectedMinPrice,
        priceHigh: selectedMaxPrice,
        colors: selectedColors.map((item) => item ?? ""),
        categoryIds: selectedCategories.map((item) => item.id ?? ""),
      });
      if (!response?.isSuccess) {
        throw new Error(
          response?.message || "Something went wrong. Please try again.",
        );
      } else {
        setProducts(response?.data ?? []);
        setSuccess(
          response.message ?? "We'll get back to you within 24 hours.",
        );
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
  const clearAll = () => {
    setSelectedMinPrice(0);
    setSelectedMaxPrice(750);
    setSelectedCategories([]);
    setSelectedSizes([]);
    setSelectedColors([]);
    setSearchQueryString("");
  };

  const totalFilters =
    selectedCategories.length + selectedSizes.length + selectedColors.length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* HEADER SECTION */}
      <div className="flex flex-col sm:flex-row items-center gap-6 mb-6 w-full flex-nowrap">
        <div className="flex-[2] min-w-0 w-full sm:w-auto text-left">
          <h1 className="text-2xl font-bold text-slate-900 whitespace-nowrap">
            Products
          </h1>
        </div>

        <div className="flex flex-[7] min-w-0 items-center gap-8 w-full justify-between items-center">
          <SearchBar
            onChange={(value) => setSearchQueryString(value)}
            className="hidden lg:block ml-6"
            // placeholder="Search..."
            // className="hidden lg:block flex-1 min-w-0 ml-6"
          />

          <div className="flex items-center gap-2 shrink-0 ml-auto flex-nowrap">
            {/* <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-gray-50 hover:border-slate-300 transition-all whitespace-nowrap">
              Sort
            </button> */}

            <CustomButton
              onClick={() => setIsDrawerOpen(true)}
              className="lg:hidden flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-gray-50 hover:border-slate-300 transition-all whitespace-nowrap"
              title="Filter"
            />
            {/*  Filter
              {totalFilters > 0 && (
                <span className="text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full">
                  {totalFilters}
                </span>
              )} */}
          </div>
        </div>
      </div>

      {/* BODY CONTENT */}
      <div className="flex gap-6">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block flex-[2] shrink-0 bg-white rounded-xl border border-slate-200 p-4 h-fit">
          <FilterContent
            clearAll={clearAll}
            applyChanges={handleSearch}
            selectedCategories={selectedCategories}
            selectedSubcategories={selectedSubcategories}
            setSelectedSubcategories={setSelectedSubcategories}
            setSelectedCategories={setSelectedCategories}
            setSelectedOccasions={setSelectedOccasions}
            minPrice={selectedMinPrice}
            maxPrice={selectedMaxPrice}
            selectedOccasions={selectedOccasions}
            setMinPrice={setSelectedMinPrice}
            setMaxPrice={setSelectedMaxPrice}
            colors={filterData.colors}
            categories={filterData.categories}
            occasions={filterData.occasions}
            minPriceLimit={filterData.minPrice}
            maxPriceLimit={filterData.maxPrice}
          />
        </aside>

        {/* Main Product Grid */}
        <div className="flex-[7] min-w-0">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
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
                  <img src="/close.svg" />
                </button>
              </div>

              <SearchBar
                onChange={(value) => setSearchQueryString(value)}
                className="mb-8"
              />
              <FilterContent
                applyChanges={handleSearch}
                clearAll={clearAll}
                selectedCategories={selectedCategories}
                selectedSubcategories={selectedSubcategories}
                setSelectedSubcategories={setSelectedSubcategories}
                setSelectedCategories={setSelectedCategories}
                setSelectedOccasions={setSelectedOccasions}
                minPrice={selectedMinPrice}
                maxPrice={selectedMaxPrice}
                selectedOccasions={selectedOccasions}
                setMinPrice={setSelectedMinPrice}
                setMaxPrice={setSelectedMaxPrice}
                colors={filterData.colors}
                categories={filterData.categories}
                occasions={filterData.occasions}
                minPriceLimit={filterData.minPrice}
                maxPriceLimit={filterData.maxPrice}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
