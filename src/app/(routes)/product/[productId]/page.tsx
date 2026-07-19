import axios from "axios";
import {
  Products,
  ProductItem,
  SingleProduct,
} from "../../../../types/product";
import ProductDetails from "./product-details";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Product Details",
};
export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const productId = (await params).productId;
  try {
    const response = await axios.get<SingleProduct>(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/product/${productId}`,
      {
        timeout: 10000,
      },
    );
    // console.log(response.data);
    const productItem: ProductItem | undefined = response.data.data;

    return (
      productItem && (
        <section className="py-20 sm:py-24 bg-white">
          <ProductDetails product={productItem} />
        </section>
      )
    );
  } catch (error) {
    // console.error("Failed to fetch FAQs:", error);
    return (
      <div className="text-red-500 p-4 bg-red-50 rounded-lg">
        Failed to load FAQs. Please try again later.
      </div>
    );
  }
}
