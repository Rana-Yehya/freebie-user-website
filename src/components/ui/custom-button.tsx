interface CustomButtonProps {
  type?: "button" | "submit" | "reset";
  title?: string;
  children?: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  className?: string; // Add a new prop for additional class names
}

export default function CustomButton({
  title,
  onClick,
  type,
  children,
  disabled = false,
  className = "bg-white",
}: CustomButtonProps) {
  return (
    <button
      data-motion="button"
      type={type}
      // href={href}
      disabled={disabled}
      onClick={onClick}
      title={title}
      className={`items-center justify-center gap-2 px-6 py-3 whitespace-nowrap text-sm font-medium transition-all focus:shadow-[0_0px_0px_2px_rgba(15,23,42,0.25),0_2px_10px_0px_rgba(0,0,0,0.05)] shadow-[0_2px_10px_0px_rgba(0,0,0,0.05)] text-neutral-700 disabled:bg-slate-50/30 disabled:text-slate-900/20 px-3 py-2 rounded-full ${
        className
      }`}
    >
      {children ?? title}
    </button>
  );
}
