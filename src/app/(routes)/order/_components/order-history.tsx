"use client";
import { useEffect, useState } from "react";
import { Orders, OrderItem, OrderProduct } from "../../../../types/order";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function OrderHistory() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [orders, setOrders] = useState<OrderItem[]>([]);
  const [filteredOrders, setFilteredOrders] = useState<OrderItem[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All Orders");
  const [sortBy, setSortBy] = useState("Sort by: Newest");
  const [navigatingOrderId, setNavigatingOrderId] = useState<string | null>(
    null,
  );
  const router = useRouter();

  useEffect(() => {
    handleSearch();
  }, []);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    setOrders([]);
    try {
      const response = await fetch("/api/order", {
        method: "GET",
      });
      const data: Orders = await response.json();
      if (!data?.isSuccess) {
        throw new Error(
          data?.message || "Something went wrong. Please try again.",
        );
      } else {
        setOrders(data?.data ?? []);
        setFilteredOrders(data?.data ?? []);
        setSuccess(data.message ?? "Orders loaded successfully.");
        setError(null);
      }
    } catch (err: any) {
      setError(err.message || "Failed to load orders. Please try again.");
      setSuccess(null);
    } finally {
      setLoading(false);
    }
  };

  // Filter and sort orders
  useEffect(() => {
    let result = [...orders];

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (order) =>
          order.trackingNumber?.toLowerCase().includes(term) ||
          order.id?.toLowerCase().includes(term) ||
          order.status?.toLowerCase().includes(term),
      );
    }

    // Filter by status
    if (filterStatus !== "All Orders") {
      result = result.filter(
        (order) => order.status?.toLowerCase() === filterStatus.toLowerCase(),
      );
    }

    // Sort
    switch (sortBy) {
      case "Sort by: Newest":
        result.sort(
          (a, b) =>
            new Date(b.createdAt || 0).getTime() -
            new Date(a.createdAt || 0).getTime(),
        );
        break;
      case "Sort by: Oldest":
        result.sort(
          (a, b) =>
            new Date(a.createdAt || 0).getTime() -
            new Date(b.createdAt || 0).getTime(),
        );
        break;
      case "Sort by: Price (High to Low)":
        result.sort((a, b) => (b.totalAmount || 0) - (a.totalAmount || 0));
        break;
      case "Sort by: Price (Low to High)":
        result.sort((a, b) => (a.totalAmount || 0) - (b.totalAmount || 0));
        break;
      default:
        break;
    }

    setFilteredOrders(result);
  }, [orders, searchTerm, filterStatus, sortBy]);

  const handleOrderClick = (orderId: string) => {
    setNavigatingOrderId(orderId);
    router.push(`/order/${orderId}`);
  };

  const getStatusColor = (status: string) => {
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

  const formatDate = (dateString: string) => {
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

  const formatCurrency = (amount: number) => {
    return `$${amount?.toFixed(2) || "0.00"}`;
  };

  const getTotalItems = (order: OrderItem) => {
    return (
      order.orderProducts?.reduce(
        (sum, product) => sum + (product.quantity || 0),
        0,
      ) || 0
    );
  };

  // Loading state
  if (loading) {
    return (
      <div className="px-4 md:px-8 mt-6">
        <div className="flex justify-center items-center h-64">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            <p className="text-slate-500">Loading your orders...</p>
          </div>
        </div>
      </div>
    );
  }

  // Empty state
  if (!orders || orders.length === 0) {
    return (
      <div className="px-4 md:px-8 mt-6">
        <div className="flex flex-wrap justify-between items-center gap-6">
          <div className="max-w-3xl">
            <h1 className="text-slate-900 text-2xl font-bold mb-4">
              Order History
            </h1>
            <p className="text-sm text-slate-600">
              View and manage your past orders
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center py-16">
          <div className="text-6xl mb-4">📦</div>
          <h2 className="text-xl font-semibold text-slate-800 mb-2">
            No orders yet
          </h2>
          <p className="text-slate-500 mb-6">
            Start shopping to see your orders here.
          </p>
          <Link
            href="/products"
            className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 md:px-8 mt-6">
      {/* Header */}
      <div className="flex flex-wrap justify-between items-center gap-6">
        <div className="max-w-3xl">
          <h1 className="text-slate-900 text-2xl font-bold mb-4">
            Order History
          </h1>
          <p className="text-sm text-slate-600">
            View and manage your past orders
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-8 mt-12">
        <div
          className="flex flex-wrap items-center gap-3"
          role="group"
          aria-label="Filter orders"
        >
          <span className="text-sm font-medium text-slate-600">Filter by:</span>
          {["All Orders", "Paid", "Pending", "Delivered", "Cancelled"].map(
            (status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                aria-pressed={filterStatus === status}
                className={`px-3.5 py-2 text-sm font-medium rounded-md transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  filterStatus === status
                    ? "text-white bg-primary border border-primary"
                    : "text-slate-900 bg-white border border-slate-300 hover:bg-slate-50"
                }`}
              >
                {status}
              </button>
            ),
          )}
        </div>
      </div>

      {/* Results count */}
      {filteredOrders.length > 0 && (
        <div className="mt-4 text-sm text-slate-500">
          {filteredOrders.length}{" "}
          {filteredOrders.length === 1 ? "order" : "orders"} found
        </div>
      )}

      {/* Orders List */}
      <ul className="space-y-6 mt-6">
        {filteredOrders.map((order) => {
          const isNavigating = navigatingOrderId === order.id;

          return (
            <li
              key={order.id}
              onClick={() => handleOrderClick(order.id!)}
              className={`
                bg-white rounded-lg border border-slate-300 overflow-hidden p-6 
                cursor-pointer transition-all duration-300 
                hover:scale-[1.01] hover:-translate-y-1 hover:shadow-2xl
                ${isNavigating ? "opacity-50 pointer-events-none" : ""}
                relative
              `}
            >
              {/* Loading overlay for clicked order */}
              {isNavigating && (
                <div className="absolute inset-0 bg-white/70 backdrop-blur-sm flex items-center justify-center z-10 rounded-lg">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-8 h-8 border-3 border-primary border-t-transparent rounded-full animate-spin" />
                    <span className="text-sm text-slate-500 font-medium">
                      Loading order...
                    </span>
                  </div>
                </div>
              )}

              <div className="flex flex-wrap justify-between gap-6">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-4">
                    <h3 className="text-sm font-semibold text-slate-900">
                      Order #{order.trackingNumber || order.id?.slice(0, 8)}
                    </h3>
                    <span
                      aria-label={`Order status: ${getStatusLabel(order.status)}`}
                      className={`px-2.5 py-1.5 text-xs font-medium rounded-md ${getStatusColor(order.status || "")}`}
                    >
                      {getStatusLabel(order.status || "")}
                    </span>
                  </div>
                  <p className="text-slate-600 text-sm mt-3">
                    Placed on {formatDate(order.createdAt || "")}
                  </p>
                  {order.location?.address && (
                    <p className="text-slate-500 text-xs mt-1">
                      Delivery to: {order.location.address}
                    </p>
                  )}
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-slate-900">
                    {formatCurrency(order.totalAmount || 0)}
                  </p>
                  <p className="text-slate-600 text-sm mt-3">
                    {getTotalItems(order)} items
                  </p>
                </div>
              </div>

              <hr className="border-slate-300 my-6" />

              {/* Order Products */}
              <ul className="flex flex-wrap items-center gap-8">
                {order.orderProducts?.slice(0, 3).map((product) => {
                  const productData =
                    product.productStock?.productVariant?.product;
                  const productName =
                    productData?.name?.defaultName || "Product";
                  const imageUrl =
                    productData?.mainImage?.secureUrl || "/placeholder.png";

                  return (
                    <li key={product.id} className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gray-100 p-1 rounded-md overflow-hidden">
                        <img
                          src={imageUrl}
                          alt={productName}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-900 line-clamp-1 max-w-[120px]">
                          {productName}
                        </p>
                        <p className="text-xs text-slate-600 mt-1.5">
                          Qty: {product.quantity}
                        </p>
                        {product.productStock?.productVariant?.color && (
                          <div className="flex items-center gap-1 mt-0.5">
                            <span className="text-xs text-slate-500">
                              Color:
                            </span>
                            <span
                              className="inline-block w-3 h-3 rounded-full border border-slate-200"
                              style={{
                                backgroundColor: `#${product.productStock.productVariant.color}`,
                              }}
                            />
                          </div>
                        )}
                      </div>
                    </li>
                  );
                })}
                {getTotalItems(order) > 3 && (
                  <li className="text-sm text-slate-500">
                    +{getTotalItems(order) - 3} more items
                  </li>
                )}
              </ul>
            </li>
          );
        })}
      </ul>

      {/* No results message */}
      {filteredOrders.length === 0 && orders.length > 0 && (
        <div className="text-center py-12">
          <p className="text-slate-500">No orders match your filters</p>
          <button
            onClick={() => {
              setSearchTerm("");
              setFilterStatus("All Orders");
            }}
            className="mt-2 text-primary hover:underline font-medium"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
