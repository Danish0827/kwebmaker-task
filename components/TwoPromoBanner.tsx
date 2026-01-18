"use client";

import React from "react";

type BannerSide = {
  title: string;
  description: string;
  buttonText: string;
  onClick?: () => void;
};

type LeftSide = BannerSide & {
  image: string;
};

type RightSide = BannerSide & {
  bgColor?: string;
  watermarkImage?: string;
};

type Props = {
  left: LeftSide;
  right: RightSide;
};

export default function TwoPromoBanner({ left, right }: Props) {
  return (
    <section className="w-full bg-white">
      <div className="w-full grid grid-cols-1 md:grid-cols-2">
        <div
          className="relative min-h-[220px] md:min-h-[180px] lg:min-h-[210px] bg-cover bg-center"
          style={{ backgroundImage: `url(${left.image})` }}
        >
          <div className="absolute inset-0 bg-black/45" />

          <div className="relative z-10 h-full w-full flex items-center px-6 sm:px-10 py-8">
            <div className="max-w-[420px]">
              <div className="flex items-start gap-3">
                <span className="mt-3 h-[7px] w-[7px] rounded-full bg-white" />
                <h3 className="text-white text-2xl sm:text-3xl font-extrabold">
                  {left.title}
                </h3>
              </div>

              <p className="mt-3 text-white/80 text-sm leading-6">
                {left.description}
              </p>

              <button
                onClick={left.onClick}
                className="mt-5 inline-flex items-center gap-3 text-white/90 text-sm hover:text-white transition"
              >
                {left.buttonText}
                <span className="text-lg leading-none">→</span>
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
              <svg
                width="260"
                height="260"
                viewBox="0 0 256 256"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M86 72c9-18 20-28 35-30 16-2 32 7 40 22 8 15 6 33-7 48-9 10-18 16-28 20l-5-11c9-3 17-9 24-17 9-10 10-23 5-33-5-9-15-15-25-14-10 1-18 9-25 22l-14-7Z"
                  fill="white"
                />
                <path
                  d="M126 116c-25 8-42 29-52 55-8 20-10 36-10 36h16s3-22 13-43c9-18 23-33 44-38l-11-10Z"
                  fill="white"
                />
                <path
                  d="M164 104c-12 6-23 17-31 30-9 15-15 33-15 33h17s5-14 12-26c7-11 15-19 25-23l-8-14Z"
                  fill="white"
                />
                <path
                  d="M190 180c-9 0-16 7-16 16s7 16 16 16 16-7 16-16-7-16-16-16Z"
                  fill="white"
                />
              </svg>
            </div>
          )}

          <div className="relative z-10 h-full w-full flex items-center px-6 sm:px-10 py-8">
            <div className="max-w-[420px]">
              <div className="flex items-start gap-3">
                <span className="mt-3 h-[7px] w-[7px] rounded-full bg-white" />
                <h3 className="text-white text-2xl sm:text-3xl font-extrabold">
                  {right.title}
                </h3>
              </div>

              <p className="mt-3 text-white/85 text-sm leading-6">
                {right.description}
              </p>

              <button
                onClick={right.onClick}
                className="mt-5 inline-flex items-center gap-3 text-white/90 text-sm hover:text-white transition"
              >
                {right.buttonText}
                <span className="text-lg leading-none">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
