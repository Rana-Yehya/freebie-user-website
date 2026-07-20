export default function EmptyCart() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex gap-2 border-b border-slate-300 pb-4">
        <h1 className="text-2xl font-bold text-slate-900 flex-1">
          Shopping Cart
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center py-16">
        <div className="text-6xl mb-4">🛒</div>
        <h2 className="text-xl font-semibold text-slate-800 mb-2">
          Your cart is empty
        </h2>
        <p className="text-slate-500 mb-6">
          Looks like you haven't added any items yet.
        </p>
        <a
          href="/product/search"
          className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors"
        >
          Start Shopping
        </a>
      </div>
    </div>
  );
}
