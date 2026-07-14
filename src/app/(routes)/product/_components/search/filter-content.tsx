import { Dispatch, SetStateAction } from "react";
import CollapsibleSection from "./collapsible-section";
import CheckboxItem from "./checkbox-item";
import PriceRange from "./price-range";
import StarRating from "./star-rating";

// Filter Sidebar Content (reused in both desktop and drawer)
export type Entry = {
  id: string;
  label: string;
  value: string;
};

const CATEGORIES: Entry[] = [
  { id: "electronics", label: "electronics", value: "electronics" },
  { id: "jewelery", label: "jewelery", value: "jewelery" },
  { id: "mens-clothing", label: "men's clothing", value: "men's clothing" },
  {
    id: "womens-clothing",
    label: "women's clothing",
    value: "women's clothing",
  },
];

const BRANDS: Entry[] = [
  { id: "brand-zara", label: "Zara", value: "Zara" },
  { id: "brand-hm", label: "H&M", value: "H&M" },
  { id: "brand-uniqlo", label: "Uniqlo", value: "Uniqlo" },
  { id: "brand-levis", label: "Levi's", value: "Levi's" },
  { id: "brand-nike", label: "Nike", value: "Nike" },
  { id: "brand-adidas", label: "Adidas", value: "Adidas" },
  { id: "brand-puma", label: "Puma", value: "Puma" },
  { id: "brand-tommy", label: "Tommy Hilfiger", value: "Tommy Hilfiger" },
];

const SIZES = ["XS", "S", "M", "L", "XL", "XXL", "XXXL", "4XL"];

export type Color = {
  label: string;
  className: string;
};

const COLORS = [
  { label: "Blue", className: "bg-blue-700" },
  { label: "Purple", className: "bg-purple-700" },
  { label: "Pink", className: "bg-pink-700" },
  { label: "Orange", className: "bg-orange-700" },
  { label: "Red", className: "bg-red-700" },
  { label: "Yellow", className: "bg-yellow-700" },
  { label: "Black", className: "bg-black" },
  { label: "Gray", className: "bg-gray-700" },
];

export default function FilterContent({
  clearAll,
  selectedCategories,
  setSelectedCategories,
  minPrice,
  maxPrice,
  setMinPrice,
  setMaxPrice,
}: {
  clearAll: () => void;
  selectedCategories: Entry[];
  setSelectedCategories: Dispatch<SetStateAction<Entry[]>>;
  minPrice: number;
  maxPrice: number;
  setMinPrice: Dispatch<SetStateAction<number>>;
  setMaxPrice: Dispatch<SetStateAction<number>>;
}) {
  return (
    <>
      <div className="flex items-center justify-between pb-3 mb-2">
        <h2 className="text-slate-900 text-base font-semibold">Filters</h2>
        <button
          type="button"
          className="text-sm text-blue-600 font-medium hover:text-blue-700 transition-colors"
          onClick={clearAll}
        >
          Reset Filter
        </button>
      </div>

      <div className="filter-options space-y-1">
        <CollapsibleSection title="Category" id="category" defaultOpen={true}>
          <ul className="space-y-0.5">
            {CATEGORIES.map((item) => (
              <CheckboxItem
                key={item.id}
                item={item}
                checked={selectedCategories.includes(item)}
                onChange={() => {
                  setSelectedCategories((prev: Entry[]) =>
                    prev.includes(item)
                      ? prev.filter((v) => v !== item)
                      : [...prev, item],
                  );
                }}
              />
            ))}
          </ul>
        </CollapsibleSection>

        <CollapsibleSection title="Price Range" id="price" defaultOpen={false}>
          <PriceRange
            minVal={minPrice}
            maxVal={maxPrice}
            onMinChange={setMinPrice}
            onMaxChange={setMaxPrice}
          />
        </CollapsibleSection>

        <CollapsibleSection title="Rating" id="rating" defaultOpen={false}>
          <div className="space-y-2 pt-1">
            {[5, 4, 3, 2, 1].map((rating) => (
              <label
                key={rating}
                className="flex items-center gap-3 cursor-pointer"
              >
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                />
                <div className="flex items-center gap-1">
                  <StarRating rating={rating} />
                  {rating < 5 && (
                    <span className="text-xs text-slate-500">& up</span>
                  )}
                </div>
              </label>
            ))}
          </div>
        </CollapsibleSection>
      </div>
    </>
  );
}
