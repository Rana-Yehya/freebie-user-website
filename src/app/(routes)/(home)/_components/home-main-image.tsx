"use client";
import CustomButton from "@/components/ui/custom-button";
import HomeSubtitle from "./home-subtitle";
import HomeMainImageText from "./home-main-image-text";
import { useRouter } from "next/navigation";
export default function HomeMainImage() {
  const router = useRouter();
  return (
    <section className="bg-white dark:bg-neutral-950 overflow-hidden">
      <div className="max-w-8xl mx-auto">
        {/* <!-- Hero Image with Overlay --> */}
        <div className="relative overflow-hidden">
          <img
            data-motion="image"
            src="/hero.png"
            alt="image"
            // width={1200}
            // height={800}
            className="w-full 
              h-[300px] sm:h-[450px] md:h-[400px] lg:h-[500] /* Taller on mobile */
              object-cover 
              transition-all duration-500 /* Smooth scaling */
              scale-100 sm:scale-100 md:scale-100 /* Normal on desktop */
              scale-110 sm:scale-105 /* Zoom in on mobile */
              shadow-[0_20px_50px_rgba(0,0,0,0.5)]
            "
            style={{
              opacity: 1,
              transform: "scale(1)",
              transformOrigin: "center center", // Scale from center
            }}
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>

          {/* <!-- Content Overlay --> */}
          <div className="text-center max-w-3xl mx-auto mb-12 absolute bottom-0 left-0 right-0 p-6 sm:p-10 lg:p-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-[1.1]">
              <HomeMainImageText title="The" />
              <HomeMainImageText title="Best" />
              <HomeMainImageText title="Feelings" />
              <HomeMainImageText title="Are" />

              <HomeMainImageText title="Always" />
              <HomeMainImageText title="HERE" className="text-primary" />
            </h1>

            <HomeSubtitle />
            {/* <span className="
                  block
                  text-justify
                  leading-relaxed
                  tracking-wide
                  text-[clamp(0.875rem,2vw,1rem)]
                  sm:text-[clamp(1rem,2.5vw,1.125rem)]
                ">
                  Spread joy in every occasion. 
                 Curated gift boxes, lovely 
                  plushies, and blooming surprises delivered straight to their door. 
                </span> */}
            {/* <span className="
                  block
                  text-justify
                  leading-relaxed
                  tracking-wide
                  text-[clamp(0.875rem,2vw,1rem)]
                  sm:text-[clamp(1rem,2.5vw,1.125rem)]
                ">
                  Spread joy in every occasion. Curated gift boxes, lovely 
                  plushies, and blooming surprises delivered straight to their door.
                </span> */}
            {/*  Curated gift boxes, lovely plushies, and <span className="w-1 h-1 bg-slate-400 rounded-full"></span> */}
            {/* <span>Jan 6, 2026</span> */}
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <CustomButton
                // href="/category"
                onClick={() => {
                  router.push("/category");
                }}
                title="View Collection"
                className="w-fit bg-primary hover:cursor-pointer hover:border-neutral-200 hover:bg-[#f5a80a] hover:text-white"
              />
              <CustomButton
                // href="/about"
                onClick={() => {
                  router.push("/about-us");
                }}
                title="Watch Our Story"
                className="bg-transparent text-background lg:flex text-sm font-medium transition-all text-neutral-600 hover:text-[#fbb72c] relative after:absolute after:bottom-0 after:-translate-x-1/2 hover:after:w-full after:left-1/2 after:w-0 after:h-0.5 after:bg-[#fbb72c] hover:after:w-full after:transition-all px-3 py-2 hidden lg:flex px-3 py-2 text-sm font-medium transition hover:text-primary text-white inline-flex items-center gap-2 hover:gap-3 transition-all duration-300"
              />
            </div>
            {/* <div
                data-motion="meta"
                className="flex items-center gap-4 text-slate-300"
                style={{
                  opacity: 1,
                  transform: "translateY(0px)",
                  filter: "blur(0px)",
                }}
              >
                <span>blooming surprises delivered straight to their door</span>
          
              </div>
                <div
                data-motion="meta"
                className="flex items-center gap-4 text-slate-300"
                style={{
                  opacity: 1,
                  transform: "translateY(0px)",
                  filter: "blur(0px)",
                }}
              >
                <span>straight to their door</span>
         
              </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
