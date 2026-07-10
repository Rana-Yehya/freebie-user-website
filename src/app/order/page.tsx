import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Orders",
};
export default function Order() {
  return (
    <section className="py-20 sm:py-24 bg-gray-50">
      <h1 className="sr-only">Order History</h1>
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
          {/* <!--search bar --> */}
          <form className="max-w-xs" role="search">
            <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-md bg-white outline-1 -outline-offset-1 outline-slate-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-blue-600">
              <label htmlFor="search" className="sr-only">
                Search orders
              </label>
              <input
                type="search"
                id="search"
                placeholder="Search..."
                required
                className="text-sm text-slate-900 w-full outline-none"
              />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 192.904 192.904"
                className="size-4 fill-slate-400 ml-auto"
                aria-hidden="true"
              >
                <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
              </svg>
            </div>
          </form>
        </div>

        {/* <!--filters --> */}
        <div className="flex flex-wrap items-center gap-8 mt-12">
          <div
            className="flex flex-wrap items-center gap-3"
            role="group"
            aria-label="Filter orders"
          >
            <span className="text-sm font-medium text-slate-600">
              Filter by:
            </span>
            <button
              aria-pressed="true"
              className="px-3.5 py-2 text-white text-sm font-medium rounded-md bg-blue-600 border border-blue-600 transition-colors cursor-pointer hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              All Orders
            </button>
            <button className="px-3.5 py-2 text-slate-900 text-sm font-medium rounded-md bg-white border border-slate-300 transition-colors cursor-pointer hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
              Completed
            </button>
            <button className="px-3.5 py-2 text-slate-900 text-sm font-medium rounded-md bg-white border border-slate-300 transition-colors cursor-pointer hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
              Processing
            </button>
            <button className="px-3.5 py-2 text-slate-900 text-sm font-medium rounded-md bg-white border border-slate-300 transition-colors cursor-pointer hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
              Cancelled
            </button>
          </div>

          <div className="ml-auto">
            <label htmlFor="sort-orders" className="sr-only">
              Sort orders
            </label>
            <select
              id="sort-orders"
              className="appearance-none px-4 py-2.5 bg-white border border-slate-300 text-slate-900 font-medium w-full text-sm rounded-md cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <option>Sort by: Newest</option>
              <option>Sort by: Oldest</option>
              <option>Sort by: Price (High to Low)</option>
              <option>Sort by: Price (Low to High)</option>
            </select>
          </div>
        </div>

        <ul className="space-y-6 mt-6">
          {/* <!--ORDER 1 --> */}
          <li className="bg-white rounded-lg border border-slate-300 overflow-hidden p-6 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-2xl">
            <div className="flex flex-wrap justify-between gap-6">
              <div className="max-w-3xl">
                <div className="flex items-center gap-4">
                  <h3 className="text-sm font-semibold text-slate-900">
                    Order #3245
                  </h3>
                  <span
                    aria-label="Order status: Delivered"
                    className="px-2.5 py-1.5 bg-green-100 text-green-700 text-xs font-medium rounded-md"
                  >
                    Delivered
                  </span>
                </div>
                <p className="text-slate-600 text-sm mt-3">
                  Placed on May 12, 2025 at 12:30 PM
                </p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-slate-900">$248.75</p>
                <p className="text-slate-600 text-sm mt-3">3 items</p>
              </div>
            </div>

            <hr className="border-slate-300 my-6" />

            <ul className="flex flex-wrap items-center gap-8">
              <li className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gray-100 p-1 rounded-md overflow-hidden">
                  <img
                    src="https://readymadeui.com/images/dark-green-tshirt-2.webp"
                    alt="green tshirt"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900">Tshirt</p>
                  <p className="text-xs text-slate-600 mt-1.5">Qty: 1</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gray-100 p-1 rounded-md overflow-hidden">
                  <img
                    src="https://readymadeui.com/images/product14.webp"
                    alt="Product"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900">
                    Echo Elegance
                  </p>
                  <p className="text-xs text-slate-600 mt-1.5">Qty: 1</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gray-100 p-1 rounded-md overflow-hidden">
                  <img
                    src="https://readymadeui.com/images/watch5.webp"
                    alt="Product"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900">
                    Smart Watch Timex
                  </p>
                  <p className="text-xs text-honey mt-1.5">Qty: 1</p>
                </div>
              </li>
            </ul>

            {/* <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#"
                className="flex items-center gap-2.5 px-3.5 py-2 text-slate-900 text-sm font-medium rounded-md bg-white border border-slate-300 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                View Details
              </a>
              <a
                href="#"
                className="flex items-center gap-2.5 px-3.5 py-2 text-slate-900 text-sm font-medium rounded-md bg-white border border-slate-300 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                Reorder
              </a>
              <a
                href="#"
                className="flex items-center gap-2.5 px-3.5 py-2 text-slate-900 text-sm font-medium rounded-md bg-white border border-slate-300 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                Invoice
              </a> 
            </div> */}
          </li>
        </ul>
      </div>
    </section>
  );
}
