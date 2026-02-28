"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_LINKS = [
    { label: "Process", href: "#process" },
    { label: "Why Us", href: "#why-us" },
    { label: "Reviews", href: "#reviews" },
    { label: "Pest Guide", href: "#pest-guide" },
    { label: "Contact", href: "#contact" },
];

const LeafLogo = () => (
    <svg width="38" height="38" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="20" fill="#0a802c" />
        <path
            d="M20 8C14 8 10 14 10 20c0 4.4 2.4 8.2 6 10.2V24c0-3.3 2.7-6 6-6h4c0-5.5-2.7-10-6-10z"
            fill="#74c69d"
        />
        <path
            d="M22 18c-3.3 0-6 2.7-6 6v6.2C17.3 31.4 18.6 32 20 32c5.5 0 10-4.5 10-10v-4h-8z"
            fill="#52b788"
        />
        <line x1="20" y1="30" x2="20" y2="22" stroke="#2d6a4f" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

const ChevronDown = () => (
    <svg
        width="12" height="12" viewBox="0 0 12 12" fill="none"
        className="inline-block ml-1 align-middle"
    >
        <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const UserIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </svg>
);

export default function BostonHeader() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleScroll = (e) => {
        // Only handle links starting with #
        const href = e.currentTarget.getAttribute('href');
        if (!href || !href.startsWith('#')) return;

        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Include small offset for the fixed header
            const headerOffset = 72;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });

            // Close mobile menu if open
            setMobileOpen(false);
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50">

            {/* ── Announcement Bar ── */}
            <div
                className={`bg-[#d4ed91] flex items-center justify-center gap-4 px-6 text-[#1a3a2a] font-medium overflow-hidden transition-all duration-300 ${scrolled ? "max-h-0 py-0 opacity-0" : "max-h-16 py-2.5 opacity-100"
                    }`}
            >
                <span className="text-[15px]">Seasonal Offer: Combine Services and Save $150 Now</span>
                <button className="bg-[#0a802c] hover:bg-[#1b4332] text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors duration-200 whitespace-nowrap cursor-pointer">
                    Claim Offer
                </button>
            </div>

            {/* ── Main Navbar ── */}
            <nav
                className={`transition-all duration-300 ${scrolled
                    ? "bg-[#2a3a2a]/95 backdrop-blur-md shadow-xl"
                    : "bg-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center h-[72px]">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2.5 mr-auto no-underline">
                        <LeafLogo />
                        <span className="text-white text-xl font-black tracking-[3px] uppercase select-none">
                            Boston
                        </span>
                    </Link>

                    {/* ── Desktop Nav ── */}
                    <ul className="hidden lg:flex items-center gap-0.5 list-none m-0 p-0">
                        {NAV_LINKS.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    onClick={handleScroll}
                                    className="flex items-center text-[#e8f5e9] hover:text-white text-[15px] font-medium px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-150 no-underline whitespace-nowrap"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Phone CTA */}
                    <a
                        href="tel:123654789"
                        className="hidden lg:inline-flex items-center ml-5 bg-[#0a802c] hover:bg-[#2d6a4f] text-white text-[15px] font-bold px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-105 no-underline whitespace-nowrap"
                    >
                        (123) 456987
                    </a>

                    {/* User Icon */}
                    <button className="hidden lg:flex ml-3 w-10 h-10 rounded-full bg-white/10 border border-white/25 items-center justify-center text-white hover:bg-white/20 transition-colors duration-200 cursor-pointer flex-shrink-0">
                        <UserIcon />
                    </button>

                    {/* ── Mobile Hamburger ── */}
                    <button
                        className="lg:hidden ml-4 flex flex-col gap-[5px] cursor-pointer bg-transparent border-none p-1"
                        aria-label="Toggle menu"
                        onClick={() => setMobileOpen((v) => !v)}
                    >
                        <span className={`block w-6 h-[2px] bg-white rounded transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
                        <span className={`block w-6 h-[2px] bg-white rounded transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
                        <span className={`block w-6 h-[2px] bg-white rounded transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
                    </button>
                </div>

                {/* ── Mobile Menu ── */}
                <div
                    className={`lg:hidden overflow-hidden transition-all duration-300 bg-[#1b4332]/95 backdrop-blur-md ${mobileOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                        }`}
                >
                    <div className="flex flex-col px-6 pb-6 pt-2 gap-1">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={handleScroll}
                                className="w-full flex items-center text-[#d8f3dc] text-base font-medium py-3 border-b border-white/10 hover:text-white transition-colors duration-150 no-underline"
                            >
                                {link.label}
                            </a>
                        ))}

                        <a
                            href="tel:8888007181"
                            className="mt-4 flex justify-center bg-[#0a802c] hover:bg-[#2d6a4f] text-white font-bold py-3 rounded-full text-base no-underline transition-colors duration-200"
                        >
                            (888) 800-7181
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
}