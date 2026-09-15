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
                className="flex items-center gap-2 px-3 py-2 rounded-full bg-canvas-soft hover:border-line-strong transition-all border border-line"
                aria-label="Switch language"
            >
                <Globe className="w-4 h-4 text-muted" />
                <span className="text-sm font-medium text-muted uppercase">{locale}</span>
            </button>

            {isOpen && (
                <div className="absolute top-full right-0 mt-2 w-32 bg-canvas-soft border border-line rounded-xl overflow-hidden z-50">
                    <button
                        onClick={() => toggleLanguage("tr")}
                        className={clsx(
                            "w-full text-left px-4 py-2 text-sm hover:bg-[#ffffff0d] transition-colors",
                            locale === "tr" ? "text-ink font-bold" : "text-muted"
                        )}
                    >
                        Türkçe
                    </button>
                    <button
                        onClick={() => toggleLanguage("en")}
                        className={clsx(
                            "w-full text-left px-4 py-2 text-sm hover:bg-[#ffffff0d] transition-colors",
                            locale === "en" ? "text-ink font-bold" : "text-muted"
                        )}
                    >
                        English
                    </button>
                </div>
            )}
        </div>
    );
}
