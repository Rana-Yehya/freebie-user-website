"use client";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "@/components/utils/custom-button";
import { FooterSocialMediaIcon } from "./social-media-icon";

export default function Footer() {
  return (
    <footer
      id="_footer_cta_links_v6_001"
      className="bg-white dark:bg-neutral-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 py-16 border-b border-slate-200 dark:border-neutral-800">
          <div
            data-motion="cta"
            style={{
              opacity: 1,
              transform: "translateY(0px)",
              filter: "blur(0px)",
            }}
          >
            <h2 className="text-slate-900 dark:text-white text-3xl lg:text-4xl font-bold leading-tight mb-6">
              <span data-animate="heading" style={{ opacity: 1 }}>
                <span
                  className="motion-word"
                  style={{
                    display: "inline-block",
                    opacity: 1,
                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                  }}
                >
                  Freebie
                </span>
              </span>
            </h2>
            <p
              data-motion="text"
              className="text-slate-600 dark:text-neutral-400 text-lg mb-8 max-w-md"
              style={{
                opacity: 1,
                transform: "translateY(0px)",
                filter: "blur(0px)",
              }}
            >
              <span data-animate="text" style={{ opacity: 1 }}>
                <span
                  className="motion-word"
                  style={{
                    display: "inline-block",
                    opacity: 1,
                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                  }}
                >
                  With you, in every occasion. Delivering joy and sweetness
                  through curated gifts since 2026.
                </span>
              </span>
            </p>

            <div
              data-motion="buttons"
              className="flex flex-wrap gap-4 mb-10"
              style={{
                opacity: 1,
                transform: "translateY(0px)",
                filter: "blur(0px)",
              }}
            >
              <CustomButton
                onClick={() => {}}
                title="Get in Touch"
                className="w-fit bg-primary hover:border-neutral-200 hover:bg-[#f5a80a] hover:text-white"
              />
              {/* <CustomButton
                            href="/about"
                            title="Get in Touch"
                            className="bg-transparent text-background lg:flex text-sm font-medium transition-all text-neutral-600 hover:text-[#fbb72c] relative after:absolute after:bottom-0 after:-translate-x-1/2 hover:after:w-full after:left-1/2 after:w-0 after:h-0.5 after:bg-[#fbb72c] hover:after:w-full after:transition-all px-3 py-2 hidden lg:flex px-3 py-2 text-sm font-medium transition hover:text-primary text-white inline-flex items-center gap-2 hover:gap-3 transition-all duration-300"
                          /> */}
            </div>

            <FooterSocialMediaIcon />
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            <div
              data-motion="column"
              style={{
                opacity: 1,
                transform: "translateY(0px)",
                filter: "blur(0px)",
              }}
            >
              <h4 className="text-slate-900 dark:text-white font-semibold mb-5">
                Studio
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#"
                    className="text-slate-600 dark:text-neutral-400 hover:text-indigo-500 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-slate-600 dark:text-neutral-400 hover:text-indigo-500 transition-colors"
                  >
                    Our Work
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-slate-600 dark:text-neutral-400 hover:text-indigo-500 transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-slate-600 dark:text-neutral-400 hover:text-indigo-500 transition-colors"
                  >
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>
            <div
              data-motion="column"
              style={{
                opacity: 1,
                transform: "translateY(0px)",
                filter: "blur(0px)",
              }}
            >
              <h4 className="text-slate-900 dark:text-white font-semibold mb-5">
                Services
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#"
                    className="text-slate-600 dark:text-neutral-400 hover:text-indigo-500 transition-colors"
                  >
                    Brand Design
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-slate-600 dark:text-neutral-400 hover:text-indigo-500 transition-colors"
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-slate-600 dark:text-neutral-400 hover:text-indigo-500 transition-colors"
                  >
                    Motion Graphics
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-slate-600 dark:text-neutral-400 hover:text-indigo-500 transition-colors"
                  >
                    Photography
                  </Link>
                </li>
              </ul>
            </div>
            <div
              data-motion="column"
              style={{
                opacity: 1,
                transform: "translateY(0px)",
                filter: "blur(0px)",
              }}
            >
              <h4 className="text-slate-900 dark:text-white font-semibold mb-5">
                Resources
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#"
                    className="text-slate-600 dark:text-neutral-400 hover:text-indigo-500 transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-slate-600 dark:text-neutral-400 hover:text-indigo-500 transition-colors"
                  >
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-slate-600 dark:text-neutral-400 hover:text-indigo-500 transition-colors"
                  >
                    Free Assets
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-slate-600 dark:text-neutral-400 hover:text-indigo-500 transition-colors"
                  >
                    Newsletter
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          data-motion="bottom"
          className="py-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-center"
          style={{
            opacity: 1,
            transform: "translateY(0px)",
            filter: "blur(0px)",
          }}
        >
          <p className="text-slate-500 text-sm">
            © 2026 Pixel Studio. All rights reserved.
          </p>
          {/*  <div className="flex items-center gap-6">
           <Link
              href="#"
              className="text-slate-500 hover:text-indigo-500 text-sm transition-colors"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-slate-500 hover:text-indigo-500 text-sm transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-slate-500 hover:text-indigo-500 text-sm transition-colors"
            >
              Cookies
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
