"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header({}: { isAuthenticated: boolean }) {
  return (
    <header className="freebie-header fixed inset-x-0 top-0 z-40 border-b border-[#e7ddcb]/70 bg-[#fffdf9]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
        <Link href="/" aria-label="Freebie home" className="flex items-center gap-2.5">
          <Image src="/logo.png" alt="" width={38} height={38} className="rounded-full object-contain" />
          <span className="font-serif text-xl tracking-tight text-[#382b1d]">Freebie<span className="ml-1 text-[#bd8a3d]">.</span></span>
        </Link>
        <nav aria-label="Main navigation" className="flex items-center gap-5 text-xs text-[#766956] sm:gap-8">
          <Link href="/#collection" className="transition hover:text-[#a77c38]">The collection</Link>
          <Link href="/#order" className="hidden transition hover:text-[#a77c38] sm:inline">Gift with love</Link>
          <Link href="/#reviews" className="hidden transition hover:text-[#a77c38] sm:inline">Kind words</Link>
          <Link href="/#collection" className="rounded-full bg-[#382b1d] px-4 py-2.5 font-medium text-white transition hover:bg-[#9c7132]">Explore gifts</Link>
        </nav>
      </div>
    </header>
  );
}
