"use client";

import { useTranslations } from "next-intl";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { projects } from "@/data/projects";

type Project = (typeof projects)[number];

function BrowserFrame({ children }: { children: React.ReactNode }) {
    return (
        <div className="rounded-2xl border border-line bg-canvas-soft overflow-hidden">
            <div className="flex items-center gap-3 px-4 py-3 border-b border-line bg-[#ffffff05]">
                <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffffff26]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffffff26]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffffff26]" />
                </div>
                <div className="flex-1 flex justify-center">
                    <div className="h-4 w-24 sm:w-40 rounded-full bg-[#ffffff0a]" />
                </div>
                <div className="w-9 shrink-0" />
            </div>
            {children}
        </div>
    );
}

function PhoneFrame({ src, alt }: { src: string; alt: string }) {
    return (
        <div className="project-image shrink-0 snap-center w-[190px] sm:w-[210px]">
            <div className="relative aspect-[9/19.5] rounded-[2rem] border-[6px] border-canvas-soft bg-canvas-soft overflow-hidden shadow-2xl ring-1 ring-line">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-4 bg-canvas rounded-b-xl z-10" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={src}
                    alt={alt}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-contain"
                />
            </div>
        </div>
    );
}

export default function ProjectDetailClient({ project }: { project: Project }) {
    const t = useTranslations("HomePage.projects");
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollerRef = useRef<HTMLDivElement>(null);

    const currentIndex = projects.findIndex((p) => p.slug === project.slug);
    const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];
    const nextProject = projects[(currentIndex + 1) % projects.length];

    const techStack = t.raw(`items.${project.slug}.tech`) as string[];
    const title = t(`items.${project.slug}.title`);
    const isMobileApp = project.deviceType === "mobile";

    const scrollGallery = (direction: 1 | -1) => {
        scrollerRef.current?.scrollBy({ left: direction * 220, behavior: "smooth" });
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".detail-header > *", {
                y: 24,
                opacity: 0,
                duration: 0.7,
                stagger: 0.08,
                ease: "power3.out",
            });

            gsap.from(".project-image", {
                y: 40,
                opacity: 0,
                duration: 0.7,
                stagger: 0.1,
                ease: "power3.out",
                delay: 0.2,
            });
        }, containerRef);

        return () => ctx.revert();
    }, [project.slug]);

    return (
        <main ref={containerRef} className="min-h-screen bg-canvas-deep text-ink pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6 sm:px-8">
                <Link
                    href="/#projects"
                    className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink mb-12 transition-colors group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    {t("backToProjects")}
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] xl:grid-cols-[420px_1fr] gap-10 lg:gap-14 items-start">
                    {/* Left: text column, sticky on desktop */}
                    <div className="detail-header mb-4 lg:mb-0">
                        <div className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-5">
                            {String(currentIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                        </div>
                        <h1 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold tracking-tight mb-6 leading-[1.05]">
                            {title}
                        </h1>
                        <p className="text-base text-muted leading-relaxed mb-8">
                            {t(`items.${project.slug}.description`)}
                        </p>
                        <div>
                            <div className="text-xs font-mono uppercase tracking-wider text-faint mb-3">
                                {t("techStackLabel")}
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1.5 text-sm font-mono text-muted border border-line rounded-lg"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: gallery column */}
                    <div className="min-w-0">
                        {isMobileApp ? (
                            <div>
                                <div className="mb-5 flex items-center justify-between">
                                    <p className="text-xs font-mono uppercase tracking-wider text-faint">
                                        {t("swipeHint")}
                                    </p>
                                    <div className="hidden sm:flex items-center gap-2">
                                        <button
                                            onClick={() => scrollGallery(-1)}
                                            aria-label={t("prevProject")}
                                            className="w-9 h-9 rounded-full border border-line hover:border-line-strong flex items-center justify-center text-ink transition-colors"
                                        >
                                            <ChevronLeft className="w-4 h-4" />
                                        </button>
                                        <button
                                            onClick={() => scrollGallery(1)}
                                            aria-label={t("nextProject")}
                                            className="w-9 h-9 rounded-full border border-line hover:border-line-strong flex items-center justify-center text-ink transition-colors"
                                        >
                                            <ChevronRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>

                                <div className="relative -mx-6 sm:-mx-8 lg:mx-0">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-16 lg:w-10 bg-gradient-to-r from-canvas-deep to-transparent z-10" />
                                    <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-16 lg:w-10 bg-gradient-to-l from-canvas-deep to-transparent z-10" />
                                    <div
                                        ref={scrollerRef}
                                        className="flex gap-5 overflow-x-auto snap-x snap-mandatory px-6 sm:px-8 lg:px-1 pb-4 scroll-px-6"
                                    >
                                        {project.images.map((image, index) => (
                                            <PhoneFrame key={index} src={image} alt={`${title} — ${index + 1}`} />
                                        ))}
                                        <div className="shrink-0 w-px" />
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-6">
                                {project.images.map((image, index) => (
                                    <div key={index} className="project-image">
                                        <BrowserFrame>
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                src={image}
                                                alt={`${title} — ${index + 1}`}
                                                loading={index === 0 ? "eager" : "lazy"}
                                                className="w-full h-auto block"
                                            />
                                        </BrowserFrame>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <div className="mt-16 sm:mt-20 pt-10 border-t border-line grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Link
                        href={`/projects/${prevProject.slug}`}
                        className="group p-6 rounded-2xl border border-line hover:border-line-strong transition-colors"
                    >
                        <div className="text-xs font-mono uppercase tracking-wider text-faint mb-3">
                            {t("prevProject")}
                        </div>
                        <div className="font-display text-lg sm:text-xl text-ink group-hover:text-accent transition-colors flex items-center gap-2">
                            <ArrowLeft className="w-4 h-4 shrink-0 group-hover:-translate-x-1 transition-transform" />
                            <span className="truncate">{t(`items.${prevProject.slug}.title`)}</span>
                        </div>
                    </Link>
                    <Link
                        href={`/projects/${nextProject.slug}`}
                        className="group p-6 rounded-2xl border border-line hover:border-line-strong transition-colors sm:text-right"
                    >
                        <div className="text-xs font-mono uppercase tracking-wider text-faint mb-3">
                            {t("nextProject")}
                        </div>
                        <div className="font-display text-lg sm:text-xl text-ink group-hover:text-accent transition-colors flex items-center gap-2 sm:justify-end">
                            <span className="truncate">{t(`items.${nextProject.slug}.title`)}</span>
                            <ArrowRight className="w-4 h-4 shrink-0 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </Link>
                </div>
            </div>
        </main>
    );
}
