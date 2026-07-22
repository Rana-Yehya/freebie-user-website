"use client";

interface SuccessAlertProps {
  success: string | null;
  redirectText?: string;
  isRedirecting?: boolean;
}

export default function SuccessAlert({
  success,
  redirectText = "Redirecting...",
  isRedirecting = false,
}: SuccessAlertProps) {
  if (!success) return null;

  return (
    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-start gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
      {/* Success Icon */}
      <div className="flex-shrink-0 mt-0.5">
        <img
          src="/check-circle.svg"
          style={{
            filter:
              "invert(44%) sepia(12%) saturate(2610%) hue-rotate(73deg) brightness(85%) contrast(84%)",
          }}
        />
      </div>

      <div className="flex-1">
        <p className="text-sm font-medium text-green-800">Success!</p>
        <p className="text-sm text-green-700 mt-0.5">{success}</p>

        {isRedirecting && redirectText && (
          <div className="mt-2 flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-green-600 border-t-transparent rounded-full animate-spin" />
            <p className="text-xs text-green-600">{redirectText}</p>
          </div>
        )}
      </div>
    </div>
  );
}
