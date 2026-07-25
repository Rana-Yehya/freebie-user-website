// components/ui/password-input.tsx
"use client";
import { useState } from "react";
import CustomInput from "./custom-input";

interface PasswordInputProps {
  id: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  error?: string;
  className?: string;
  label?: string;
  showRequirements?: boolean;
}

export default function CustomPasswordInput({
  id,
  value,
  onChange,
  placeholder = "••••••••",
  required = true,
  error,
  className = "",
  label = "Password",
  showRequirements = false,
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const toggleVisibility = () => setShowPassword(!showPassword);

  // Password strength checks
  const hasMinLength = value.length >= 6;
  const hasUpperCase = /[A-Z]/.test(value);
  const hasLowerCase = /[a-z]/.test(value);
  const hasNumber = /[0-9]/.test(value);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);

  const strengthScore = [
    hasMinLength,
    hasUpperCase,
    hasLowerCase,
    hasNumber,
    hasSpecialChar,
  ].filter(Boolean).length;

  const getStrengthText = () => {
    if (value.length === 0) return "";
    if (strengthScore <= 2) return "Weak";
    if (strengthScore <= 3) return "Medium";
    if (strengthScore <= 4) return "Strong";
    return "Very Strong";
  };

  const getStrengthColor = () => {
    if (value.length === 0) return "";
    if (strengthScore <= 2) return "text-red-500";
    if (strengthScore <= 3) return "text-yellow-500";
    if (strengthScore <= 4) return "text-green-500";
    return "text-green-600";
  };

  return (
    <div className="space-y-1.5">
      {label && (
        <label
          htmlFor={id}
          className="text-slate-700 text-sm font-medium block"
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <div className="relative">
        <CustomInput
          id={id}
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          error={error}
          className={`pr-12 ${className}`}
          autoComplete="new-password"
        />

        <button
          type="button"
          onClick={toggleVisibility}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-full p-1"
          aria-label={showPassword ? "Hide password" : "Show password"}
          tabIndex={0}
        >
          {showPassword ? (
            <img
              src="/eye-slash.svg"
              style={{
                filter:
                  "invert(31%) sepia(13%) saturate(946%) hue-rotate(176deg) brightness(96%) contrast(87%)",
              }}
            />
          ) : (
            <img
              src="/eye.svg"
              style={{
                filter:
                  "invert(31%) sepia(13%) saturate(946%) hue-rotate(176deg) brightness(96%) contrast(87%)",
              }}
            />
          )}
        </button>
      </div>

      {/* Password Requirements */}
      {showRequirements && value.length > 0 && (
        <div className="space-y-1 mt-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-500">Password strength:</span>
            <span className={`text-xs font-medium ${getStrengthColor()}`}>
              {getStrengthText()}
            </span>
          </div>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                  i <= strengthScore
                    ? i <= 2
                      ? "bg-red-400"
                      : i <= 3
                        ? "bg-yellow-400"
                        : i <= 4
                          ? "bg-green-400"
                          : "bg-green-500"
                    : "bg-slate-200"
                }`}
              />
            ))}
          </div>
          <ul className="text-xs text-slate-500 space-y-0.5 mt-1">
            <li
              className={`flex items-center gap-1.5 ${hasMinLength ? "text-green-600" : ""}`}
            >
              <span>{hasMinLength ? "✓" : "○"}</span>
              At least 6 characters
            </li>
            <li
              className={`flex items-center gap-1.5 ${hasUpperCase ? "text-green-600" : ""}`}
            >
              <span>{hasUpperCase ? "✓" : "○"}</span>
              One uppercase letter
            </li>
            <li
              className={`flex items-center gap-1.5 ${hasLowerCase ? "text-green-600" : ""}`}
            >
              <span>{hasLowerCase ? "✓" : "○"}</span>
              One lowercase letter
            </li>
            <li
              className={`flex items-center gap-1.5 ${hasNumber ? "text-green-600" : ""}`}
            >
              <span>{hasNumber ? "✓" : "○"}</span>
              One number
            </li>
            <li
              className={`flex items-center gap-1.5 ${hasSpecialChar ? "text-green-600" : ""}`}
            >
              <span>{hasSpecialChar ? "✓" : "○"}</span>
              One special character (!@#$%^&*)
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
