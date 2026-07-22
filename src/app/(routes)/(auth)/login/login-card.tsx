"use client";
import Link from "next/link";
import CustomButton from "@/components/ui/custom-button";
import { useState } from "react";
import { Info } from "../../../../types/info";
import { useRouter, useSearchParams } from "next/navigation";
import ErrorAlert from "@/components/shared/alerts/error-alert";
import SuccessAlert from "@/components/shared/alerts/success-alert";
import CustomInput from "@/components/ui/custom-input";

export default function LoginCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get("redirect") || "/";
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    // Basic validation
    if (!email.trim()) {
      setError("Please enter your email address");
      setLoading(false);
      return;
    }
    if (!password.trim()) {
      setError("Please enter your password");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          password: password,
          email: email,
        }),
      });
      const data: Info = await response.json();

      if (!data.isSuccess) {
        throw new Error(
          data.message || "Something went wrong. Please try again.",
        );
      } else {
        // Redirect to dashboard
        setTimeout(() => {
          router.refresh();
          router.push(decodeURIComponent(redirectUrl));
        }, 3000);
        setSuccess(data.message ?? "Logged In Successfully");
        setError(null);
      }

      // Success

      // Optionally redirect after delay
      // setTimeout(() => {
      //   router.push("/");
      // }, 3000);
    } catch (err: any) {
      setError(err.message || "Failed to send message. Please try again.");
      setSuccess(null);
    } finally {
      setLoading(false);
    }
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

        {/* Card with shadow */}
        <div className="p-6 rounded-lg bg-white border border-slate-300 shadow-lg md:p-8">
          <h1 className="text-slate-900 text-center text-3xl font-bold">
            Login
          </h1>
          {/* Success Message */}
          <SuccessAlert isRedirecting={true} success={success} />

          {/* Error Message */}
          <ErrorAlert error={error} />
          <form onSubmit={handleSubmit} className="space-y-6 mt-10">
            {/* Phone Number */}
            <div>
              <label
                htmlFor="email"
                className="text-slate-700 text-sm font-medium mb-1.5 block"
              >
                Email Address
              </label>
              <CustomInput
                id="email"
                type="email"
                required={true}
                onChange={(value) => setEmail(value)}
                placeholder="you@example.com"
                className="h-11 px-4"
                error={error && !email.trim() ? "Email is required" : undefined}
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="text-slate-700 text-sm font-medium mb-1.5 block"
              >
                Password
              </label>
              <CustomInput
                id="password"
                type="password"
                required={true}
                onChange={(value) => setPassword(value)}
                placeholder="********"
                className="h-11 px-4"
                error={
                  error && !password.trim() ? "Password is required" : undefined
                }
              />
            </div>

            <CustomButton
              type="submit"
              disabled={loading}
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
