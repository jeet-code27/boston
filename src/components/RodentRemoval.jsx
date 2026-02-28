"use client";

import Image from "next/image";

export default function RodentRemoval() {
    return (
        <section className="bg-[#f6f2ea] w-full py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                {/* ── Left: Content ── */}
                <div className="w-full lg:w-1/2 flex flex-col gap-5">

                    {/* Heading */}
                    <h2 className="text-[#1a1a1a] text-3xl lg:text-4xl font-bold leading-snug">
                        Professional Rodent Removal
                    </h2>

                    {/* Sub tag */}
                    <p className="text-[#0a802c] text-xs font-bold tracking-[3px] uppercase">
                        How We Help Protect You
                    </p>

                    {/* Body */}
                    <p className="text-[#3a3a3a] text-base leading-relaxed">
                        At <span className="font-semibold underline cursor-pointer">Boston Pest Control</span>, we recognize that a mouse infestation is a serious threat, not just a minor annoyance. These rodents can cause extensive property damage and carry harmful diseases, making their swift removal essential for your peace of mind. If you suspect mice have invaded your home, you need our expert extermination team to take action immediately. Our <span className="font-semibold underline cursor-pointer">year-round defense plan</span> provides your home with comprehensive, multi-layered security against more than 50 pest varieties, including{" "}
                        <span className="underline cursor-pointer">rats</span>,{" "}
                        <span className="underline cursor-pointer">voles</span>, and mice.
                    </p>

                    {/* CTA */}
                    <div className="mt-2">
                        <button className="px-7 py-3 rounded-full border-2 border-[#3a3a3a] text-[#1a1a1a] text-base font-medium bg-transparent hover:bg-[#0a802c] hover:text-white hover:border-[#0a802c] transition-all duration-200 cursor-pointer">
                            How to Buy
                        </button>
                    </div>
                </div>

                {/* ── Right: Full Image ── */}
                <div className="w-full lg:w-1/2 flex-shrink-0">
                    <Image
                        src="/images/banner-2.webp"
                        alt="Professional Rodent Removal"
                        width={700}
                        height={700}
                        className="w-full h-auto object-contain"
                    />
                </div>

            </div>
        </section>
    );
}