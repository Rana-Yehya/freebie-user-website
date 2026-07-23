import axios from "axios";
import ProductCard from "../../../../../components/shared/card/product-card";
import { Products, ProductItem } from "../../../../../types/product";
import { ProductQueryRequest } from "../../../../../types/product-query";

export default async function searchProducts({
  name,
  tag,
  page = 1,
  limit = 12,
  priceSmall,
  priceHigh,
  occasionIds,
  categoryIds,
  colors,
  subcategoryIds,
}: ProductQueryRequest) {
  try {
    // const response = await axios.get<Products>(
    //   `${process.env.NEXT_PUBLIC_API_URL}/api/v1/product/search`,

    //   {
    //     params: {
    //       ...(tag ? { tag: tag } : {}),
    //       ...(page ? { page: page } : {}),
    //       ...(limit ? { limit: limit } : {}),
    //       ...(priceSmall ? { priceSmall: priceSmall } : {}),
    //       ...(priceHigh
    //         ? {
    //             priceHigh: priceHigh,
    //             ...(priceSmall
    //               ? { priceSmall: priceSmall }
    //               : { priceSmall: 0 }),
    //           }
    //         : {}),
    //       ...(occasionIds ? { occasionIds: occasionIds } : {}),
    //       ...(colors ? { colors: colors } : {}),
    //       ...(categoryIds ? { categoryIds: categoryIds } : {}),
    //     },
    //     timeout: 10000,
    //   },
    // );
    const queryParams = new URLSearchParams();
    if (name) queryParams.set("name", name);
    if (page) queryParams.set("page", String(page));
    if (limit) queryParams.set("limit", String(limit));
    if (tag) queryParams.set("tag", tag);

    if (priceSmall !== undefined && priceSmall !== null) {
      queryParams.set("priceSmall", String(priceSmall));
    }
    if (priceHigh !== undefined && priceHigh !== null) {
      queryParams.set("priceHigh", String(priceHigh));
    }

    // Handle array params - append each value separately
    if (occasionIds && occasionIds.length > 0) {
      occasionIds.forEach((id) => queryParams.append("occasionIds", id));
    }

    if (colors && colors.length > 0) {
      colors.forEach((color) => queryParams.append("colors", color));
    }

    if (categoryIds && categoryIds.length > 0) {
      categoryIds.forEach((id) => queryParams.append("categoryIds", id));
    }

    if (subcategoryIds && subcategoryIds.length > 0) {
      subcategoryIds.forEach((id) => queryParams.append("subcategoryIds", id));
    }
    const response = await fetch(`/api/product?${queryParams.toString()}`);
    // console.log(response.data);
    // const productData: ProductItem[] = response.data.data ?? [];
    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
  }
}
