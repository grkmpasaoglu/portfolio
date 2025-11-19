"use client";

import { useTranslations } from "next-intl";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
    const t = useTranslations("HomePage.footer"); // Need to add this to messages

    return (
        <footer id="contact" className="w-full bg-[#050505] border-t border-white/5 py-12 px-6">
            <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold text-white mb-2">PASAOGLU<span className="text-blue-500">.</span></h3>
                    <p className="text-gray-400 text-sm">
                        &copy; {new Date().getFullYear()} {t("copyright")}
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    <a href="https://github.com/grkmpasaoglu" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href="http://www.linkedin.com/in/gorkempasaoglu" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="http://x.com/grkmpasaoglu" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                        <Twitter className="w-5 h-5" />
                    </a>
                    <a href="mailto:gorkempasaoglu@outlook.com" className="text-gray-400 hover:text-white transition-colors">
                        <Mail className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
