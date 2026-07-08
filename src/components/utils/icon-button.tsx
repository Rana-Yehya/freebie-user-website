interface IconButtonProps {
  icon: string;
  className?: string;
  onRatingChange?: (rating: number) => void;
}

export default function IconButton({
  icon,
  className = "",
  onRatingChange,
}: IconButtonProps) {
  return (
    <button
      data-motion="button"
      type="button"
      className="w-12 h-12 flex items-center justify-center rounded-full border border-slate-300 dark:border-neutral-700 hover:bg-slate-50 dark:hover:bg-neutral-900 transition-colors"
      aria-label="Decrease"
      style={{
        opacity: 1,
        transform: "translateY(0px)",
        filter: "blur(0px)",
      }}
    >
      <img
        // alt="minus"
        src={icon}
        width={24}
        height={24}
        className="group transition-opacity duration-300"
        style={{
          filter:
            "invert(64%) sepia(66%) saturate(1840%) hue-rotate(2deg) brightness(105%) contrast(92%)",
        }}
      />
    </button>
  );
}
