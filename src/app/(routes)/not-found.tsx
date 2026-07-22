import NotFoundButtons from "@/components/ui/not-found-buttons";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Error",
};

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50/80">
      <div className="relative max-w-2xl w-full">
        {/* Decorative elements */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-honey/5 rounded-full blur-3xl -z-10" />
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-honey/5 rounded-full blur-3xl -z-10" />

        <div className="text-center">
          {/* 404 Icon */}
          <div className="relative inline-block mb-8">
            <div className="w-32 h-32 mx-auto bg-honey/10 rounded-full flex items-center justify-center">
              <img
                src="/sad-face.svg"
                className="w-16 h-16"
                style={{
                  filter:
                    "invert(59%) sepia(94%) saturate(1359%) hue-rotate(2deg) brightness(107%) contrast(92%)",
                }}
              />
            </div>
            {/* 404 Badge */}
            <div className="absolute -top-2 -right-2 bg-honey text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg shadow-honey/30">
              404
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-4">
            Page Not Found
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-600 max-w-md mx-auto mb-8">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-honey text-white font-medium rounded-lg hover:bg-honey/90 transition-all duration-300 shadow-lg shadow-honey/25 hover:shadow-xl hover:shadow-honey/30 hover:-translate-y-0.5"
            >
              <img
                src="/home.svg"
                alt="Back to Home"
                className="w-4 h-4"
                style={{
                  filter:
                    "invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%)",
                }}
              />
              Back to Home
            </Link>
            <Link
              href="/product/search"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-700 font-medium rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-all duration-300"
            >
              <img
                src="/grid.svg"
                alt="Browse Products"
                className="w-4 h-4"
                style={{
                  filter:
                    "invert(25%) sepia(13%) saturate(1309%) hue-rotate(176deg) brightness(90%) contrast(94%)",
                }}
              />
              Browse Products
            </Link>
          </div>

          {/* Help Text */}
          <p className="mt-8 text-sm text-slate-400">
            Need help?{" "}
            <Link
              href="/contact-us"
              className="text-honey hover:underline font-medium"
            >
              Contact our support team
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
