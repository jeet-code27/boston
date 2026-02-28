"use client";

import Image from "next/image";

export default function QuoteSection() {
    return (
        <section id="contact" className="w-full">

            {/* ── Top green bar ── */}
            <div className="bg-[#3d5a47] w-full px-8 lg:px-16 py-10">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
                    <h2 className="text-[#c9de6b] text-3xl lg:text-4xl font-bold leading-snug max-w-xl">
                        Contact Us Now to Request a Free Estimate for Rodent Extermination
                    </h2>
                    <p className="text-white text-base font-medium whitespace-nowrap lg:ml-8 rounded-full border-2 border-[#0a802c] py-3 px-7 ">
                        View Our Rates
                    </p>
                </div>
            </div>

            {/* ── Background image + form ── */}
            <div className="relative w-full min-h-[700px] flex items-center justify-end">

                {/* Background image */}
                <Image
                    src="/images/quote-bg.png"
                    alt="Boston Van"
                    fill
                    className="object-cover object-center"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/30" />

                {/* Form card */}
                <div className="relative z-10 w-full max-w-[560px] bg-white rounded-2xl shadow-2xl p-8 mx-6 lg:mr-16 my-10">

                    {/* Form heading */}
                    <h3 className="text-[#1a1a1a] text-2xl font-bold text-center mb-1">
                        Complete the Information Below for Your Estimate
                    </h3>
                    <p className="text-[#555] text-sm text-center mb-6">
                        Our team will reach out shortly!
                    </p>

                    {/* Fields grid */}
                    <div className="grid grid-cols-2 gap-4">

                        {/* First Name */}
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium text-[#1a1a1a]">
                                First Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                className="border border-[#ddd] rounded-lg px-3 py-2.5 text-sm bg-[#f9f9f9] focus:outline-none focus:border-[#0a802c] transition-colors"
                            />
                        </div>

                        {/* Last Name */}
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium text-[#1a1a1a]">
                                Last Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                className="border border-[#ddd] rounded-lg px-3 py-2.5 text-sm bg-[#f9f9f9] focus:outline-none focus:border-[#0a802c] transition-colors"
                            />
                        </div>

                        {/* Phone Number */}
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium text-[#1a1a1a]">
                                Phone Number <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="tel"
                                className="border border-[#ddd] rounded-lg px-3 py-2.5 text-sm bg-[#f9f9f9] focus:outline-none focus:border-[#0a802c] transition-colors"
                            />
                        </div>

                        {/* Email */}
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium text-[#1a1a1a]">
                                Email <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                className="border border-[#ddd] rounded-lg px-3 py-2.5 text-sm bg-[#f9f9f9] focus:outline-none focus:border-[#0a802c] transition-colors"
                            />
                        </div>

                        {/* Zip Code */}
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium text-[#1a1a1a]">
                                Zip Code <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                className="border border-[#ddd] rounded-lg px-3 py-2.5 text-sm bg-[#f9f9f9] focus:outline-none focus:border-[#0a802c] transition-colors"
                            />
                        </div>

                        {/* Pest Concerns */}
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium text-[#1a1a1a]">
                                Pest Concerns
                            </label>
                            <input
                                type="text"
                                className="border border-[#ddd] rounded-lg px-3 py-2.5 text-sm bg-[#f9f9f9] focus:outline-none focus:border-[#0a802c] transition-colors"
                            />
                        </div>

                    </div>

                    {/* Disclaimer */}
                    <p className="text-[#777] text-[11px] leading-relaxed mt-5">
                        By clicking &quot;Submit,&quot; I give my electronic signature and consent that Boston may contact me via email, autodialer,
                        or prerecorded messages. Consent is not required for purchase. Promotions are subject to local service pricing and may
                        not apply to some services. This site is protected by reCAPTCHA and the Google{" "}
                        <span className="text-[#0a802c] underline cursor-pointer">Privacy Policy</span> and{" "}
                        <span className="text-[#0a802c] underline cursor-pointer">Terms of Service</span> apply.
                        View our <span className="text-[#0a802c] underline cursor-pointer">Terms of Service</span> and{" "}
                        <span className="text-[#0a802c] underline cursor-pointer">Privacy Policy</span>.
                    </p>

                    {/* Checkbox */}
                    <div className="flex items-start gap-2 mt-4">
                        <input type="checkbox" id="sms-consent" className="mt-0.5 accent-[#0a802c] cursor-pointer" />
                        <label htmlFor="sms-consent" className="text-[11px] text-[#777] leading-relaxed cursor-pointer">
                            I agree to receive recurring automated text messages at the phone number provided. Msg &amp; data rates may apply.
                            Msg frequency varies. Mobile phone information is stored securely and will not be shared with third parties or
                            affiliates for marketing or promotional purposes. Reply HELP for help and STOP to cancel.
                        </label>
                    </div>

                    {/* Submit */}
                    <button className="mt-6 px-8 py-3 rounded-full bg-[#0a802c] hover:bg-[#076622] text-white text-sm font-semibold transition-colors duration-200 cursor-pointer">
                        Submit
                    </button>

                </div>
            </div>
        </section>
    );
}