"use client";
import { useState } from "react";
interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "How do I get started?",
    answer:
      "Sign up for a free account using your email or social login. Complete the quick onboarding process and you'll be ready to explore all features within minutes.",
  },
  {
    id: 2,
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, Apple Pay, and Google Pay. Enterprise customers can also pay via invoice.",
  },
  {
    id: 3,
    question: "Can I cancel my subscription?",
    answer:
      "Yes, you can cancel anytime from your account settings. Your access continues until the end of your billing period.",
  },
  {
    id: 4,
    question: "Is there a free trial?",
    answer:
      "Absolutely! Start with a 14-day free trial with full access to all features. No credit card required.",
  },
  {
    id: 5,
    question: "Is my data secure?",
    answer:
      "Absolutely. We use AES-256 encryption, SOC 2 compliance, and regular security audits. Your data is backed up daily.",
  },
];

export default function FAQMenuHome() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section
      id="_faq_accordion_full_form_v6_023"
      className="py-20 sm:py-24 bg-slate-50 dark:bg-neutral-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <!-- Centered Header --> */}
        <div
          data-motion="header"
          className="text-center mb-16"
          style={{ opacity: 1 }}
        >
          <h2>
            <span
              data-animate="heading"
              className="block text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6"
              style={{ opacity: 1 }}
            >
              <span
                className="motion-word"
                style={{
                  display: "inline-block",
                  opacity: 1,
                  transform: "translateY(0px)",
                  filter: "blur(0px)",
                }}
              >
                Frequently
              </span>{" "}
              <span
                className="motion-word"
                style={{
                  display: "inline-block",
                  opacity: 1,
                  transform: "translateY(0px)",
                  filter: "blur(0px)",
                }}
              >
                asked
              </span>{" "}
              <span
                className="motion-word"
                style={{
                  display: "inline-block",
                  opacity: 1,
                  transform: "translateY(0px)",
                  filter: "blur(0px)",
                }}
              >
                questions
              </span>
            </span>
          </h2>
          <p
            data-animate="text"
            className="text-lg text-slate-600 dark:text-neutral-400 max-w-2xl mx-auto"
            style={{ opacity: 1 }}
          >
            <span
              className="motion-word"
              style={{
                display: "inline-block",
                opacity: 1,
                transform: "translateY(0px)",
                filter: "blur(0px)",
              }}
            >
              Everything
            </span>{" "}
            <span
              className="motion-word"
              style={{
                display: "inline-block",
                opacity: 1,
                transform: "translateY(0px)",
                filter: "blur(0px)",
              }}
            >
              you
            </span>{" "}
            <span
              className="motion-word"
              style={{
                display: "inline-block",
                opacity: 1,
                transform: "translateY(0px)",
                filter: "blur(0px)",
              }}
            >
              need
            </span>{" "}
            <span
              className="motion-word"
              style={{
                display: "inline-block",
                opacity: 1,
                transform: "translateY(0px)",
                filter: "blur(0px)",
              }}
            >
              to
            </span>{" "}
            <span
              className="motion-word"
              style={{
                display: "inline-block",
                opacity: 1,
                transform: "translateY(0px)",
                filter: "blur(0px)",
              }}
            >
              know
            </span>{" "}
            <span
              className="motion-word"
              style={{
                display: "inline-block",
                opacity: 1,
                transform: "translateY(0px)",
                filter: "blur(0px)",
              }}
            >
              about
            </span>{" "}
            <span
              className="motion-word"
              style={{
                display: "inline-block",
                opacity: 1,
                transform: "translateY(0px)",
                filter: "blur(0px)",
              }}
            >
              our
            </span>{" "}
            <span
              className="motion-word"
              style={{
                display: "inline-block",
                opacity: 1,
                transform: "translateY(0px)",
                filter: "blur(0px)",
              }}
            >
              platform.
            </span>{" "}
            <span
              className="motion-word"
              style={{
                display: "inline-block",
                opacity: 1,
                transform: "translateY(0px)",
                filter: "blur(0px)",
              }}
            >
              Can't
            </span>{" "}
            <span
              className="motion-word"
              style={{
                display: "inline-block",
                opacity: 1,
                transform: "translateY(0px)",
                filter: "blur(0px)",
              }}
            >
              find
            </span>{" "}
            <span
              className="motion-word"
              style={{
                display: "inline-block",
                opacity: 1,
                transform: "translateY(0px)",
                filter: "blur(0px)",
              }}
            >
              what
            </span>{" "}
            <span
              className="motion-word"
              style={{
                display: "inline-block",
                opacity: 1,
                transform: "translateY(0px)",
                filter: "blur(0px)",
              }}
            >
              you're
            </span>{" "}
            <span
              className="motion-word"
              style={{
                display: "inline-block",
                opacity: 1,
                transform: "translateY(0px)",
                filter: "blur(0px)",
              }}
            >
              looking
            </span>{" "}
            <span
              className="motion-word"
              style={{
                display: "inline-block",
                opacity: 1,
                transform: "translateY(0px)",
                filter: "blur(0px)",
              }}
            >
              for?
            </span>{" "}
            <span
              className="motion-word"
              style={{
                display: "inline-block",
                opacity: 1,
                transform: "translateY(0px)",
                filter: "blur(0px)",
              }}
            >
              Contact
            </span>{" "}
            <span
              className="motion-word"
              style={{
                display: "inline-block",
                opacity: 1,
                transform: "translateY(0px)",
                filter: "blur(0px)",
              }}
            >
              our
            </span>{" "}
            <span
              className="motion-word"
              style={{
                display: "inline-block",
                opacity: 1,
                transform: "translateY(0px)",
                filter: "blur(0px)",
              }}
            >
              support
            </span>{" "}
            <span
              className="motion-word"
              style={{
                display: "inline-block",
                opacity: 1,
                transform: "translateY(0px)",
                filter: "blur(0px)",
              }}
            >
              team.
            </span>
          </p>
        </div>

        {/* <!-- Two Column Layout --> */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* <!-- Left Column - Accordion --> */}
          {/* Left Column - Accordion */}
          <div className="space-y-4">
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={item.id}
                  className="bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between text-left p-6 group"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors pr-4">
                      {item.question}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isOpen
                          ? "bg-indigo-100 dark:bg-indigo-900/40"
                          : "bg-slate-100 dark:bg-neutral-700 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/40"
                      }`}
                    >
                      <svg
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isOpen ? "rotate-0" : "-rotate-90"
                        } ${
                          isOpen
                            ? "text-indigo-600 dark:text-indigo-400"
                            : "text-slate-500 dark:text-neutral-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400"
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
                      </svg>
                    </span>
                  </button>

                  <div
                    className={`px-6 pb-6 transition-all duration-300 ${
                      isOpen ? "block" : "hidden"
                    }`}
                  >
                    <p className="text-slate-600 dark:text-neutral-400 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* <!-- Right Column - Contact Form --> */}
          <div
            data-motion="card"
            className="bg-white dark:bg-neutral-800 rounded-3xl p-8"
            style={{
              opacity: 1,
              transform: "translateY(0px)",
              filter: "blur(0px)",
            }}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Still have questions?
              </h3>
              <p className="text-slate-600 dark:text-neutral-400">
                Fill out the form below and we'll get back to you within 24
                hours.
              </p>
            </div>

            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-slate-700 dark:text-neutral-300 text-sm font-medium mb-2 block">
                    First name
                  </label>
                  <input
                    data-motion="input"
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-neutral-500 text-sm focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="John"
                    style={{
                      opacity: 1,
                      transform: "translateY(0px)",
                      filter: "blur(0px)",
                    }}
                  />
                </div>
                <div>
                  <label className="text-slate-700 dark:text-neutral-300 text-sm font-medium mb-2 block">
                    Last name
                  </label>
                  <input
                    data-motion="input"
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-neutral-500 text-sm focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="Doe"
                    style={{
                      opacity: 1,
                      transform: "translateY(0px)",
                      filter: "blur(0px)",
                    }}
                  />
                </div>
              </div>

              <div>
                <label className="text-slate-700 dark:text-neutral-300 text-sm font-medium mb-2 block">
                  Email
                </label>
                <input
                  data-motion="input"
                  type="email"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-neutral-500 text-sm focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  placeholder="you@example.com"
                  style={{
                    opacity: 1,
                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                  }}
                />
              </div>

              <div>
                <label className="text-slate-700 dark:text-neutral-300 text-sm font-medium mb-2 block">
                  Your question
                </label>
                <textarea
                  data-motion="input"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-neutral-500 text-sm focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                  placeholder="How can we help you?"
                  style={{
                    opacity: 1,
                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                  }}
                ></textarea>
              </div>
              {/* rows="4" */}
              <button
                data-motion="button"
                type="submit"
                className="w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-colors"
                style={{
                  opacity: 1,
                  transform: "translateY(0px)",
                  filter: "blur(0px)",
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/*
 <svg
                    className="w-4 h-4 text-indigo-600 dark:text-indigo-400 transform transition-transform duration-300 -rotate-90"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style="transform: rotate(-90deg); transition: transform 0.3s ease-out; --darkreader-inline-stroke: currentColor;"
                    data-darkreader-inline-stroke=""
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
*/
