export default function HeartButton() {
  return (
    <button
      data-motion="button"
      type="button"
      className="w-12 h-12 flex items-center justify-center rounded-full border border-honey hover:bg-slate-50 transition-colors"
      aria-label="Wishlist"
      style={{
        opacity: 1,
        transform: "translateY(0px)",
        filter: "blur(0px)",
      }}
    >
      <img src="/heart.svg" width={24} height={24} />
    </button>
  );
}
