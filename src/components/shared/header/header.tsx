"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import HeaderNavItem from "./header-nav-item";
import SideMenu from "./side-menu";
import HeaderButtons from "./header-buttons";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import LogoutAlert from "../alerts/logout-alert";
import { Info } from "../../../types/info";

export default function Header({
  isAuthenticated,
}: {
  isAuthenticated: boolean;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [menuClicked, setMenuClicked] = useState(false);
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

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

  const handleLogout = () => {
    setShowLogoutDialog(true);
  };

  const confirmLogout = async () => {
    setIsLoggingOut(true);
    setShowLogoutDialog(false);

    try {
      const response = await fetch("/api/auth/logout", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data: Info = await response.json();

      if (!data.isSuccess) {
        throw new Error(
          data.message || "Something went wrong. Please try again.",
        );
      }

      // Redirect to home on success
      window.location.href = pathname;
      // router.refresh();

      // router.push("/");
    } catch (err: any) {
      console.error("Logout failed:", err.message);
      // Reopen dialog with error state if needed
      setShowLogoutDialog(true);
    } finally {
      setIsLoggingOut(false);
    }
  };

  const cancelLogout = () => {
    setShowLogoutDialog(false);
    setIsLoggingOut(false);
  };

  return (
    <>
      {/* Global Loading Overlay */}
      {isLoggingOut && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <div className="w-12 h-12 border-4 border-gray-200 rounded-full" />
              <div className="absolute top-0 left-0 w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            </div>
            <p className="text-slate-600 font-medium">Logging out...</p>
          </div>
        </div>
      )}

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
            <div className="flex-shrink-0">
              <Link
                href="/"
                title="Home"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
              >
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="h-auto w-auto max-h-8 max-w-8 object-contain"
                />
              </Link>
            </div>

            {/* Navigation - Centered */}
            <nav className="hidden lg:flex items-center justify-center flex-1">
              <ul className="flex items-center gap-1">
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
                    href="/product/search"
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

            {/* Right Section */}
            <div className="flex items-center gap-x-10 justify-self-end">
              <span className="hidden lg:block h-4 w-[1px] bg-neutral-300"></span>

              <div className="flex items-center gap-x-3 lg:gap-x-2">
                {isAuthenticated ? (
                  <>
                    {/* Cart Button */}
                    <Link
                      href="/cart"
                      className="relative p-2 rounded-full hover:bg-slate-100 transition-all duration-200 group"
                      aria-label="Shopping cart"
                    >
                      <img
                        src="/cart.svg"
                        alt="Cart"
                        width={20}
                        height={20}
                        className="opacity-70 group-hover:opacity-100 transition-opacity"
                        style={{
                          filter:
                            "invert(36%) sepia(3%) saturate(12%) hue-rotate(321deg) brightness(89%) contrast(98%)",
                        }}
                      />
                      <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                        0
                      </span>
                    </Link>
                    {/* Order button*/}
                    <Link
                      className="p-2 rounded-full hover:bg-slate-100 transition-all duration-200 group"
                      aria-label="Orders"
                      href="/order"
                    >
                      <img
                        src="/gift.svg"
                        alt="Orders"
                        width={20}
                        height={20}
                        className="opacity-70 group-hover:opacity-100 transition-opacity"
                        style={{
                          filter:
                            "invert(36%) sepia(3%) saturate(12%) hue-rotate(321deg) brightness(89%) contrast(98%)",
                        }}
                      />
                    </Link>
                    {/* Logout Button */}
                    <button
                      className="p-2 rounded-full hover:bg-slate-100 transition-all duration-200 group"
                      aria-label="Logout"
                      onClick={handleLogout}
                      disabled={isLoggingOut}
                    >
                      <img
                        src="/logout.svg"
                        alt="Logout"
                        width={20}
                        height={20}
                        className={`opacity-70 group-hover:opacity-100 transition-opacity ${
                          isLoggingOut ? "opacity-40 pointer-events-none" : ""
                        }`}
                        style={{
                          filter:
                            "invert(36%) sepia(3%) saturate(12%) hue-rotate(321deg) brightness(89%) contrast(98%)",
                        }}
                      />
                    </button>
                  </>
                ) : (
                  <HeaderButtons scrolled={scrolled} />
                )}

                {/* Mobile Menu Button */}
                <button
                  type="button"
                  aria-label="Open menu"
                  className="lg:hidden p-2 rounded-full hover:bg-slate-100 transition-all duration-200"
                  title="Open menu"
                  onClick={handleMenuClick}
                >
                  <img
                    src="/menu.svg"
                    alt="Menu"
                    width={24}
                    height={24}
                    className="transition-opacity"
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

      {/* Logout Confirmation Dialog */}
      {showLogoutDialog && !isLoggingOut && (
        <LogoutAlert
          cancelLogout={cancelLogout}
          confirmLogout={confirmLogout}
          isLoading={isLoggingOut}
        />
      )}

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
