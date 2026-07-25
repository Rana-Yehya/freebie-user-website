"use client";
import { useState, useEffect } from "react";

interface TermsAcceptProps {
  onCheckedChange?: (isChecked: boolean) => void;
  defaultChecked?: boolean;
  label?: string;
  required?: boolean;
  error?: string;
}

export default function TermsAccept({
  onCheckedChange,
  defaultChecked = false,
  label = "I agree to the Terms & Conditions",
  required = true,
  error,
}: TermsAcceptProps) {
  const [isChecked, setIsChecked] = useState(defaultChecked);
  const [isTouched, setIsTouched] = useState(false);

  useEffect(() => {
    if (onCheckedChange) {
      onCheckedChange(isChecked);
    }
  }, [isChecked, onCheckedChange]);

  const handleChange = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    if (!isTouched) {
      setIsTouched(true);
    }
  };

  const showError = isTouched && required && !isChecked && error;

  return (
    <div className="flex flex-col gap-1 pt-2">
      <label className="flex items-start gap-2.5 group cursor-pointer">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
          required={required}
          className="sr-only"
          aria-invalid={!!showError}
        />
        <span
          className={`
            flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2 transition-all duration-200 mt-0.5
            ${
              isChecked
                ? "bg-primary border-primary"
                : "bg-white border-slate-300 group-hover:border-primary"
            }
            ${showError ? "border-red-500 ring-2 ring-red-500/20" : ""}
            group-focus-within:ring-2 group-focus-within:ring-primary/20
          `}
          aria-hidden="true"
        >
          {isChecked && (
            <img
              src="/checkmark.svg"
              className="w-12 h-12"
              style={{
                filter:
                  "invert(100%) sepia(0%) saturate(0%) hue-rotate(223deg) brightness(101%) contrast(101%)",
              }}
            />
          )}
        </span>
        <span className="text-sm text-slate-700 leading-relaxed">
          {label}
          {required && <span className="text-red-500 ml-0.5">*</span>}
        </span>
      </label>

      {showError && <p className="text-sm text-red-500 ml-7">{error}</p>}
    </div>
  );
}
