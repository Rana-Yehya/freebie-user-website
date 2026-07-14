import NotFoundButtons from "@/components/ui/not-found-buttons";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Error",
};

export default function NotFound() {
  return (
    <section className="py-20 sm:py-24 bg-gray-50">
      <div className="flex flex-col items-center justify-center text-sm h-[360px]">
        <p className="font-medium text-lg text-honey">404 Error</p>
        <h2 className="md:text-6xl text-4xl font-semibold text-gray-800">
          Page Not Found
        </h2>
        <p className="text-base mt-4 text-black">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <NotFoundButtons />
      </div>
    </section>
  );
}
