"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Sparkles } from "lucide-react";

export default function GsapCTA() {
    const t = useTranslations("HomePage.gsapCTA");

    return (
        <section className="w-full py-20 px-6 bg-gradient-to-b from-[#050505] to-[#0a0a0a] relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl" />

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                    <Sparkles className="w-4 h-4 text-purple-400" />
                    <span className="text-sm text-purple-300 font-medium">{t("badge")}</span>
                </div>

                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    {t("title")}
                </h2>

                <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                    {t("description")}
                </p>

                <Link
                    href="/gsap"
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]"
                >
                    {t("buttonText")}
                    <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </Link>
            </div>
        </section>
    );
}
