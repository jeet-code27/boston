"use client";

import Image from "next/image";
import { useState } from "react";

const REVIEWS = [
    {
        id: 1,
        text: "Booking an appointment was incredibly straightforward. I was connected with a representative almost immediately, and the process was smooth from start to finish. I highly value their service and the comfort of a pest-free home!",
        author: "Emma T.",
    },
    {
        id: 2,
        text: "Boston Pest Control exceeded my expectations! Their team is highly professional, punctual, and meticulous. We haven't had a single issue with pests since our first treatment. I strongly suggest them to anyone seeking reliable exterminators!",
        author: "Michael B.",
    },
    {
        id: 3,
        text: "An outstanding company with an excellent team. They are always reliable, arrive right on time, and deliver undeniable results. Our property has remained completely clear of pests for over a year. Absolutely a phenomenal investment!",
        author: "Olivia C.",
    },
];

export default function ReviewsSlider() {
    const [current, setCurrent] = useState(0);

    const prev = () => setCurrent((c) => (c === 0 ? REVIEWS.length - 1 : c - 1));
    const next = () => setCurrent((c) => (c === REVIEWS.length - 1 ? 0 : c + 1));

    return (
        <section id="reviews" className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden">

            {/* ── Background Image ── */}
            <Image
                src="/images/review-bg.png"
                alt="Reviews Background"
                fill
                priority
                className="object-cover object-top"
            />

            {/* ── Green overlay ── */}
            <div className="absolute inset-0 bg-[#1a3a1a]/70" />

            {/* ── Content ── */}
            <div className="relative z-10 w-full max-w-3xl mx-auto px-6 py-20 text-center flex flex-col items-center">

                {/* Stars */}
                <div className="flex items-center justify-center gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <svg key={i} width="22" height="22" viewBox="0 0 24 24" fill="#c9de6b">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                    ))}
                </div>

                {/* Sub tag */}
                <p className="text-[#c9de6b] text-[11px] font-bold tracking-[4px] uppercase mb-8">
                    Over 50,000+ 5-Star Ratings
                </p>

                {/* Heading */}
                <h2 className="text-white text-3xl lg:text-4xl font-semibold mb-8 leading-snug">
                    See What Our Satisfied Clients Are Saying
                </h2>

                {/* Review text — animated via key change */}
                <div key={current} className="animate-fadeIn">
                    <p className="text-white/90 text-lg leading-relaxed max-w-2xl mx-auto mb-6">
                        &ldquo;{REVIEWS[current].text}&rdquo;
                    </p>
                    <p className="text-white font-semibold text-base mb-10">
                        {REVIEWS[current].author}
                    </p>
                </div>

                {/* Dot navigation */}
                <div className="flex items-center gap-3">
                    {REVIEWS.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            className={`rounded-full transition-all duration-300 cursor-pointer border-none ${i === current
                                ? "bg-[#0a802c] w-5 h-5"
                                : "bg-[#0a802c]/50 w-4 h-4 hover:bg-[#0a802c]/75"
                                }`}
                        />
                    ))}
                </div>

            </div>

            {/* ── Prev / Next arrows ── */}
            <button
                onClick={prev}
                className="absolute left-4 lg:left-10 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white transition-all duration-200 cursor-pointer"
                aria-label="Previous"
            >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 18l-6-6 6-6" />
                </svg>
            </button>
            <button
                onClick={next}
                className="absolute right-4 lg:right-10 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white transition-all duration-200 cursor-pointer"
                aria-label="Next"
            >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                </svg>
            </button>

            <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease forwards;
        }
      `}</style>
        </section>
    );
}