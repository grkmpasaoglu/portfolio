"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";
import { useEffect, useState } from "react";
import clsx from "clsx";

export default function Navigation() {
    const t = useTranslations("HomePage.nav");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { key: "home", href: "/" },
        { key: "experience", href: "#experience" },
        { key: "projects", href: "#projects" },
        { key: "contact", href: "#contact" },
    ];

    return (
        <header
            className={clsx(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
                scrolled
                    ? "bg-[#0a0a0a]/80 backdrop-blur-md  py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
                    PASAOGLU<span className="text-blue-500">.</span>
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.key}
                            href={link.href}
                            className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group"
                        >
                            {t(link.key)}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <LanguageSwitcher />
                </div>
            </div>
        </header>
    );
}
