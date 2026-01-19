"use client";
import { quoteSectionData } from "@/data/quoteData";

export default function QuoteSection() {
  const { text, author, designation, bgImage } = quoteSectionData;

  return (
    <section
      className="relative w-full bg-cover bg-center py-16 lg:py-28 px-4 md:px-12"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-5xl mx-auto text-white">
        <p className="text-lg sm:text-xl md:text-2xl lg:leading-12 lg:text-4xl font-semibold">
          " {text} "
        </p>
        <div className="mt-6 w-full h-px bg-white mx-auto"></div>
        <div className="mt-6 text-left md:text-left">
          <p className="font-medium text-lg mb-2">{author}</p>
          <p className="text-sm opacity-80">{designation}</p>
        </div>
      </div>
    </section>
  );
}
