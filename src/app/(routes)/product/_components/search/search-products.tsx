import axios from "axios";
import ProductCard from "../../../product/_components/product-card";
import { Products, ProductItem } from "../../../../../types/product";
import { ProductQueryRequest } from "../../../../../types/product-query";

export default async function searchProducts({
  tag,
  page = 1,
  limit = 12,
  priceSmall,
  priceHigh,
  occasionIds,
  categoryIds,
  colors,
}: ProductQueryRequest) {
  try {
    const response = await axios.get<Products>(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/product/search`,

      {
        params: {
          ...(tag ? { tag: tag } : {}),
          ...(page ? { page: page } : {}),
          ...(limit ? { limit: limit } : {}),
          ...(priceSmall ? { priceSmall: priceSmall } : {}),
          ...(priceHigh
            ? {
                priceHigh: priceHigh,
                ...(priceSmall
                  ? { priceSmall: priceSmall }
                  : { priceSmall: 0 }),
              }
            : {}),
          ...(occasionIds ? { occasionIds: occasionIds } : {}),
          ...(colors ? { colors: colors } : {}),
          ...(categoryIds ? { categoryIds: categoryIds } : {}),
        },
        timeout: 10000,
      },
    );
    // console.log(response.data);
    // const productData: ProductItem[] = response.data.data ?? [];
    return response.data;
  } catch (error) {
    console.error("Fetch error:", error);
  }
}
