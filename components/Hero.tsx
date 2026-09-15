"use client";

import { useTranslations, useLocale } from "next-intl";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Typewriter from "typewriter-effect";
import { projects } from "@/data/projects";
import { Link } from "@/i18n/routing";
import Image from "next/image";

export default function Hero() {
  const t = useTranslations("HomePage.hero");
  const locale = useLocale();
  const containerRef = useRef<HTMLElement>(null);

  const [firstName, ...restName] = t("name").split(" ");
  const lastName = restName.join(" ");

  const skills = t("skills.list")
    .split(", ")
    .map((skill) => skill.toLocaleUpperCase("en-US"));
  const marqueeSkills = [...skills, ...skills];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-eyebrow", { y: 16, opacity: 0, duration: 0.6 })
        .from(".hero-name-line", { y: 60, opacity: 0, duration: 0.9, stagger: 0.12 }, "-=0.3")
        .from(".hero-role", { y: 20, opacity: 0, duration: 0.6 }, "-=0.5")
        .from(".hero-bio", { y: 20, opacity: 0, duration: 0.6 }, "-=0.4")
        .from(".hero-cta", { y: 16, opacity: 0, duration: 0.5, stagger: 0.08 }, "-=0.4")
        .from(".hero-stat", { y: 16, opacity: 0, duration: 0.5, stagger: 0.08 }, "-=0.3")
        .from(
          ".hero-portrait",
          { scale: 0.92, opacity: 0, duration: 1, ease: "elastic.out(1, 0.8)" },
          "-=1"
        )
        .from(".hero-marquee", { opacity: 0, duration: 0.8 }, "-=0.2");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden pt-32 sm:pt-36"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-60 bg-[linear-gradient(to_right,#ffffff09_1px,transparent_1px),linear-gradient(to_bottom,#ffffff09_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_55%_55%_at_50%_25%,black,transparent)] [-webkit-mask-image:radial-gradient(ellipse_55%_55%_at_50%_25%,black,transparent)]"
        />
        <div className="animate-glow-pulse absolute top-[-15%] right-[-10%] w-[55vw] h-[55vw] max-w-[720px] max-h-[720px] bg-[#ff5a2b26] rounded-full blur-[140px]" />
      </div>

      <div className="min-h-[82vh] sm:min-h-[85vh] flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-14 lg:gap-16 items-center">
            {/* Text column */}
            <div>
              <div className="hero-eyebrow inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-line text-xs sm:text-sm font-medium text-muted mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                </span>
                {t("currentBadge")}
              </div>

              <h1 className="font-display font-semibold tracking-tight leading-[0.95] mb-7">
                <span className="hero-name-line block text-6xl sm:text-7xl lg:text-[5.25rem] text-ink">
                  {firstName}
                </span>
                <span className="hero-name-line block text-6xl sm:text-7xl lg:text-[5.25rem] text-muted">
                  {lastName}
                </span>
              </h1>

              <div className="hero-role font-mono text-base sm:text-lg md:text-xl text-accent mb-8 flex items-center h-8 sm:h-10">
                <span className="text-faint mr-2">/</span>
                <Typewriter
                  options={{
                    strings: t.raw("roles"),
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                    delay: 50,
                    cursorClassName: "text-accent",
                  }}
                />
              </div>

              <p className="hero-bio text-base sm:text-lg text-muted max-w-xl leading-relaxed mb-10">
                {t.rich("bio", {
                  bold: (chunks) => <span className="text-ink font-semibold">{chunks}</span>,
                })}
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-14">
                <a
                  href={`/cv/GP-${locale}.pdf`}
                  download="Gorkem_Pasaoglu_CV.pdf"
                  className="hero-cta group inline-flex items-center gap-2 px-6 py-3.5 bg-accent text-canvas rounded-xl font-semibold text-sm sm:text-base hover:bg-accent-soft transition-colors duration-300"
                >
                  {t("downloadCV")}
                  <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                </a>
                <Link
                  href="/#projects"
                  className="hero-cta group inline-flex items-center gap-2 px-6 py-3.5 border border-line rounded-xl font-semibold text-sm sm:text-base text-ink hover:border-line-strong transition-colors duration-300"
                >
                  {t("viewProjects")}
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-lg">
                <div className="hero-stat">
                  <div className="font-display text-2xl sm:text-3xl text-ink font-semibold">
                    {t("stats.gpaValue")}
                  </div>
                  <div className="text-xs text-faint mt-1.5 leading-snug">
                    {t("stats.gpaLabel")}
                  </div>
                </div>
                <div className="hero-stat border-l border-line pl-4 sm:pl-8">
                  <div className="font-display text-2xl sm:text-3xl text-ink font-semibold">
                    {t("stats.rankValue")}
                  </div>
                  <div className="text-xs text-faint mt-1.5 leading-snug">
                    {t("stats.rankLabel")}
                  </div>
                </div>
                <div className="hero-stat border-l border-line pl-4 sm:pl-8">
                  <div className="font-display text-2xl sm:text-3xl text-ink font-semibold">
                    {projects.length}+
                  </div>
                  <div className="text-xs text-faint mt-1.5 leading-snug">
                    {t("stats.projectsLabel")}
                  </div>
                </div>
              </div>
            </div>

            {/* Portrait column */}
            <div className="hero-portrait relative mx-auto lg:mx-0 w-60 sm:w-72 md:w-80 aspect-[4/5]">
              <div className="absolute -inset-6 bg-[#ff5a2b1f] rounded-[2rem] blur-2xl" />
              <div className="relative w-full h-full rounded-[1.75rem] overflow-hidden border border-line">
                <Image
                  src="/images/hero-photo.jpg"
                  alt="Görkem Paşaoğlu"
                  fill
                  priority
                  quality={100}
                  unoptimized
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b80] via-transparent to-transparent" />
              </div>
              <span className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-accent rounded-tl-lg" />
              <span className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-accent rounded-br-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* Skills marquee */}
      <div className="hero-marquee relative mt-16 lg:mt-0 border-t border-line py-6 overflow-hidden">
        <div className="flex w-max gap-10 animate-marquee hover:[animation-play-state:paused]">
          {marqueeSkills.map((skill, i) => (
            <span
              key={i}
              className="flex items-center gap-10 font-mono text-xs sm:text-sm tracking-wider text-faint whitespace-nowrap"
            >
              {skill}
              <span className="text-accent">•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
