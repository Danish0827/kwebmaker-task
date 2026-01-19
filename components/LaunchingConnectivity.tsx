"use client";

import React from "react";
import { connectivityItems, connectivityImage, connectivityPanelGradient } from "@/data/connectivityData";
import Image from "next/image";

export default function LaunchingConnectivity() {
  const launchingText = "LAUNCHING";
  const title = `Signature Slam Academy\nHunter Valley`;
  const subtitle = "SSA Connectivity";

  return (
    <section className="w-full overflow-hidden bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[520px]">
        <div
          className="lg:col-span-5 text-white px-6 sm:px-10 py-10 md:py-14 flex flex-col justify-center"
          style={{
            background: `linear-gradient(150deg, ${connectivityPanelGradient.from} 30%, ${connectivityPanelGradient.to} 100%)`,
          }}
        >
          <p className="text-sm tracking-[3px] uppercase opacity-90">{launchingText}</p>
          <h2 className="mt-3 text-2xl md:text-4xl leading-tight font-extrabold whitespace-pre-line">
            {title}
          </h2>
          <p className="mt-5 text-sm sm:text-base font-semibold opacity-95">{subtitle}</p>
          <div className="mt-6 space-y-4">
            {connectivityItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-5 flex items-center justify-center">
                  <span className="text-white/90 text-lg leading-none">⌁</span>
                </div>
                <div className="flex items-center w-full gap-3">
                  <span className="text-[13px] sm:text-sm font-medium text-white/95">{item.name}</span>
                  <div className="flex-1 border-b border-dashed border-white/40 mt-[2px]" />
                  <span className="text-[12px] sm:text-sm text-white/90">{item.distance}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-7 relative min-h-[320px] lg:min-h-[520px]">
          <Image
            src={connectivityImage.src}
            alt={connectivityImage.alt ?? "image"}
            width={1000}
            height={1000}
            unoptimized
            className="absolute inset-0 h-full w-full object-cover"
          />        
        </div>

      </div>
    </section>
  );
}
