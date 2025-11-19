"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { Globe } from "lucide-react";
import { useState, useTransition } from "react";
import clsx from "clsx";

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();
    const [isOpen, setIsOpen] = useState(false);

    const toggleLanguage = (nextLocale: "en" | "tr") => {
        startTransition(() => {
            router.replace(pathname, { locale: nextLocale });
            setIsOpen(false);
        });
    };

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 hover:bg-white/10 transition-all border border-white/10 backdrop-blur-md"
                aria-label="Switch language"
            >
                <Globe className="w-4 h-4 text-gray-300" />
                <span className="text-sm font-medium text-gray-300 uppercase">{locale}</span>
            </button>

            {isOpen && (
                <div className="absolute top-full right-0 mt-2 w-32 bg-[#111] border border-white/10 rounded-xl shadow-xl overflow-hidden z-50">
                    <button
                        onClick={() => toggleLanguage("tr")}
                        className={clsx(
                            "w-full text-left px-4 py-2 text-sm hover:bg-white/5 transition-colors",
                            locale === "tr" ? "text-white font-bold" : "text-gray-400"
                        )}
                    >
                        Türkçe
                    </button>
                    <button
                        onClick={() => toggleLanguage("en")}
                        className={clsx(
                            "w-full text-left px-4 py-2 text-sm hover:bg-white/5 transition-colors",
                            locale === "en" ? "text-white font-bold" : "text-gray-400"
                        )}
                    >
                        English
                    </button>
                </div>
            )}
        </div>
    );
}
