"use client";

import React, { useMemo, useState } from "react";

type TabKey = "about" | "coaches" | "vision" | "mission";

type Stat = {
  value: string | number;
  label: string;
};

type ImageItem = {
  src: string;
  alt?: string;
};

type TabContent = {
  heading: string;
  description: string;
  stats: Stat[];
  buttonText: string;
  images: ImageItem[];
};

type Props = {
  tabs?: { key: TabKey; label: string }[];
  data?: Record<TabKey, TabContent>;
  defaultTab?: TabKey;
};

const green = "#8DB40F";

export default function AboutTabsSection({
  defaultTab = "about",
  tabs = [
    { key: "about", label: "About Us" },
    { key: "coaches", label: "Coaches" },
    { key: "vision", label: "Vision" },
    { key: "mission", label: "Mission" },
  ],
  data,
}: Props) {
  const defaultData: Record<TabKey, TabContent> = useMemo(
    () => ({
      about: {
        heading: "About Us",
        description:
          "To be the first venue in the world to have 60 multi surface courts at one location and establish first one stop tennis academy in the Asia Pacific producing grand slam champions.",
        stats: [
          { value: 20, label: "courts" },
          { value: 12, label: "coaches" },
          { value: 17, label: "years" },
          { value: 10, label: "clubs" },
        ],
        buttonText: "Read More",
        images: [
          {
            src: "https://images.pexels.com/photos/8224056/pexels-photo-8224056.jpeg?auto=compress&cs=tinysrgb&w=1200",
            alt: "Tennis training",
          },
          {
            src: "https://images.pexels.com/photos/8224057/pexels-photo-8224057.jpeg?auto=compress&cs=tinysrgb&w=1200",
            alt: "Kids tennis",
          },
          {
            src: "https://images.pexels.com/photos/8224037/pexels-photo-8224037.jpeg?auto=compress&cs=tinysrgb&w=1200",
            alt: "Tennis player",
          },
          {
            src: "https://images.pexels.com/photos/8224044/pexels-photo-8224044.jpeg?auto=compress&cs=tinysrgb&w=1200",
            alt: "Tennis woman",
          },
        ],
      },
      coaches: {
        heading: "Coaches",
        description:
          "Our coaching team includes experienced national-level trainers focused on discipline, technique, and growth across all skill levels.",
        stats: [
          { value: 30, label: "trainers" },
          { value: 8, label: "programs" },
          { value: 5, label: "levels" },
          { value: 24, label: "batches" },
        ],
        buttonText: "Meet Coaches",
        images: [
          {
            src: "https://images.pexels.com/photos/8224025/pexels-photo-8224025.jpeg?auto=compress&cs=tinysrgb&w=1200",
          },
          {
            src: "https://images.pexels.com/photos/8224011/pexels-photo-8224011.jpeg?auto=compress&cs=tinysrgb&w=1200",
          },
          {
            src: "https://images.pexels.com/photos/8224030/pexels-photo-8224030.jpeg?auto=compress&cs=tinysrgb&w=1200",
          },
          {
            src: "https://images.pexels.com/photos/8224040/pexels-photo-8224040.jpeg?auto=compress&cs=tinysrgb&w=1200",
          },
        ],
      },
      vision: {
        heading: "Vision",
        description:
          "To become the most trusted tennis ecosystem in Asia Pacific with state-of-the-art infrastructure and world-class mentoring.",
        stats: [
          { value: 60, label: "courts goal" },
          { value: 1000, label: "athletes" },
          { value: 12, label: "countries" },
          { value: 50, label: "events" },
        ],
        buttonText: "Explore Vision",
        images: [
          {
            src: "https://images.pexels.com/photos/8224062/pexels-photo-8224062.jpeg?auto=compress&cs=tinysrgb&w=1200",
          },
          {
            src: "https://images.pexels.com/photos/8224060/pexels-photo-8224060.jpeg?auto=compress&cs=tinysrgb&w=1200",
          },
          {
            src: "https://images.pexels.com/photos/8224052/pexels-photo-8224052.jpeg?auto=compress&cs=tinysrgb&w=1200",
          },
          {
            src: "https://images.pexels.com/photos/8224070/pexels-photo-8224070.jpeg?auto=compress&cs=tinysrgb&w=1200",
          },
        ],
      },
      mission: {
        heading: "Mission",
        description:
          "Build champions through high-performance training, elite coaching support, sports science, and international exposure.",
        stats: [
          { value: 4, label: "pillars" },
          { value: 365, label: "days plan" },
          { value: 18, label: "age groups" },
          { value: 1, label: "academy" },
        ],
        buttonText: "Our Mission",
        images: [
          {
            src: "https://images.pexels.com/photos/8224046/pexels-photo-8224046.jpeg?auto=compress&cs=tinysrgb&w=1200",
          },
          {
            src: "https://images.pexels.com/photos/8224024/pexels-photo-8224024.jpeg?auto=compress&cs=tinysrgb&w=1200",
          },
          {
            src: "https://images.pexels.com/photos/8224012/pexels-photo-8224012.jpeg?auto=compress&cs=tinysrgb&w=1200",
          },
          {
            src: "https://images.pexels.com/photos/8224014/pexels-photo-8224014.jpeg?auto=compress&cs=tinysrgb&w=1200",
          },
        ],
      },
    }),
    []
  );

  const mergedData = data ? { ...defaultData, ...data } : defaultData;
  const [active, setActive] = useState<TabKey>(defaultTab);

  const content = mergedData[active];

  return (
    <section className="bg-white my-7 relative">
        <div className="absolute left-[-40px] top-[-30px] hidden md:block select-none">
            <div className="text-[260px] leading-none font-extrabold text-lime-100">
              <img src="/watermark.svg" alt="" />
            </div>
          </div>
      <div className="mx-auto max-w-6xl px-4 md:px-8 py-10 md:py-16">
        <div className="max-w-2xl mx-auto text-center">
            <h2>
                To be the first venue in the world to have 60 multi surface courts 
at one location and establish first one stop tennis academy 
in the Asia Pacific producing grand slam champions.
            </h2>
        </div>
        <div className="relative">
          
<div className="flex justify-center my-10">
                <div className="inline-flex gap-10 sm:gap-12 border-b border-gray-200">
                  {tabs.map((t) => {
                    const isActive = t.key === active;
                    return (
                      <button
                        key={t.key}
                        onClick={() => setActive(t.key)}
                        className={`relative pb-4 text-sm sm:text-base font-semibold transition ${
                          isActive ? "text-black" : "text-gray-300"
                        }`}
                      >
                        {t.label}
                        {isActive ? (
                          <span
                            className="absolute left-0 -bottom-[1px] h-[2px] w-full"
                            style={{ backgroundColor: green }}
                          />
                        ) : null}
                      </button>
                    );
                  })}
                </div>
              </div>
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
            <div className="w-full lg:w-[44%]">
              

              <div className="mt-10">
                <div className="flex items-center gap-3">
                  <span
                    className="h-[6px] w-[6px] rounded-full"
                    style={{ backgroundColor: green }}
                  />
                  <h2 className="text-3xl md:text-4xl font-extrabold text-black">
                    {content.heading}
                  </h2>
                </div>

                <p className="mt-5 text-sm md:text-[15px] leading-7 text-gray-500 max-w-[520px]">
                  {content.description}
                </p>

                <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-6 max-w-[520px]">
                  {content.stats.map((s, idx) => (
                    <div key={idx}>
                      <div
                        className="text-2xl md:text-3xl font-extrabold"
                        style={{ color: green }}
                      >
                        {s.value}
                      </div>
                      <div className="text-xs md:text-sm text-gray-400 mt-1">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  className="mt-10 rounded-full px-10 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
                  style={{ backgroundColor: green }}
                >
                  {content.buttonText}
                </button>
              </div>
            </div>

            <div className="w-full lg:w-[56%]">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-8 overflow-hidden rounded-md">
                  <img
                    src={content.images[0]?.src}
                    alt={content.images[0]?.alt ?? "image"}
                    className="h-[220px] md:h-[230px] w-full object-cover"
                  />
                </div>

                <div className="col-span-12 md:col-span-4 overflow-hidden rounded-md">
                  <img
                    src={content.images[1]?.src}
                    alt={content.images[1]?.alt ?? "image"}
                    className="h-[220px] md:h-[230px] w-full object-cover"
                  />
                </div>

                <div className="col-span-12 md:col-span-5 overflow-hidden rounded-md">
                  <img
                    src={content.images[2]?.src}
                    alt={content.images[2]?.alt ?? "image"}
                    className="h-[220px] md:h-[230px] w-full object-cover"
                  />
                </div>

                <div className="col-span-12 md:col-span-7 overflow-hidden rounded-md">
                  <img
                    src={content.images[3]?.src}
                    alt={content.images[3]?.alt ?? "image"}
                    className="h-[220px] md:h-[230px] w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* <div className="hidden lg:block absolute left-[44%] top-0 h-full w-[1px] bg-gray-100" /> */}
        </div>
      </div>
    </section>
  );
}
