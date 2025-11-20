"use client";

import { useTranslations } from "next-intl";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/routing";
import { projects } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
    const t = useTranslations("HomePage.projects");
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const projectCards = gsap.utils.toArray(".project-card");

            projectCards.forEach((project: any, index) => {
                gsap.from(project, {
                    scrollTrigger: {
                        trigger: project,
                        start: "top 95%",
                        end: "bottom 15%",
                        toggleActions: "play none none reverse",
                    },
                    y: 100,
                    opacity: 0,
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="projects"
            ref={containerRef}
            className="w-full min-h-screen py-20 px-6 bg-[#050505]"
        >
            <div className="container mx-auto">
                <h2 className="text-4xl md:text-6xl font-bold mb-20 text-center text-white">
                    {t("title")}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => {
                        const techStack = t.raw(`items.${project.slug}.tech`) as string[];

                        return (
                            <Link
                                href={`/projects/${project.slug}`}
                                key={project.slug}
                                className="project-card group block relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
                            >
                                {/* Image Container */}
                                <div className="aspect-video overflow-hidden relative">
                                    <img
                                        src={project.coverImage}
                                        alt={t(`items.${project.slug}.title`)}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <div className="bg-white/10 backdrop-blur-md p-4 rounded-full border border-white/20">
                                            <ArrowUpRight className="w-8 h-8 text-white" />
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                        {t(`items.${project.slug}.title`)}
                                    </h3>
                                    <p className="text-gray-400 mb-4 line-clamp-2">
                                        {t(`items.${project.slug}.description`)}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {techStack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 text-xs font-mono text-blue-300 bg-blue-500/10 rounded-full border border-blue-500/20"
                                            >
                                                {tech}
                                            </span>
                                        ))}
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
