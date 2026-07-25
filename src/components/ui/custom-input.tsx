interface CustomInputProps {
  required?: boolean;
  className?: string;
  onChange: (value: string) => void;
  value?: string;
  placeholder?: string;
  error?: string;
  type?: string;
  name?: string;
  id: string;
  formAction?: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  min?: string | number;
  max?: string | number;
  step?: string | number;
  autoComplete?: string;
  disabled?: boolean;
  readOnly?: boolean;
}

export default function CustomInput({
  required = true,
  className = "",
  onChange,
  id = "text",
  name,
  value = "",
  placeholder,
  error,
  type = "text",
  formAction,
  onKeyDown,
  min,
  max,
  step,
  autoComplete,
  disabled = false,
  readOnly = false,
}: CustomInputProps) {
  // Determine if the input has a value for styling
  const hasValue = value && value.length > 0;

  return (
    <div className="relative w-full">
      <input
        id={id}
        formAction={formAction}
        name={name || id}
        data-motion="input"
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        min={min}
        max={max}
        step={step}
        autoComplete={autoComplete}
        disabled={disabled}
        readOnly={readOnly}
        className={`
          w-full h-11 px-4
          text-sm text-slate-900
          bg-white border rounded-xl
          placeholder:text-slate-400
          transition-all duration-200
          hover:border-slate-400
          focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary
          ${disabled ? "bg-slate-50 cursor-not-allowed opacity-70" : ""}
          ${readOnly ? "bg-slate-50 cursor-default" : ""}
          ${error ? "border-red-500 focus:ring-red-500/20" : "border-slate-300"}
          ${className}
        `}
        style={{
          opacity: 1,
          transform: "translateY(0px)",
          filter: "blur(0px)",
        }}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
      />

      {/* Error message */}
      {error && (
        <p id={`${id}-error`} className="mt-1 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}
