import OrderDetailsDisplay from "../_components/order-details-display";
import OrderTrackingTimeline from "../_components/order-tracking-timeline";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Order Details",
};

export default async function OrderDetails({
  params,
}: {
  params: Promise<{ orderId: string }>;
}) {
  const orderId = (await params).orderId;

  return (
    orderId && (
      <section className="py-20 sm:py-24 bg-gray-50">
        <OrderDetailsDisplay orderId={orderId} />
      </section>
    )
  );
}
