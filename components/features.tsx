"use client";

import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";

// --- IMAGE IMPORTS ---
import ApexLogo from "@/public/images/apex-logo.png"; 
import AfterEffects from "@/public/images/after-effects.png";
import PremierePro from "@/public/images/premiere-pro.png";
import DavinciResolve from "@/public/images/davinci-resolve.png";
import Photoshop from "@/public/images/photoshop.png";
import Audition from "@/public/images/audition.png";
import Illustrator from "@/public/images/illustrator.png";

export default function Features() {
  return (
    <section className="relative">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2" aria-hidden="true">
        <Image className="max-w-none" src={BlurredShapeGray} width={760} height={668} alt="Blurred shape" />
      </div>
      
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 md:py-20 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1]">
          
          <div id="portfolio" className="scroll-mt-[-90vh]"></div>

          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent uppercase text-xs font-bold tracking-widest">
                Software
              </span>
            </div>
            <h2 className="bg-gradient-to-r from-gray-200 via-indigo-200 to-gray-200 bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Our Industry-Standard Toolkit
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-indigo-200/65 leading-relaxed">
              We utilize the most powerful creative applications to ensure every frame, 
              pixel, and soundwave is crafted with professional precision.
            </p>
          </div>

          {/* --- TWO-LINE IMAGE SECTION --- */}
          <div className="flex flex-col items-center justify-center gap-10 pb-12 md:pb-20 mt-10" data-aos="fade-up">
            
            {/* FIRST LINE: Apex Logo */}
            <div className="flex flex-col items-center">
               <Image src={ApexLogo} width={110} height={110} alt="Apex Logo" className="rounded-2xl shadow-2xl shadow-indigo-500/20" />
            </div>

            {/* SECOND LINE: Software Icons */}
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
                <Image src={AfterEffects} width={55} height={55} alt="AE" className="hover:scale-110 transition-transform duration-300" />
                <Image src={PremierePro} width={55} height={55} alt="PR" className="hover:scale-110 transition-transform duration-300" />
                <Image src={DavinciResolve} width={55} height={55} alt="DR" className="hover:scale-110 transition-transform duration-300" />
                <Image src={Photoshop} width={55} height={55} alt="PS" className="hover:scale-110 transition-transform duration-300" />
                <Image src={Audition} width={55} height={55} alt="AU" className="hover:scale-110 transition-transform duration-300" />
                <Image src={Illustrator} width={55} height={55} alt="AI" className="hover:scale-110 transition-transform duration-300" />
            </div>
          </div>

          {/* --- LOWER ARTICLES WITH ORIGINAL ICON STYLE --- */}
          <div className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:gap-x-14 md:gap-y-16 lg:grid-cols-3">
            <article>
              <div className="mb-3 text-indigo-500">
                <svg width="24" height="24" fill="currentColor"><path d="M0 0h14v17H0V0Zm2 2v13h10V2H2Z" /></svg>
              </div>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">High-End Editing</h3>
              <p className="text-indigo-200/65">Cinematic transitions and professional pacing for your content.</p>
            </article>

            <article>
              <div className="mb-3 text-indigo-500">
                <svg width="24" height="24" fill="currentColor"><path d="M19 6H0v2h17v8H7v-6H5v8h19v-2h-5V6Z" /></svg>
              </div>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">Motion Graphics</h3>
              <p className="text-indigo-200/65">Custom animations that bring your brand to life.</p>
            </article>

            <article>
              <div className="mb-3 text-indigo-500">
                <svg width="24" height="24" fill="currentColor"><path d="M23.414 6 18 .586 16.586 2l3 3H7a6 6 0 0 0-6 6h2a4 4 0 0 1 4-4h12.586l-3 3L18 11.414 23.414 6Z" /></svg>
              </div>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">Sound Design</h3>
              <p className="text-indigo-200/65">Immersive audio that matches the energy of the visuals.</p>
            </article>
          </div>

        </div>
      </div>
    </section>
  );
}