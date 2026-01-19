"use client";

import React from "react";
import { programsSectionData, programsCards } from "@/data/programsData";

export default function ProgramsSection() {
  const { heading, description, buttonText, onButtonClick } = programsSectionData;

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-10 md:py-14">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 lg:gap-8">
          <div className="max-w-130">
            <div className="flex items-start gap-2">
              <h2 className="text-3xl md:text-4xl font-extrabold text-black">{heading}</h2>
              <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#99B81B]" />
            </div>
            <p className="mt-4 text-sm md:text-[14px] leading-6 text-gray-500">
              {description}
            </p>
          </div>
          <div className="md:pt-2">
            <button
              onClick={onButtonClick}
              className="rounded-full bg-[#99B81B] px-10 py-3 text-sm font-semibold text-white hover:bg-lime-700 transition"
            >
              {buttonText}
            </button>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {programsCards.map((card, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-2xl h-[420px] group shadow-sm"
            >
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <h3 className="text-white text-2xl font-bold">{card.title}</h3>
                <p className="text-white/90 text-sm mt-2">{card.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
