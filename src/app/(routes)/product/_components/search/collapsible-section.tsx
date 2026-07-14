// Collapsible section component
"use client";
import { useState, useRef, useEffect } from "react";

export default function CollapsibleSection({
  title,
  id,
  defaultOpen = false,
  children,
}: {
  title: string;
  id: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(defaultOpen ? "auto" : "0px");

  useEffect(() => {
    if (isOpen) {
      const scrollHeight = contentRef?.current?.scrollHeight;
      setHeight(`${scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [isOpen]);

  return (
    <div className="border-b border-slate-200 py-3">
      <button
        type="button"
        className="header flex items-center gap-2 justify-between cursor-pointer w-full focus:outline-none"
        aria-expanded={isOpen}
        aria-controls={`${id}-panel`}
        id={`${id}-button`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <h3 className="text-slate-700 text-sm font-medium uppercase tracking-wider">
          {title}
        </h3>
        <span className="text-slate-400 text-lg font-light">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      <div
        id={`${id}-panel`}
        ref={contentRef}
        role="region"
        aria-labelledby={`${id}-button`}
        className="overflow-hidden transition-all duration-300"
        style={{ height }}
      >
        <div className="pt-3 pb-1">{children}</div>
      </div>
    </div>
  );
}
