interface CustomInputProps {
  required?: boolean;
  className?: string;
  onChange: (value: string) => void;
  defaultValue?: string;
  placeholder?: string;
  error?: string;
  type?: string;
  name?: string;
  id: string;
  rows?: number;
}

export default function CustomTextarea({
  required = true,
  className = "",
  onChange,
  id = "text",
  name,
  defaultValue = "",
  placeholder,
  error,
  rows = 4,
}: CustomInputProps) {
  return (
    <textarea
      id={id}
      name={name}
      data-motion="input"
      required={required}
      rows={rows}
      className={`
        w-full px-4 py-3
        text-sm text-slate-900
        bg-white border rounded-xl
        placeholder:text-slate-400
        transition-all duration-200
        hover:border-slate-400
        focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary
        resize-y min-h-[100px]
        ${error ? "border-red-500 focus:ring-red-500/20" : ""} 
        ${className}
      `}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      defaultValue={defaultValue}
      style={{
        opacity: 1,
        transform: "translateY(0px)",
        filter: "blur(0px)",
      }}
    />
  );
}
