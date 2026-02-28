"use client";

import Image from "next/image";

export default function PeaceOfMind() {
    return (
        <section className="relative w-full min-h-[420px] flex items-center justify-center overflow-hidden">

            {/* ── Background Image ── */}
            <Image
                src="/images/banner-6.png"
                alt="Peace of Mind Background"
                fill
                priority
                className="object-cover object-center"
            />

            {/* ── Dark green overlay ── */}
            <div className="absolute inset-0 bg-[#0d2a1a]/75" />

            {/* ── Centered Content ── */}
            <div className="relative z-10 text-center px-6 max-w-3xl mx-auto py-20">

                {/* Tag */}
                <p className="text-[#c9de6b] text-[11px] font-bold tracking-[4px] uppercase mb-4">
                    Take Back Your Peace Of Mind
                </p>

                {/* Heading */}
                <h2 className="text-white text-4xl lg:text-5xl font-bold leading-tight mb-6">
                    Rely on the Bug Experts,{" "}
                    <span className="text-[#c9de6b]">That&apos;s Us.</span>
                </h2>

                {/* Subtext */}
                <p className="text-white/80 text-base lg:text-lg leading-relaxed mb-8">
                    Do you have concerns about eliminating stubborn nuisances? Ready to book an appointment for rapid, reliable extermination? Reach out by phone today or request your complimentary estimate online.
                </p>

                {/* CTA Button */}
                <button className="px-8 py-3.5 rounded-full bg-[#0a802c] hover:bg-[#076622] text-white text-base font-semibold transition-colors duration-200 cursor-pointer">
                    Book Now!
                </button>

            </div>
        </section>
    );
}