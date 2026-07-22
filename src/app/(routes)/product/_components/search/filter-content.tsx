// FilterContent.tsx
import { Dispatch, SetStateAction, useState, useEffect } from "react";
import CollapsibleSection from "./collapsible-section";
import PriceRange from "./price-range";
import StarRating from "./star-rating";
import { CategoryItem, SubcategoryItem } from "../../../../../types/category";
import { OccasionItem } from "../../../../../types/occasion";
import MultiSelectTree from "./multi-level-checkbox-item";
import CustomButton from "@/components/ui/custom-button";

export default function FilterContent({
  categories = [],
  occasions = [],
  colors = [],
  clearAll,
  selectedCategories,
  selectedOccasions,
  setSelectedCategories,
  setSelectedOccasions,
  applyChanges,
  minPrice,
  maxPrice,
  setMinPrice,
  setMaxPrice,
  minPriceLimit = 0,
  maxPriceLimit = 750,
  selectedSubcategories = [],
  setSelectedSubcategories,
}: {
  categories: CategoryItem[];
  occasions: OccasionItem[];
  colors: string[];
  clearAll: () => void;
  applyChanges: () => void;
  selectedCategories: CategoryItem[];
  selectedOccasions: OccasionItem[];
  setSelectedCategories: Dispatch<SetStateAction<CategoryItem[]>>;
  setSelectedOccasions: Dispatch<SetStateAction<OccasionItem[]>>;
  minPrice: number;
  maxPrice: number;
  setMinPrice: Dispatch<SetStateAction<number>>;
  setMaxPrice: Dispatch<SetStateAction<number>>;
  minPriceLimit?: number;
  maxPriceLimit?: number;
  selectedSubcategories?: SubcategoryItem[];
  setSelectedSubcategories?: Dispatch<SetStateAction<SubcategoryItem[]>>;
}) {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set([]),
  );

  // Get initial checked values from selected categories and subcategories
  const getInitialChecked = (): string[] => {
    const checked: string[] = [];

    // Add selected category IDs
    selectedCategories.forEach((cat) => {
      if (cat.id) checked.push(cat.id);
    });

    // Add selected subcategory IDs
    selectedSubcategories?.forEach((sub) => {
      if (sub.id) checked.push(sub.id);
    });

    return checked;
  };

  const [treeChecked, setTreeChecked] = useState<string[]>(getInitialChecked());
  const [treeExpanded, setTreeExpanded] = useState<string[]>([
    categories[0]?.id || "",
  ]);

  // Update tree checked when external selection changes
  useEffect(() => {
    const newChecked = getInitialChecked();
    setTreeChecked(newChecked);
  }, [selectedCategories, selectedSubcategories]);

  const handleTreeCheck = (checkedValues: string[]) => {
    setTreeChecked(checkedValues);

    // Extract selected categories and subcategories from checked values
    const newSelectedCategories: CategoryItem[] = [];
    const newSelectedSubcategories: SubcategoryItem[] = [];

    categories.forEach((category) => {
      // Check if category is selected
      if (checkedValues.includes(category.id ?? "")) {
        newSelectedCategories.push(category);
      }

      // Check subcategories
      category.subcategories?.forEach((subcategory) => {
        if (checkedValues.includes(subcategory.id ?? "")) {
          newSelectedSubcategories.push(subcategory);
        }
      });
    });

    setSelectedCategories(newSelectedCategories);
    if (setSelectedSubcategories) {
      setSelectedSubcategories(newSelectedSubcategories);
    }
  };

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(sectionId)) {
        newSet.delete(sectionId);
      } else {
        newSet.add(sectionId);
      }
      return newSet;
    });
  };

  return (
    <>
      <div className="flex items-center justify-between pb-4 mb-2 border-b border-slate-100">
        <h2 className="text-slate-900 text-base font-semibold">Filters</h2>
        <button
          type="button"
          className="text-sm text-honey font-medium hover:text-honey/80 transition-colors"
          onClick={clearAll}
        >
          Reset Filter
        </button>
      </div>

      <div className="filter-options space-y-2">
        {/* Categories with Subcategories using MultiSelectTree */}
        <CollapsibleSection
          title="Category"
          id="category"
          defaultOpen={false}
          isOpen={expandedSections.has("category")}
          onToggle={() => toggleSection("category")}
        >
          <div className="mt-2">
            <MultiSelectTree
              nodes={categories}
              checked={treeChecked}
              expanded={treeExpanded}
              onCheck={handleTreeCheck}
              onExpand={setTreeExpanded}
            />
          </div>
        </CollapsibleSection>

        {/* Occasions */}
        <CollapsibleSection
          title="Occasion"
          id="occasion"
          defaultOpen={false}
          isOpen={expandedSections.has("occasion")}
          onToggle={() => toggleSection("occasion")}
        >
          <div className="mt-2">
            {occasions.map((item) => (
              <label
                key={item.id}
                className="flex items-center gap-2.5 cursor-pointer hover:bg-slate-50 px-2 py-1 rounded-md transition-colors"
              >
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-slate-300 text-honey focus:ring-honey focus:ring-offset-0"
                  checked={selectedOccasions.some((occ) => occ.id === item.id)}
                  onChange={() => {
                    setSelectedOccasions(
                      selectedOccasions.some((occ) => occ.id === item.id)
                        ? selectedOccasions.filter((v) => v.id !== item.id)
                        : [...selectedOccasions, item],
                    );
                  }}
                />
                <span className="text-sm text-slate-700 capitalize">
                  {item.name?.defaultName}
                </span>
              </label>
            ))}
          </div>
        </CollapsibleSection>

        {/* Price Range */}
        <CollapsibleSection
          title="Price Range"
          id="price"
          defaultOpen={false}
          isOpen={expandedSections.has("price")}
          onToggle={() => toggleSection("price")}
        >
          <div className="mt-2">
            <PriceRange
              minVal={minPrice}
              maxVal={maxPrice}
              onMinChange={setMinPrice}
              onMaxChange={setMaxPrice}
              minLimit={minPriceLimit || 0}
              maxLimit={maxPriceLimit || 1000}
            />
          </div>
        </CollapsibleSection>

        {/* Rating */}
        <CollapsibleSection
          title="Rating"
          id="rating"
          defaultOpen={false}
          isOpen={expandedSections.has("rating")}
          onToggle={() => toggleSection("rating")}
        >
          <div className="space-y-2 pt-1 mt-2">
            {[5, 4, 3, 2, 1].map((rating) => (
              <label
                key={rating}
                className="flex items-center gap-3 cursor-pointer hover:bg-slate-50 px-2 py-1 rounded-md transition-colors"
              >
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-slate-300 text-honey focus:ring-honey focus:ring-offset-0"
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

        {/* Color */}
        <CollapsibleSection
          title="Color"
          id="color"
          defaultOpen={false}
          isOpen={expandedSections.has("color")}
          onToggle={() => toggleSection("color")}
        >
          <div className="flex flex-wrap gap-2 mt-2">
            {colors.map((color) => (
              <button
                key={color}
                className="w-8 h-8 rounded-full border-2 border-slate-200 hover:border-honey transition-colors hover:scale-110 transform duration-200"
                style={{ backgroundColor: color }}
                aria-label={`Color ${color}`}
              />
            ))}
          </div>
        </CollapsibleSection>
        <CustomButton
          type="button"
          onClick={applyChanges}
          className="w-full rounded-ml border-2 border-slate-300 text-black font-semibold hover:border-primary hover:bg-primary/5 hover:text-primary transition-all duration-300 flex items-center justify-center gap-2"
          title="Apply"
        />
      </div>
    </>
  );
}
