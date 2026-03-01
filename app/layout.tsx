import "./css/style.css";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { Viewport } from 'next';

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const nacelle = localFont({
  src: [
    { path: "../public/fonts/nacelle-regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/nacelle-semibold.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-nacelle",
  display: "swap",
});

export const metadata = { title: "Apex Visuals", description: "Video Editing Team" };
export const viewport: Viewport = { width: 'device-width', initialScale: 1, maximumScale: 1, userScalable: false };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${nacelle.variable} bg-gray-950 font-inter text-base text-gray-200 antialiased`}>
        {children}
      </body>
    </html>
  );
}