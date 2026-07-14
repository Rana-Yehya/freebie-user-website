"use client"; // Error boundaries must be Client Components

import NotFoundButtons from "@/components/ui/not-found-buttons";
import { useEffect } from "react";

export default function ErrorPage({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <section className="py-20 sm:py-24 bg-gray-50">
      <div className="flex flex-col items-center justify-center text-sm h-[360px]">
        <p className="font-medium text-lg text-honey">Something went wrong!</p>
        <h2 className="md:text-6xl text-4xl font-semibold text-gray-800">
          error
        </h2>
        <p className="text-base mt-4 text-black">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <NotFoundButtons />
        {/* <h2>Something went wrong!</h2>
        <button
          onClick={
            // Attempt to recover by re-fetching and re-rendering the segment
            () => unstable_retry()
          }
        >
          Try again
        </button> */}
      </div>
    </section>
  );
}
