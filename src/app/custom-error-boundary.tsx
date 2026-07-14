"use client";

import { unstable_catchError as catchError, type ErrorInfo } from "next/error";

function ErrorFallback(
  props: { title: string },
  { error, unstable_retry }: ErrorInfo,
) {
  return (
    <section className="py-20 sm:py-24 bg-gray-50">
      <div className="flex flex-col items-center justify-center text-sm h-[360px]">
        <h2>{props.title}</h2>
        <p>{error.message}</p>
        <button onClick={() => unstable_retry()}>Try again</button>
      </div>
    </section>
  );
}

export default catchError(ErrorFallback);
