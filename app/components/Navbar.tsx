'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
            <div className="nav-container">
                <Link href="#" className="nav-logo" onClick={closeMenu}>
                    <img src="/media/Voxelbond.png" alt="Voxelbound Logo" className="logo-img" />
                    <span>Voxelbound</span>
                </Link>
                <button
                    className={`nav-toggle ${isMobileMenuOpen ? 'open' : ''}`}
                    id="navToggle"
                    aria-label="Toggle navigation"
                    onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`} id="navLinks">
                    <li><Link href="#about" onClick={closeMenu}>About</Link></li>
                    <li><Link href="#features" onClick={closeMenu}>Features</Link></li>
                    <li><Link href="#gallery" onClick={closeMenu}>Gallery</Link></li>
                    <li><Link href="#devlog" onClick={closeMenu}>Devlog</Link></li>
                    <li><Link href="#community" className="nav-cta" onClick={closeMenu}>Join Community</Link></li>
                </ul>
            </div>
        </nav>
    );
}
