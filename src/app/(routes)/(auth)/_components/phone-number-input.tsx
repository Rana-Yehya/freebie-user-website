"use client";
import CustomInput from "@/components/ui/custom-input";
import { useState, useRef, useEffect } from "react";

const countryCodes = [
  { code: "+20", flag: "🇪🇬", name: "Egypt", sample: "10xxxxxxxx" },
  { code: "+1", flag: "🇺🇸", name: "United States", sample: "1234567890" },
  { code: "+44", flag: "🇬🇧", name: "United Kingdom", sample: "7400123456" },
  { code: "+91", flag: "🇮🇳", name: "India", sample: "9876543210" },
  { code: "+86", flag: "🇨🇳", name: "China", sample: "13800000000" },
  { code: "+61", flag: "🇦🇺", name: "Australia", sample: "412345678" },
  { code: "+81", flag: "🇯🇵", name: "Japan", sample: "9012345678" },
  { code: "+49", flag: "🇩🇪", name: "Germany", sample: "15112345678" },
  { code: "+33", flag: "🇫🇷", name: "France", sample: "612345678" },
  { code: "+39", flag: "🇮🇹", name: "Italy", sample: "3123456789" },
  { code: "+34", flag: "🇪🇸", name: "Spain", sample: "612345678" },
  { code: "+55", flag: "🇧🇷", name: "Brazil", sample: "11912345678" },
  { code: "+52", flag: "🇲🇽", name: "Mexico", sample: "5512345678" },
  { code: "+82", flag: "🇰🇷", name: "South Korea", sample: "1012345678" },
  { code: "+971", flag: "🇦🇪", name: "UAE", sample: "501234567" },
  { code: "+92", flag: "🇵🇰", name: "Pakistan", sample: "3121234567" },
  { code: "+234", flag: "🇳🇬", name: "Nigeria", sample: "7012345678" },
  { code: "+254", flag: "🇰🇪", name: "Kenya", sample: "712345678" },
  { code: "+27", flag: "🇿🇦", name: "South Africa", sample: "821234567" },
];

interface PhoneNumberInputProps {
  required?: boolean;
  className?: string;
  onChange?: (phoneNumber: string) => void;
  defaultValue?: string;
  label?: string;
  error?: string;
}

export default function PhoneNumberInput({
  required = true,
  className = "",
  onChange,
  defaultValue = "",
  label = "Phone Number",
  error,
}: PhoneNumberInputProps) {
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);
  const [displayValue, setDisplayValue] = useState(defaultValue);
  const [rawValue, setRawValue] = useState(defaultValue.replace(/\D/g, ""));
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Format phone number for display (with parentheses and dashes)
  const formatForDisplay = (value: string) => {
    const cleaned = value.replace(/\D/g, "");
    const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
    if (match) {
      const parts = [match[1], match[2], match[3]].filter((p) => p);
      if (parts.length === 0) return "";
      if (parts.length === 1) return parts[0];
      if (parts.length === 2) return `(${parts[0]}) ${parts[1]}`;
      return `(${parts[0]}) ${parts[1]}-${parts[2]}`;
    }
    return value;
  };

  // Get raw phone number (digits only)
  const getRawPhoneNumber = (value: string) => {
    return value.replace(/\D/g, "");
  };

  const handlePhoneChange = (value: string) => {
    // Update raw value (digits only)
    const raw = getRawPhoneNumber(value);
    setRawValue(raw);

    // Update display value (formatted)
    const formatted = formatForDisplay(value);
    setDisplayValue(formatted);

    if (onChange) {
      // Return full phone number with country code (clean, no formatting)
      onChange(selectedCountry.code + raw);
    }
  };

  const handleCountrySelect = (country: (typeof countryCodes)[0]) => {
    setSelectedCountry(country);
    setIsOpen(false);
    if (onChange) {
      onChange(country.code + rawValue);
    }
  };

  const getPlaceholder = () => {
    return selectedCountry.sample || "Enter phone number";
  };

  return (
    <div className={`flex gap-2 ${className}`}>
      {/* Country Code Dropdown */}
      <div className="relative" ref={dropdownRef}>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`
            flex items-center justify-center gap-1.5 h-11 px-3 min-w-[90px]
            text-sm text-slate-900
            bg-white border rounded-xl
            transition-all duration-200
            hover:border-slate-400
            focus:outline-none focus:ring-2 focus:ring-honey/20 focus:border-honey
            ${isOpen ? "border-honey ring-2 ring-honey/20" : "border-slate-300"}
            ${error ? "border-red-500 focus:ring-red-500/20" : ""}
          `}
        >
          <span className="text-lg leading-none">{selectedCountry.flag}</span>
          <span className="font-medium">{selectedCountry.code}</span>
          <img
            src="/chevron-down.svg"
            width={12}
            height={12}
            className={`text-slate-400 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute left-0 top-full mt-1.5 w-64 max-h-60 overflow-y-auto bg-white border border-slate-200 rounded-xl shadow-lg z-50">
            <div className="p-1">
              {countryCodes.map((country) => (
                <button
                  key={`${country.code}-${country.name}`}
                  type="button"
                  onClick={() => handleCountrySelect(country)}
                  className={`
                    w-full flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg
                    transition-all duration-150
                    hover:bg-slate-50
                    ${
                      selectedCountry.code === country.code
                        ? "bg-honey/10 text-honey font-medium"
                        : "text-slate-700 hover:text-slate-900"
                    }
                  `}
                >
                  <span className="text-xl leading-none">{country.flag}</span>
                  <span className="flex-1 text-left">{country.name}</span>
                  <span className="text-xs text-slate-400 font-mono">
                    {country.code}
                  </span>
                  {selectedCountry.code === country.code && (
                    <img
                      src="/checkmark.svg"
                      style={{
                        filter:
                          "invert(59%) sepia(94%) saturate(1359%) hue-rotate(2deg) brightness(107%) contrast(92%)",
                      }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Phone Number Input */}
      <div className="flex-1 relative">
        <CustomInput
          type="text"
          id="phone"
          name="Phone"
          placeholder={getPlaceholder()}
          value={displayValue}
          onChange={handlePhoneChange}
          required={required}
          className={`
            w-full h-11 px-4
            text-sm text-slate-900
            bg-white border rounded-xl
            placeholder:text-slate-400
            transition-all duration-200
            hover:border-slate-400
            focus:outline-none focus:ring-2 focus:ring-honey/20 focus:border-honey
            ${error ? "border-red-500 focus:ring-red-500/20" : "border-slate-300"}
          `}
        />
        {displayValue && (
          <button
            type="button"
            onClick={() => {
              setDisplayValue("");
              setRawValue("");
              if (onChange) onChange(selectedCountry.code + "");
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
          >
            <img
              src="/close.svg"
              style={{
                filter:
                  "invert(31%) sepia(13%) saturate(946%) hue-rotate(176deg) brightness(96%) contrast(87%)",
              }}
            />
          </button>
        )}
      </div>
    </div>
  );
}
