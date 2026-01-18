type WeatherButton = {
  text: string;
  onClick?: () => void;
};

type WeatherData = {
  label: string;
  location: string;
  temp: string;
  status: string;
  time: string;
  buttons?: WeatherButton[];
};

type HeroBannerProps = {
  bgImage: string;
  topText?: string;
  title: string;
  highlightTitle: string;
  tags?: string[];
  buttonText?: string;
  onButtonClick?: () => void;
  weather?: WeatherData;
};

export default function HeroBanner({
  bgImage,
  topText,
  title,
  highlightTitle,
  tags = [],
  buttonText,
  onButtonClick,
  weather,
}: HeroBannerProps) {
  return (
    <section
      className="relative min-h-screen w-full bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 w-full px-4 md:px-12">
        <div className="grid grid-cols-1  items-center gap-6">
          <div className="md:col-span-9 text-center">
            {topText ? (
              <p className="text-white tracking-[6px] text-xs md:text-sm font-semibold uppercase">
                {topText}
              </p>
            ) : null}

            <h1 className="text-white mt-4 font-extralight leading-tight text-[28px] sm:text-[40px] md:text-4xl">
              {title}
              <br />
              <span className="font-extrabold underline underline-offset-8">{highlightTitle}</span>
            </h1>
            <div className="flex justify-center">
              {tags.length ? (
                <div className="w-fit flex flex-wrap justify-center items-center gap-3 mt-6 text-white tracking-[4px] text-xs md:text-sm bg-gradient-to-l from-[#CDED4E00] via-[#D2F24F] to-[#CDED4E00] py-2 px-16">
                  {tags.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <span>{item}</span>
                      {idx !== tags.length - 1 ? (
                        <span className="w-2 h-2 rounded-full bg-lime-400 inline-block" />
                      ) : null}
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
            {buttonText ? (
              <button
                onClick={onButtonClick}
                className="mt-8 px-8 py-3 rounded-full border border-white/40 text-white hover:bg-white hover:text-black transition"
              >
                {buttonText}
              </button>
            ) : null}

            <div className="mt-10 flex justify-center">
              <div className="h-10 w-[2px] bg-lime-400" />
            </div>
          </div>

          {weather ? (
            <div className="md:col-span-3 absolute right-0 bottom-10">
              <div className="w-full max-w-[390px]  bg-lime-700/60 p-5 text-white ">
                {/* <p className="text-xs tracking-[3px] font-semibold uppercase">
                  {weather.label}
                </p> */}

                <div className="mt-4">
                  <p className="text-lg font-semibold">{weather.location}</p>

                  <div className="flex items-center gap-3 mt-2">
                    <p className="text-5xl font-bold leading-none">
                      {weather.temp}
                    </p>
                    <p className="text-sm opacity-90">{weather.status}</p>
                  </div>

                  <p className="text-xs opacity-80 mt-1">{weather.time}</p>
                </div>

                
              </div>
              {weather.buttons?.length ? (
                  <div className="mt-4 space-y-2">
                    {weather.buttons.map((btn, i) => (
                      <button
                        key={i}
                        className="w-full  text-sm  transition"
                      >
                        {btn.text}
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
