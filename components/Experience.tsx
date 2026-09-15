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
            const cards = gsap.utils.toArray<HTMLElement>(".experience-card");

            cards.forEach((card) => {
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
            className="w-full py-24 sm:py-32 px-6 sm:px-8 bg-canvas border-t border-line"
        >
            <div className="max-w-6xl w-full mx-auto">
                <div className="mb-16 sm:mb-20">
                    <div className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
                        {t("eyebrow")}
                    </div>
                    <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-ink tracking-tight">
                        {t("title")}
                    </h2>
                </div>

                <div className="space-y-6">
                    {experienceKeys.map((key) => (
                        <div
                            key={key}
                            className="experience-card group relative p-8 rounded-2xl bg-canvas-soft border border-line hover:border-line-strong transition-all duration-300 overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-1 h-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                                <div>
                                    <h3 className="font-display text-2xl font-semibold text-ink group-hover:text-accent transition-colors">
                                        {t(`items.${key}.role`)}
                                    </h3>
                                    <p className="text-lg text-muted">{t(`items.${key}.company`)}</p>
                                </div>
                                <span className="text-sm font-mono text-faint md:mt-0 border border-line px-3 py-1 rounded-full self-start">
                                    {t(`items.${key}.period`)}
                                </span>
                            </div>

                            <p className="text-muted leading-relaxed">
                                {t(`items.${key}.description`)}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
