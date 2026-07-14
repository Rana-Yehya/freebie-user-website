"use client";
import Link from "next/link";
import CustomButton from "@/components/ui/custom-button";
import { Metadata } from "next";
import PhoneNumberInput from "@/components/auth/phone-number-input";

export default function LoginCard() {
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
            Login
          </h1>

          <form className="space-y-6 mt-10">
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

            <CustomButton
              type="submit"
              title="Login"
              onClick={() => {}}
              className="w-full py-2 px-3.5 bg-primary hover:border-neutral-200 hover:bg-honey hover:text-white text-sm rounded-md font-semibold cursor-pointer tracking-wide transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            />
            <div className="text-slate-900 text-sm text-center">
              Don't have an account?{" "}
              <Link
                href="/register"
                className="text-primary hover:underline ml-1 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              >
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
