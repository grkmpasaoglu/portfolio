"use client";

import { useTranslations } from "next-intl";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
    const t = useTranslations("HomePage.footer"); // Need to add this to messages

    return (
        <footer id="contact" className="w-full bg-canvas-deep border-t border-line py-12 px-6 sm:px-8">
            <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <h3 className="font-display text-xl font-semibold text-ink mb-2">PAŞAOĞLU<span className="text-accent">.</span></h3>
                    <p className="text-muted text-sm">
                        &copy; {new Date().getFullYear()} {t("copyright")}
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    <a href="https://github.com/grkmpasaoglu" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-ink transition-colors">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href="http://www.linkedin.com/in/gorkempasaoglu" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="http://x.com/grkmpasaoglu" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors">
                        <Twitter className="w-5 h-5" />
                    </a>
                    <a href="mailto:gorkempasaoglu@outlook.com" className="text-muted hover:text-ink transition-colors">
                        <Mail className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
