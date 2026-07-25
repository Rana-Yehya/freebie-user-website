import { Dispatch, SetStateAction } from "react";
import { CountryItem } from "../../../../types/country";

export default function ClientCountry({
  countries,
  countryId,
  setIsCountryDropdownOpen,
  isCountryDropdownOpen,
  formErrors,
  getSelectedCountryName,
  loadingCountries,
  handleCountrySelect,
}: {
  countries: CountryItem[];
  handleCountrySelect: (countryId: string) => void;
  countryId?: string;
  getSelectedCountryName: () => string;
  loadingCountries: boolean;
  setIsCountryDropdownOpen: () => void;
  formErrors: Record<string, string>;
  isCountryDropdownOpen: boolean;
}) {
  return (
    <div>
      <label
        htmlFor="country"
        className="text-slate-700 text-sm font-medium mb-1.5 block"
      >
        Country <span className="text-red-500">*</span>
      </label>
      <div className="relative">
        <button
          type="button"
          onClick={setIsCountryDropdownOpen}
          className={`w-full h-11 px-4 text-sm text-left text-slate-900 bg-white border rounded-xl flex items-center justify-between transition-all duration-200 ${
            formErrors.countryId
              ? "border-red-500 focus:ring-red-500/20"
              : "border-slate-300 hover:border-slate-400"
          } focus:outline-none focus:ring-2 focus:ring-primary/20`}
        >
          <span className={countryId ? "text-slate-900" : "text-slate-400"}>
            {loadingCountries ? "Loading..." : getSelectedCountryName()}
          </span>
          {/* <svg
            className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
              isCountryDropdownOpen ? "rotate-180" : ""
            }`}
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
          </svg> */}
          <img
            src="/chevron-down.svg"
            width={12}
            height={12}
            className={`text-slate-400 transition-transform duration-200 ${
              isCountryDropdownOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {isCountryDropdownOpen && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-slate-200 rounded-xl shadow-lg max-h-48 overflow-y-auto">
            {countries.length === 0 ? (
              <div className="px-4 py-3 text-sm text-slate-500">
                {loadingCountries
                  ? "Loading countries..."
                  : "No countries found"}
              </div>
            ) : (
              countries.map((country) => (
                <button
                  key={country.id}
                  type="button"
                  onClick={() => handleCountrySelect(country.id ?? "")}
                  className={`w-full px-4 py-2.5 text-sm text-left hover:bg-slate-50 transition-colors ${
                    countryId === country.id
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-slate-700"
                  }`}
                >
                  {country.name?.defaultName || country.name}
                </button>
              ))
            )}
          </div>
        )}
      </div>
      {formErrors.countryId && (
        <p className="mt-1 text-sm text-red-500">{formErrors.countryId}</p>
      )}
    </div>
  );
}
