"use client";

import Link from "next/link";
import { sidebarItems } from "./header-items";
import { useEffect, useState } from "react";
import CustomButton from "@/components/ui/custom-button";
import { useRouter } from "next/navigation";

export default function SideMenu({ onClick }: { onClick: () => void }) {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Small delay to ensure the DOM is ready
    requestAnimationFrame(() => {
      setIsVisible(true);
    });
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClick();
    }, 300);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleClose}
      />

      {/* Sidebar */}
      <aside
        className={`bg-white border-r border-slate-200 w-full h-full flex flex-col fixed top-0 left-0 max-w-[264px] py-6 overflow-y-auto z-50 shadow-2xl shadow-slate-900/20 transition-transform duration-300 ease-out will-change-transform ${
          isVisible ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <style jsx>{`
          aside::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {/* Header */}
        <div className="flex items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <img src="/logo.png" className="w-8 h-8" alt="company logo" />
            <div className="text-base text-slate-600 font-semibold">
              Freebie
            </div>
          </div>
          <button
            type="button"
            onClick={handleClose}
            aria-label="Collapse sidebar"
            className="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded p-1 hover:bg-slate-100 transition-colors"
          >
            <img
              src="/arrow-double-left.svg"
              className="w-5 h-5"
              style={{
                filter:
                  "invert(21%) sepia(61%) saturate(343%) hue-rotate(175deg) brightness(93%) contrast(89%)",
              }}
              alt="Close"
            />
          </button>
        </div>

        <hr className="my-6 border-slate-200" />

        {/* Navigation */}
        <nav aria-label="Primary sidebar navigation" className="flex-1 px-3">
          <ul className="space-y-0.5 text-sm text-slate-700 font-medium">
            {sidebarItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg transition-all duration-200 hover:text-slate-900 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  onClick={handleClose}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* User Profile */}
        <div className="justify-center items-center gap-3 cursor-pointer mt-6 px-4 pt-4 border-t border-slate-200">
          <CustomButton
            onClick={() => router.push("/login")}
            title="Log in"
            className="w-full text-sm font-medium transition-all text-neutral-600 hover:text-[#fbb72c]"
          />

          {/* <img
            src="https://readymadeui.com/team-2.webp"
            className="w-10 h-10 rounded-full border border-slate-200"
            alt="User avatar"
          />
          <div>
            <p className="text-sm text-slate-800 font-medium">John Doe</p>
            <p className="text-xs text-slate-500 mt-0.5">Active free account</p>
          </div> */}
        </div>
      </aside>
    </>
  );
}
