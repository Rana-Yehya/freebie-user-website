import { CategoryItem, SubcategoryItem } from "../../../../../types/category";

export default function ProductCategoryAndSubcategory({
  category,
  subcategory,
}: {
  category: CategoryItem;
  subcategory: SubcategoryItem;
}) {
  return (
    <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
      {category && (
        <span className="hover:text-slate-600 transition-colors cursor-pointer">
          {category.name?.defaultName}
        </span>
      )}
      {subcategory && (
        <>
          <span className="text-slate-300">/</span>
          <span className="hover:text-slate-600 transition-colors cursor-pointer">
            {subcategory.name?.defaultName}
          </span>
        </>
      )}
    </div>
  );
}
