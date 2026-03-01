"use client";

import { useState } from "react";

const showcaseItems = [
  // Showreel Section
  { 
    id: 1, 
    category: "showreel", 
    title: "Main Showreel 2024", 
    type: "horizontal", 
    videoSrc: "/videos/Intro-video.mp4" 
  },
  { id: 10, category: "showreel", title: "Motion Graphics Reel", type: "horizontal" },
  { id: 11, category: "showreel", title: "Cinematic Reel", type: "horizontal" },
  
  // Long-form Section
  { id: 2, category: "long-form", title: "Documentary Edit", type: "horizontal" },
  { id: 3, category: "long-form", title: "Corporate Story", type: "horizontal" },
  { id: 4, category: "long-form", title: "YouTube Feature", type: "horizontal" },
  { id: 5, category: "long-form", title: "Commercial Spot", type: "horizontal" },
  { id: 6, category: "long-form", title: "Event Recap", type: "horizontal" },
  { id: 12, category: "long-form", title: "Brand Documentary", type: "horizontal" },
  
  // Short-form Section
  { id: 7, category: "short-form", title: "Product Reel", type: "vertical" },
  { id: 8, category: "short-form", title: "Fitness TikTok", type: "vertical" },
  { id: 9, category: "short-form", title: "Fashion Short", type: "vertical" },
  { id: 13, category: "short-form", title: "Gaming Highlight", type: "vertical" },
  { id: 14, category: "short-form", title: "Travel Reel", type: "vertical" },
  { id: 15, category: "short-form", title: "Food Promo", type: "vertical" },
];

const testimonials = [
  { name: "Abdul Rehman", role: "Content Creator", content: "The level of detail in the long-form edits is unmatched. Highly recommended for storytelling." },
  { name: "brat_dalton", role: "Influencer", content: "Viral hooks and perfect pacing. My short-form engagement tripled since we started working together." },
  { name: "terralumaland", role: "Agency Owner", content: "Professional, timely, and creative. They take the stress out of the post-production process." },
];

export default function Testimonials() {
  const [activeTab, setActiveTab] = useState("showreel");

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="border-t border-slate-800 py-12 md:py-20">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl pb-12 text-center">
          <h2 className="bg-gradient-to-r from-slate-200 via-indigo-200 to-slate-200 bg-clip-text pb-4 text-3xl font-bold text-transparent md:text-4xl">
            Our Visual Showcase
          </h2>
          <p className="text-lg text-slate-400">
            High-production editing tailored for every screen size and platform.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center pb-12">
          <div className="inline-flex flex-wrap justify-center rounded-2xl bg-slate-800/40 p-1 border border-white/10 backdrop-blur-sm">
            {["showreel", "long-form", "short-form"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  activeTab === tab ? "bg-slate-900 text-indigo-400 shadow-lg" : "text-slate-500 hover:text-slate-300"
                }`}
              >
                <span className="capitalize">{tab.replace("-", " ")}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center mb-20">
          {showcaseItems
            .filter((item) => item.category === activeTab)
            .map((item) => (
              <div
                key={item.id}
                className={`group relative overflow-hidden rounded-2xl bg-slate-900 border border-white/10 hover:border-indigo-500/50 transition-all duration-500 w-full
                ${item.type === "vertical" ? "aspect-[9/16] max-w-[320px] sm:max-w-full" : "aspect-video"}`}
              >
                {/* VIDEO DISPLAY WITH PLAYER CONTROLS */}
                {item.videoSrc ? (
                  <video
                    controls
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover"
                  >
                    <source src={item.videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div className="absolute inset-0 bg-slate-800/20 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-indigo-600/10 flex items-center justify-center border border-indigo-500/20 group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-indigo-400 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                    </div>
                  </div>
                )}

                {/* Label Overlay - pointer-events-none ensures it doesn't block video controls */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950/95 to-transparent p-4 pointer-events-none group-hover:opacity-0 transition-opacity duration-300">
                  <p className="text-[10px] sm:text-xs font-bold text-slate-200 uppercase tracking-wider">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 shadow-xl">
              <p className="text-slate-300 italic mb-4 text-sm sm:text-base">"{t.content}"</p>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-indigo-500 to-slate-700 flex items-center justify-center text-[10px] font-bold text-white">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-slate-200 font-semibold text-sm">{t.name}</h4>
                  <p className="text-indigo-400/60 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}