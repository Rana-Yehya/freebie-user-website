import CheckoutForm from "./_components/checkout-form";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Checkout",
};
export default function Checkout() {
  return (
    <section className="py-20 sm:py-24 bg-gray-50">
      <CheckoutForm />
    </section>
  );
}
