'use client';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Devlog from './components/Devlog';
import Community from './components/Community';
import Footer from './components/Footer';
import { useScrollAnimations } from './hooks/useScrollAnimations';

export default function Home() {
    useScrollAnimations();

    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <About />
                <Features />
                <Gallery />
                <Devlog />
                <Community />
            </main>
            <Footer />
        </>
    );
}
