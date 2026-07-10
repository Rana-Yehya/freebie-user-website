import { Metadata } from "next";
import ShoppingCart from "./shopping-cart";
export const metadata: Metadata = {
  title: "Cart",
};

export default function Cart() {
  return (
    <section
      id="_product_asymmetric_split_v6_005"
      className="py-20 sm:py-24 bg-gray-50"
    >
      <ShoppingCart />
    </section>
  );
}
