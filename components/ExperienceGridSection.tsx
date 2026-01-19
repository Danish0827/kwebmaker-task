"use client";

import React from "react";
import { experienceGridData } from "@/data/experienceGridData";
import { MediaCard } from "../types/experienceGrid";

export default function ExperienceGridSection() {
  const { cards, bg, watermark } = experienceGridData;

  return (
    <section className="w-full bg-white">
      <div className="py-10 md:pt-60 pb-60 md:pb-80 2xl:pb-96">
        <div
          className="relative overflow-x-clip h-[550px] px-6 sm:px-10 py-10 sm:py-12"
          style={{
            background: `linear-gradient(90deg, ${bg.left} 0%, ${bg.right} 100%)`,
          }}
        >
          {watermark?.enabled && (
            <div className="pointer-events-none absolute inset-y-0 right-0 w-[55%] opacity-[0.18]">
              <div className="absolute -right-10 top-1/2 -translate-y-1/2 text-[380px] leading-none font-black text-white select-none">
                {watermark.text || "S"}
              </div>
            </div>
          )}

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            <div className="lg:col-span-6 space-y-6 lg:pt-6 flex justify-center sm:justify-between gap-8 sm:absolute md:-top-60 sm:left-5 lg:left-20">
              {cards?.[0] && <CardItem card={cards[0]} />}
              {cards?.[2] && <CardItem card={cards[2]} />}
            </div>

            <div className="lg:col-span-6 space-y-6 pt-6 flex justify-center sm:justify-between gap-8 sm:absolute sm:top-96 md:top-60 sm:right-5 lg:right-20">
              {cards?.[1] && <CardItem card={cards[1]} />}
              {cards?.[3] && <CardItem card={cards[3]} />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CardItem({ card }: { card: MediaCard & { textColor?: string } }) {
  const textColor = card.textColor || "white";

  return (
    <div className="w-40 h-72 md:w-72 2xl:w-96 2xl:h-96">
      <div className="relative overflow-hidden rounded-2xl h-40 md:h-72 2xl:h-96">
        <img
          src={card.image}
          alt={card.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <button
          type="button"
          onClick={card.onPlay}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-white/90 flex items-center justify-center shadow hover:scale-105 transition"
        >
          <span className="ml-[2px] inline-block h-0 w-0 border-y-[7px] border-y-transparent border-l-[10px] border-l-gray-700" />
        </button>
      </div>

      <div className="mt-5">
        <h3 style={{ color: textColor }} className="text-base md:text-xl font-bold">
          {card.title}
        </h3>

        {card.tags && card.tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1 md:gap-2">
            {card.tags.map((t, i) => (
              <span
                key={i}
                className={`rounded-full px-2 py-1 text-[8px] md:text-[11px] font-semibold ${textColor === "white" ? 'bg-white text-black' : "bg-[#99B81B] text-white" } `}
                // style={{ color: textColor }}
              >
                {t}
              </span>
            ))}
          </div>
        )}

        <p style={{ color: textColor }} className="mt-3 text-xs md:text-sm md:leading-6 max-w-[440px]" >
          {card.description}
        </p>
      </div>
    </div>
  );
}
