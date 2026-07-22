"use client";
import ProductCard from "@/components/shared/card/product-card";
import CustomButton from "@/components/ui/custom-button";
import { useEffect, useState, useRef } from "react";
import { CategoryItem, SubcategoryItem } from "../../../../../types/category";
import { OccasionItem } from "../../../../../types/occasion";
import { ProductItem } from "../../../../../types/product";
import FilterContent from "./filter-content";
import SearchBar from "./search-bar";
import searchProducts from "./search-products";
import searchQuery from "./search-query";
import { useSearchParams } from "next/navigation";

export default function ProductFilter() {
  const searchParams = useSearchParams();

  // Get query parameters
  const tag = searchParams.get("tag") || undefined;
  const categoryId = searchParams.get("categoryId") || undefined;
  const subcategoryId = searchParams.get("subcategoryId") || undefined;
  const occasionId = searchParams.get("occasionId") || undefined;

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
  const [searchQueryString, setSearchQueryString] = useState(tag || "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [products, setProducts] = useState<ProductItem[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);
  const isInitialMount = useRef(true);

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

  // Fetch filter data only once
  useEffect(() => {
    const fetchFilterData = async () => {
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
        // Match category
        if (categoryId) {
          const matchedCategory = response?.categories.find(
            (cat: CategoryItem) => cat.id === categoryId,
          );
          console.log("response?.categories", response?.categories);
          console.log("matchedCategory", matchedCategory);
          if (matchedCategory) {
            setSelectedCategories([matchedCategory]);
          }
        }

        // Match subcategory
        if (subcategoryId) {
          for (const category of response?.categories ?? []) {
            if (category.subcategories) {
              const matchedSubcategory = category.subcategories.find(
                (sub: SubcategoryItem) => sub.id === subcategoryId,
              );
              if (matchedSubcategory) {
                setSelectedSubcategories([matchedSubcategory]);
                break;
              }
            }
          }
        }

        // Match occasion
        if (occasionId) {
          const matchedOccasion = response?.occasions.find(
            (occ: OccasionItem) => occ.id === occasionId,
          );

          if (matchedOccasion != undefined) {
            setSelectedOccasions([matchedOccasion]);
          }
        }
        if (!isInitialized) return;
      } catch (e) {
        console.error("Error fetching filter data:", e);
      }
    };
    fetchFilterData();
  }, []);

  // Perform search when initialized or when dependencies change
  useEffect(() => {
    const performSearch = async () => {
      setLoading(true);
      setError(null);
      setSuccess(null);
      setProducts([]);

      try {
        const searchParams: any = {
          priceSmall: selectedMinPrice,
          priceHigh: selectedMaxPrice,
          colors: selectedColors.map((item) => item ?? ""),
          categoryIds: selectedCategories.map((item) => item.id ?? ""),
          subcategoryIds: selectedSubcategories.map((item) => item.id ?? ""),
          occasionIds: selectedOccasions.map((item) => item.id ?? ""),
        };

        if (tag) {
          searchParams.tag = tag;
        }

        const response = await searchProducts(searchParams);

        if (!response?.isSuccess) {
          throw new Error(
            response?.message || "Something went wrong. Please try again.",
          );
        } else {
          setProducts(response?.data ?? []);
          setSuccess(response.message ?? "Products loaded successfully.");
          setError(null);
        }
      } catch (err: any) {
        setError(err.message || "Failed to load products. Please try again.");
        setSuccess(null);
      } finally {
        setLoading(false);
      }
    };

    performSearch();
  }, [
    isInitialized,
    selectedCategories,
    selectedSubcategories,
    selectedOccasions,
    selectedMinPrice,
    selectedMaxPrice,
    selectedColors,
    tag,
  ]);

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
        // subcategoryIds: selectedSubcategories.map((item) => item.id ?? ""),
      });

      if (!response?.isSuccess) {
        throw new Error(
          response?.message || "Something went wrong. Please try again.",
        );
      } else {
        setProducts(response?.data ?? []);
        setSuccess(response.message ?? "Products loaded successfully.");
        setError(null);
      }
    } catch (err: any) {
      setError(err.message || "Failed to load products. Please try again.");
      setSuccess(null);
    } finally {
      setLoading(false);
    }
  };

  const clearAll = () => {
    setSelectedMinPrice(0);
    setSelectedMaxPrice(filterData.maxPrice || 750);
    setSelectedCategories([]);
    setSelectedSubcategories([]);
    setSelectedOccasions([]);
    setSelectedSizes([]);
    setSelectedColors([]);
    setSearchQueryString("");
  };

  const totalFilters =
    selectedCategories.length +
    selectedSubcategories.length +
    selectedOccasions.length +
    selectedSizes.length +
    selectedColors.length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* HEADER SECTION */}
      <div className="flex flex-col sm:flex-row items-center gap-6 mb-6 w-full flex-nowrap">
        <div className="flex-[2] min-w-0 w-full sm:w-auto text-left">
          <h1 className="text-2xl font-bold text-slate-900 whitespace-nowrap">
            Products
          </h1>
          {loading && (
            <span className="text-sm text-slate-400 ml-2">Loading...</span>
          )}
        </div>

        <div className="flex flex-[7] min-w-0 items-center gap-8 w-full justify-between items-center">
          <SearchBar
            onChange={(value) => {
              setSearchQueryString(value);
            }}
            className="hidden lg:block ml-6"
          />

          <div className="flex items-center gap-2 shrink-0 ml-auto flex-nowrap">
            <CustomButton
              onClick={() => setIsDrawerOpen(true)}
              className="lg:hidden flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-gray-50 hover:border-slate-300 transition-all whitespace-nowrap"
              title="Filter"
            />
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
          {/* Loading State */}
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                <p className="text-slate-500">Loading products...</p>
              </div>
            </div>
          ) : products.length === 0 && !loading ? (
            <div className="text-center py-12">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                No products found
              </h3>
              <p className="text-slate-500">
                Try adjusting your filters or search terms.
              </p>
              <button
                onClick={clearAll}
                className="mt-4 text-primary hover:underline font-medium"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
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
                  <img src="/close.svg" alt="Close" />
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
