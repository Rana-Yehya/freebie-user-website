export default function ProductCard() {
  return (
    <div className="w-[380px] relative shadow-[0_2px_7px_#dfdfdf] mx-auto my-[50px] bg-[#fafafa] font-['Roboto',sans-serif]">
      {/* Badge */}
      <div className="absolute left-0 top-5 uppercase text-[13px] font-bold bg-red-600 text-white px-[10px] py-[3px]">
        Hot
      </div>

      {/* Product Image */}
      <div className="flex items-center justify-center h-[300px] p-[50px] bg-[#f0f0f0]">
        <img
          src="https://i.imgur.com/xdbHo4E.png"
          alt="Product"
          className="max-w-full max-h-full"
        />
      </div>

      {/* Product Details */}
      <div className="p-[30px]">
        <span className="block text-xs font-bold uppercase text-gray-400 mb-[18px]">
          Women, bag
        </span>

        <h4 className="mb-[18px]">
          <a
            href="/"
            className="font-medium block uppercase text-[#363636] no-underline transition duration-300 hover:text-[#fbb72c]"
          >
            Women leather bag
          </a>
        </h4>

        <p className="text-[15px] leading-[22px] mb-[18px] text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
          possimus nostrum!
        </p>

        {/* Bottom Details */}
        <div className="overflow-hidden border-t border-gray-100 pt-5">
          <div className="float-left w-1/2">
            <div className="text-lg text-[#fbb72c] font-semibold">
              <small className="text-[80%] font-normal line-through inline-block mr-1">
                $96.00
              </small>
              $230.99
            </div>
          </div>

          <div className="float-left w-1/2 text-right">
            <a
              href="/"
              className="inline-block ml-1 text-gray-300 transition duration-300 hover:text-[#fbb72c] text-[17px]"
            >
              <i className="fa fa-heart"></i>
            </a>
            <a
              href="/"
              className="inline-block ml-1 text-gray-300 transition duration-300 hover:text-[#fbb72c] text-[17px]"
            >
              <i className="fa fa-shopping-cart"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
