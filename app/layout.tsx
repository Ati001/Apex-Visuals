import "./css/style.css";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { Viewport } from 'next';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const nacelle = localFont({
  src: [
    { path: "../public/fonts/nacelle-regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/nacelle-italic.woff2", weight: "400", style: "italic" },
    { path: "../public/fonts/nacelle-semibold.woff2", weight: "600", style: "normal" },
    { path: "../public/fonts/nacelle-semibolditalic.woff2", weight: "600", style: "italic" },
  ],
  variable: "--font-nacelle",
  display: "swap",
});

export const metadata = {
  title: "Apex Visuals",
  description: "Video Editing & Motion Graphics Team",
};

// THIS IS THE KEY FOR REAL MOBILE DEVICES
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${nacelle.variable} bg-gray-950 font-inter text-base text-gray-200 antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          
          {/* On real mobile devices, we need a high pt (padding-top) 
            to push content below the fixed/absolute header.
          */}
          <main className="flex-grow pt-[100px] md:pt-[120px]">
            {children}
          </main>
          
          <Footer />
        </div>
        
        {/* Global Security Script */}
        <script dangerouslySetInnerHTML={{ __html: `
          document.addEventListener('contextmenu', e => e.preventDefault());
          document.onkeydown = e => {
            if(e.keyCode == 123 || (e.ctrlKey && e.shiftKey && e.keyCode == 73) || (e.ctrlKey && e.keyCode == 85)) return false;
          };
        `}} />
      </body>
    </html>
  );
}