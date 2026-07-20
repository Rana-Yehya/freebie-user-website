"use client";
import OrderSummaryDisplay from "./order-summary-display";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Cart, CartProduct } from "../../../../types/cart";
import RemoveProductFromCartDialog from "@/components/ui/remove-product-from-cart-dialog";
import CartProductItem from "./cart-product-item";
import EmptyCart from "./empty-cart";
import { useRouter } from "next/navigation";

export default function ShoppingCart() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [cart, setCart] = useState<Cart | null>(null);
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);
  const router = useRouter();

  // Confirmation dialog state
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [itemToRemove, setItemToRemove] = useState<string | null>(null);

  useEffect(() => {
    handleSearch();
  }, []);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    setCartProducts([]);
    try {
      const response = await fetch("/api/cart");
      const data: Cart = await response.json();
      if (!data.isSuccess) {
        throw new Error(
          data?.message || "Something went wrong. Please try again.",
        );
      } else {
        setCart(data);
        setCartProducts(data.cartProducts ?? []);
        setSuccess(data.message ?? "Cart loaded successfully.");
        setError(null);
      }
    } catch (err: any) {
      setError(err.message || "Failed to load cart. Please try again.");
      setSuccess(null);
    } finally {
      setLoading(false);
    }
  };

  const updateQuantity = async (
    productStockId: string,
    newQuantity: number,
  ) => {
    if (newQuantity < 1) return;

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch("/api/cart", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productStockId,
          quantity: newQuantity,
        }),
      });
      const data = await response.json();

      if (!data.isSuccess) {
        throw new Error(data.message || "Failed to update quantity.");
      }

      await handleSearch();
      setSuccess("Cart updated successfully!");
    } catch (err: any) {
      setError(err.message || "Failed to update cart.");
    } finally {
      setLoading(false);
    }
  };

  // Show confirmation dialog before removing
  const confirmRemove = (productStockId: string) => {
    setItemToRemove(productStockId);
    setShowConfirmDialog(true);
  };

  // Execute removal after confirmation
  const executeRemove = async () => {
    if (!itemToRemove) return;

    setShowConfirmDialog(false);
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch("/api/cart", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productStockId: itemToRemove }),
      });
      const data = await response.json();

      if (!data.isSuccess) {
        throw new Error(data.message || "Failed to remove item.");
      }

      await handleSearch();
      setSuccess("Item removed from cart!");
      setItemToRemove(null);
    } catch (err: any) {
      setError(err.message || "Failed to remove item.");
    } finally {
      setLoading(false);
    }
  };

  // Cancel removal
  const cancelRemove = () => {
    setShowConfirmDialog(false);
    setItemToRemove(null);
  };

  const moveToWishlist = async (productStockId: string) => {
    setSuccess("Item moved to wishlist!");
  };

  if (loading && cartProducts.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-center items-center h-64">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            <p className="text-slate-500">Loading your cart...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!cartProducts || cartProducts.length === 0) {
    return <EmptyCart />;
  }

  const totalItems = cartProducts.reduce(
    (sum, item) => sum + (item.quantity ?? 0),
    0,
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Confirmation Dialog */}
      {showConfirmDialog && (
        <RemoveProductFromCartDialog
          cancelRemove={cancelRemove}
          executeRemove={executeRemove}
        />
      )}

      <div className="flex gap-2 border-b border-slate-300 pb-4">
        <h1 className="text-2xl font-bold text-slate-900 flex-1">
          Shopping Cart
        </h1>
        <p className="text-base text-slate-900 font-medium">
          {totalItems} {totalItems === 1 ? "Item" : "Items"}
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12 mt-8">
        <ul className="lg:col-span-2 space-y-6">
          {cartProducts.map((item: CartProduct) => {
            return (
              <CartProductItem
                key={item.productStockId}
                item={item}
                confirmRemove={() => confirmRemove(item.productStockId ?? "")}
                updateQuantity={(quantity) =>
                  updateQuantity(item.productStockId ?? "", quantity)
                }
              />
            );
          })}
        </ul>

        <OrderSummaryDisplay
          onClickOnProceed={() => {
            router.push("/checkout");
          }}
          itemCount={totalItems}
        />
      </div>
    </div>
  );
}
