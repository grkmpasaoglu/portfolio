import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import ResponsiveShowcase from '@/components/ResponsiveShowcase';
import PerformanceShowcase from '@/components/PerformanceShowcase';
import Projects from '@/components/Projects';
import GsapCTA from '@/components/GsapCTA';
import Footer from '@/components/Footer';

export default function HomePage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <Hero />
            <Experience />
            <ResponsiveShowcase />
            <PerformanceShowcase />
            <Projects />
            <GsapCTA />
            <Footer />
        </main>
    );
}
