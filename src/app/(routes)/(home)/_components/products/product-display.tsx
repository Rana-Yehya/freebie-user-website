import axios from "axios";
import ProductCard from "../../../product/_components/product-card";
import { Product, ProductItem } from "../../../../../types/product";

type User = {
  id: number;
  userId: string;
  username: string;
  title: string;
  body: string;
};
export default async function ProductDisplay() {
  try {
    const response = await axios.get<Product>(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/product/search?tag=featured`,

      {
        timeout: 10000,
      },
    );
    // console.log(response.data);
    const productData: ProductItem[] = response.data.data ?? [];

    return productData.map((product, index) => (
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
