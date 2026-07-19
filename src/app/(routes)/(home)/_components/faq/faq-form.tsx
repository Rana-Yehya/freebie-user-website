"use client";
import CustomButton from "@/components/ui/custom-button";
import { useState } from "react";
import PhoneNumberInput from "../../../(auth)/_components/phone-number-input";
import { useRouter } from "next/navigation";
import CustomInput from "@/components/ui/custom-input";
import CustomTextarea from "@/components/ui/custom-textarea";
import { Info } from "../../../../../types/info";
import SuccessAlert from "@/components/shared/alerts/success-alert";
import ErrorAlert from "@/components/shared/alerts/error.alert";

export default function FAQForm() {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    // Basic validation
    if (!name.trim()) {
      setError("Please enter your name");
      setLoading(false);
      return;
    }
    if (!email.trim()) {
      setError("Please enter your email address");
      setLoading(false);
      return;
    }
    if (!phone.trim()) {
      setError("Please enter your phone number");
      setLoading(false);
      return;
    }
    if (!description.trim()) {
      setError("Please enter your question");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name,
          phone: phone,
          email: email,
          message: description,
          slug: "question",
        }),
      });
      const data: Info = await response.json();

      if (!data.isSuccess) {
        throw new Error(
          data.message || "Something went wrong. Please try again.",
        );
      } else {
        setSuccess(data.message ?? "We'll get back to you within 24 hours.");
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
    <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="mb-8">
        <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
          Still have questions?
        </h3>
        <p className="text-sm text-slate-500">
          Fill out the form below and we'll get back to you within 24 hours.
        </p>
      </div>

      {/* Success Message */}
      <SuccessAlert success={success} />

      {/* Error Message */}
      <ErrorAlert error={error} />

      <form onSubmit={handleSubmit} className="space-y-5">
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
            onChange={(value) => setName(value)}
            className="h-11 px-4"
            error={error && !name.trim() ? "Name is required" : undefined}
          />
        </div>

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
            onChange={(value) => setEmail(value)}
            placeholder="you@example.com"
            className="h-11 px-4"
            error={error && !email.trim() ? "Email is required" : undefined}
          />
        </div>

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
          />
        </div>

        <div>
          <label
            htmlFor="question"
            className="text-slate-700 text-sm font-medium mb-1.5 block"
          >
            Your Question <span className="text-red-500">*</span>
          </label>
          <CustomTextarea
            id="question"
            required={true}
            rows={4}
            placeholder="How can we help you?"
            onChange={(value) => setDescription(value)}
            error={
              error && !description.trim() ? "Question is required" : undefined
            }
          />
        </div>

        <CustomButton
          type="submit"
          disabled={loading}
          onClick={() => {}}
          className={`w-full text-white font-semibold py-3 rounded-xl transition-all duration-300 ${
            loading
              ? "bg-primary/70 cursor-not-allowed"
              : "bg-primary hover:bg-honey hover:text-white"
          }`}
          title={loading ? "Submitting..." : "Send Message"}
        />
      </form>
    </div>
  );
}
