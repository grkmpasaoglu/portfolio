import { projects } from "@/data/projects";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import ProjectDetailClient from "./ProjectDetailClient";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
    const { locale, slug } = await params;
    const project = projects.find((p) => p.slug === slug);
    if (!project) return {};

    const t = await getTranslations({ locale, namespace: "HomePage.projects.items" });

    return {
        title: `${t(`${slug}.title`)} — Görkem Paşaoğlu`,
        description: t(`${slug}.description`),
    };
}

export default async function ProjectDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return <ProjectDetailClient project={project} />;
}
