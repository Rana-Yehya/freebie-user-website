"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import HeaderNavItem from "./header-nav-item";
import CustomButton from "@/components/ui/custom-button";
import { useRouter } from "next/navigation";
import SideMenu from "./side-menu";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuClicked, setMenuClicked] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuClick = () => {
    setMenuClicked(!menuClicked);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/50 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.1)] rounded-b-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto pt-2.5 pl-5 pr-5 pb-2.5">
          <div className="flex items-center justify-between gap-x-4 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:justify-stretch lg:rounded-br-[1.375rem] lg:rounded-bl-[1.375rem]">
            {/* Logo */}
            <div>
              <Link
                href="/"
                title="Home"
                className="inline-flex bg-white items-center justify-center transition-all focus:shadow-[0_0px_0px_2px_rgba(15,23,42,0.25),0_2px_10px_0px_rgba(0,0,0,0.05)] rounded-full hover:bg-neutral-100 p-0.5"
              >
                <img
                  className="h-auto w-auto max-h-8 max-w-8"
                  src="/logo.png"
                  alt="Logo"
                />
              </Link>
            </div>

            <nav className="hidden lg:block">
              <ul className="flex items-center">
                <li>
                  <HeaderNavItem href="/" title="Home" scrolled={scrolled} />
                </li>
                <li>
                  <HeaderNavItem
                    href="/about-us"
                    title="About"
                    scrolled={scrolled}
                  />
                </li>
                <li>
                  <HeaderNavItem
                    href="/products"
                    title="Products"
                    scrolled={scrolled}
                  />
                </li>
                <li>
                  <HeaderNavItem
                    href="/contact-us"
                    title="Contact Us"
                    scrolled={scrolled}
                  />
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-x-10 justify-self-end">
              <span className="h-4 w-[1px] bg-neutral-300"></span>
              <div className="flex items-center gap-x-3 lg:gap-x-2">
                <CustomButton
                  onClick={() => router.push("/login")}
                  title="Log in"
                  className={`bg-transparent text-background hidden lg:flex text-sm font-medium transition-all text-neutral-600 hover:text-[#fbb72c] relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#fbb72c] after:-translate-x-1/2 hover:after:w-full after:left-1/2 after:transition-all px-3 py-2 text-sm font-medium transition hover:text-primary ${
                    scrolled ? "text-[#fbb72c]" : "text-honey"
                  }`}
                />
                <CustomButton
                  onClick={() => router.push("/register")}
                  title="Register"
                  className="w-fit bg-primary hover:border-neutral-200 hover:bg-honey hover:text-white"
                />
                <button
                  type="button"
                  aria-label="Open menu"
                  className="lg:hidden"
                  title="Open menu"
                  onClick={handleMenuClick}
                >
                  <img
                    src="/menu.svg"
                    // className={`h-8 w-8 ${scrolled ? "text-[#fbb72c]" : "text-black"}`}
                    style={{
                      filter: scrolled
                        ? "invert(72%) sepia(34%) saturate(907%) hue-rotate(354deg) brightness(98%) contrast(100%)"
                        : "invert(0%) sepia(0%) saturate(7%) hue-rotate(194deg) brightness(101%) contrast(103%)",
                    }}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar - Rendered outside header */}
      {menuClicked && (
        <SideMenu
          onClick={() => {
            setMenuClicked(false);
          }}
        />
      )}
    </>
  );
}
