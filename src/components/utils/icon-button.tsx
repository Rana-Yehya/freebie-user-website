import CustomIcon from "./custom-icon";

interface IconButtonProps {
  icon: string;
  className?: string;
  filter?: string;
  onClick?: () => void;
}

export default function IconButton({
  icon,
  className = "",
  filter,
  onClick,
}: IconButtonProps) {
  return (
    <button
      data-motion="button"
      type="button"
      onClick={onClick}
      className={`w-12 h-12 flex items-center justify-center rounded-full border border-slate-300 dark:border-neutral-700 hover:bg-slate-50 dark:hover:bg-neutral-900 transition-colors ${className}`}
      aria-label="Decrease"
      style={{
        opacity: 1,
        transform: "translateY(0px)",
        filter: "blur(0px)",
      }}
    >
      <CustomIcon
        // alt="minus"
        icon={icon}
        width={24}
        height={24}
        // className="group transition-opacity duration-300"
        filter={filter}
      />
    </button>
  );
}
