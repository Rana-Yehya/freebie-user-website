// components/LoadingScreen.tsx
export default function Loading() {
  return (
    <section className="py-20 sm:py-24 bg-gray-50">
      <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          {/* Spinner */}
          <div className="relative">
            <div className="w-12 h-12 border-4 border-gray-200 rounded-full" />
            <div className="absolute top-0 left-0 w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          </div>

          {/* Loading Text */}
          <p className="text-slate-600 font-medium">Loading...</p>
        </div>
      </div>
    </section>
  );
}
