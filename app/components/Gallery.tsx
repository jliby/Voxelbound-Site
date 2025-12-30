'use client';

import { useState, useEffect, useRef } from 'react';

const slides = [
    { src: '/media/standard-example.jpg', alt: 'Standard Room View', caption: 'Cozy Cabin - Default Theme' },
    { src: '/media/reading-perspective-example.jpg', alt: 'Reading Perspective', caption: 'First-Person Reading View' },
    { src: '/media/reading-3rd-perspective-example.jpg', alt: 'Third Person View', caption: 'Third-Person Room View' },
    { src: '/media/cyberpunk-example.jpg', alt: 'Cyberpunk Theme', caption: 'Cyberpunk Archive Theme' },
    { src: '/media/medieval-example.jpg', alt: 'Medieval Theme', caption: 'Medieval Library Theme' },
    { src: '/media/unlocked_item_example.png', alt: 'Unlocked Item', caption: 'Item Unlock Celebration' },
];

export default function Gallery() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const trackRef = useRef<HTMLDivElement>(null);
    const autoplayRef = useRef<NodeJS.Timeout | null>(null);

    const startAutoplay = () => {
        autoplayRef.current = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 5000);
    };

    const resetAutoplay = () => {
        if (autoplayRef.current) clearInterval(autoplayRef.current);
        startAutoplay();
    };

    useEffect(() => {
        startAutoplay();
        return () => {
            if (autoplayRef.current) clearInterval(autoplayRef.current);
        };
    }, []);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
        resetAutoplay();
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
        resetAutoplay();
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
        resetAutoplay();
    };

    return (
        <section className="gallery" id="gallery">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Concept Art</span>
                    <h2>Visual <span className="gradient-text">Preview</span></h2>
                </div>
                <div className="gallery-carousel">
                    <button
                        className="carousel-btn prev"
                        id="carouselPrev"
                        aria-label="Previous slide"
                        onClick={prevSlide}
                    >
                        ‹
                    </button>
                    <div className="carousel-track-container">
                        <div
                            className="carousel-track"
                            id="carouselTrack"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                            onMouseEnter={() => { if (autoplayRef.current) clearInterval(autoplayRef.current); }}
                            onMouseLeave={startAutoplay}
                        >
                            {slides.map((slide, index) => (
                                <div className="carousel-slide" key={index}>
                                    <img src={slide.src} alt={slide.alt} />
                                    <div className="slide-caption">{slide.caption}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button
                        className="carousel-btn next"
                        id="carouselNext"
                        aria-label="Next slide"
                        onClick={nextSlide}
                    >
                        ›
                    </button>
                </div>
                <div className="carousel-dots" id="carouselDots">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                            aria-label={`Go to slide ${index + 1}`}
                            onClick={() => goToSlide(index)}
                        ></button>
                    ))}
                </div>
            </div>
        </section>
    );
}
