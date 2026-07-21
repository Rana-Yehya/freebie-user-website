import { Metadata } from "next";
import OrderHistory from "./_components/order-history";
export const metadata: Metadata = {
  title: "Orders",
};
export default function Order() {
  return (
    <section className="py-20 sm:py-24 bg-gray-50">
      <OrderHistory />
    </section>
  );
}
