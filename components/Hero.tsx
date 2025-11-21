"use client";

import { useTranslations, useLocale } from "next-intl";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowDown, Code2, GraduationCap } from "lucide-react";
import Typewriter from "typewriter-effect";

export default function Hero() {
    const t = useTranslations("HomePage.hero");
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.from(".hero-text", {
                y: 100,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power4.out",
            })
                .from(".hero-desc", {
                    y: 50,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out",
                }, "-=0.5")
                .from(".info-card", {
                    y: 30,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power2.out",
                }, "-=0.5")
                .from(".scroll-indicator", {
                    opacity: 0,
                    y: -20,
                    duration: 1,
                    ease: "power2.out",
                }, "-=0.5")
                .from(".hero-image", {
                    scale: 0.8,
                    opacity: 0,
                    duration: 1,
                    ease: "elastic.out(1, 0.75)",
                }, "-=1.5");

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative w-full min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden pt-20"
        >
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-purple-600/20 rounded-full blur-[120px] animate-pulse delay-1000" />
            </div>

            <div className="max-w-7xl mx-auto z-10 w-full">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-16">
                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <h2 className="hero-text text-xl md:text-2xl font-medium text-blue-400 mb-4 tracking-wide uppercase">
                            {t("greeting")}
                        </h2>
                        <h1 className="hero-text text-5xl md:text-8xl font-bold tracking-tighter mb-6 pb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
                            {t("name")}
                        </h1>
                        <div className="hero-text text-2xl md:text-4xl font-light text-gray-300 mb-8 h-[60px]">
                            <Typewriter
                                options={{
                                    strings: t.raw("roles"),
                                    autoStart: true,
                                    loop: true,
                                    deleteSpeed: 50,
                                    delay: 50,
                                    wrapperClassName: "text-blue-400 font-semibold",
                                    cursorClassName: "text-blue-400 animate-pulse",
                                }}
                            />
                        </div>

                        <p className="hero-desc text-lg md:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">
                            {t.rich("bio", {
                                bold: (chunks) => <span className="text-white font-bold">{chunks}</span>
                            })}
                        </p>

                        <a
                            href={`/cv/GP-${useLocale()}.pdf`}
                            download="Gorkem_Pasaoglu_CV.pdf"
                            className="group relative inline-flex items-center gap-2 px-8 py-3 bg-white text-black rounded-full font-bold text-lg mb-12 hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                        >
                            {t("downloadCV")}
                            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                        </a>
                    </div>

                    {/* Profile Image */}
                    <div className="hero-image relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 flex-shrink-0">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-full blur-2xl opacity-50 animate-pulse" />
                        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 shadow-2xl">
                            <img
                                src="/images/photo-portrait.JPG"
                                alt="Gorkem Pasaoglu"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mx-auto">
                    {/* Education Card */}
                    <div className="info-card p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-left hover:bg-white/10 transition-colors">
                        <div className="flex items-center gap-3 mb-4">
                            <GraduationCap className="w-6 h-6 text-blue-400" />
                            <h3 className="text-xl font-bold text-white">{t("education.title")}</h3>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-200">{t("education.school")}</h4>
                        <p className="text-blue-400 text-sm mb-2">{t("education.department")}</p>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            {t.rich("education.details", {
                                bold: (chunks) => <span className="text-white font-bold">{chunks}</span>
                            })}
                        </p>
                    </div>

                    {/* Skills Card */}
                    <div className="info-card p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-left hover:bg-white/10 transition-colors">
                        <div className="flex items-center gap-3 mb-4">
                            <Code2 className="w-6 h-6 text-purple-400" />
                            <h3 className="text-xl font-bold text-white">{t("skills.title")}</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {t("skills.list").split(", ").map((skill) => (
                                <span key={skill} className="px-3 py-1 rounded-full bg-white/10 text-sm text-gray-300 border border-white/5">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="scroll-indicator absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <ArrowDown className="w-5 h-5 animate-bounce" />
            </div>
        </section>
    );
}
