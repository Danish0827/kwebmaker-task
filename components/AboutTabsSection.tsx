"use client";
import { useState } from "react";
import { TabKey, TabsData, Tab } from "@/types/aboutTabs";
import { defaultTabs, defaultTabsData } from "@/data/aboutTabsData";

const green = "#99B81B";

type Props = {
  tabs?: Tab[];
  data?: TabsData;
  defaultTab?: TabKey;
};

export default function AboutTabsSection({
  tabs = defaultTabs,
  data,
  defaultTab = "about",
}: Props) {
  const mergedData: TabsData = data ? { ...defaultTabsData, ...data } : defaultTabsData;
  const [active, setActive] = useState<TabKey>(defaultTab);
  const content = mergedData[active];

  return (
    <section id="about" className="bg-white my-7 relative">
      <div className="absolute left-[-40px] top-[-30px] hidden md:block select-none">
        <div className="text-[260px] leading-none font-extrabold text-lime-100">
          <img src="/watermark.svg" alt="" />
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-10 md:py-16">
        <div
          className="max-w-185 about-span-green text-lg lg:text-2xl mx-auto text-center"
          dangerouslySetInnerHTML={{ __html: mergedData.about.description }}
        />
        <div className="flex justify-center my-10">
          <div className="inline-flex gap-10 sm:gap-12 border-b border-gray-200">
            {tabs.map((t) => {
              const isActive = t.key === active;
              return (
                <button
                  key={t.key}
                  onClick={() => setActive(t.key)}
                  className={`relative pb-4 text-sm sm:text-lg xl:text-xl font-semibold cursor-pointer transition ${isActive ? "text-black" : "text-gray-300"
                    }`}
                >
                  {t.label}
                  {isActive && (
                    <span
                      className="absolute left-0 -bottom-[1px] h-[2px] w-full"
                      style={{ backgroundColor: green }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 lg:pt-10">
          <div className="w-full lg:w-[44%]">
            <div className="lg:mt-10">
              <div className="flex items-start gap-2">
                <h2 className="text-3xl md:text-4xl font-extrabold text-black">
                  {content.heading}
                </h2>
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: green }}
                />
              </div>
              <div
                className="mt-5 text-sm md:text-base  text-black max-w-[520px]"
                dangerouslySetInnerHTML={{ __html: content.description }}
              />
              <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-6 text-center lg:text-left max-w-[520px]">
                {content.stats.map((s, idx) => (
                  <div key={idx}>
                    <div
                      className="text-4xl md:text-3xl lg:text-4xl font-extrabold"
                      style={{ color: green }}
                    >
                      {s.value}
                    </div>
                    <div className="text-xs md:text-sm capitalize lg:text-base text-black mt-1">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              <button
                className="mt-10 flex justify-center mx-auto lg:mx-0 rounded-full px-10 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
                style={{ backgroundColor: green }}
              >
                {content.buttonText}
              </button>
            </div>
          </div>

          <div className="w-full lg:w-[56%]">
            <div className="grid grid-cols-12 gap-1.5 lg:gap-4">
              {content.images.map((img, idx) => {
                const colSpans = ["col-span-8", "col-span-4", "col-span-6", "col-span-6"];
                const colClass = colSpans[idx] || "col-span-12";

                return (
                  <div key={idx} className={` ${colClass} overflow-hidden`}>
                    <img
                      src={img.src}
                      alt={img.alt ?? "image"}
                      className="h-40 md:h-58 w-full object-cover"
                    />
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
