'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Hero() {
    const glowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (glowRef.current) {
                const scrolled = window.scrollY;
                if (scrolled < window.innerHeight) {
                    glowRef.current.style.transform = `translate(-50%, calc(-50% + ${scrolled * 0.3}px))`;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="hero" id="hero">
            <div className="hero-bg">
                <div className="hero-particles"></div>
                <div className="hero-glow" ref={glowRef}></div>
            </div>
            <div className="hero-content">
                <div className="hero-badge">📚 Coming Soon to Steam - $30.00</div>
                <h1 className="hero-title">
                    <span className="title-line">Read a Chapter,</span>
                    <span className="title-line gradient-text">Build a World.</span>
                </h1>
                <p className="hero-subtitle">
                    A <strong>cozy productivity sandbox</strong> that gamifies reading.
                    As you read real books, your virtual voxel room comes alive with plants, furniture, and cozy vibes.
                </p>
                <div className="hero-cta">
                    <Link href="#community" className="btn btn-primary">
                        <span>🎮</span> Wishlist on Steam
                    </Link>
                    <Link href="#about" className="btn btn-secondary">
                        <span>📖</span> Learn More
                    </Link>
                </div>
                <div className="hero-stats">
                    <div className="stat">
                        <span className="stat-icon">📕</span>
                        <span className="stat-text">EPUB & PDF Support</span>
                    </div>
                    <div className="stat">
                        <span className="stat-icon">🏠</span>
                        <span className="stat-text">Customizable Rooms</span>
                    </div>
                    <div className="stat">
                        <span className="stat-icon">🌱</span>
                        <span className="stat-text">Growing Plants</span>
                    </div>
                </div>
            </div>
            <div className="hero-image">
                <div className="hero-image-frame">
                    <img src="/media/standard-example.jpg" alt="Voxelbound Cozy Room" className="hero-screenshot" />
                    <div className="hero-image-glow"></div>
                </div>
            </div>
            <div className="scroll-indicator">
                <span>Scroll to explore</span>
                <div className="scroll-arrow"></div>
            </div>
        </section>
    );
}
