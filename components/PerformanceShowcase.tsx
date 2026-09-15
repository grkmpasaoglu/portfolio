"use client";

import { useTranslations } from "next-intl";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TrendingUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function PerformanceShowcase() {
    const t = useTranslations("HomePage.performance");
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate heading
            gsap.from(".performance-heading", {
                scrollTrigger: {
                    trigger: ".performance-heading",
                    start: "top 95%",
                },
                y: 50,
                opacity: 0,
            });

            // Animate proof images (Lighthouse + SEO ranking)
            gsap.utils.toArray<HTMLElement>(".performance-proof").forEach((el, i) => {
                gsap.from(el, {
                    scrollTrigger: {
                        trigger: el,
                        start: "top 95%",
                    },
                    x: -100,
                    opacity: 0,
                    delay: i * 0.1,
                });
            });

            // Animate description text
            gsap.from(".performance-text", {
                scrollTrigger: {
                    trigger: ".performance-text",
                    start: "top 95%",
                },
                x: 100,
                opacity: 0,
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="w-full py-24 sm:py-32 px-6 sm:px-8 bg-canvas border-t border-line relative overflow-hidden"
        >
            {/* Background decoration */}
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#ff5a2b0d] rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Heading */}
                <div className="performance-heading text-center mb-16 sm:mb-20">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="p-3 rounded-xl bg-accent-dim border border-line">
                            <TrendingUp className="w-7 h-7 sm:w-8 sm:h-8 text-accent" />
                        </div>
                        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-ink tracking-tight">
                            {t("title")}
                        </h2>
                    </div>
                    <p className="text-lg sm:text-xl text-muted max-w-3xl mx-auto">
                        {t("description")}
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
                    {/* Left: Proof screenshots (3 columns) */}
                    <div className="lg:col-span-3 space-y-8">
                        <div className="performance-proof group">
                            <div className="relative rounded-2xl overflow-hidden border border-line p-6 hover:border-line-strong transition-all duration-500">
                                <div className="rounded-xl overflow-hidden">
                                    <img
                                        src="/images/seo.png"
                                        alt="Google Lighthouse Performance Report"
                                        className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </div>
                            <p className="mt-3 text-center font-mono text-xs uppercase tracking-wider text-faint">
                                {t("lighthouseCaption")}
                            </p>
                        </div>

                        <div className="performance-proof group">
                            <div className="relative rounded-2xl overflow-hidden border border-line p-6 hover:border-line-strong transition-all duration-500">
                                <div className="rounded-xl overflow-hidden">
                                    <img
                                        src="/responsive-images/modelpazarim-seo.png"
                                        alt="Model Pazarım ranking #1 on Google search results"
                                        className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </div>
                            <p className="mt-3 text-center font-mono text-xs uppercase tracking-wider text-faint">
                                {t("seoCaption")}
                            </p>
                        </div>
                    </div>

                    {/* Right: Description Text (2 columns) */}
                    <div className="lg:col-span-2 performance-text">
                        <div className="p-8 rounded-2xl bg-canvas-soft border border-line">
                            <h3 className="font-display text-2xl font-semibold text-ink mb-6">
                                {t("cardTitle")}
                            </h3>
                            <p className="text-muted leading-relaxed mb-6">
                                {t("cardDescription")}
                            </p>
                            <div className="pt-6 border-t border-line">
                                <p className="text-muted leading-relaxed">
                                    {t("bottomText")}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
