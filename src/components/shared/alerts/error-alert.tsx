"use client";

interface ErrorAlertProps {
  error: string | null;
  redirectText?: string;
  isRedirecting?: boolean;
  title?: string;
}

export default function ErrorAlert({
  error,
  redirectText = "Redirecting...",
  isRedirecting = false,
  title = "Error!",
}: ErrorAlertProps) {
  if (!error) return null;

  return (
    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
      {/* Error Icon */}
      <div className="flex-shrink-0 mt-0.5">
        <img
          src="/exclamation-circle.svg"
          style={{
            filter:
              "invert(31%) sepia(18%) saturate(3852%) hue-rotate(326deg) brightness(113%) contrast(111%)",
          }}
        />
      </div>

      <div className="flex-1">
        <p className="text-sm font-medium text-red-800">{title}</p>
        <p className="text-sm text-red-700 mt-0.5">{error}</p>

        {isRedirecting && redirectText && (
          <div className="mt-2 flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-red-600 border-t-transparent rounded-full animate-spin" />
            <p className="text-xs text-red-600">{redirectText}</p>
          </div>
        )}
      </div>
    </div>
  );
}
