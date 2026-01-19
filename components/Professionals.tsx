"use client";

import React from "react";
import { professionalsCards, professionalsSectionInfo } from "@/data/professionalsData";

export default function Professionals() {
  const { heading, description, buttonText, onButtonClick } = professionalsSectionInfo;

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 md:px-8 pt-10 md:pt-14">

        {/* Heading + Button */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div className="max-w-[520px]">
            <div className="flex items-start gap-2">
              <h2 className="text-3xl md:text-4xl font-bold text-black">{heading}</h2>
              <span className="mt-2 h-[7px] w-[7px] rounded-full bg-[#99B81B]" />
            </div>
            <p className="mt-4 text-sm md:text-[14px] leading-6 text-gray-500">{description}</p>
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

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {professionalsCards.map((card, idx) => (
            <div key={idx} className="overflow-hidden rounded-2xl shadow-sm group">
              <div className="relative h-[320px]">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-black text-2xl font-medium">{card.title}</h3>
                <p className="text-black text-base mt-2 italic">{card.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
