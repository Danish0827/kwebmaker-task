import { heroBannerData } from "@/data/heroBannerData";
import Link from "next/link";

export default function HeroBanner() {
  const { bgImage, topText, title, highlightTitle, tags = [], buttonText, onButtonClick, weather, } = heroBannerData

  return (
    <section
      className="relative min-h-screen w-full bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute left-1/2 bottom-10 -translate-x-1/2 animate-bounce flex justify-center">
        <Link href="#about">
          <img src="/homearrow.svg" alt="" />
        </Link>
      </div>
      <div className="relative z-10 w-full px-4 md:px-12">
        <div className="grid grid-cols-1 -mt-20 lg:mt-0 items-center gap-6">
          <div className="md:col-span-9 text-center">
            <p className="text-white tracking-[6px] text-xs md:text-sm font-extrabold uppercase">
              {topText}
            </p>
            <h1 className="text-white mt-4 font-thin leading-tight text-[28px] sm:text-[40px] md:text-5xl">
              {title}
              <br />
              <span className="font-extrabold underline decoration-2  underline-offset-20">{highlightTitle}</span>
            </h1>
            <div className="flex justify-center">
              <div className="w-fit flex flex-wrap justify-center items-center gap-3 mt-6 text-white tracking-[4px] text-xs md:text-base bg-gradient-to-l from-[#CDED4E00] via-[#D2F24F] to-[#CDED4E00] py-2 px-6 md:px-16">
                {tags.map((item: any, idx: any) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span>{item}</span>
                    {idx !== tags.length - 1 ? (
                      <span className="w-2 h-2 rounded-full bg-white inline-block" />
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
            <button
              className="mt-8 px-8 py-3 rounded-full border cursor-pointer border-white/40 text-white hover:bg-white hover:text-black transition"
            >
              {buttonText}
            </button>
          </div>
          {weather ? (
            <div className="md:col-span-3 absolute right-0 -bottom-28">
              <div className="hidden lg:block w-full max-w-[390px]  bg-lime-700/60 p-5 text-white ">

                <div className="mt-4 px-8 pb-4">
                  <p className="text-lg font-semibold">{weather.location}</p>

                  <div className="flex items-center justify-between gap-10 mt-2">
                    <p className="text-5xl font-bold leading-none ">
                      {weather.temp}
                    </p>
                    <div>
                      <p className="text-sm opacity-90 font-semibold">{weather.status}</p>
                      <p className="text-xs opacity-80 mt-1">{weather.time}</p>
                    </div>
                  </div>
                </div>
              </div>
              {weather.buttons?.length ? (
                <div className="mt-6 space-y-6 ">
                  {weather.buttons.map((btn: any, i: any) => (
                    <button
                      key={i}
                      className="w-full cursor-pointer hover:-ml-1 duration-500 flex items-center justify-end gap-2 text-white text-sm text-right pr-5 transition"
                    >
                      <img src="/ep_arrow-up.svg" alt="" /> {btn.text}
                    </button>
                  ))}
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
