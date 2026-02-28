"use client";

import Image from "next/image";

const MOUSE_TRAITS = [
    "Prominent, oversized ears",
    "Slender, hair-covered tails",
    "Compact body frames",
    "Fine, short fur",
    "Pale or distinctively light underbellies",
    "Typically cap at 1.5 ounces in weight",
];

export default function MouseVsRat() {
    return (
        <section id="pest-guide" className="bg-[#f6f2ea] w-full py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                {/* ── Left: Single full image ── */}
                <div className="w-full lg:w-[45%] flex-shrink-0">
                    <Image
                        src="/images/banner-5.webp"
                        alt="Boston technicians"
                        width={600}
                        height={800}
                        className="w-full h-auto object-contain"
                    />
                </div>

                {/* ── Right: Content ── */}
                <div className="w-full lg:w-[55%] flex flex-col gap-5">

                    {/* Heading */}
                    <h2 className="text-[#1a1a1a] text-3xl lg:text-4xl font-semibold leading-snug">
                        Mice vs. Rats: How to Tell Them Apart
                    </h2>

                    {/* Body paragraph */}
                    <p className="text-[#3a3a3a] text-base leading-relaxed">
                        Although all <span className="underline cursor-pointer">rodents</span> share basic traits like prominent upper incisors, short limbs, and elongated tails, mice and rats remain the most prevalent household invaders in the country. Rats are significantly bulkier, easily tipping the scales at 10 ounces. They feature robust bodies, scaly, thick tails, disproportionately large feet, and relatively small ears. A rat can devour an ounce of food daily and yield litters of up to 10. Conversely, mice are much smaller than their rat relatives. A typical mouse consumes just a fraction of an ounce of food daily but reproduces more rapidly, often birthing up to 16 pups in a single litter.
                    </p>

                    {/* Subheading */}
                    <p className="text-[#1a1a1a] text-base font-bold mt-1">
                        Key traits specific to mice include:
                    </p>

                    {/* Bullet list */}
                    <ul className="flex flex-col gap-2">
                        {MOUSE_TRAITS.map((trait) => (
                            <li key={trait} className="flex items-center gap-3 text-[#3a3a3a] text-base">
                                <span className="w-[6px] h-[6px] rounded-full bg-[#3a3a3a] flex-shrink-0" />
                                {trait}
                            </li>
                        ))}
                    </ul>

                    {/* CTA */}
                    <div className="mt-4">
                        <button className="px-7 py-3 rounded-full border-2 border-[#0a802c] text-[#1a1a1a] text-base font-medium bg-transparent hover:bg-[#0a802c] hover:text-white transition-all duration-200 cursor-pointer">
                            Get Pricing
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}