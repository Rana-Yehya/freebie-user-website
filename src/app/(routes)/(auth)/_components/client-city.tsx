import { Dispatch, SetStateAction } from "react";
import { CountryItem } from "../../../../types/country";
import { CityItem } from "../../../../types/city";

export default function ClientCity({
  cities,
  countryId,
  cityId,
  isCityDropdownOpen,
  formErrors,
  getSelectedCityName,
  setIsCityDropdownOpen,
  loadingCities,
  handleCitySelect,
}: {
  cities: CityItem[];
  handleCitySelect: (cityId: string) => void;
  countryId?: string;
  cityId?: string;
  getSelectedCityName: () => string;
  loadingCities: boolean;
  setIsCityDropdownOpen: () => void;
  formErrors: Record<string, string>;
  isCityDropdownOpen: boolean;
}) {
  return (
    <div>
      <label
        htmlFor="city"
        className="text-slate-700 text-sm font-medium mb-1.5 block"
      >
        City <span className="text-red-500">*</span>
      </label>
      <div className="relative">
        <button
          type="button"
          onClick={setIsCityDropdownOpen}
          disabled={!countryId || loadingCities}
          className={`w-full h-11 px-4 text-sm text-left text-slate-900 bg-white border rounded-xl flex items-center justify-between transition-all duration-200 ${
            !countryId || loadingCities
              ? "bg-slate-50 cursor-not-allowed"
              : "hover:border-slate-400"
          } ${
            formErrors.cityId
              ? "border-red-500 focus:ring-red-500/20"
              : "border-slate-300"
          } focus:outline-none focus:ring-2 focus:ring-primary/20`}
        >
          {loadingCities ? (
            <span className={cityId ? "text-slate-900" : "text-slate-400"}>
              "Loading cities..."
            </span>
          ) : (
            <span className={cityId ? "text-slate-900" : "text-slate-400"}>
              {getSelectedCityName()}
            </span>
          )}
          <img
            src="/chevron-down.svg"
            width={12}
            height={12}
            className={`text-slate-400 transition-transform duration-200 ${
              isCityDropdownOpen ? "rotate-180" : ""
            }`}
          />
          {/* <svg
            className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
              isCityDropdownOpen ? "rotate-180" : ""
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
        </button>

        {isCityDropdownOpen && !loadingCities && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-slate-200 rounded-xl shadow-lg max-h-48 overflow-y-auto">
            {cities.length === 0 ? (
              <div className="px-4 py-3 text-sm text-slate-500">
                {countryId
                  ? "No cities found"
                  : "Please select a country first"}
              </div>
            ) : (
              cities.map((city) => (
                <button
                  key={city.id}
                  type="button"
                  onClick={() => handleCitySelect(city.id ?? "")}
                  className={`w-full px-4 py-2.5 text-sm text-left hover:bg-slate-50 transition-colors ${
                    cityId === city.id
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-slate-700"
                  }`}
                >
                  {city.name?.defaultName || ""}
                </button>
              ))
            )}
          </div>
        )}
      </div>
      {formErrors.cityId && (
        <p className="mt-1 text-sm text-red-500">{formErrors.cityId}</p>
      )}
    </div>
  );
}
