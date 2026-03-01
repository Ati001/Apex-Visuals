"use client";

import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full pt-4 px-4 sm:px-6 animate-[fadeIn_0.8s_ease-out]">
      <div className="mx-auto max-w-6xl">
        <div className="flex h-16 md:h-20 items-center justify-between gap-2 rounded-2xl bg-gray-900/95 border border-gray-800 px-4 md:px-6 shadow-2xl backdrop-blur-md">
          
          {/* Logo & Branding Text */}
          <div className="flex items-center gap-2 md:gap-4 shrink-0">
            <div className="scale-75 md:scale-100">
              <Logo />
            </div>
            <span className="font-bold text-sm sm:text-lg md:text-xl tracking-tighter text-white uppercase whitespace-nowrap hover:text-indigo-400 transition-colors duration-300 cursor-pointer">
              Apex Visuals
            </span>
          </div>

          {/* Contact Button */}
          <div className="flex items-center">
            <Link
              href="mailto:Badar@Apexvisuals.tech"
              className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-3 py-2 md:px-5 md:py-2.5 text-[10px] sm:text-xs md:text-sm font-bold text-white shadow-lg shadow-indigo-500/30 transition-all hover:bg-indigo-500 hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              <span className="hidden xs:inline">Contact Apex Visuals</span>
              <span className="xs:hidden uppercase tracking-widest px-1">Contact</span>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </header>
  );
}