"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navigation() {
    const t = useTranslations("HomePage.nav");
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    const navLinks = [
        { key: "home", href: "/" },
        { key: "experience", href: "/#experience" },
        { key: "projects", href: "/#projects" },
        { key: "contact", href: "/#contact" },
    ];

    return (
        <>
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
                scrolled || open
                    ? "bg-[#0a0a0bf2] backdrop-blur-xl border-b border-line py-4"
                    : "bg-transparent border-b border-transparent py-6"
            )}
        >
            <div className="mx-auto max-w-7xl px-6 sm:px-8 flex items-center justify-between">
                <Link
                    href="/"
                    onClick={() => setOpen(false)}
                    className="font-display text-xl sm:text-2xl font-semibold tracking-tight text-ink"
                >
                    PAŞAOĞLU<span className="text-accent">.</span>
                </Link>

                <nav className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.key}
                            href={link.href}
                            className="text-sm font-medium text-muted hover:text-ink transition-colors relative group"
                        >
                            {t(link.key)}
                            <span className="absolute -bottom-1.5 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <LanguageSwitcher />
                    <button
                        onClick={() => setOpen((v) => !v)}
                        aria-label={open ? "Close menu" : "Open menu"}
                        aria-expanded={open}
                        className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-line text-ink hover:border-line-strong transition-colors"
                    >
                        {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>
        </header>

        <div
            className={cn(
                "md:hidden fixed inset-0 z-40 bg-[#0a0a0bfa] backdrop-blur-xl transition-all duration-300 ease-in-out",
                open
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-4 pointer-events-none"
            )}
        >
            <nav className="flex flex-col items-center justify-center gap-8 h-full pt-16 pb-20">
                {navLinks.map((link, i) => (
                    <Link
                        key={link.key}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
                        className={cn(
                            "font-display text-3xl font-semibold text-ink hover:text-accent transition-all duration-300",
                            open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                        )}
                    >
                        {t(link.key)}
                    </Link>
                ))}
            </nav>
        </div>
        </>
    );
}
