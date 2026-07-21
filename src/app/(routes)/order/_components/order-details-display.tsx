"use client";
import { useState, useEffect } from "react";
import { SingleOrder, OrderItem, OrderProduct } from "../../../../types/order";
import OrderTrackingTimeline from "./order-tracking-timeline";

interface OrderDetailsProps {
  orderId: string;
}

export default function OrderDetailsDisplay({ orderId }: OrderDetailsProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [order, setOrder] = useState<OrderItem | null>(null);

  useEffect(() => {
    handleSearch();
  }, [orderId]);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      const response = await fetch(`/api/order/details?orderId=${orderId}`);
      const data: SingleOrder = await response.json();
      if (!data.isSuccess) {
        throw new Error(
          data?.message || "Something went wrong. Please try again.",
        );
      } else {
        setOrder(data.data ?? null);
        setSuccess(data.message ?? "Order loaded successfully.");
        setError(null);
      }
    } catch (err: any) {
      setError(err.message || "Failed to load order. Please try again.");
      setSuccess(null);
    } finally {
      setLoading(false);
    }
  };

  const formatCurrency = (amount?: number) => {
    return `$${amount?.toFixed(2) || "0.00"}`;
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getStatusColor = (status?: string) => {
    switch (status?.toLowerCase()) {
      case "paid":
      case "delivered":
        return "bg-green-100 text-green-700";
      case "pending":
      case "processing":
        return "bg-yellow-100 text-yellow-700";
      case "cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getStatusLabel = (status?: string) => {
    switch (status?.toLowerCase()) {
      case "paid":
        return "Paid";
      case "pending":
        return "Processing";
      case "delivered":
        return "Delivered";
      case "cancelled":
        return "Cancelled";
      default:
        return status || "Unknown";
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className="px-4 md:px-8 mt-6">
        <div className="flex justify-center items-center h-64">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            <p className="text-slate-500">Loading order details...</p>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="px-4 md:px-8 mt-6">
        <div className="bg-red-50 border border-red-200 rounded-xl p-4">
          <p className="text-red-600">{error}</p>
          <button
            onClick={handleSearch}
            className="mt-2 text-sm text-primary hover:underline"
          >
            Try again
          </button>
        </div>
      </div>
    );
  }

  // No order found
  if (!order) {
    return (
      <div className="px-4 md:px-8 mt-6">
        <div className="text-center py-16">
          <div className="text-6xl mb-4">📦</div>
          <h2 className="text-xl font-semibold text-slate-800 mb-2">
            Order not found
          </h2>
          <p className="text-slate-500">
            The order you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  const totalItems =
    order.orderProducts?.reduce(
      (sum, product) => sum + (product.quantity || 0),
      0,
    ) || 0;

  return (
    <div className="px-4 md:px-8 mt-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Order Summary</h1>
            <div className="flex items-center gap-3 mt-2">
              <p className="text-sm text-slate-900 font-medium">
                Order #{order.trackingNumber || order.id?.slice(0, 8)}
              </p>
              <span
                className={`px-2.5 py-1 text-xs font-medium rounded-md ${getStatusColor(order.status)}`}
              >
                {getStatusLabel(order.status)}
              </span>
            </div>
            <p className="text-sm text-slate-500 mt-1">
              Placed on {formatDate(order.createdAt)}
            </p>
            {order.location?.address && (
              <p className="text-sm text-slate-500 mt-1">
                Delivery to: {order.location.address}
              </p>
            )}
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-primary">
              {formatCurrency(order.totalAmount)}
            </p>
            <p className="text-sm text-slate-500">{totalItems} items</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="space-y-6 lg:col-span-2 max-lg:-order-1">
          {/* Order Items */}
          <section aria-labelledby="items-heading">
            <h2 id="items-heading" className="sr-only">
              Order Items
            </h2>

            <div className="border border-slate-300 rounded-md p-4 space-y-4">
              <ul className="space-y-4">
                {order.orderProducts?.map((product) => {
                  const productData =
                    product.productStock?.productVariant?.product;
                  const variant = product.productStock?.productVariant;
                  const productName =
                    productData?.name?.defaultName || "Product";
                  const imageUrl =
                    productData?.mainImage?.secureUrl || "/placeholder.png";
                  const color = variant?.color;
                  const price = product.price || 0;
                  const quantity = product.quantity || 0;
                  const subtotal = product.subtotal || price * quantity;

                  return (
                    <li
                      key={product.id}
                      className="grid items-center gap-4 sm:grid-cols-3 border-b border-slate-100 pb-4 last:border-0 last:pb-0"
                    >
                      <div className="flex items-center gap-4 sm:col-span-2">
                        <div className="w-20 h-20 shrink-0 bg-gray-100 p-2 rounded-md sm:w-24 sm:h-24">
                          <img
                            src={imageUrl}
                            alt={productName}
                            className="w-full h-full object-contain"
                          />
                        </div>

                        <div>
                          <h3 className="text-sm font-semibold text-slate-900">
                            {productName}
                          </h3>
                          <div className="mt-1 space-y-1">
                            {color && (
                              <p className="text-xs text-slate-600">
                                Color:{" "}
                                <span className="font-medium inline-flex items-center gap-1">
                                  <span
                                    className="inline-block w-3 h-3 rounded-full border border-slate-200"
                                    style={{ backgroundColor: `#${color}` }}
                                  />
                                  #{color}
                                </span>
                              </p>
                            )}
                            <p className="text-xs text-slate-600">
                              Qty:{" "}
                              <span className="font-medium">{quantity}</span>
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="sm:ml-auto">
                        <p className="text-base font-semibold text-slate-900">
                          {formatCurrency(subtotal)}
                        </p>
                        <p className="text-xs text-slate-500">
                          {formatCurrency(price)} each
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>

              {/* Order Tracking Timeline */}
              <OrderTrackingTimeline order={order} />
              {/* <OrderTrackingTimeline /> */}

              <hr className="border-slate-300 mt-6" />
            </div>
          </section>

          {/* Billing Details */}
          <section aria-labelledby="billing-heading">
            <div className="border border-slate-300 rounded-md p-4">
              <h2
                id="billing-heading"
                className="text-base font-semibold text-slate-900 mb-6"
              >
                Billing Details
              </h2>

              <dl className="font-medium space-y-4">
                <div className="flex flex-wrap gap-4 text-slate-500 text-sm">
                  <dt>Subtotal</dt>
                  <dd className="ml-auto text-slate-900 font-semibold">
                    {formatCurrency(order.subtotal)}
                  </dd>
                </div>

                <div className="flex flex-wrap gap-4 text-slate-500 text-sm">
                  <dt>Shipping</dt>
                  <dd className="ml-auto text-slate-900 font-semibold">
                    {formatCurrency(order.deliveryFee)}
                  </dd>
                </div>

                <div className="flex flex-wrap gap-4 text-slate-500 text-sm">
                  <dt>Tax</dt>
                  <dd className="ml-auto text-slate-900 font-semibold">
                    {formatCurrency(order.taxAmount)}
                  </dd>
                </div>

                {order.refundAmount && order.refundAmount > 0 && (
                  <div className="flex flex-wrap gap-4 text-sm text-green-600">
                    <dt>Refund</dt>
                    <dd className="ml-auto font-semibold">
                      -{formatCurrency(order.refundAmount)}
                    </dd>
                  </div>
                )}

                <div className="border-t border-slate-300 pt-4 flex flex-wrap gap-4 text-sm text-slate-900 font-semibold">
                  <dt>Total</dt>
                  <dd className="ml-auto">
                    {formatCurrency(order.totalAmount)}
                  </dd>
                </div>

                {order.paymentId && (
                  <div className="flex flex-wrap gap-4 text-xs text-slate-500 pt-2">
                    <dt>Payment ID</dt>
                    <dd className="ml-auto">{order.paymentId}</dd>
                  </div>
                )}
                {order.method && (
                  <div className="flex flex-wrap gap-4 text-xs text-slate-500">
                    <dt>Payment Method</dt>
                    <dd className="ml-auto capitalize">{order.method}</dd>
                  </div>
                )}
              </dl>
            </div>
          </section>
        </div>

        {/* Right Column */}
        <aside className="space-y-6">
          {/* Customer Information */}
          <section
            aria-labelledby="customer-heading"
            className="border border-slate-300 rounded-md p-4"
          >
            <h2
              id="customer-heading"
              className="text-base font-semibold text-slate-900 mb-4"
            >
              Customer Information
            </h2>

            <dl className="space-y-3">
              <div>
                <dt className="text-slate-500 text-xs font-medium uppercase tracking-wider">
                  Customer
                </dt>
                <dd className="text-slate-900 text-sm font-medium mt-1">
                  {order.clientId || "N/A"}
                </dd>
              </div>
              <div>
                <dt className="text-slate-500 text-xs font-medium uppercase tracking-wider">
                  Order ID
                </dt>
                <dd className="text-slate-900 text-sm font-medium mt-1">
                  #{order.id?.slice(0, 8)}
                </dd>
              </div>
              <div>
                <dt className="text-slate-500 text-xs font-medium uppercase tracking-wider">
                  Status
                </dt>
                <dd className="text-slate-900 text-sm font-medium mt-1 capitalize">
                  {order.status}
                </dd>
              </div>
            </dl>
          </section>

          {/* Shipping Information */}
          <section
            aria-labelledby="shipping-heading"
            className="border border-slate-300 rounded-md p-4"
          >
            <h2
              id="shipping-heading"
              className="text-base font-semibold text-slate-900 mb-4"
            >
              Shipping Information
            </h2>

            <dl className="space-y-3">
              <div>
                <dt className="text-slate-500 text-xs font-medium uppercase tracking-wider">
                  Address
                </dt>
                <dd className="text-slate-900 text-sm font-medium mt-1">
                  {order.location?.address || "N/A"}
                </dd>
              </div>
              <div>
                <dt className="text-slate-500 text-xs font-medium uppercase tracking-wider">
                  City
                </dt>
                <dd className="text-slate-900 text-sm font-medium mt-1">
                  {order.location?.city?.name?.defaultName || "N/A"}
                </dd>
              </div>
              <div>
                <dt className="text-slate-500 text-xs font-medium uppercase tracking-wider">
                  Country
                </dt>
                <dd className="text-slate-900 text-sm font-medium mt-1">
                  {order.location?.city?.country?.name?.defaultName || "N/A"}
                </dd>
              </div>
              {order.notes && (
                <div>
                  <dt className="text-slate-500 text-xs font-medium uppercase tracking-wider">
                    Notes
                  </dt>
                  <dd className="text-slate-900 text-sm font-medium mt-1">
                    {order.notes}
                  </dd>
                </div>
              )}
            </dl>
          </section>
        </aside>
      </div>
    </div>
  );
}
