"use client";

import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative w-full h-[650px] sm:h-[640px] flex items-center overflow-hidden bg-[#f6f2e]">


            <Image
                src="/images/hero-banner.webp"
                alt="Hero Background"
                fill
                priority
                className="object-cover object-bottom bg-[#f6f2ea]"
            />



            {/* ── Content — left aligned ── */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-16">
                <div className="max-w-sm">

                    {/* Tag */}
                    <p className="text-[#0a802c] text-[11px] font-semibold tracking-[3px] uppercase mb-3">
                        Mice Extermination
                    </p>

                    {/* Heading */}
                    <h1 className="text-white text-5xl font-bold leading-tight mb-3">
                        Mouse Extermination
                    </h1>

                    {/* Sub heading */}
                    <p className="text-white/75 text-base font-normal mb-8">
                        Say goodbye to unwanted guests
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap items-center gap-3">
                        <button className="px-6 py-2.5 rounded-full border-2 border-white text-white text-sm font-semibold bg-transparent hover:bg-white hover:text-[#1b4332] transition-all duration-200 cursor-pointer whitespace-nowrap">
                            Schedule Online
                        </button>
                        <button className="px-6 py-2.5 rounded-full bg-[#0a802c] hover:bg-[#2d6a4f] text-white text-sm font-semibold border-2 border-[#0a802c] hover:border-[#2d6a4f] transition-all duration-200 cursor-pointer whitespace-nowrap">
                            Call Today
                        </button>
                    </div>

                </div>
            </div>

        </section>
    );
}