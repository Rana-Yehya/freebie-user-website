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
}
export default function CustomInput({
  required = true,
  className = "",
  onChange,
  id = "text",
  name,
  defaultValue = "",
  placeholder,
  error,
  type,
}: CustomInputProps) {
  return (
    <input
      id={id}
      name={name}
      data-motion="input"
      type={type}
      required={required}
      className={`
            w-full h-11 px-4 pr-10
            text-sm text-slate-900
            bg-white border rounded-xl
            placeholder:text-slate-400
            transition-all duration-200
            hover:border-slate-400
            focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary
            ${error ? "border-red-500 focus:ring-red-500/20" : ""} ${className}
        `}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      style={{
        opacity: 1,
        transform: "translateY(0px)",
        filter: "blur(0px)",
      }}
    />
  );
}
