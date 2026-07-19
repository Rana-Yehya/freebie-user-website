"use client";

import { useRef, useEffect } from "react";

interface CheckoutBoxItemProps {
  htmlFor?: string;
  id?: string;
  name?: string;
  value: string;
  checked: boolean;
  label: string;
  onChange: (value: string) => void;
  className?: string;
  indeterminate?: boolean;
}

// Custom checkbox item
export default function CheckboxItem({
  htmlFor,
  id,
  name,
  value,
  label,
  checked = false,
  onChange,
  className = "",
  indeterminate = false,
}: CheckoutBoxItemProps) {
  const checkboxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return (
    <div className="py-0.5">
      <label
        htmlFor={htmlFor || id}
        className="inline-flex items-center gap-2.5 group cursor-pointer w-full hover:bg-slate-50 px-2 py-1 rounded-md transition-colors"
      >
        <input
          ref={checkboxRef}
          type="checkbox"
          className="sr-only"
          id={id}
          name={name || id}
          value={value}
          checked={checked}
          onChange={() => {
            onChange(value);
          }}
        />
        <span
          className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors ${
            checked || indeterminate
              ? "bg-honey border-honey"
              : "bg-white border-slate-300"
          } group-focus-within:ring-2 group-focus-within:ring-honey`}
          aria-hidden="true"
        >
          {checked && (
            <svg
              className="w-3 h-3 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 12 10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5l3 3 7-7"
              />
            </svg>
          )}
          {indeterminate && !checked && (
            <svg
              className="w-3 h-3 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 12 2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h10"
              />
            </svg>
          )}
        </span>
        <span className={`text-sm text-slate-700 capitalize ${className}`}>
          {label}
        </span>
      </label>
    </div>
  );
}
