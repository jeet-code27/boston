"use client";

import Image from "next/image";

export default function ProcessSection() {
    return (
        <section id="process" className="bg-[#f6f2ea] w-full py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                {/* ── Left: Image ── */}
                <div className="w-full lg:w-1/2 flex-shrink-0">
                    <div className="relative w-full aspect-[4/5] max-w-[560px] mx-auto lg:mx-0 rounded-2xl overflow-hidden">
                        <Image
                            src="/images/banner-1.webp"
                            alt="Boston Mice Extermination Process"
                            fill
                            className="object-cover object-center"
                        />
                    </div>
                </div>

                {/* ── Right: Content ── */}
                <div className="w-full lg:w-1/2 flex flex-col gap-5">

                    {/* Heading */}
                    <h2 className="text-[#1a1a1a] text-3xl lg:text-4xl font-semibold leading-snug">
                        The Boston Mice Extermination Process
                    </h2>

                    {/* Paragraphs */}
                    <p className="text-[#3a3a3a] text-base leading-relaxed">
                        Our highly trained and certified extermination specialists conduct a comprehensive inspection of your property to identify all potential entry pathways. We strategically position secure rodent bait stations around your home's perimeter to establish a protective barrier against mice. These stations are equipped with a specialized formula designed to effectively dehydrate the pests.
                    </p>

                    <p className="text-[#3a3a3a] text-base leading-relaxed">
                        After consumption, mice typically exit your property seeking a water source. Designed with safety in mind, our bait stations are heavy-duty and securely locked with a proprietary key, ensuring children and pets cannot access the contents. Our team conducts seasonal inspections to monitor and replenish the bait stations as needed, providing you with continuous, dependable protection and preventing future infestations before they begin.
                    </p>

                    {/* CTA Button */}
                    <div className="mt-2">
                        <button className="px-7 py-3 rounded-full border-2 border-[#0a802c] text-[#0a802c] text-base font-medium bg-transparent hover:bg-[#0a802c] hover:text-white transition-all duration-200 cursor-pointer whitespace-nowrap">
                            Starting At $29
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}