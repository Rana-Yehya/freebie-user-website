import axios from "axios";
import ProductCard from "../../../product/_components/product-card";
import { Products, ProductItem } from "../../../../../types/product";
import { ProductQueryRequest } from "../../../../../types/product-query";

export default async function ProductDisplay({
  tag,
  name,
  page = 1,
  limit = 12,
  priceSmall,
  priceHigh,
  occasionIds,
  colors,
}: ProductQueryRequest) {
  try {
    const searchParams = new URLSearchParams();

    if (tag) searchParams.append("tag", tag);
    if (page) searchParams.append("page", page.toString());
    if (limit) searchParams.append("limit", limit.toString());
    if (priceSmall) searchParams.append("priceSmall", priceSmall.toString());
    if (priceHigh) searchParams.append("priceHigh", priceHigh.toString());
    if (name) searchParams.append("name", name);

    // Handle arrays: repeats key for each value (e.g., colors=red&colors=blue)
    occasionIds?.forEach((id) => searchParams.append("occasionIds", id));
    colors?.forEach((color) => searchParams.append("colors", color));
    const query = searchParams.toString();
    query ? `?${query}` : "";
    const response = await fetch(`/api/product?${query}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },

      // params: {
      //   ...(tag ? { tag: tag } : {}),
      //   ...(page ? { page: page } : {}),
      //   ...(limit ? { limit: limit } : {}),
      //   ...(priceSmall ? { priceSmall: priceSmall } : {}),
      //   ...(priceHigh ? { priceHigh: priceHigh } : {}),
      //   ...(occasionIds ? { occasionIds: occasionIds } : {}),
      //   ...(colors ? { colors: colors } : {}),
      // },
      // timeout: 10000,
    });
    // console.log(response.data);
    const productData: Products = await response.json();

    return (productData.data ?? []).map((product, index) => (
      <div
        key={index}
        className="w-72 sm:w-80 flex-shrink-0 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
      >
        <ProductCard product={product} />
      </div>
    ));
  } catch (error) {
    console.error("Fetch error:", error);
  }
}
