"use client";

import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="absolute top-0 z-50 w-full mt-4 px-4 sm:px-6 animate-[fadeIn_0.8s_ease-out]">
      <div className="mx-auto max-w-6xl">
        <div className="flex h-20 items-center justify-between gap-3 rounded-2xl bg-gray-900/95 border border-gray-800 px-6 shadow-2xl backdrop-blur-md">
          
          {/* Logo & Branding Text - Integrated */}
          <div className="flex items-center gap-4">
            <Logo />
            {/* Added hover animation directly to the span only */}
            <span className="font-bold text-xl md:text-xl tracking-tighter text-white uppercase whitespace-nowrap hover:text-indigo-400 transition-colors duration-300 cursor-pointer">
              Apex Visuals
            </span>
          </div>

          {/* Contact Button */}
          <ul className="flex items-center">
            <li>
              <Link
                href="mailto:Badar@Apexvisuals.tech"
                className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-indigo-500/30 transition-all hover:bg-indigo-500 hover:scale-105 active:scale-95"
              >
                Contact Apex Visuals
              </Link>
            </li>
          </ul>
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