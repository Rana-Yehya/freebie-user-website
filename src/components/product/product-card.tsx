import Link from "next/link";
export default function ProductCard() {
  return (
    <Link href={{
        pathname: '/product/1',
      }}>
      <div className="w-full max-w-[380px] relative bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
        {/* Badge */}
        <div className="absolute left-0 top-4 uppercase text-xs font-bold bg-red-600 text-white px-3 py-1 rounded-r-md z-10">
          Hot
        </div>

        {/* Product Image */}
        <div className="flex items-center justify-center h-64 sm:h-72 p-8 bg-gray-50 rounded-t-xl">
          <img
            src="https://i.imgur.com/xdbHo4E.png"
            alt="Product"
            className="max-w-full max-h-full object-contain"
          />
        </div>

        {/* Product Details */}
        <div className="p-5 sm:p-6">
          <span className="block text-xs font-bold uppercase text-gray-400 mb-3 tracking-wider">
            Women, bag
          </span>

          <h4 className="mb-3">
            <p className="font-semibold block text-gray-800 hover:text-primary transition-colors duration-300 text-base sm:text-lg">
              Women leather bag
            </p>
          </h4>

          <p className="text-sm leading-relaxed mb-4 text-gray-500 line-clamp-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
            possimus nostrum!
          </p>

          {/* Bottom Details */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="text-lg font-semibold text-primary">
              <span className="text-sm font-normal line-through text-gray-400 mr-2">
                $96.00
              </span>
              $230.99
            </div>

            {/* <div className="flex items-center gap-2">
              <a
                href="/"
                className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-primary transition-colors duration-300 rounded-full hover:bg-primary/10"
                aria-label="Add to wishlist"
              >
                <i className="fa fa-heart text-sm"></i>
              </a>
              <a
                href="/"
                className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-primary transition-colors duration-300 rounded-full hover:bg-primary/10"
                aria-label="Add to cart"
              >
                <i className="fa fa-shopping-cart text-sm"></i>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </Link>
    //     <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //   {[1, 2, 3, 4, 5].map((src, index) => (
    //     <li key={index} className="flex justify-center">
    //       <div className="w-full max-w-[380px] relative bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
    //         {/* Badge */}
    //         <div className="absolute left-0 top-4 uppercase text-xs font-bold bg-red-600 text-white px-3 py-1 rounded-r-md z-10">
    //           Hot
    //         </div>

    //         {/* Product Image */}
    //         <div className="flex items-center justify-center h-64 sm:h-72 p-8 bg-gray-50 rounded-t-xl">
    //           <img
    //             src="https://i.imgur.com/xdbHo4E.png"
    //             alt="Product"
    //             className="max-w-full max-h-full object-contain"
    //           />
    //         </div>

    //         {/* Product Details */}
    //         <div className="p-5 sm:p-6">
    //           <span className="block text-xs font-bold uppercase text-gray-400 mb-3 tracking-wider">
    //             Women, bag
    //           </span>

    //           <h4 className="mb-3">
    //             <a
    //               href="/"
    //               className="font-semibold block text-gray-800 hover:text-primary transition-colors duration-300 text-base sm:text-lg"
    //             >
    //               Women leather bag
    //             </a>
    //           </h4>

    //           <p className="text-sm leading-relaxed mb-4 text-gray-500 line-clamp-2">
    //             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!
    //           </p>

    //           {/* Bottom Details */}
    //           <div className="flex items-center justify-between pt-4 border-t border-gray-100">
    //             <div className="text-lg font-semibold text-primary">
    //               <span className="text-sm font-normal line-through text-gray-400 mr-2">
    //                 $96.00
    //               </span>
    //               $230.99
    //             </div>

    //             <div className="flex items-center gap-2">
    //               <a
    //                 href="/"
    //                 className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-primary transition-colors duration-300 rounded-full hover:bg-primary/10"
    //                 aria-label="Add to wishlist"
    //               >
    //                 <i className="fa fa-heart text-sm"></i>
    //               </a>
    //               <a
    //                 href="/"
    //                 className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-primary transition-colors duration-300 rounded-full hover:bg-primary/10"
    //                 aria-label="Add to cart"
    //               >
    //                 <i className="fa fa-shopping-cart text-sm"></i>
    //               </a>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </li>
    //   ))}
    // </ul>
  );
}
