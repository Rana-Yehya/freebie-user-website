import ProductDisplay from "./product-display";
import { Suspense } from "react";
import ScrollableContainer from "./home-product-scroll";
export default function HomeProducts() {
  return (
    <section className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
            Featured Products
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Our Best Sellers
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Discover our most loved products, carefully curated for you
          </p>
        </div>

        <ScrollableContainer>
          <Suspense fallback={<div>Loading...</div>}>
            <ProductDisplay />
          </Suspense>
        </ScrollableContainer>
      </div>
    </section>
  );
}
