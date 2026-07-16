"use client";
import CustomInput from "@/components/ui/custom-input";
import { useState, useRef, useEffect } from "react";

const countryCodes = [
  { code: "+20", flag: "🇪🇬", name: "Egypt", sample: "10xxxxxxxx" },
  { code: "+1", flag: "🇺🇸", name: "United States", sample: "123-456-7890" },
  { code: "+44", flag: "🇬🇧", name: "United Kingdom", sample: "7400-123456" },
  { code: "+91", flag: "🇮🇳", name: "India", sample: "98765-43210" },
  { code: "+86", flag: "🇨🇳", name: "China", sample: "138-0000-0000" },
  { code: "+61", flag: "🇦🇺", name: "Australia", sample: "412-345-678" },
  { code: "+81", flag: "🇯🇵", name: "Japan", sample: "90-1234-5678" },
  { code: "+49", flag: "🇩🇪", name: "Germany", sample: "151-12345678" },
  { code: "+33", flag: "🇫🇷", name: "France", sample: "6-12-34-56-78" },
  { code: "+39", flag: "🇮🇹", name: "Italy", sample: "312-345-6789" },
  { code: "+34", flag: "🇪🇸", name: "Spain", sample: "612-345-678" },
  { code: "+55", flag: "🇧🇷", name: "Brazil", sample: "11-91234-5678" },
  { code: "+52", flag: "🇲🇽", name: "Mexico", sample: "55-1234-5678" },
  { code: "+82", flag: "🇰🇷", name: "South Korea", sample: "10-1234-5678" },
  { code: "+971", flag: "🇦🇪", name: "UAE", sample: "50-123-4567" },
  { code: "+92", flag: "🇵🇰", name: "Pakistan", sample: "312-1234567" },
  { code: "+234", flag: "🇳🇬", name: "Nigeria", sample: "701-234-5678" },
  { code: "+254", flag: "🇰🇪", name: "Kenya", sample: "712-345-678" },
  { code: "+27", flag: "🇿🇦", name: "South Africa", sample: "82-123-4567" },
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
  const [phoneNumber, setPhoneNumber] = useState(defaultValue);
  const [isOpen, setIsOpen] = useState(false);
  // const [isFocused, setIsFocused] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  // useEffect(() => {
  //   const handleClickOutside = (event: MouseEvent) => {
  //     if (
  //       dropdownRef.current &&
  //       !dropdownRef.current.contains(event.target as Node)
  //     ) {
  //       setIsOpen(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => document.removeEventListener("mousedown", handleClickOutside);
  // }, []);

  const formatPhoneNumber = (value: string) => {
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

  const handlePhoneChange = (value: string) => {
    console.log(value);
    const formatted = formatPhoneNumber(value);
    setPhoneNumber(formatted);
    if (onChange) {
      onChange(selectedCountry.code + value);
    }
  };

  const handleCountrySelect = (country: (typeof countryCodes)[0]) => {
    setSelectedCountry(country);
    setIsOpen(false);
    if (onChange) {
      onChange(country.code + phoneNumber);
    }
  };

  const getPlaceholder = () => {
    return selectedCountry.sample || "Enter phone number";
  };

  return (
    <div className="flex gap-2">
      {/* Country Code Dropdown */}
      <div className="relative">
        {/*ref={dropdownRef}*/}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`
              flex items-center justify-center gap-1.5 h-11 px-3 min-w-[90px]
              text-sm text-slate-900
              bg-white border rounded-xl
              transition-all duration-200
              hover:border-slate-400
              focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary
              ${isOpen ? "border-primary ring-2 ring-primary/20" : "border-slate-300"}
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
          <div className="absolute left-0 top-full mt-1.5 w-64 max-h-60 overflow-y-auto bg-white border border-slate-200 rounded-xl shadow-lg z-50 animate-fade-in">
            {/* <div className="sticky top-0 bg-white p-2 border-b border-slate-100">
              <input
                type="text"
                placeholder="Search country..."
                className="w-full px-3 py-1.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                onChange={(e) => {
                  // Filter functionality can be added here
                }}
              />
            </div> */}
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
                          ? "bg-primary/10 text-primary font-medium"
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
                      width={18}
                      height={18}
                      style={{
                        filter:
                          "invert(96%) sepia(42%) saturate(7083%) hue-rotate(337deg) brightness(98%) contrast(98%)",
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
          type="tel"
          id="phone"
          name="Phone"
          placeholder={getPlaceholder()}
          defaultValue={phoneNumber}
          onChange={handlePhoneChange}
          required={required}
          // inputMode={numbersOnly ? "numeric" : undefined}
          className={`
              w-full h-11 px-4 pr-10
              text-sm text-slate-900
              bg-white border rounded-xl
              placeholder:text-slate-400
              transition-all duration-200
              hover:border-slate-400
              focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary
          
              ${error ? "border-red-500 focus:ring-red-500/20" : ""}
            `}
          //    ${isFocused ? "border-primary ring-2 ring-primary/20" : "border-slate-300"}
        />
        {/* {phoneNumber && (
          <button
            type="button"
            onClick={() => {
              setPhoneNumber("");
              if (onChange) onChange(selectedCountry.code + "");
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )} */}
      </div>

      {/* Error Message
      {error && (
        <p className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {error}
        </p>
      )} */}
    </div>
  );
}
