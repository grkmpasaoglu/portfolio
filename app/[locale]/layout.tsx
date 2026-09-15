import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Space_Grotesk, Manrope } from 'next/font/google';
import "../globals.css";
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin', 'latin-ext'],
    weight: ['500', '600', '700'],
    variable: '--font-display',
    display: 'swap',
});

const manrope = Manrope({
    subsets: ['latin', 'latin-ext'],
    weight: ['400', '500', '600', '700', '800'],
    variable: '--font-body',
    display: 'swap',
});

export const metadata: Metadata = {
    title: "Görkem Paşaoğlu — Computer Engineer & Frontend Developer",
    description: "Frontend developer & computer engineer building fast, accessible, and highly interactive web experiences with React, Next.js, and modern web technologies.",
};

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    // Ensure that the incoming `locale` is valid
    if (!['en', 'tr'].includes(locale)) {
        notFound();
    }

    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();

    return (
        <html lang={locale} className={`scroll-smooth ${spaceGrotesk.variable} ${manrope.variable}`}>
            <body className="antialiased bg-canvas text-ink overflow-x-hidden selection:bg-[#ff5a2b4d] selection:text-white">
                <NextIntlClientProvider messages={messages}>
                    <Navigation />
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
