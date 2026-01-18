"use client";

import React from "react";

type ConnectivityItem = {
  name: string;
  distance: string;
};

type Props = {
  launchingText: string;
  title: string;
  subtitle: string;
  items: ConnectivityItem[];
  image: {
    src: string;
    alt?: string;
  };
  panelGradient?: {
    from: string;
    to: string;
  };
};

export default function LaunchingConnectivity({
  launchingText,
  title,
  subtitle,
  items,
  image,
  panelGradient = { from: "#003A5D", to: "#99B81B" },
}: Props) {
  return (
    <section className="w-full overflow-hidden bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[520px]">
        <div
          className="bg-gradient-to-tl from-[#99B81B] to-[#003A5D] lg:col-span-5 text-white px-6 sm:px-10 py-10 md:py-14 flex flex-col justify-center"
          style={{
            background: `linear-gradient(150deg, ${panelGradient.from} 30%, ${panelGradient.to} 100%)`,
          }}
        >
          <p className="text-sm tracking-[3px] uppercase opacity-90">
            {launchingText}
          </p>

          <h2 className="mt-5 text-3xl sm:text-4xl md:text-[40px] leading-tight font-extrabold">
            {title}
          </h2>

          <p className="mt-6 text-sm sm:text-base font-semibold opacity-95">
            {subtitle}
          </p>

          <div className="mt-6 space-y-4">
            {items.map((it, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-5 flex items-center justify-center">
                  <span className="text-white/90 text-lg leading-none">⌁</span>
                </div>

                <div className="flex items-center w-full gap-3">
                  <span className="text-[13px] sm:text-sm font-medium text-white/95">
                    {it.name}
                  </span>

                  <div className="flex-1 border-b border-dashed border-white/40 mt-[2px]" />

                  <span className="text-[12px] sm:text-sm text-white/90">
                    {it.distance}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7 relative min-h-[320px] lg:min-h-[520px]">
          <img
            src={image.src}
            alt={image.alt ?? "image"}
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute bottom-6 right-10 flex gap-3">
            <span className="h-2 w-2 rounded-full bg-white/50" />
            <span className="h-2 w-2 rounded-full bg-white" />
            <span className="h-2 w-2 rounded-full bg-white/50" />
          </div>
        </div>
      </div>
    </section>
  );
}
