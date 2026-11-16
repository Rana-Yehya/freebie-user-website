"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/components/shared/language-provider";

export default function Header({}: { isAuthenticated: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    window.dispatchEvent(new CustomEvent("freebie-theme", { detail: next }));
  };
  return (
    <header
      lang={language}
      dir={language === "ar" ? "rtl" : "ltr"}
      className="freebie-header fixed inset-x-0 top-0 z-40 border-b border-[#e7ddcb]/70 bg-[#fffdf9]/90 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-3 sm:px-5">
        <Link
          href="/"
          aria-label={t("home")}
          className="flex shrink-0 items-center gap-2.5"
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Profile-round-t74ogGk2GSLb4UMyXzSc5hX6s6ZiHR.png"
            alt=""
            width={56}
            height={56}
            className="size-12 object-contain sm:size-14"
          />
          <span className="font-serif text-xl font-semibold tracking-tight text-[#382b1d]">
            Freebie<span className="ml-1 text-[#bd8a3d]">.</span>
          </span>
        </Link>
        <nav
          aria-label={language === "ar" ? "التنقل الرئيسي" : "Main navigation"}
          className="hidden items-center gap-7 text-xs text-[#766956] md:flex"
        >
          <Link href="/#collection" className="transition hover:text-[#a77c38]">
            {t("collection")}
          </Link>
          <Link href="/#reviews" className="transition hover:text-[#a77c38]">
            {t("reviews")}
          </Link>
          <Link
            href="/#future-plans"
            className="transition hover:text-[#a77c38]"
          >
            {t("comingSoon")}
          </Link>
        </nav>
        <div className="flex items-center gap-1.5 sm:gap-2">
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
            aria-label={t("chat")}
            title={t("chat")}
            className="grid size-9 place-items-center rounded-full border border-[#e9dfd0] text-[#547b54] transition hover:bg-[#edf5eb]"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-[18px]"
            >
              <path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.5 4.1 1.6 5.9L0 24l6.5-1.7a11.8 11.8 0 0 0 5.6 1.4h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.2-6.2-3.5-8.4Zm-8.4 18.2h-.1a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.8 1 1-3.7-.3-.4a9.8 9.8 0 1 1 8.6 4.7Zm5.4-7.3c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2-.2.3-.8.9-1 1.1-.2.2-.4.2-.7.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.5-1.7-1.7-2-.2-.3 0-.5.1-.6l.5-.6c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5s-.7-1.6-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3s-.2-.2-.5-.3Z" />
            </svg>
          </a>
          {/* <button type="button" onClick={toggleTheme} aria-label={dark ? t("lightMode") : t("darkMode")} className="rounded-full border border-[#e9dfd0] px-2.5 py-2 text-[11px] text-[#756959]"><span aria-hidden="true">{dark ? t("lightModeText") : t("darkModeText")}</span><span className="sr-only">{dark ? t("lightModeText") : t("darkModeText")}</span></button> */}
          <button
            type="button"
            onClick={toggleLanguage}
            aria-label={
              language === "en" ? t("switchToArabic") : t("switchToEnglish")
            }
            className="rounded-full border border-[#e9dfd0] px-2.5 py-2 text-[11px] font-semibold text-[#756959]"
          >
            {language === "en" ? "AR" : "EN"}
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? t("closeMenu") : t("openMenu")}
            className="grid size-9 place-items-center rounded-full border border-[#e9dfd0] text-lg text-[#756959] md:hidden"
          >
            {menuOpen ? (
              <span aria-hidden="true">×</span>
            ) : (
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="size-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label={language === "ar" ? "قائمة التنقل" : "Mobile navigation"}
          className="border-t border-[#e9dfd0] bg-[#fffdf9] px-5 py-3 md:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col">
            <Link
              onClick={() => setMenuOpen(false)}
              href="/#collection"
              className="rounded-lg px-3 py-3 text-sm text-[#766956]"
            >
              {t("collection")}
            </Link>
            <Link
              onClick={() => setMenuOpen(false)}
              href="/#reviews"
              className="rounded-lg px-3 py-3 text-sm text-[#766956]"
            >
              {t("reviews")}
            </Link>
            <Link
              onClick={() => setMenuOpen(false)}
              href="/#future-plans"
              className="rounded-lg px-3 py-3 text-sm text-[#766956]"
            >
              {t("comingSoon")}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
