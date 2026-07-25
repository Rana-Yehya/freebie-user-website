"use client";
import Link from "next/link";
import CustomButton from "@/components/ui/custom-button";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import PhoneNumberInput from "./phone-number-input";
import CustomInput from "@/components/ui/custom-input";
import ErrorAlert from "@/components/shared/alerts/error-alert";
import SuccessAlert from "@/components/shared/alerts/success-alert";
import { Info } from "../../../../types/info";
import { CountryItem } from "../../../../types/country";
import ClientGender from "./client-gender";
import ClientCountry from "./client-country";
import ClientCity from "./client-city";
import TermsAccept from "./terms-accept";
import CustomPasswordInput from "@/components/ui/custom-password-input";
import { CityItem } from "../../../../types/city";
import ClientBirthDate from "./client-calender";

export default function RegisterCard() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [countryId, setCountryId] = useState("");
  const [cityId, setCityId] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  // Dropdown states
  const [countries, setCountries] = useState<CountryItem[]>([]);
  const [cities, setCities] = useState<CityItem[]>([]);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
  const [loadingCountries, setLoadingCountries] = useState(false);
  const [loadingCities, setLoadingCities] = useState(false);

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get("redirect") || "/";
  // Fetch countries on mount
  useEffect(() => {
    const fetchCountries = async () => {
      setLoadingCountries(true);
      try {
        const response = await fetch("/api/country");
        const data = await response.json();
        if (data.isSuccess) {
          setCountries(data.data || []);
        }
      } catch (error) {
        console.error("Failed to fetch countries:", error);
      } finally {
        setLoadingCountries(false);
      }
    };
    fetchCountries();
  }, []);

  // Fetch cities when country is selected
  useEffect(() => {
    if (!countryId) {
      setCities([]);
      return;
    }

    const fetchCities = async () => {
      setLoadingCities(true);
      try {
        const response = await fetch(`/api/city?countryId=${countryId}`);
        const data = await response.json();
        if (data.isSuccess) {
          setCities(data.data || []);
        }
      } catch (error) {
        console.error("Failed to fetch cities:", error);
      } finally {
        setLoadingCities(false);
      }
    };
    fetchCities();
  }, [countryId]);

  const validateForm = () => {
    const errors: Record<string, string> = {};

    if (!name.trim()) errors.name = "Please enter a name";
    if (!email.trim()) errors.email = "Please enter an email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!password.trim()) errors.password = "Please enter a password";
    else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    if (!confirmPassword.trim()) {
      errors.confirmPassword = "Please enter a confirm password";
    } else if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    if (!phone.trim()) errors.phone = "Please enter a phone number";
    if (!dateOfBirth) errors.dateOfBirth = "Date of birth is required";
    if (!gender) errors.gender = "Please select a gender";
    if (!countryId) errors.countryId = "Please select a country";
    if (!cityId) errors.cityId = "Please select a city";
    if (!termsAccepted) {
      errors.terms = "Please accept the Terms & Conditions";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    setFormErrors({});
    if (!validateForm()) {
      setLoading(false);
      return;
    }

    console.log(
      JSON.stringify({
        name,
        email,
        password,
        confirmPassword,
        phone,
        dateOfBirth,
        gender,
        cityId,
      }),
    );
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          password,
          confirmPassword,
          phone,
          dateOfBirth,
          gender,
          cityId,
        }),
      });
      const data: Info = await response.json();
      if (!data.isSuccess) {
        throw new Error(
          data.message || "Something went wrong. Please try again.",
        );
      } else {
        setSuccess(data.message ?? "Registered Successfully!");
        setError(null);
        setTimeout(() => {
          router.refresh();
          router.push(decodeURIComponent(redirectUrl));
        }, 3000);
      }
    } catch (err: any) {
      setError(err.message || "Failed to register. Please try again.");
      setSuccess(null);
    } finally {
      setLoading(false);
    }
  };

  const handleCountrySelect = (countryId: string) => {
    setCountryId(countryId);
    setCityId(""); // Reset city when country changes
    setIsCountryDropdownOpen(false);
    if (formErrors.countryId) {
      setFormErrors({ ...formErrors, countryId: "" });
    }
    if (formErrors.cityId) {
      setFormErrors({ ...formErrors, cityId: "" });
    }
  };

  const handleCitySelect = (cityId: string) => {
    setCityId(cityId);
    setIsCityDropdownOpen(false);
    if (formErrors.cityId) {
      setFormErrors({ ...formErrors, cityId: "" });
    }
  };

  const getSelectedCountryName = () => {
    const country = countries.find((c) => c.id === countryId);
    return country ? country.name?.defaultName : "Select Country";
  };

  const getSelectedCityName = () => {
    const city = cities.find((c) => c.id === cityId);
    return city ? city.name?.defaultName : "Select City";
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-md w-full">
        <Link href="/">
          <img
            src="/logo.png"
            alt="logo"
            className="w-24 min-h-24 mb-8 mx-auto block"
          />
        </Link>

        {/* Card */}
        <div className="p-6 rounded-lg bg-white border border-slate-300 shadow-lg md:p-8">
          <h1 className="text-slate-900 text-center text-3xl font-bold">
            Register
          </h1>

          <SuccessAlert success={success} isRedirecting={!!success} />
          <ErrorAlert error={error} />

          <form onSubmit={handleSubmit} className="space-y-5 mt-8">
            {/* Full Name */}
            <div>
              <label
                htmlFor="name"
                className="text-slate-700 text-sm font-medium mb-1.5 block"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <CustomInput
                id="name"
                type="text"
                required={true}
                placeholder="John Doe"
                value={name}
                onChange={(value) => setName(value)}
                className="h-11 px-4"
                error={formErrors.name}
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="text-slate-700 text-sm font-medium mb-1.5 block"
              >
                Email Address <span className="text-red-500">*</span>
              </label>
              <CustomInput
                id="email"
                type="email"
                required={true}
                value={email}
                onChange={(value) => setEmail(value)}
                placeholder="you@example.com"
                className="h-11 px-4"
                error={formErrors.email}
              />
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor="phone"
                className="text-slate-700 text-sm font-medium mb-1.5 block"
              >
                Phone Number <span className="text-red-500">*</span>
              </label>
              <PhoneNumberInput
                required={true}
                onChange={(value) => setPhone(value)}
                className="w-full"
                error={formErrors.phone}
              />
            </div>

            {/* Password */}
            <CustomPasswordInput
              id="password"
              value={password}
              onChange={setPassword}
              placeholder="••••••••"
              required={true}
              error={formErrors.password}
              label="Password"
              showRequirements={true}
            />

            {/* Confirm Password */}
            <CustomPasswordInput
              id="confirmPassword"
              value={confirmPassword}
              onChange={setConfirmPassword}
              placeholder="••••••••"
              required={true}
              error={formErrors.confirmPassword}
              label="Confirm Password"
              showRequirements={false}
            />

            {/* Date of Birth */}

            <ClientBirthDate
              dateOfBirth={dateOfBirth}
              setDateOfBirth={setDateOfBirth}
              formErrors={formErrors}
            />

            {/* Gender - Radio Buttons */}
            <ClientGender
              gender={gender}
              setGender={setGender}
              formErrors={formErrors}
              setFormErrors={setFormErrors}
            />

            {/* Country - Enhanced Select */}
            <ClientCountry
              setIsCountryDropdownOpen={() =>
                setIsCountryDropdownOpen(!isCountryDropdownOpen)
              }
              isCountryDropdownOpen={isCountryDropdownOpen}
              countries={countries}
              countryId={countryId}
              loadingCountries={loadingCountries}
              getSelectedCountryName={getSelectedCountryName}
              handleCountrySelect={handleCountrySelect}
              formErrors={formErrors}
            />

            {/* City - Enhanced Select */}
            <ClientCity
              setIsCityDropdownOpen={() =>
                setIsCityDropdownOpen(!isCityDropdownOpen)
              }
              cities={cities}
              cityId={cityId}
              loadingCities={loadingCities}
              getSelectedCityName={getSelectedCityName}
              handleCitySelect={handleCitySelect}
              formErrors={formErrors}
              countryId={countryId}
              isCityDropdownOpen={isCityDropdownOpen}
            />

            {/* Terms */}
            <TermsAccept
              onCheckedChange={setTermsAccepted}
              defaultChecked={false}
              required={true}
              error={formErrors.terms}
            />

            <CustomButton
              type="submit"
              disabled={loading}
              title={loading ? "Registering..." : "Register"}
              onClick={() => {}}
              className={`w-full py-3 px-3.5 text-sm rounded-xl font-semibold cursor-pointer tracking-wide transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                loading
                  ? "bg-primary/70 cursor-not-allowed"
                  : "bg-primary hover:bg-honey hover:text-white"
              }`}
            />

            <div className="text-slate-900 text-sm text-center">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-primary hover:underline ml-1 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              >
                Sign in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
