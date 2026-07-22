import axios from "axios";
import { Products, ProductItem } from "../../../../../types/product";
import {
  ProductQueryRequest,
  ProductQueryResponse,
} from "../../../../../types/product-query";
import ProductCard from "../../../../../components/shared/card/product-card";

export default async function searchQuery() {
  try {
    const response = await axios.get<ProductQueryResponse>(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/product/query`,

      {
        timeout: 10000,
      },
    );
    // console.log(response.data);

    return response.data;
  } catch (error) {
    console.error("Fetch error:", error);
  }
}
