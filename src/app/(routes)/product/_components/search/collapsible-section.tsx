"use client";
import { useState, useRef, useEffect } from "react";

interface CollapsibleSectionProps {
  title: string;
  id: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
}

export default function CollapsibleSection({
  title,
  id,
  defaultOpen = false,
  children,
  isOpen: externalIsOpen,
  onToggle,
}: CollapsibleSectionProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(defaultOpen);
  const innerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(defaultOpen ? "auto" : "0px");

  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        // Measure the innerRef instead
        const scrollHeight = innerRef.current?.scrollHeight;
        setHeight(`${scrollHeight}px`);
      }, 50);
      return () => clearTimeout(timer);
    } else {
      setHeight("0px");
    }
  }, [isOpen]);

  // Use ResizeObserver to detect content height changes
  useEffect(() => {
    if (!innerRef.current || !isOpen) return;

    const resizeObserver = new ResizeObserver(() => {
      // Measure the innerRef instead
      const scrollHeight = innerRef.current?.scrollHeight;
      if (scrollHeight) {
        setHeight(`${scrollHeight}px`);
      }
    });

    // Observe the innerRef instead
    resizeObserver.observe(innerRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [isOpen]);
  const handleToggle = () => {
    if (onToggle) {
      onToggle();
    } else {
      setInternalIsOpen(!internalIsOpen);
    }
  };

  return (
    <div className="border-b border-slate-100 py-2">
      <button
        type="button"
        className="header flex items-center gap-2 justify-between cursor-pointer w-full focus:outline-none py-1"
        aria-expanded={isOpen}
        aria-controls={`${id}-panel`}
        id={`${id}-button`}
        onClick={handleToggle}
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
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ height }}
      >
        <div ref={innerRef} className="pt-1 pb-1">
          {children}
        </div>
      </div>
    </div>
  );
}
