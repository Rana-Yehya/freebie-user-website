export default function SuccessAlert({ success }: { success: string | null }) {
  return (
    success && (
      <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-start gap-3">
        <img src="/checkmark-rounded.svg" />
        <div>
          <p className="text-sm font-medium text-green-800">Success!</p>
          <p className="text-xs text-green-600 mt-0.5">{success}</p>
        </div>
      </div>
    )
  );
}
