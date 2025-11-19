"use client";

import { useRef, useEffect, useMemo, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "@/i18n/routing";
import { ArrowLeft } from "lucide-react";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

export default function GsapPage() {
    const t = useTranslations("GsapPage");
    const containerRef = useRef<HTMLDivElement>(null);
    const zoomSectionRef = useRef<HTMLDivElement>(null);
    const zoomTextRef = useRef<HTMLHeadingElement>(null);
    const galleryRef = useRef<HTMLDivElement>(null);
    const blurRef = useRef<HTMLDivElement>(null);
    const rainSectionRef = useRef<HTMLDivElement>(null);
    const particleSectionRef = useRef<HTMLDivElement>(null);
    const cursorRef = useRef<HTMLDivElement>(null);
    const cursorDotRef = useRef<HTMLDivElement>(null);
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

    // Generate rain drop properties once to avoid hydration errors
    const rainDrops = useMemo(() => {
        return Array.from({ length: 50 }).map(() => ({
            left: Math.random() * 100,
            height: 40 + Math.random() * 120,
            width: 1 + Math.random() * 2,
            duration: 1.5 + Math.random() * 3,
            delay: Math.random() * 5,
            opacity: 0.2 + Math.random() * 0.6,
        }));
    }, []);

    // Magnetic Cursor Effect
    useEffect(() => {
        const cursor = cursorRef.current;
        const cursorDot = cursorDotRef.current;
        if (!cursor || !cursorDot) return;

        // Use GSAP's quickTo for smooth, performant animations
        const xTo = gsap.quickTo(cursor, "x", { duration: 0.6, ease: "power3" });
        const yTo = gsap.quickTo(cursor, "y", { duration: 0.6, ease: "power3" });
        const xDotTo = gsap.quickTo(cursorDot, "x", { duration: 0.3, ease: "power3" });
        const yDotTo = gsap.quickTo(cursorDot, "y", { duration: 0.3, ease: "power3" });

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            setCursorPos({ x: clientX, y: clientY });

            xTo(clientX);
            yTo(clientY);
            xDotTo(clientX);
            yDotTo(clientY);
        };

        const handleMouseEnter = (e: MouseEvent) => {
            const target = e.currentTarget as HTMLElement;
            const rect = target.getBoundingClientRect();
            const relX = e.clientX - rect.left;
            const relY = e.clientY - rect.top;

            gsap.to(cursor, {
                scale: 3,
                duration: 0.3,
                ease: "power2.out"
            });

            gsap.to(target, {
                x: (relX - rect.width / 2) * 0.3,
                y: (relY - rect.height / 2) * 0.3,
                duration: 0.3,
                ease: "power2.out"
            });
        };

        const handleMouseLeave = (e: MouseEvent) => {
            const target = e.currentTarget as HTMLElement;

            gsap.to(cursor, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });

            gsap.to(target, {
                x: 0,
                y: 0,
                duration: 0.3,
                ease: "power2.out"
            });
        };

        // Add mouse move listener
        window.addEventListener("mousemove", handleMouseMove);

        // Add magnetic effect to interactive elements
        const magneticElements = document.querySelectorAll<HTMLElement>(".magnetic");
        magneticElements.forEach((el) => {
            el.addEventListener("mouseenter", handleMouseEnter as EventListener);
            el.addEventListener("mouseleave", handleMouseLeave as EventListener);
        });

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            magneticElements.forEach((el) => {
                el.removeEventListener("mouseenter", handleMouseEnter as EventListener);
                el.removeEventListener("mouseleave", handleMouseLeave as EventListener);
            });
        };
    }, []);

    // Blur rotation animation
    useEffect(() => {
        let frame: number;
        let angle = 0;
        const animate = () => {
            angle += 1;
            if (blurRef.current) {
                blurRef.current.style.transform = `translateX(-50%) rotate(${angle}deg)`;
            }
            frame = requestAnimationFrame(animate);
        };
        animate();
        return () => cancelAnimationFrame(frame);
    }, []);

    // GSAP Animations
    useEffect(() => {
        const ctx = gsap.context(() => {
            // 1. Zoom-through text - starts normal, zooms through on scroll
            const zoomTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: zoomSectionRef.current,
                    start: "top top",
                    end: "+=200%", // 2x viewport height for smooth zoom
                    scrub: 1,
                    pin: true, // Pin the section while animating
                    anticipatePin: 1,
                }
            });

            zoomTimeline.fromTo(zoomTextRef.current,
                { scale: 1, opacity: 1 },
                { scale: 50, opacity: 0, ease: "power2.in" }
            );

            // Background fade
            zoomTimeline.to(".zoom-bg", {
                opacity: 1,
                ease: "power2.inOut"
            }, 0); // Start at the same time

            // 2. Marquee
            gsap.to(".marquee-content", {
                x: "-50%",
                duration: 20,
                ease: "none",
                repeat: -1,
            });

            // 3. Pinned Step Showcase
            const steps = 3;
            let activeStep = 0;

            ScrollTrigger.create({
                trigger: galleryRef.current,
                start: "top top",
                end: () => `+=${window.innerHeight * steps}`,
                pin: true,
                pinSpacing: true,
                anticipatePin: 1,
                scrub: false,
            });

            ScrollTrigger.create({
                trigger: galleryRef.current,
                start: "top top",
                end: () => `+=${window.innerHeight * (steps - 1)}`,
                scrub: true,
                onUpdate: (self) => {
                    const progress = self.progress;
                    const stepIdx = Math.round(progress * (steps - 1));

                    if (stepIdx !== activeStep) {
                        activeStep = stepIdx;

                        // Image animations
                        for (let i = 0; i < steps; i++) {
                            const img = document.getElementById(`step-img-${i}`);
                            if (!img) continue;

                            let shouldShow = false;
                            if (activeStep === 0) shouldShow = true;
                            else if (activeStep === 1) shouldShow = i >= 1;
                            else if (activeStep === 2) shouldShow = i === 2;

                            if (shouldShow) {
                                gsap.to(img, {
                                    opacity: 1,
                                    scale: 1,
                                    filter: "blur(0px)",
                                    duration: 0.8,
                                    ease: "power2.out",
                                });
                            } else {
                                gsap.to(img, {
                                    opacity: 0,
                                    scale: 0.95,
                                    filter: "blur(4px)",
                                    duration: 0.8,
                                    ease: "power2.out",
                                });
                            }
                        }

                        // Text animations
                        for (let i = 0; i < steps; i++) {
                            const text = document.querySelector(`.step-text-${i}`);
                            if (!text) continue;

                            if (i === activeStep) {
                                gsap.to(text, {
                                    opacity: 1,
                                    y: 0,
                                    pointerEvents: "auto",
                                    duration: 0.7,
                                    ease: "power2.out",
                                });
                            } else {
                                gsap.to(text, {
                                    opacity: 0,
                                    y: 40,
                                    pointerEvents: "none",
                                    duration: 0.7,
                                    ease: "power2.out",
                                });
                            }
                        }
                    }
                },
            });

            // 4. Rain Effect Animation
            const rainDrops = gsap.utils.toArray<HTMLElement>(".rain-drop");
            rainDrops.forEach((drop) => {
                const duration = parseFloat(drop.getAttribute("data-duration") || "2");
                const delay = parseFloat(drop.getAttribute("data-delay") || "0");

                gsap.fromTo(drop,
                    { y: "-100%", opacity: 0.8 },
                    {
                        y: "100vh",
                        opacity: 0,
                        duration: duration,
                        delay: delay,
                        ease: "none",
                        repeat: -1,
                        repeatDelay: 0
                    }
                );
            });

            // 5. Particle Explosion Effect
            const particles = gsap.utils.toArray<HTMLElement>(".particle");
            const particleText = document.querySelector(".particle-text");

            if (particleSectionRef.current && particles.length > 0) {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: particleSectionRef.current,
                        start: "top bottom-=400", // Start even later
                        end: "bottom top+=400", // End even earlier
                        scrub: 1,
                    }
                });

                // Animate text first
                tl.fromTo(particleText,
                    { scale: 1, opacity: 1 },
                    { scale: 1.2, opacity: 0, duration: 0.3 }
                );

                // Then explode particles
                particles.forEach((particle) => {
                    const x = (Math.random() - 0.5) * 800;
                    const y = (Math.random() - 0.5) * 800;
                    const rotation = Math.random() * 720 - 360;

                    tl.fromTo(particle,
                        { x: 0, y: 0, opacity: 0, scale: 0, rotation: 0 },
                        {
                            x: x,
                            y: y,
                            opacity: 1,
                            scale: Math.random() * 1.5 + 0.5,
                            rotation: rotation,
                            duration: 0.5,
                            ease: "power2.out"
                        },
                        "<"
                    );
                });

                // Then bring them back together
                tl.to(particles, {
                    x: 0,
                    y: 0,
                    opacity: 0,
                    scale: 0,
                    rotation: 0,
                    duration: 0.5,
                    ease: "power2.in",
                    stagger: 0.01
                });

                // Finally show the final text
                tl.fromTo(".particle-final-text",
                    { scale: 0, opacity: 0 },
                    { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.7)" }
                );
            }

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="bg-black text-white overflow-x-hidden font-sans selection:bg-purple-500 selection:text-white cursor-none">
            {/* Custom Magnetic Cursor */}
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-10 h-10 border-2 border-purple-500 rounded-full pointer-events-none z-[9999] mix-blend-difference"
                style={{ transform: 'translate(-50%, -50%)' }}
            />
            <div
                ref={cursorDotRef}
                className="fixed top-0 left-0 w-2 h-2 bg-purple-500 rounded-full pointer-events-none z-[9999] mix-blend-difference"
                style={{ transform: 'translate(-50%, -50%)' }}
            />

            {/* Back Button */}
            <div className="fixed top-6 left-6 z-50">
                <Link
                    href="/"
                    className="magnetic inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-white/20 transition-all group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    {t("back")}
                </Link>
            </div>

            {/* SECTION 1: ZOOM-THROUGH INTRO */}
            <section ref={zoomSectionRef} className="h-screen w-full flex items-center justify-center overflow-hidden relative bg-black z-10">
                <div className="zoom-bg absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-black opacity-0 transition-opacity"></div>
                <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none"></div>

                <h1 ref={zoomTextRef} className="text-[10vw] md:text-[12vw] font-black text-center leading-none z-20 mix-blend-difference whitespace-nowrap px-4">
                    {t("zoomTitle")}
                </h1>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-center animate-bounce">
                    <p className="text-sm uppercase tracking-widest mb-2">{t("scrollToExplore")}</p>
                    <div className="w-[1px] h-12 bg-white mx-auto"></div>
                </div>
            </section>

            {/* SECTION 2: MARQUEE */}
            <section className="py-12 bg-gradient-to-r from-purple-600 to-blue-600 text-white overflow-hidden rotate-1 scale-105 z-20 relative border-y-4 border-white">
                <div className="marquee-content flex whitespace-nowrap text-4xl md:text-6xl font-black uppercase tracking-tighter">
                    <span className="mx-8">{t("marquee")} •</span>
                    <span className="mx-8">{t("marquee")} •</span>
                    <span className="mx-8">{t("marquee")} •</span>
                    <span className="mx-8">{t("marquee")} •</span>
                    <span className="mx-8">{t("marquee")} •</span>
                    <span className="mx-8">{t("marquee")} •</span>
                </div>
            </section>

            {/* SECTION 3: PINNED STEP SHOWCASE */}
            <section
                ref={galleryRef}
                className="relative w-full h-[100vh] flex items-center justify-center bg-black z-10"
                style={{ minHeight: "100vh" }}
            >
                <div className="w-full h-[100vh] flex flex-col md:flex-row items-stretch justify-center max-w-[1600px] mx-auto" style={{ minHeight: "100vh" }}>
                    {/* Left: Images */}
                    <div className="relative flex-1 min-h-[400px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
                        <img
                            id="step-img-0"
                            src="https://framerusercontent.com/images/Ew1c8PClUnVFFwkgqTcCGZ7DWk.webp?scale-down-to=1024"
                            alt="Step 1"
                            className="absolute left-1/2 top-1/2 object-contain object-center rounded-2xl"
                            style={{
                                width: "70%",
                                height: "70%",
                                maxWidth: "700px",
                                maxHeight: "700px",
                                transform: "translate(-50%, calc(-50% - 30px))",
                                zIndex: 3,
                                opacity: 1,
                            }}
                        />
                        <img
                            id="step-img-1"
                            src="https://framerusercontent.com/images/Ew1c8PClUnVFFwkgqTcCGZ7DWk.webp?scale-down-to=1024"
                            alt="Step 2"
                            className="absolute left-1/2 top-1/2 object-contain object-center rounded-2xl"
                            style={{
                                width: "70%",
                                height: "70%",
                                maxWidth: "700px",
                                maxHeight: "700px",
                                transform: "translate(-50%, -50%)",
                                zIndex: 2,
                                opacity: 1,
                            }}
                        />
                        <img
                            id="step-img-2"
                            src="https://framerusercontent.com/images/Ew1c8PClUnVFFwkgqTcCGZ7DWk.webp?scale-down-to=1024"
                            alt="Step 3"
                            className="absolute left-1/2 top-1/2 object-contain object-center rounded-2xl"
                            style={{
                                width: "70%",
                                height: "70%",
                                maxWidth: "700px",
                                maxHeight: "700px",
                                transform: "translate(-50%, calc(-50% + 30px))",
                                zIndex: 1,
                                opacity: 1,
                            }}
                        />
                    </div>

                    {/* Right: Steps */}
                    <div className="flex-1 flex flex-col items-center justify-center relative min-h-[400px] md:min-h-[600px]">
                        <div className="step-text-0 absolute left-0 top-1/2 w-full flex flex-col justify-center px-4 md:px-12" style={{ transform: "translateY(-50%)", opacity: 1 }}>
                            <h2 className="text-white text-2xl md:text-[32px] font-semibold text-left mb-2">
                                1. {t("step1Title")}
                            </h2>
                            <div className="w-full h-[1px] bg-white/20 my-6"></div>
                            <p className="text-white/80 text-base md:text-lg leading-relaxed text-left">
                                {t("step1Desc")}
                            </p>
                        </div>

                        <div className="step-text-1 absolute left-0 top-1/2 w-full flex flex-col justify-center px-4 md:px-12" style={{ transform: "translateY(-50%)", opacity: 0 }}>
                            <h2 className="text-white text-2xl md:text-[32px] font-semibold text-left mb-2">
                                2. {t("step2Title")}
                            </h2>
                            <div className="w-full h-[1px] bg-white/20 my-6"></div>
                            <p className="text-white/80 text-base md:text-lg leading-relaxed text-left">
                                {t("step2Desc")}
                            </p>
                        </div>

                        <div className="step-text-2 absolute left-0 top-1/2 w-full flex flex-col justify-center px-4 md:px-12" style={{ transform: "translateY(-50%)", opacity: 0 }}>
                            <h2 className="text-white text-2xl md:text-[32px] font-semibold text-left mb-2">
                                3. {t("step3Title")}
                            </h2>
                            <div className="w-full h-[1px] bg-white/20 my-6"></div>
                            <p className="text-white/80 text-base md:text-lg leading-relaxed text-left">
                                {t("step3Desc")}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: RAIN EFFECT */}
            <section
                ref={rainSectionRef}
                className="relative w-full h-screen bg-gradient-to-b from-black via-purple-950/20 to-black overflow-hidden flex items-center justify-center"
            >
                {/* Rain drops container */}
                <div className="absolute inset-0 overflow-hidden">
                    {rainDrops.map((drop, i) => (
                        <div
                            key={i}
                            className="rain-drop absolute top-0"
                            data-duration={drop.duration}
                            data-delay={drop.delay}
                            style={{
                                left: `${drop.left}%`,
                                width: `${drop.width}px`,
                                height: `${drop.height}px`,
                                background: `linear-gradient(to bottom, transparent, rgba(139, 92, 246, ${drop.opacity}), transparent)`,
                                opacity: drop.opacity,
                            }}
                        />
                    ))}
                </div>

                {/* Center text content */}
                <div className="relative z-10 text-center px-4">
                    <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                        {t("rainTitle") || "Digital Rain"}
                    </h2>
                    <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto">
                        {t("rainSubtitle") || "Experience the flow of creativity"}
                    </p>
                </div>
            </section>

            {/* SECTION 5: PARTICLE EXPLOSION */}
            <section
                ref={particleSectionRef}
                className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center"
            >
                {/* Particle container */}
                <div className="relative w-full h-full flex items-center justify-center">
                    {/* Initial text that will disappear */}
                    <h2 className="particle-text absolute text-6xl md:text-8xl font-black text-white z-10">
                        {t("particleInitial") || "WATCH THIS"}
                    </h2>

                    {/* Particles */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        {Array.from({ length: 100 }).map((_, i) => (
                            <div
                                key={i}
                                className="particle absolute w-3 h-3 rounded-full"
                                style={{
                                    background: `hsl(${(i * 3.6)}, 80%, 60%)`,
                                    boxShadow: `0 0 10px hsl(${(i * 3.6)}, 80%, 60%)`,
                                }}
                            />
                        ))}
                    </div>

                    {/* Final text that appears after particles */}
                    <h2 className="particle-final-text absolute text-5xl md:text-7xl font-black text-center px-4 opacity-0">
                        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent">
                            {t("particleFinal") || "IMPRESSIVE, RIGHT?"}
                        </span>
                    </h2>
                </div>
            </section>

            {/* SECTION 6: CTA WITH SOCIAL LINKS */}
            <section className="flex items-center justify-center my-24 w-full px-2">
                <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center py-16 px-4 rounded-3xl border border-[#222222] relative overflow-hidden" style={{ background: "#0a0c13" }}>
                    {/* Animated rotating blur */}
                    <div
                        ref={blurRef}
                        className="pointer-events-none absolute left-1/2 top-[-40px] z-0"
                        style={{
                            width: 420,
                            height: 200,
                            opacity: 0.7,
                            willChange: "transform",
                            background: "conic-gradient(from 0deg at 50% 50%, #55d6be, #7f5af0, #f7b801, #ff5f7e, #55d6be 100%)",
                            borderRadius: "50%",
                            filter: "blur(80px)",
                            transform: "translateX(-50%)",
                        }}
                    />

                    {/* Content */}
                    <div className="relative z-10 w-full flex flex-col items-center">
                        <p className="uppercase text-center mb-2" style={{ fontSize: 14, fontWeight: 500, color: "rgba(255,255,255,0.6)", letterSpacing: "0.05em" }}>
                            {t("ctaLabel")}
                        </p>
                        <h2 className="text-center text-4xl md:text-6xl font-semibold mb-2" style={{ letterSpacing: "-0.01em", lineHeight: "110%", color: "#fff" }}>
                            {t("ctaTitle")}
                        </h2>
                        <h2 className="text-center text-4xl md:text-6xl font-semibold" style={{ letterSpacing: "-0.01em", lineHeight: "110%", color: "#fff" }}>
                            {t("ctaSubtitle")} <span style={{ color: "#55d6be" }}>{t("ctaHighlight")}</span>
                        </h2>

                        {/* Social Links */}
                        <div className="mt-12 flex items-center gap-6">
                            <a href="https://github.com/grkmpasaoglu" target="_blank" rel="noopener noreferrer" className="magnetic w-12 h-12 rounded-full bg-[#181b22] border border-[#23242a] flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 transition-all duration-300 hover:scale-110">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                            <a href="http://www.linkedin.com/in/gorkempasaoglu" target="_blank" rel="noopener noreferrer" className="magnetic w-12 h-12 rounded-full bg-[#181b22] border border-[#23242a] flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-400/20 transition-all duration-300 hover:scale-110">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                            <a href="http://x.com/grkmpasaoglu" target="_blank" rel="noopener noreferrer" className="magnetic w-12 h-12 rounded-full bg-[#181b22] border border-[#23242a] flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-400/20 transition-all duration-300 hover:scale-110">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            <a href="mailto:gorkempasaoglu@outlook.com" className="magnetic w-12 h-12 rounded-full bg-[#181b22] border border-[#23242a] flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 transition-all duration-300 hover:scale-110">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}