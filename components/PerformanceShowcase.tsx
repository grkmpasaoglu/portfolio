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
                duration: 1,
                ease: "power3.out",
            });

            // Animate lighthouse image
            gsap.from(".lighthouse-image", {
                scrollTrigger: {
                    trigger: ".lighthouse-image",
                    start: "top 95%",
                },
                x: -100,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
            });

            // Animate description text
            gsap.from(".performance-text", {
                scrollTrigger: {
                    trigger: ".performance-text",
                    start: "top 95%",
                },
                x: 100,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="w-full min-h-screen py-20 px-6 bg-gradient-to-b from-[#0a0a0a] to-[#050505] relative overflow-hidden"
        >
            {/* Background decoration */}
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Heading */}
                <div className="performance-heading text-center mb-20">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="p-3 rounded-xl bg-green-500/10 border border-green-500/20">
                            <TrendingUp className="w-8 h-8 text-green-400" />
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold text-white">
                            {t("title")}
                        </h2>
                    </div>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        {t("description")}
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
                    {/* Left: Lighthouse Screenshot (3 columns) */}
                    <div className="lg:col-span-3 lighthouse-image group">
                        <div className="relative rounded-2xl overflow-hidden p-6 hover:border-white/20 transition-all duration-500 shadow-2xl">
                            <div className="rounded-xl overflow-hidden">
                                <img
                                    src="/images/seo.png"
                                    alt="Google Lighthouse Performance Report"
                                    className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right: Description Text (2 columns) */}
                    <div className="lg:col-span-2 performance-text">
                        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                            <h3 className="text-2xl font-bold text-white mb-6">
                                {t("cardTitle")}
                            </h3>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                {t("cardDescription")}
                            </p>
                            <div className="pt-6 border-t border-white/10">
                                <p className="text-gray-400 leading-relaxed">
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
