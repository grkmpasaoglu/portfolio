"use client";

import { useTranslations } from "next-intl";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Monitor, Smartphone } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ResponsiveShowcase() {
    const t = useTranslations("HomePage.responsive");
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate heading
            gsap.from(".responsive-heading", {
                scrollTrigger: {
                    trigger: ".responsive-heading",
                    start: "top 95%",
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            });

            // Animate image
            gsap.from(".responsive-image", {
                scrollTrigger: {
                    trigger: ".responsive-image",
                    start: "top 95%",
                },
                x: -100,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
            });

            // Animate text content
            gsap.from(".responsive-text", {
                scrollTrigger: {
                    trigger: ".responsive-text",
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
            className="w-full min-h-screen py-20 px-6 bg-gradient-to-b from-[#050505] to-[#0a0a0a] relative overflow-hidden"
        >
            {/* Background decoration */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Heading */}
                <div className="responsive-heading text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        {t("title")}
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        {t("description")}
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
                    {/* Left: Image (3 columns) */}
                    <div className="lg:col-span-3 responsive-image group">
                        <div className="relative rounded-2xl overflow-hidden  p-6 hover:border-white/20 transition-all duration-500 shadow-2xl">
                            <div className="rounded-xl overflow-hidden">
                                <img
                                    src="/responsive-images/4.png"
                                    alt="Responsive design showcase"
                                    className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right: Text Content (2 columns) */}
                    <div className="lg:col-span-2 responsive-text space-y-8">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
                                    <Monitor className="w-6 h-6 text-blue-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">{t("desktop")}</h3>
                            </div>
                            <p className="text-gray-400 leading-relaxed">
                                {t("desktopDesc")}
                            </p>
                        </div>

                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20">
                                    <Smartphone className="w-6 h-6 text-purple-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">{t("mobile")}</h3>
                            </div>
                            <p className="text-gray-400 leading-relaxed">
                                {t("mobileDesc")}
                            </p>
                        </div>

                        <div className="pt-6 border-t border-white/10">
                            <p className="text-gray-300 leading-relaxed">
                                {t("bottomText")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
