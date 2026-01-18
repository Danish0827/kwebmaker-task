"use client";

import React from "react";

type Props = {
  items: string[];
  speed?: number;
  dot?: string;
  accentColor?: string;
  outlineItems?: string[];
};

export default function TextMarquee({
  items,
  speed = 18,
  dot = "•",
  accentColor = "#97B81B",
  outlineItems = [],
}: Props) {
  const content = items.flatMap((t, i) => [
    { text: t, idx: i },
    { text: dot, idx: `dot-${i}` as any },
  ]);

  return (
    <div className="w-full overflow-hidden bg-white pt-10 pb-20">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <div className="relative w-full">
        <div
          className="flex w-[200%] whitespace-nowrap"
          style={{
            animation: `marquee ${speed}s linear infinite`,
          }}
        >
          <MarqueeRow
            content={content}
            accentColor={accentColor}
            outlineItems={outlineItems}
          />
          <MarqueeRow
            content={content}
            accentColor={accentColor}
            outlineItems={outlineItems}
          />
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({
  content,
  accentColor,
  outlineItems,
}: {
  content: { text: string; idx: any }[];
  accentColor: string;
  outlineItems: string[];
}) {
  return (
    <div className="flex w-1/2 items-center gap-6 px-6 py-3">
      {content.map((c) => {
        const isDot = c.text === "•";
        const isOutline = outlineItems.includes(c.text);

        if (isDot) {
          return (
            <span
              key={c.idx}
              className="text-[28px] md:text-[34px] font-extrabold"
              style={{ color: accentColor }}
            >
              {c.text}
            </span>
          );
        }

        return (
          <span
            key={c.idx}
            className="text-[34px] md:text-[44px] font-extrabold uppercase tracking-[2px]"
            style={
              isOutline
                ? {
                    color: "transparent",
                    WebkitTextStroke: `2px ${accentColor}`,
                    textStroke: `2px ${accentColor}` as any,
                  }
                : { color: accentColor }
            }
          >
            {c.text}
          </span>
        );
      })}
    </div>
  );
}
