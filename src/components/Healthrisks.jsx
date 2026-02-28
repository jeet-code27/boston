"use client";

import Image from "next/image";

export default function HealthRisks() {
    return (
        <section className="bg-[#f6f2ea] w-full py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                {/* ── Left: Content ── */}
                <div className="w-full lg:w-1/2 flex flex-col gap-5">

                    {/* Heading */}
                    <h2 className="text-[#1a1a1a] text-3xl lg:text-4xl font-semibold leading-snug">
                        The Serious Dangers of Mouse Infestations
                    </h2>

                    {/* Body */}
                    <p className="text-[#3a3a3a] text-base leading-relaxed">
                        Mice are infamous for invading residential properties, capable of squeezing through incredibly small cracks and crevices. Their presence should alarm any homeowner due to the multitude of severe hazards they introduce. Health-wise, mice directly jeopardize humans by spreading specific rodent-borne illnesses, introducing parasites like fleas and ticks, and contaminating food sources with their waste. Beyond health, mice create substantial property vulnerabilities. Despite their size, their droppings and urine can quickly devastate attics and crawlspaces. Furthermore, as rodents, their constant need to chew to file down their teeth often leads to them gnawing through electrical wires, significantly elevating the risk of a devastating house fire.
                    </p>

                    {/* CTA */}
                    <div className="mt-2">
                        <button className="px-7 py-3 rounded-full border-2 border-[#3a3a3a] text-[#1a1a1a] text-base font-medium bg-transparent hover:bg-[#0a802c] hover:text-white hover:border-[#0a802c] transition-all duration-200 cursor-pointer">
                            Get Pricing
                        </button>
                    </div>
                </div>

                {/* ── Right: Image ── */}
                <div className="w-full lg:w-1/2 flex-shrink-0 flex justify-center lg:justify-end">
                    <div className="relative w-full max-w-[580px]">

                        {/* Image */}
                        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                            <Image
                                src="/images/banner-3.webp"
                                alt="Health Risks Associated With Mice"
                                fill
                                className="object-cover object-center"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}