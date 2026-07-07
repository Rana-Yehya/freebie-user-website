"use client";
import { useState, useEffect } from "react";

export default function HomeReasonsToBuy() {
  const images = ["/hero.png", "/about.png"];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section
      id="_blogdetails_fullwidth_v6_001"
      className="py-20 sm:py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* <!-- Image --> */}
          {/* <div
            data-motion="image"
            className="lg:col-span-6 rounded-3xl overflow-hidden h-80 lg:h-[500px]"
            style={{ opacity: 1, transform: "scale(1)", filter: "blur(0px)" }}
          >
            <Image
              data-motion="image"
              src="/about.png"
              alt="image"
              width={0}
              height={0}
              className="w-full object-cover"
              objectFit="contain"
              sizes="100vw"
              style={{
                opacity: 1,
                transform: "scale(1)",
                width: "100%",
                height: "auto",
              }}
            />
          </div> */}
          <div
            data-motion="image"
            className="relative  lg:col-span-5 relative rounded-3xl overflow-hidden"
            style={{ opacity: 1, transform: "scale(1)", filter: "blur(0px)" }}
          >
          <div className="relative w-full h-80 lg:h-[500px] overflow-hidden">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Slide ${index}`}
          className={`
            absolute top-0 left-0 w-full h-full object-cover
            transition-opacity duration-1000 ease-in-out
            ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}
          `}
        />
      ))}
    </div>

            {/* <div className="absolute bottom-6 left-6 right-6 p-5 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xs rounded-2xl">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">85%</span>
                <p className="text-slate-600 dark:text-neutral-400 text-sm">Time saved on campaigns</p>
              </div>
              <div data-motion="icon" className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/40 rounded-full flex items-center justify-center" style="opacity: 1; transform: scale(1); filter: blur(0px);">
                <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: currentColor;">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
              </div>
            </div>
          </div> */}
          </div>
          {/* <!-- Content --> */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4">
                One Platform to Automate Your Entire Funnel
              </h3>
              <p className="text-gray-800">
                From lead capture to conversion, automate every touchpoint with
                personalized messaging that converts.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {/* <!-- Feature 1 --> */}
              <div
                data-motion="card"
                className="p-5 bg-[#f5a80a] rounded-2xl"
                style={{
                  opacity: 1,
                  transform: "translateY(0px)",
                  filter: "blur(0px)",
                }}
              >
                <div className="w-11 h-11 bg-indigo-100 dark:bg-indigo-900/40 rounded-xl flex items-center justify-center mb-4 shadow-sm shadow-indigo-900/20 dark:shadow-indigo-100/20"></div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                  Email Sequences
                </h4>
                <p className="text-white-600 text-sm">
                  Drip campaigns that nurture leads with perfectly timed
                  messages.
                </p>
              </div>

              {/* <!-- Feature 2 --> */}
              <div
                data-motion="card"
                className="p-5 bg-slate-50 dark:bg-neutral-900 rounded-2xl"
                style={{
                  opacity: 1,
                  transform: "translateY(0px)",
                  filter: "blur(0px)",
                }}
              >
                <div className="w-11 h-11 bg-indigo-100 dark:bg-indigo-900/40 rounded-xl flex items-center justify-center mb-4 shadow-sm shadow-indigo-900/20 dark:shadow-indigo-100/20"></div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                  Lead Scoring
                </h4>
                <p className="text-white-600 text-sm">
                  Automatically rank prospects based on engagement and fit.
                </p>
              </div>

              {/* <!-- Feature 3 --> */}
              <div
                data-motion="card"
                className="p-5 bg-slate-50 dark:bg-neutral-900 rounded-2xl"
                style={{
                  opacity: 1,
                  transform: "translateY(0px)",
                  filter: "blur(0px)",
                }}
              >
                <div className="w-11 h-11 bg-indigo-100 dark:bg-indigo-900/40 rounded-xl flex items-center justify-center mb-4 shadow-sm shadow-indigo-900/20 dark:shadow-indigo-100/20"></div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                  AI Personalization
                </h4>
                <p className="text-white-600 text-sm">
                  Dynamic content that adapts to each visitor's interests.
                </p>
              </div>

              {/* <!-- Feature 4 --> */}
              <div
                data-motion="card"
                className="p-5 bg-[#f5a80a] rounded-2xl"
                style={{
                  opacity: 1,
                  transform: "translateY(0px)",
                  filter: "blur(0px)",
                }}
              >
                <div className="w-11 h-11 bg-indigo-100 dark:bg-indigo-900/40 rounded-xl flex items-center justify-center mb-4 shadow-sm shadow-indigo-900/20 dark:shadow-indigo-100/20"></div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                  Revenue Attribution
                </h4>
                <p className="text-white-600 text-sm">
                  Track every touchpoint to understand what drives revenue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
