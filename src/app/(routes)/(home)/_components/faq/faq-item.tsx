"use client";
import { useState, useRef, useEffect } from "react";
import { FAQItem } from "../../../../../types/faq";

interface FaqItemProps {
  item: FAQItem;
}

export default function FaqItem({ item }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (isOpen) {
      const scrollHeight = contentRef.current?.scrollHeight;
      setHeight(`${scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [isOpen]);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-all duration-300 hover:border-slate-300 hover:shadow-sm">
      <button
        onClick={toggleFAQ}
        className="w-full flex items-center justify-between text-left p-5 md:p-6 group"
        aria-expanded={isOpen}
      >
        <span className="text-sm md:text-base font-medium text-slate-900 group-hover:text-primary transition-colors pr-4">
          {item.question.defaultName}
        </span>
        <span
          className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
            isOpen
              ? "bg-primary/10 text-primary"
              : "bg-slate-100 text-slate-500 group-hover:bg-primary/10 group-hover:text-primary"
          }`}
        >
          {/* <svg
            className={`w-4 h-4 transition-transform duration-300 ${
              isOpen ? "rotate-0" : "-rotate-90"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M19 9l-7 7-7-7"
            />
          </svg> */}
        </span>
      </button>

      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: height }}
      >
        <div className="px-5 md:px-6 pb-5 md:pb-6">
          <p className="text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
            {item.answer.defaultName}
          </p>
        </div>
      </div>
    </div>
  );
}
