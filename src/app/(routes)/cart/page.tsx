import { Metadata } from "next";
import ShoppingCart from "./_components/shopping-cart";
export const metadata: Metadata = {
  title: "Cart",
};

export default function Cart() {
  return (
    <section className="py-20 sm:py-24 bg-gray-50">
      <ShoppingCart />
    </section>
  );
}
