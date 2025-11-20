"use client";

import { useTranslations } from "next-intl";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
    const t = useTranslations("HomePage.experience");
    const containerRef = useRef(null);

    const experienceKeys = ["carna", "freelance", "twoc", "popupsmart", "limak"];

    useEffect(() => {
        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray(".experience-card");

            cards.forEach((card: any, index) => {
                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: "top 95%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse",
                    },
                    y: 50,
                    opacity: 0,
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="experience"
            ref={containerRef}
            className="w-full min-h-screen py-20 px-6 flex flex-col justify-center items-center bg-[#0a0a0a]"
        >
            <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                {t("title")}
            </h2>

            <div className="max-w-6xl w-full space-y-8">
                {experienceKeys.map((key) => (
                    <div
                        key={key}
                        className="experience-card group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />

                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                            <div>
                                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                    {t(`items.${key}.role`)}
                                </h3>
                                <p className="text-lg text-gray-400">{t(`items.${key}.company`)}</p>
                            </div>
                            <span className="text-sm font-mono text-gray-500 mt-2 md:mt-0 bg-white/5 px-3 py-1 rounded-full">
                                {t(`items.${key}.period`)}
                            </span>
                        </div>

                        <p className="text-gray-300 leading-relaxed">
                            {t(`items.${key}.description`)}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
