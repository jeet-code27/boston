"use client";

import Link from "next/link";

const LeafLogo = () => (
    <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="20" fill="#2d6a4f" />
        <path d="M20 8C14 8 10 14 10 20c0 4.4 2.4 8.2 6 10.2V24c0-3.3 2.7-6 6-6h4c0-5.5-2.7-10-6-10z" fill="#74c69d" />
        <path d="M22 18c-3.3 0-6 2.7-6 6v6.2C17.3 31.4 18.6 32 20 32c5.5 0 10-4.5 10-10v-4h-8z" fill="#52b788" />
        <line x1="20" y1="30" x2="20" y2="22" stroke="#2d6a4f" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

const FOOTER_LINKS = [
    { label: "Process", href: "#process" },
    { label: "Why Us", href: "#why-us" },
    { label: "Reviews", href: "#reviews" },
    { label: "Pest Guide", href: "#pest-guide" },
    { label: "Contact", href: "#contact" },
];

const SOCIAL = [
    {
        name: "Facebook",
        href: "#",
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
        ),
    },
    {
        name: "Instagram",
        href: "#",
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
        ),
    },
    {
        name: "Twitter / X",
        href: "#",
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
    },
    {
        name: "YouTube",
        href: "#",
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
            </svg>
        ),
    },
];

export default function Footer() {
    const handleScroll = (e) => {
        const href = e.currentTarget.getAttribute('href');
        if (!href || !href.startsWith('#')) return;

        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const headerOffset = 72;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <footer className="bg-[#1b2e1f] text-white w-full">

            {/* ── Main footer content ── */}
            <div className="max-w-7xl mx-auto px-6 lg:px-16 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

                {/* Brand column */}
                <div className="flex flex-col gap-4">
                    <Link href="/" className="flex items-center gap-2.5 no-underline">
                        <LeafLogo />
                        <span className="text-white text-lg font-black tracking-[3px] uppercase">Boston</span>
                    </Link>
                    <p className="text-white/60 text-sm leading-relaxed">
                        Reliable extermination experts dedicated to your peace of mind. Keeping your property safe from pests, all year round.
                    </p>
                    {/* Social icons */}
                    <div className="flex items-center gap-3 mt-2">
                        {SOCIAL.map((s) => (
                            <a
                                key={s.name}
                                href={s.href}
                                aria-label={s.name}
                                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#0a802c] flex items-center justify-center text-white/70 hover:text-white transition-all duration-200"
                            >
                                {s.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div className="flex flex-col gap-3">
                    <h4 className="text-[#c9de6b] text-xs font-bold tracking-[3px] uppercase mb-1">
                        Quick Links
                    </h4>
                    {FOOTER_LINKS.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            onClick={handleScroll}
                            className="text-white/65 hover:text-white text-sm transition-colors duration-150 no-underline"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                {/* Contact */}
                <div className="flex flex-col gap-4">
                    <h4 className="text-[#c9de6b] text-xs font-bold tracking-[3px] uppercase mb-1">
                        Contact
                    </h4>

                    <div className="flex items-start gap-3 text-sm text-white/65">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0 text-[#0a802c]">
                            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" />
                        </svg>
                        <a href="tel:123654789" className="hover:text-white transition-colors no-underline">
                            (123) 654-789
                        </a>
                    </div>

                    <div className="flex items-start gap-3 text-sm text-white/65">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0 text-[#0a802c]">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22,6 12,13 2,6" />
                        </svg>
                        <a href="mailto:info@goboston.com" className="hover:text-white transition-colors no-underline">
                            info@goboston.com
                        </a>
                    </div>

                    <div className="flex items-start gap-3 text-sm text-white/65">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0 text-[#0a802c]">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                        <span>Serving OH, IN, KY, TN &amp; surrounding areas</span>
                    </div>

                    {/* CTA */}
                    <a
                        href="tel:123654789"
                        className="mt-2 inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#0a802c] hover:bg-[#076622] text-white text-sm font-semibold transition-colors duration-200 no-underline"
                    >
                        Book a Service
                    </a>
                </div>

            </div>

            {/* ── Divider ── */}
            <div className="border-t border-white/10" />

            {/* ── Bottom bar ── */}
            <div className="max-w-7xl mx-auto px-6 lg:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/45 text-xs">
                <p>© {new Date().getFullYear()} Boston. All rights reserved.</p>
                <div className="flex items-center gap-5">
                    <a href="#" className="hover:text-white transition-colors no-underline">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors no-underline">Terms of Service</a>
                    <a href="#" className="hover:text-white transition-colors no-underline">Sitemap</a>
                </div>
            </div>

        </footer>
    );
}