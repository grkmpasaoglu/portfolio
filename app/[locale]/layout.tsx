import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import "../globals.css";
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
    title: "Görkem Paşaoğlu",
    description: "Premium Portfolio",
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
        <html lang={locale} className="scroll-smooth">
            <body className="antialiased bg-background text-foreground overflow-x-hidden selection:bg-blue-500/30 selection:text-blue-200">
                <NextIntlClientProvider messages={messages}>
                    <Navigation />
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
