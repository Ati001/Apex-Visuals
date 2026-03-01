"use client";

import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Spotlight from "@/components/spotlight";

export default function Workflows() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Trigger slightly earlier for smoother entry
  });

  const countingAudioRef = useRef<HTMLAudioElement | null>(null);
  const clickAudioRef = useRef<HTMLAudioElement | null>(null);
  const [audioEnabled, setAudioEnabled] = useState(false);

  useEffect(() => {
    const counting = new Audio("/sounds/counting.m4a");
    counting.preload = "auto";
    counting.volume = 0.15;
    countingAudioRef.current = counting;

    const click = new Audio("/sounds/tick.m4a");
    click.preload = "auto";
    click.volume = 0.2;
    clickAudioRef.current = click;

    const enableAudio = () => {
      setAudioEnabled(true);
      counting.play().then(() => { counting.pause(); }).catch(() => {});
      click.play().then(() => { click.pause(); }).catch(() => {});
      window.removeEventListener("click", enableAudio);
    };

    window.addEventListener("click", enableAudio);
    return () => window.removeEventListener("click", enableAudio);
  }, []);

  const playCountingSfx = () => {
    if (!audioEnabled || !countingAudioRef.current) return;
    const sound = countingAudioRef.current;
    sound.currentTime = 0; 
    sound.play().catch(() => {});
  };

  const playCardClickSfx = () => {
    if (!audioEnabled || !clickAudioRef.current) return;
    clickAudioRef.current.currentTime = 0;
    clickAudioRef.current.play().catch(() => {});
  };

  const stats = [
    { label: "Happy Clients", value: 100, limit: 100, short: "100", suffix: "+", desc: "Partnering with world-class creators to define unique visual identities through high-end cinematic workflows." },
    { label: "Videos Edited", value: 1000, limit: 1000, short: "1000", suffix: "+", desc: "Delivering a massive library of high-retention content with precision using our scaled production systems." },
    { label: "Total Views", value: 1000000, limit: 1000000, short: "1M", suffix: "+", desc: "Generating millions of impressions through data-driven editing techniques and cinematic sound design strategies." },
  ];

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          
          {/* Header with Fade In */}
          <div className={`mx-auto max-w-3xl pb-12 text-center md:pb-20 transition-all duration-1000 delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent uppercase tracking-widest text-xs font-bold">
                Social Proof
              </span>
            </div>
            <h2 className="bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl bg-[linear-gradient(to_right,#e5e7eb,#c7d2fe,#ffffff,#a5b4fc,#e5e7eb)] bg-[length:200%_auto] animate-[gradient_6s_linear_infinite]">
              Apex Visuals by the Numbers
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-indigo-200/65 leading-relaxed">
              We combine cinematic artistry with data-backed strategies to help creators 
              dominate the digital landscape through quality and speed.
            </p>
          </div>

          <div ref={ref}>
            <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  onClick={playCardClickSfx} 
                  /* ANIMATION LOGIC: Staggered entry (delay-300, 500, 700) + Hover Scale */
                  className={`group/card cursor-pointer relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px transition-all duration-700 ease-out 
                    ${inView ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"}
                    hover:scale-[1.03] active:scale-95`}
                  style={{ transitionDelay: `${index * 200 + 300}ms` }}
                >
                  <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/15 blur-3xl transition-opacity duration-500 group-hover/card:opacity-0" />
                  
                  <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 border border-gray-800/50">
                    <div className="flex h-48 items-center justify-center bg-gray-900/50 border-b border-gray-800/50">
                      <div className="font-nacelle text-4xl font-bold tracking-tighter text-gray-100 md:text-5xl">
                        {inView ? (
                          <CountUp
                            start={0}
                            end={stat.value}
                            duration={3}
                            delay={index * 0.2 + 0.5} // Wait for card animation to finish before counting
                            separator=","
                            onUpdate={(val: any) => {
                              if (Math.floor(val.value) % 15 === 0) {
                                playCountingSfx();
                              }
                            }}
                            formattingFn={(value) => value >= stat.limit ? `${stat.short}${stat.suffix}` : value.toLocaleString()}
                          />
                        ) : (
                          <span>0{stat.suffix}</span>
                        )}
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="mb-3">
                        <span className="rounded-full bg-gray-800/40 px-3 py-1 text-xs border border-gray-700">
                          <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                            {stat.label}
                          </span>
                        </span>
                      </div>
                      <p className="text-[15px] text-indigo-200/65 leading-snug">
                        {stat.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Spotlight>
          </div>
        </div>
      </div>
    </section>
  );
}