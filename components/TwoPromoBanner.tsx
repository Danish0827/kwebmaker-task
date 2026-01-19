"use client";
import { twoPromoBannerLeft, twoPromoBannerRight } from "@/data/twoPromoBannerData";
import { FiStar } from "react-icons/fi"; // Example icon

export default function TwoPromoBanner() {
  const left = twoPromoBannerLeft;
  const right = twoPromoBannerRight;

  return (
    <section className="w-full bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div
          className="relative min-h-55 md:min-h-72 lg:min-h-80 bg-cover bg-center"
          style={{ backgroundImage: `url(${left.image})` }}
        >
          <div className="absolute inset-0 bg-black/45" />
          <div className="relative z-10 h-full w-full flex items-center px-6 sm:px-10 py-8">
            <div className="max-w-105">
              <div className="flex items-start gap-2">
                <h3 className="text-white text-2xl sm:text-3xl font-extrabold">{left.title}</h3>
                <span className="mt-3 h-2.5 w-2.5 rounded-full bg-white" />
              </div>
              <p className="mt-3 text-white/80 text-sm leading-6">{left.description}</p>
              <button
                onClick={left.onClick}
                className="mt-5 inline-flex items-center gap-3 text-white/90 text-sm hover:text-white transition"
              >
                {left.buttonText} <FiStar className="text-white text-lg" />
              </button>
            </div>
          </div>
        </div>
        <div
          className="relative min-h-[220px] md:min-h-[180px] lg:min-h-[210px] overflow-hidden"
          style={{ backgroundColor: right.bgColor || "#97B81B" }}
        >
          {right.watermarkImage ? (
            <img
              src={right.watermarkImage}
              alt="watermark"
              className="absolute right-0 top-1/2 -translate-y-1/2 h-[150%] opacity-20 pointer-events-none select-none"
            />
          ) : (
            <div className="pointer-events-none absolute right-[-30px] top-1/2 -translate-y-1/2 opacity-15">
              <FiStar className="text-white opacity-20 w-60 h-60" />
            </div>
          )}
          <div className="relative z-10 h-full w-full flex items-center px-6 sm:px-10 py-8">
            <div className="max-w-105">
              <div className="flex items-start gap-2">
                <h3 className="text-white text-2xl sm:text-3xl font-extrabold">{left.title}</h3>
                <span className="mt-3 h-2.5 w-2.5 rounded-full bg-white" />
              </div>
              <p className="mt-3 text-white/85 text-sm leading-6">{right.description}</p>
              <button
                onClick={right.onClick}
                className="mt-5 inline-flex items-center gap-3 text-white/90 text-sm hover:text-white transition"
              >
                {right.buttonText} <FiStar className="text-white text-lg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
