"use client";

import React from "react";

type ProgramCard = {
    title: string;
    subtitle: string;
    image: string;
};

type Props = {
    heading: string;
    description: string;
    buttonText: string;
    onButtonClick?: () => void;
    cards: ProgramCard[];
};

export default function Professionals({
    heading,
    description,
    buttonText,
    onButtonClick,
    cards,
}: Props) {
    return (
        <section className="bg-white">
            <div className="mx-auto max-w-6xl px-4 md:px-8 pt-10 md:pt-14">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="max-w-[520px]">
                        <div className="flex items-start gap-3">
                            <h2 className="text-3xl md:text-4xl font-bold text-black">
                                {heading}
                            </h2>
                            <span className="mt-2 h-[7px] w-[7px] rounded-full bg-lime-500" />
                        </div>

                        <p className="mt-4 text-sm md:text-[14px] leading-6 text-gray-500">
                            {description}
                        </p>
                    </div>

                    <div className="md:pt-2">
                        <button
                            onClick={onButtonClick}
                            className="rounded-full bg-lime-600 px-10 py-3 text-sm font-semibold text-white hover:bg-lime-700 transition"
                        >
                            {buttonText}
                        </button>
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {cards.map((card, idx) => (
                        <div
                            key={idx}

                        >
                            <div className="relative overflow-hidden rounded-2xl h-[320px] group shadow-sm">
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className=" h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            {/* <div className="absolute inset-0 bg-black/30" /> */}

                            <div className="p-7">
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
