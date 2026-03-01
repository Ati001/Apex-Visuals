"use client";

import { useState, useRef } from "react";
import type { StaticImageData } from "next/image";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import Image from "next/image";
import SecondaryIllustration from "@/public/images/secondary-illustration.svg";

interface ModalVideoProps {
  thumb: StaticImageData;
  thumbWidth: number;
  thumbHeight: number;
  thumbAlt: string;
  video: string;
  videoWidth: number;
  videoHeight: number;
}

export default function ModalVideo({
  thumb,
  thumbWidth,
  thumbHeight,
  thumbAlt,
  video,
  videoWidth,
  videoHeight,
}: ModalVideoProps) {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="relative w-full">
      {/* Background illustration - Hidden on small mobile to save space */}
      <div className="hidden sm:block pointer-events-none absolute bottom-8 left-1/2 -z-10 -ml-28 -translate-x-1/2 translate-y-1/2" aria-hidden="true">
        <Image className="md:max-w-none" src={SecondaryIllustration} width={1165} height={1012} alt="Secondary illustration" />
      </div>

      {/* Button overlay / Thumbnail */}
      <button
        className="group relative flex w-full items-center justify-center rounded-2xl focus:outline-none focus-visible:ring-3 focus-visible:ring-indigo-200 transition-transform duration-300 active:scale-95"
        onClick={() => setModalOpen(true)}
        aria-label="Watch Showreel"
      >
        <figure className="relative w-full overflow-hidden rounded-2xl before:absolute before:inset-0 before:-z-10 before:bg-linear-to-br before:from-gray-900 before:via-indigo-500/20 before:to-gray-900 shadow-2xl">
          <Image
            className="w-full h-auto opacity-60 grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100"
            src={thumb}
            width={thumbWidth}
            height={thumbHeight}
            priority
            alt={thumbAlt}
          />
        </figure>
        
        {/* Play Button - Responsive sizing */}
        <span className="pointer-events-none absolute p-2 sm:p-2.5 before:absolute before:inset-0 before:rounded-full before:bg-gray-950/80 before:backdrop-blur-sm before:duration-300 group-hover:before:scale-110">
          <span className="relative flex items-center gap-2 sm:gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6" fill="none">
              <path fill="url(#pla)" fillRule="evenodd" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Zm4.2-12-6-4.2v8.4l6-4.2Z" clipRule="evenodd" />
              <defs>
                <linearGradient id="pla" x1={12} x2={12} y1={0} y2={24} gradientUnits="userSpaceOnUse">
                  <stop stopColor="#6366F1" /><stop offset={1} stopColor="#A5B4FC" />
                </linearGradient>
              </defs>
            </svg>
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-gray-200 uppercase sm:capitalize">Watch Showreel</span>
          </span>
        </span>
      </button>

      {/* Modal / Dialog */}
      <Dialog initialFocus={videoRef} open={modalOpen} onClose={() => setModalOpen(false)} className="relative z-[9999]">
        <DialogBackdrop transition className="fixed inset-0 bg-gray-950/95 backdrop-blur-md transition-opacity duration-300 ease-out data-closed:opacity-0" />
        
        <div className="fixed inset-0 z-10 flex items-center justify-center p-2 sm:p-6">
          <div className="mx-auto flex w-full max-w-5xl items-center justify-center">
            <DialogPanel
              transition
              className="relative flex w-full max-h-[90vh] items-center justify-center overflow-hidden rounded-2xl sm:rounded-3xl bg-black shadow-5xl duration-300 ease-out data-closed:scale-95 data-closed:opacity-0"
            >
              <video
                ref={videoRef}
                width={videoWidth}
                height={videoHeight}
                loop
                controls
                autoPlay
                className="w-full h-full object-contain max-h-[90vh]"
                poster={thumb.src}
              >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}