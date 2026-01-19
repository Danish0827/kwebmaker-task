"use client";
import { glimpseData } from "@/data/glimpseData";

export default function GlimpseSection() {
    const {
        title,
        description,
        buttonText,
        pointsLeft,
        pointsRight,
        title2,
        description2,
        buttonText2,
        leftImage,
        rightImage,
        backgroundImage,
    } = glimpseData;

    return (
        <section className="relative w-full  bg-white lg:pb-40 lg:mb-80">
            <div
                className="absolute inset-0 opacity-70"
                style={{
                    backgroundImage: backgroundImage
                        ? `url(${backgroundImage})`
                        : "radial-gradient(circle at 30% 20%, rgba(0,0,0,0.04), rgba(0,0,0,0) 40%), radial-gradient(circle at 70% 80%, rgba(0,0,0,0.04), rgba(0,0,0,0) 35%)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />
            <div className="relative mx-auto max-w-7xl px-4 md:px-8 py-12 md:py-16">
                <div className="my-12 grid grid-cols-1 lg:grid-cols-12 gap-2 lg:gap-8 items-start">
                    <div className="lg:col-span-8">
                        <div className="flex items-start gap-2">
                            <h2 className="text-2xl md:text-4xl font-extrabold text-black">{title}</h2>
                            <span className="h-2.5 w-2.5 rounded-full bg-[#99B81B]" />
                        </div>
                        <p className="mt-4 text-sm md:text-[15px] leading-7 text-gray-500 max-w-[520px]">
                            {description}
                        </p>
                    </div>
                    <div className="lg:col-span-4 flex lg:justify-end items-start">
                        <button
                            onClick={() => alert("Button clicked")}
                            className="mt-2 lg:mt-0 rounded-full bg-[#99B81B] px-8 py-3 text-sm font-semibold text-white hover:bg-lime-700 transition"
                        >
                            {buttonText}
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                    <div className="space-y-6">
                        {pointsLeft.map((p, idx) => (
                            <div key={idx} className="flex gap-3">
                                <img src="/leftarrow.svg" alt="" />
                                <p className="text-[13px] md:text-sm lg:text-base leading-6 text-gray-600">{p.text}</p>
                            </div>
                        ))}
                    </div>
                    <div className="space-y-6">
                        {pointsRight.map((p, idx) => (
                            <div key={idx} className="flex gap-3">
                                <img src="/leftarrow.svg" alt="" />
                                <p className="text-[13px] md:text-sm lg:text-base leading-6 text-gray-600">{p.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="my-12 grid grid-cols-1 lg:grid-cols-12 gap-2 lg:gap-8 items-start">
                    <div className="lg:col-span-8">
                        <div className="flex items-start gap-2">
                            <h2 className="text-2xl md:text-4xl font-extrabold text-black">{title2}</h2>
                            <span className="h-2.5 w-2.5 rounded-full bg-[#99B81B]" />
                        </div>
                        <p className="mt-4 text-sm md:text-[15px] leading-7 text-gray-500 max-w-[520px]">
                            {description2}
                        </p>
                    </div>

                    <div className="lg:col-span-4 flex lg:justify-end items-start">
                        <button
                            onClick={() => alert("Button clicked")}
                            className="mt-2 lg:mt-0 rounded-full bg-[#99B81B] px-8 py-3 text-sm font-semibold text-white hover:bg-lime-700 transition"
                        >
                            {buttonText2}
                        </button>
                    </div>
                </div>
                <div className="lg:absolute mt-12 grid lg:grid-cols-12 gap-4 lg:gap-8 items-start">
                    <div className="col-span-12 lg:col-span-4 overflow-hidden rounded-lg shadow-lg">
                        <img
                            src={leftImage.src}
                            alt={leftImage.alt ?? "image"}
                            className="w-full h-[360px] md:h-[430px] lg:h-[450px] object-cover grayscale"
                        />
                    </div>
                    <div className="col-span-12 lg:col-span-8 overflow-hidden rounded-md shadow-sm">
                        <img
                            src={rightImage.src}
                            alt={rightImage.alt ?? "image"}
                            className="w-full h-[360px] md:h-[430px] lg:h-[450px] object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
