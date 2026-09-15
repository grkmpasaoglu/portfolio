"use client";

import { useTranslations } from "next-intl";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/routing";
import { projects } from "@/data/projects";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
    const t = useTranslations("HomePage.projects");
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const projectCards = gsap.utils.toArray<HTMLElement>(".project-card");

            projectCards.forEach((project) => {
                gsap.from(project, {
                    scrollTrigger: {
                        trigger: project,
                        start: "top 95%",
                        end: "bottom 15%",
                        toggleActions: "play none none reverse",
                    },
                    y: 60,
                    opacity: 0,
                    duration: 0.6,
                    ease: "power3.out",
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="projects"
            ref={containerRef}
            className="w-full py-24 sm:py-32 px-6 sm:px-8 bg-canvas-deep border-t border-line"
        >
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 sm:mb-20">
                    <div>
                        <div className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
                            {t("eyebrow")}
                        </div>
                        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-ink tracking-tight">
                            {t("title")}
                        </h2>
                    </div>
                    <p className="text-muted max-w-sm leading-relaxed">
                        {t("intro")}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {projects.map((project, index) => {
                        const techStack = t.raw(`items.${project.slug}.tech`) as string[];

                        return (
                            <Link
                                href={`/projects/${project.slug}`}
                                key={project.slug}
                                className="project-card group block relative rounded-2xl overflow-hidden bg-canvas-soft border border-line hover:border-line-strong transition-colors duration-300"
                            >
                                <div className="aspect-video overflow-hidden relative bg-canvas">
                                    <Image
                                        src={project.coverImage}
                                        alt={t(`items.${project.slug}.title`)}
                                        fill
                                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                                        className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0bcc] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                                    <span className="absolute top-4 left-4 font-mono text-xs text-white/70 bg-[#0a0a0b80] backdrop-blur-sm px-2 py-1 rounded-md">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    <span className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-transparent border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                                        <ArrowUpRight className="w-4 h-4 text-white group-hover:-translate-y-0 transition-transform" />
                                    </span>
                                </div>

                                <div className="p-6">
                                    <h3 className="font-display text-xl font-semibold text-ink mb-2 group-hover:text-accent transition-colors">
                                        {t(`items.${project.slug}.title`)}
                                    </h3>
                                    <p className="text-sm text-muted mb-5 leading-relaxed line-clamp-2">
                                        {t(`items.${project.slug}.description`)}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {techStack.slice(0, 3).map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2.5 py-1 text-[11px] font-mono text-faint border border-line rounded-md"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {techStack.length > 3 && (
                                            <span className="px-2.5 py-1 text-[11px] font-mono text-faint">
                                                +{techStack.length - 3}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
