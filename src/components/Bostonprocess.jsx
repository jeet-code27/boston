"use client";

import Image from "next/image";
import { useState } from "react";

const STEPS = [
    { id: 1, label: "Comprehensive Property Inspection" },
    { id: 2, label: "Strategic Bait Station Placement" },
    { id: 3, label: "Routine Maintenance & Replenishment" },
    { id: 4, label: "Exterior Defensive Barrier" },
];

// Positions of the numbered dots on the image (in % from top-left)
const DOT_POSITIONS = [
    { id: 1, top: "38%", left: "36%" },
    { id: 2, top: "58%", left: "88%" },
    { id: 3, top: "62%", left: "18%" },
    { id: 4, top: "80%", left: "62%" },
];

export default function BostonProcess() {
    const [activeStep, setActiveStep] = useState(3);

    return (
        <section id="why-us" className="bg-[#f6f2ea] w-full py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-16">

                {/* ── Top heading block ── */}
                <div className="text-center mb-10">
                    <h2 className="text-[#1a1a1a] text-3xl lg:text-4xl font-semibold">
                        Our Proven{" "}
                        <span className="text-[#c9de6b] font-bold">Approach</span>
                    </h2>
                    <p className="text-[#0a802c] text-xs font-bold tracking-[3px] uppercase mt-3 mb-4">
                        Delivering Lasting Results
                    </p>
                    <p className="text-[#3a3a3a] text-base mb-6">
                        We safeguard your entire property, building a shield from the ground up.
                    </p>
                    <button className="px-7 py-3 rounded-full bg-[#0a802c] hover:bg-[#076622] text-white text-sm font-semibold transition-colors duration-200 cursor-pointer">
                        Call Today
                    </button>
                </div>

                {/* ── Bottom: Steps left + Image right ── */}
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-0 mt-6">

                    {/* Steps list */}
                    <div className="w-full lg:w-[38%] flex flex-col gap-6 lg:pr-10">
                        {STEPS.map((step) => {
                            const isActive = step.id === activeStep;
                            return (
                                <button
                                    key={step.id}
                                    onClick={() => setActiveStep(step.id)}
                                    className={`text-left text-base transition-all duration-200 cursor-pointer bg-transparent border-none p-0 ${isActive
                                        ? "font-bold text-[#1a1a1a]"
                                        : "font-normal text-[#555] hover:text-[#1a1a1a]"
                                        }`}
                                >
                                    <span>
                                        {step.id}. {step.label}
                                    </span>
                                    {isActive && (
                                        <div className="mt-1.5 w-8 h-[3px] bg-[#0a802c] rounded-full" />
                                    )}
                                </button>
                            );
                        })}
                    </div>

                    {/* Image with number dots */}
                    <div className="w-full lg:w-[62%] relative">
                        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-lg">
                            <Image
                                src="/images/banner-4.png"
                                alt="Boston Process"
                                fill
                                className="object-cover object-center"
                            />

                            {/* Numbered dots */}
                            {DOT_POSITIONS.map((dot) => {
                                const isActive = dot.id === activeStep;
                                return (
                                    <button
                                        key={dot.id}
                                        onClick={() => setActiveStep(dot.id)}
                                        style={{ top: dot.top, left: dot.left }}
                                        className={`absolute -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md transition-all duration-200 cursor-pointer border-none ${isActive
                                            ? "bg-[#0a802c] scale-110"
                                            : "bg-[#2d5a40]/80 hover:bg-[#0a802c]"
                                            }`}
                                    >
                                        {dot.id}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}