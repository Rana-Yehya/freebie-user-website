export default function ErrorAlert({ error }: { error: string | null }) {
  return (
    error && (
      <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
        <img
          src="/exclamation-circle.svg"
          style={{
            filter:
              "invert(31%) sepia(18%) saturate(3852%) hue-rotate(326deg) brightness(113%) contrast(111%)",
          }}
        />

        <p className="text-sm text-red-600">{error}</p>
      </div>
    )
  );
}
