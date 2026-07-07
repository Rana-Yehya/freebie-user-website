"use-client";
import RatingDisplay from "@/components/utils/rating-display";

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const productId = (await params).productId;
  return (
    <section
      id="_product_asymmetric_split_v6_005"
      className="py-20 sm:py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <!-- Asymmetric 8/4 Split --> */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* <!-- Large Image Section --> */}
          <div className="lg:col-span-8">
            <div
              data-motion="image"
              className="relative rounded-3xl overflow-hidden"
              style={{ opacity: 1, transform: "scale(1)", filter: "blur(0px)" }}
            >
              <img
                data-motion="image"
                src="https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=1200&amp;auto=format&amp;fit=crop&amp;q=80"
                alt="Premium bluetooth speaker"
                className="w-full aspect-4/3 object-cover"
                style={{
                  opacity: 1,
                  transform: "scale(1)",
                  filter: "blur(0px)",
                }}
              />
              <div className="absolute top-6 left-6 flex items-center gap-3">
                <span
                  data-motion="badge"
                  className="px-4 py-2 bg-indigo-500 text-white text-sm font-semibold rounded-full"
                  style={{
                    opacity: 1,
                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                  }}
                >
                  Best Seller
                </span>
                <span
                  data-motion="badge"
                  className="px-4 py-2 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xs text-slate-900 dark:text-white text-sm font-semibold rounded-full"
                  style={{
                    opacity: 1,
                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                  }}
                >
                  -22%
                </span>
              </div>
              {/* <!-- Floating Price Card --> */}
              <div className="absolute bottom-6 right-6 p-5 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xs rounded-2xl">
                <span className="text-indigo-600 dark:text-indigo-400 text-4xl font-bold block">
                  $179
                </span>
                <span className="text-slate-500 dark:text-neutral-400 line-through">
                  $229
                </span>
              </div>
            </div>

            {/* <!-- Thumbnail Row --> */}
            <div
              data-motion="thumbnails"
              className="grid grid-cols-4 gap-4 mt-4"
              style={{
                opacity: 1,
                transform: "translateY(0px)",
                filter: "blur(0px)",
              }}
            >
              <button
                type="button"
                className="rounded-2xl overflow-hidden ring-2 ring-indigo-500 ring-offset-2 dark:ring-offset-neutral-950"
              >
                {/* <img data-motion="image" src="https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&amp;auto=format&amp;fit=crop&amp;q=80" alt="Speaker front" className="w-full aspect-square object-cover" style="opacity: 1; transform: scale(1); filter: blur(0px);"> */}
              </button>
              <button
                type="button"
                className="rounded-2xl overflow-hidden hover:ring-2 hover:ring-slate-300 dark:hover:ring-neutral-700 transition-all"
              >
                {/* <img data-motion="image" src="https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400&amp;auto=format&amp;fit=crop&amp;q=80" alt="Speaker angle" className="w-full aspect-square object-cover" style="opacity: 1; transform: scale(1); filter: blur(0px);"> */}
              </button>
              <button
                type="button"
                className="rounded-2xl overflow-hidden hover:ring-2 hover:ring-slate-300 dark:hover:ring-neutral-700 transition-all"
              >
                {/* <img data-motion="image" src="https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=400&amp;auto=format&amp;fit=crop&amp;q=80" alt="Speaker detail" className="w-full aspect-square object-cover" style="opacity: 1; transform: scale(1); filter: blur(0px);"> */}
              </button>
              <button
                type="button"
                className="rounded-2xl overflow-hidden hover:ring-2 hover:ring-slate-300 dark:hover:ring-neutral-700 transition-all"
              >
                {/* <img data-motion="image" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&amp;auto=format&amp;fit=crop&amp;q=80" alt="Speaker lifestyle" className="w-full aspect-square object-cover" style="opacity: 1; transform: scale(1); filter: blur(0px);"> */}
              </button>
            </div>
          </div>

          {/* <!-- Compact Details Sidebar --> */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <span
                  data-motion="badge"
                  className="text-honey text-sm font-semibold tracking-wide uppercase"
                  style={{
                    opacity: 1,
                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                  }}
                >
                  Audio / Premium
                </span>
                <h1>
                  <span
                    data-animate="heading"
                    className="text-3xl font-bold text-black leading-tight mt-2 block"
                    style={{ opacity: 1 }}
                  >
                    <span
                      className="motion-word"
                      style={{
                        display: "inline-block",
                        opacity: 1,
                        transform: "translateY(0px)",
                        filter: "blur(0px)",
                      }}
                    >
                      SoundWave
                    </span>{" "}
                    <span
                      className="motion-word"
                      style={{
                        display: "inline-block",
                        opacity: 1,
                        transform: "translateY(0px)",
                        filter: "blur(0px)",
                      }}
                    >
                      Pro
                    </span>{" "}
                    <span
                      className="motion-word"
                      style={{
                        display: "inline-block",
                        opacity: 1,
                        transform: "translateY(0px)",
                        filter: "blur(0px)",
                      }}
                    >
                      Speaker
                    </span>
                  </span>
                </h1>
              </div>

              <p
                data-animate="text"
                className="text-slate-600 dark:text-neutral-400 leading-relaxed"
                style={{ opacity: 1 }}
              >
                <span
                  className="motion-word"
                  style={{
                    display: "inline-block",
                    opacity: 1,
                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                  }}
                >
                  Room-filling
                </span>{" "}
                <span
                  className="motion-word"
                  style={{
                    display: "inline-block",
                    opacity: 1,
                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                  }}
                >
                  360°
                </span>{" "}
                <span
                  className="motion-word"
                  style={{
                    display: "inline-block",
                    opacity: 1,
                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                  }}
                >
                  sound
                </span>{" "}
                <span
                  className="motion-word"
                  style={{
                    display: "inline-block",
                    opacity: 1,
                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                  }}
                >
                  with
                </span>{" "}
                <span
                  className="motion-word"
                  style={{
                    display: "inline-block",
                    opacity: 1,
                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                  }}
                >
                  deep
                </span>{" "}
                <span
                  className="motion-word"
                  style={{
                    display: "inline-block",
                    opacity: 1,
                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                  }}
                >
                  bass
                </span>{" "}
                <span
                  className="motion-word"
                  style={{
                    display: "inline-block",
                    opacity: 1,
                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                  }}
                >
                  and
                </span>{" "}
                <span
                  className="motion-word"
                  style={{
                    display: "inline-block",
                    opacity: 1,
                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                  }}
                >
                  crystal-clear
                </span>{" "}
                <span
                  className="motion-word"
                  style={{
                    display: "inline-block",
                    opacity: 1,
                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                  }}
                >
                  highs.
                </span>{" "}
                <span
                  className="motion-word"
                  style={{
                    display: "inline-block",
                    opacity: 1,
                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                  }}
                >
                  Perfect
                </span>{" "}
                <span
                  className="motion-word"
                  style={{
                    display: "inline-block",
                    opacity: 1,
                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                  }}
                >
                  for
                </span>{" "}
                <span
                  className="motion-word"
                  style={{
                    display: "inline-block",
                    opacity: 1,
                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                  }}
                >
                  any
                </span>{" "}
                <span
                  className="motion-word"
                  style={{
                    display: "inline-block",
                    opacity: 1,
                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                  }}
                >
                  space.
                </span>
              </p>

              {/* <!-- Rating --> */}

              <RatingDisplay rating={4.5} showNumber={true} />

              {/* <!-- Color Selection --> */}
              <div
                data-motion="card"
                className="p-5 bg-slate-50 dark:bg-neutral-900 rounded-2xl"
                style={{
                  opacity: 1,
                  transform: "translateY(0px)",
                  filter: "blur(0px)",
                }}
              >
                <p className="text-sm font-semibold text-slate-900 dark:text-white mb-3">
                  Color
                </p>
                <div className="flex items-center gap-3">
                  <button
                    data-motion="button"
                    type="button"
                    className="w-10 h-10 rounded-full bg-slate-900 ring-2 ring-offset-2 ring-indigo-500 dark:ring-offset-neutral-900"
                    aria-label="Black"
                    style={{
                      opacity: 1,
                      transform: "translateY(0px)",
                      filter: "blur(0px)",
                    }}
                  ></button>
                  <button
                    type="button"
                    className="w-10 h-10 rounded-full bg-white border border-slate-200"
                    aria-label="White"
                  ></button>
                  <button
                    data-motion="button"
                    type="button"
                    className="w-10 h-10 rounded-full bg-indigo-600"
                    aria-label="Purple"
                    style={{
                      opacity: 1,
                      transform: "translateY(0px)",
                      filter: "blur(0px)",
                    }}
                  ></button>
                  <button
                    data-motion="button"
                    type="button"
                    className="w-10 h-10 rounded-full bg-indigo-600"
                    aria-label="Green"
                    style={{
                      opacity: 1,
                      transform: "translateY(0px)",
                      filter: "blur(0px)",
                    }}
                  ></button>
                </div>
              </div>

              {/* <!-- Features --> */}
              <div className="space-y-3">
                <div
                  data-motion="feature"
                  className="flex items-center gap-3"
                  style={{
                    opacity: 1,
                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                  }}
                >
                  <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                  <span className="text-slate-700 dark:text-neutral-300 text-sm">
                    24-Hour Battery Life
                  </span>
                </div>
                <div
                  data-motion="feature"
                  className="flex items-center gap-3"
                  style={{
                    opacity: 1,
                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                  }}
                >
                  <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                  <span className="text-slate-700 dark:text-neutral-300 text-sm">
                    Waterproof IPX7
                  </span>
                </div>
                <div
                  data-motion="feature"
                  className="flex items-center gap-3"
                  style={{
                    opacity: 1,
                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                  }}
                >
                  <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                  <span className="text-slate-700 dark:text-neutral-300 text-sm">
                    Multi-Room Pairing
                  </span>
                </div>
              </div>
            </div>

            {/* <!-- Actions --> */}
            <div className="space-y-4 mt-8">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                  <button
                    data-motion="button"
                    type="button"
                    className="w-12 h-12 flex items-center justify-center rounded-full border border-slate-300 dark:border-neutral-700 hover:bg-slate-50 dark:hover:bg-neutral-900 transition-colors"
                    aria-label="Decrease"
                    style={{
                      opacity: 1,
                      transform: "translateY(0px)",
                      filter: "blur(0px)",
                    }}
                  >
                    {/* <svg className="w-5 h-5 text-slate-600 dark:text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: currentColor;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path></svg> */}
                  </button>
                  <span className="text-xl font-bold text-slate-900 dark:text-white w-6 text-center">
                    1
                  </span>
                  <button
                    data-motion="button"
                    type="button"
                    className="w-12 h-12 flex items-center justify-center rounded-full border border-slate-300 dark:border-neutral-700 hover:bg-slate-50 dark:hover:bg-neutral-900 transition-colors"
                    aria-label="Increase"
                    style={{
                      opacity: 1,
                      transform: "translateY(0px)",
                      filter: "blur(0px)",
                    }}
                  >
                    {/* <svg className="w-5 h-5 text-slate-600 dark:text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: currentColor;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg> */}
                  </button>
                </div>
                <button
                  data-motion="button"
                  type="button"
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-slate-300 dark:border-neutral-700 hover:bg-slate-50 dark:hover:bg-neutral-900 transition-colors"
                  aria-label="Wishlist"
                  style={{
                    opacity: 1,
                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                  }}
                >
                  {/* <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: currentColor;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg> */}
                </button>
              </div>
              <button
                data-motion="button"
                type="button"
                className="w-full h-14 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-colors flex items-center justify-center gap-2"
                style={{
                  opacity: 1,
                  transform: "translateY(0px)",
                  filter: "blur(0px)",
                }}
              >
                {/* <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: currentColor;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg> */}
                Add to Cart
              </button>
              <button
                data-motion="button"
                type="button"
                className="w-full h-14 rounded-full border border-slate-300 dark:border-neutral-700 text-slate-900 dark:text-white font-semibold hover:bg-slate-50 dark:hover:bg-neutral-900 transition-colors"
                style={{
                  opacity: 1,
                  transform: "translateY(0px)",
                  filter: "blur(0px)",
                }}
              >
                Buy Now — $179
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Interactive Script --> */}
      {/* <script>
  (function() {
    function initQuantity() {
      const section = document.getElementById('_product_asymmetric_split_v6_005');
      if (!section) return;
      
      const decrementBtn = section.querySelector('[data-decrement], .decrement-btn');
      const incrementBtn = section.querySelector('[data-increment], .increment-btn');
      const quantityDisplay = section.querySelector('[data-quantity], .quantity-display');
      
      if (!decrementBtn || !incrementBtn || !quantityDisplay) return;
      
      const newDecrement = decrementBtn.cloneNode(true);
      const newIncrement = incrementBtn.cloneNode(true);
      decrementBtn.parentNode.replaceChild(newDecrement, decrementBtn);
      incrementBtn.parentNode.replaceChild(newIncrement, incrementBtn);
      
      let quantity = parseInt(quantityDisplay.textContent) || 1;
      
      newDecrement.addEventListener('click', () => {
        if (quantity > 1) {
          quantity--;
          quantityDisplay.textContent = quantity;
        }
      });
      
      newIncrement.addEventListener('click', () => {
        quantity++;
        quantityDisplay.textContent = quantity;
      });
    }
    
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initQuantity);
    } else {
      initQuantity();
    }
    window.addEventListener('load', initQuantity);
  })();
  </script> */}
    </section>
  );
}
