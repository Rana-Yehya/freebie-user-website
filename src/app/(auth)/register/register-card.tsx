"use client";
import Link from "next/link";
import CustomButton from "@/components/utils/custom-button";
import { Metadata } from "next";
import PhoneNumberInput from "@/components/auth/phone-number-input";

export default function RegisterCard() {
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

        {/* Card with shadow */}
        <div className="p-6 rounded-lg bg-white border border-slate-300 shadow-lg md:p-8">
          <h1 className="text-slate-900 text-center text-3xl font-bold">
            Register
          </h1>

          <form className="space-y-6 mt-10">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 text-slate-900 font-medium text-sm inline-block"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john@readymadeui.com"
                required
                className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor="phone"
                className="mb-2 text-slate-900 font-medium text-sm inline-block"
              >
                Phone Number
              </label>
              <PhoneNumberInput />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 text-slate-900 font-medium text-sm inline-block"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="••••••••"
                required
                className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
              />
            </div>

            {/* Terms */}
            <div className="flex items-start flex-wrap gap-2">
              <label className="flex items-center group has-[input:checked]:text-slate-900">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  required
                  className="sr-only"
                />
                <span
                  className="flex h-4 w-4 shrink-0 items-center justify-center rounded outline-1 outline-slate-300 bg-white group-has-[input:checked]:bg-primary group-has-[input:checked]:outline-primary group-focus-within:outline-2 group-focus-within:outline-primary"
                  aria-hidden="true"
                >
                  <svg
                    className="size-3 text-white opacity-0 group-has-[input:checked]:opacity-100"
                    viewBox="0 0 12 10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M1 5l3 3 7-7" />
                  </svg>
                </span>
                <span className="ml-3 text-sm text-slate-700">
                  I agree to the Terms & Conditions
                </span>
              </label>
            </div>

            <CustomButton
              type="submit"
              title="Register"
              onClick={() => {}}
              className="w-full py-2 px-3.5 bg-primary hover:border-neutral-200 hover:bg-honey hover:text-white text-sm rounded-md font-semibold cursor-pointer tracking-wide transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
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
