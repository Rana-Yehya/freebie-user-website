export default function SuccessAlert({ success }: { success: string | null }) {
  return (
    success && (
      <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-start gap-3">
        <img
          src="/check-circle.svg"
          style={{
            filter:
              "invert(44%) sepia(12%) saturate(2610%) hue-rotate(73deg) brightness(85%) contrast(84%)",
          }}
        />
        <div>
          <p className="text-sm font-medium text-green-800">Success!</p>
          <p className="text-xs text-green-600 mt-0.5">{success}</p>
        </div>
      </div>
    )
  );
}
