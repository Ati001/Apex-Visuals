"use client";

import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    /* Change absolute to fixed and remove mt-4 for mobile to avoid alignment bugs */
    <header className="fixed top-0 left-0 right-0 z-50 w-full pt-3 px-4 sm:px-6 animate-[fadeIn_0.8s_ease-out]">
      <div className="mx-auto max-w-6xl">
        <div className="flex h-16 md:h-20 items-center justify-between gap-2 rounded-2xl bg-gray-900/90 border border-gray-800 px-4 md:px-6 shadow-2xl backdrop-blur-md">
          
          <div className="flex items-center gap-2 md:gap-4 shrink-0">
            <div className="scale-90 md:scale-100">
              <Logo />
            </div>
            <span className="font-bold text-sm sm:text-lg md:text-xl tracking-tighter text-white uppercase whitespace-nowrap">
              Apex Visuals
            </span>
          </div>

          <div className="flex items-center">
            <Link
              href="mailto:Badar@Apexvisuals.tech"
              className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-3 py-2 md:px-5 md:py-2.5 text-[10px] sm:text-xs md:text-sm font-bold text-white transition-all hover:bg-indigo-500 active:scale-95 whitespace-nowrap"
            >
              Contact <span className="hidden xs:inline ml-1 text-[10px] sm:text-xs md:text-sm">Apex Visuals</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}