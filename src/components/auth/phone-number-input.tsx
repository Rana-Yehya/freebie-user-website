"use client";
import { useState } from "react";
const countryCodes = [
  { code: "+20", flag: "🇪🇬", name: "EG", sample: "1xxxxxxxxx" },
  { code: "+1", flag: "🇺🇸", name: "US", sample: "1xxxxxxxxx" },
  { code: "+44", flag: "🇬🇧", name: "UK", sample: "1xxxxxxxxx" },
  { code: "+91", flag: "🇮🇳", name: "IN", sample: "1xxxxxxxxx" },
  { code: "+86", flag: "🇨🇳", name: "CN", sample: "1xxxxxxxxx" },
];
export default function PhoneNumberInput() {
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isOpen, setIsOpen] = useState(false);

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

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhoneNumber(formatted);
  };

  return (
    <div className="flex gap-2">
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1.5 px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white border border-slate-300 hover:border-slate-400 transition-colors focus:outline-2 focus:-outline-offset-2 focus:outline-primary h-[42px]"
        >
          <span className="text-base">{selectedCountry.flag}</span>
          <span>{selectedCountry.code}</span>
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute left-0 top-full mt-1 w-56 max-h-48 overflow-y-auto bg-white border border-slate-200 rounded-lg shadow-lg z-50">
            {countryCodes.map((country) => (
              <button
                key={`${country.code}-${country.name}`}
                type="button"
                onClick={() => {
                  setSelectedCountry(country);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                  selectedCountry.code === country.code
                    ? "bg-blue-50 text-primary"
                    : "text-slate-700"
                }`}
              >
                <span>{country.flag}</span>
                <span>{country.code}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      <input
        type="tel"
        id="phone"
        name="phone"
        placeholder={selectedCountry.sample}
        value={phoneNumber}
        onChange={handlePhoneChange}
        required
        className="flex-1 px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
      />
    </div>
  );
}
