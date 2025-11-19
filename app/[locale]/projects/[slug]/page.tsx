"use client";

import { projects } from "@/data/projects";
import { ArrowLeft } from "lucide-react";
import { Link } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { useEffect, useRef } from "react";
import gsap from "gsap";

import { use } from "react";

export default function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const project = projects.find((p) => p.slug === slug);
    const containerRef = useRef(null);

    if (!project) {
        notFound();
    }

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".project-image", {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
            });

            gsap.from(".project-info", {
                x: 50,
                opacity: 0,
                duration: 1,
                delay: 0.5,
                ease: "power3.out",
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <main ref={containerRef} className="min-h-screen bg-[#050505] text-white pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-12 transition-colors group"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    Back to Projects
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Column: Gallery */}
                    <div className="lg:col-span-2 space-y-8">
                        {project.images.map((image, index) => (
                            <div
                                key={index}
                                className="project-image rounded-2xl overflow-hidden border border-white/10 bg-white/5"
                            >
                                <img
                                    src={image}
                                    alt={`${project.title} screenshot ${index + 1}`}
                                    className="w-full h-auto"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Right Column: Info */}
                    <div className="lg:col-span-1">
                        <div className="project-info sticky top-32 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                            <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                                {project.title}
                            </h1>

                            <div className="mb-8">
                                <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-4 font-semibold">
                                    Technologies
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 text-sm font-mono text-blue-300 bg-blue-500/10 rounded-full border border-blue-500/20"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-4 font-semibold">
                                    About Project
                                </h3>
                                <p className="text-gray-300 leading-relaxed">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
