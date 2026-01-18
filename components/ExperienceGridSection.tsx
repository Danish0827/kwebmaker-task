"use client";

import React from "react";

type Tag = string;

type MediaCard = {
  id: string | number;
  title: string;
  description: string;
  image: string;
  tags?: Tag[];
  onPlay?: () => void;
};

type Props = {
  cards: MediaCard[];
  bg?: {
    left: string;
    right: string;
  };
  watermark?: {
    enabled?: boolean;
    text?: string;
  };
};

export default function ExperienceGridSection({
  cards,
  bg = { left: "#083c5a", right: "#85a834" },
  watermark = { enabled: true, text: "" },
}: Props) {
  return (
    <section className="w-full bg-white">
      <div className="py-10 md:pt-60 md:pb-80">
        <div
          className="relative overflow-x-clip h-[550px]  px-6 sm:px-10 py-10 sm:py-12"
          style={{
            background: `linear-gradient(90deg, #002F50 0%, #99B81B 100%)`,
          }}
        >
          {watermark?.enabled ? (
            <div className="pointer-events-none absolute inset-y-0 right-0 w-[55%] opacity-[0.18]">
              <div className="absolute -right-10 top-1/2 -translate-y-1/2 text-[380px] leading-none font-black text-white select-none">
                {watermark.text || "S"}
              </div>
            </div>
          ) : null}

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            <div className="lg:col-span-6 space-y-6 lg:pt-6 flex justify-between gap-8 absolute -top-40 left-20">
              {cards?.[0] ? (
                <CardItem card={cards[0]} variant="big" color={bg.left} />
              ) : null}

              {cards?.[2] ? (
                  <CardItem card={cards[2]} variant="big" color={bg.left} />
              ) : null}
            </div>

            <div className="lg:col-span-6 space-y-6 lg:pt-6 flex justify-between gap-8 absolute top-80 right-20">
              {cards?.[1] ? (
                <CardItem card={cards[1]} variant="big" color={bg.right} />
              ) : null}

              {cards?.[3] ? (
                <CardItem card={cards[3]} variant="big" color={bg.right} />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CardItem({
  card,
  variant,
  color
}: {
  card: MediaCard;
  variant: "big" | "small" | "smallWide";
  color:string
}) {
  const imgHeight =
    variant === "big"
      ? "h-[250px] sm:h-[250px]"
      : variant === "smallWide"
      ? "h-[200px] sm:h-[200px]"
      : "h-[200px] sm:h-[200px]";

  const imgRadius = variant === "big" ? "rounded-2xl" : "rounded-xl";

  return (
    <div className="w-72 h-72">
      <div className={`relative overflow-hidden ${imgRadius} ${imgHeight}`}>
        <img
          src={card.image}
          alt={card.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <button
          type="button"
          onClick={card.onPlay}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-white/90 flex items-center justify-center shadow hover:scale-105 transition"
          aria-label={`Play ${card.title}`}
        >
          <span className="ml-[2px] inline-block h-0 w-0 border-y-[7px] border-y-transparent border-l-[10px] border-l-gray-700" />
        </button>
      </div>

      <div className="mt-5">
        <h3 className={`text-[${color}] text-xl font-bold`}>{card.title}</h3>

        {card.tags?.length ? (
          <div className="mt-2 flex flex-wrap gap-2">
            {card.tags.map((t, i) => (
              <span
                key={i}
                className={`rounded-full bg-white/20 px-3 py-1 text-[11px] font-semibold text-[${color}]`}
              >
                {t}
              </span>
            ))}
          </div>
        ) : null}

        <p className="mt-3 text-sm leading-6 text-white/70 max-w-[440px]">
          {card.description}
        </p>
      </div>
    </div>
  );
}



// import React from "react";
// import { MediaCard } from "@/components/interface/experience";

// export default function CardItem({
//   card,
//   color,
//   onPlay,
// }: {
//   card: MediaCard;
//   color: string;
//   onPlay: (card: MediaCard) => void;
// }) {
//   return (
//     <div className="w-72 h-72">
//       <div className="relative overflow-hidden rounded-2xl h-[250px] sm:h-[250px]">
//         <img
//           src={card.image}
//           alt={card.title}
//           className="absolute inset-0 h-full w-full object-cover"
//         />

//         <button
//           type="button"
//           onClick={() => onPlay(card)}
//           className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-white/90 flex items-center justify-center shadow hover:scale-105 transition"
//           aria-label={`Play ${card.title}`}
//         >
//           <span className="ml-[2px] inline-block h-0 w-0 border-y-[7px] border-y-transparent border-l-[10px] border-l-gray-700" />
//         </button>
//       </div>

//       <div className="mt-5">
//         <h3 style={{ color }} className="text-xl font-bold">
//           {card.title}
//         </h3>

//         {card.tags?.length ? (
//           <div className="mt-2 flex flex-wrap gap-2">
//             {card.tags.map((t, i) => (
//               <span
//                 key={i}
//                 style={{ color }}
//                 className="rounded-full bg-white/20 px-3 py-1 text-[11px] font-semibold"
//               >
//                 {t}
//               </span>
//             ))}
//           </div>
//         ) : null}

//         <p className="mt-3 text-sm leading-6 text-white/70 max-w-[440px]">
//           {card.description}
//         </p>
//       </div>
//     </div>
//   );
// }
