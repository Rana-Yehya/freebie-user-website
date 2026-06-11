import Link from "next/link";
import Image from "next/image";
import TwitterIcon from "../../public/twitter.svg";

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
            styles="opacity: 1; transform: translateY(0px); filter: blur(0px);"
          >
            <h2 className="text-slate-900 dark:text-white text-3xl lg:text-4xl font-bold leading-tight mb-6">
              <span data-animate="heading" styles="opacity: 1;">
                <span
                  className="motion-word"
                  styles="display: inline-block; opacity: 1; transform: translateY(0px); filter: blur(0px);"
                >
                  Freebie
                </span>
              </span>
            </h2>
            <p
              data-motion="text"
              className="text-slate-600 dark:text-neutral-400 text-lg mb-8 max-w-md"
              styles="opacity: 1; transform: translateY(0px); filter: blur(0px);"
            >
              <span data-animate="text" styles="opacity: 1;">
                <span
                  className="motion-word"
                  styles="display: inline-block; opacity: 1; transform: translateY(0px); filter: blur(0px);"
                >
                  With you, in every occasion. Delivering joy and sweetness
                  through curated gifts since 2024.
                </span>
              </span>
            </p>

            <div
              data-motion="buttons"
              className="flex flex-wrap gap-4 mb-10"
              styles="opacity: 1; transform: translateY(0px); filter: blur(0px);"
            >
              <a
                data-motion="button"
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-500 hover:bg-indigo-600 transition-colors rounded-full text-white font-semibold"
                styles="opacity: 1; transform: translateY(0px); filter: blur(0px);"
              >
                Start a Project
              </a>
              <a
                data-motion="button"
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-indigo-500 text-indigo-500 dark:text-indigo-400 hover:bg-indigo-500 hover:text-white transition-colors rounded-full font-semibold"
                styles="opacity: 1; transform: translateY(0px); filter: blur(0px);"
              >
                Get in Touch
              </a>
            </div>

            <div
              data-motion="social"
              className="flex items-center gap-4"
              styles="opacity: 1; transform: translateY(0px); filter: blur(0px);"
            >
              <span className="text-slate-500 text-sm">Follow us:</span>
              <Link
                href="#"
                className="bg-gray text-slate-400 hover:text-indigo-500"
                aria-label="Twitter"
              >
                <TwitterIcon className="w-6 h-6 primary" />
              </Link>
              <Link
                href="#"
                className="text-slate-400 hover:text-indigo-500 transition-colors"
                aria-label="LinkedIn"
              >
                {/* <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                </svg> */}
              </Link>
              <Link
                href="#"
                className="text-slate-400 hover:text-indigo-500 transition-colors"
                aria-label="Facebook"
              >
                {/* <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                </svg> */}
              </Link>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            <div
              data-motion="column"
              styles="opacity: 1; transform: translateY(0px); filter: blur(0px);"
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
              styles="opacity: 1; transform: translateY(0px); filter: blur(0px);"
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
              styles="opacity: 1; transform: translateY(0px); filter: blur(0px);"
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
          className="py-8 flex flex-col sm:flex-row items-center justify-between gap-6"
          styles="opacity: 1; transform: translateY(0px); filter: blur(0px);"
        >
          <p className="text-slate-500 text-sm">
            © 2026 Pixel Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
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
          </div>
        </div>
      </div>
    </footer>
  );
}
