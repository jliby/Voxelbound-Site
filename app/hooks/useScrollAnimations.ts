import { useEffect } from 'react';

export function useScrollAnimations() {
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-up');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe elements for animation
        const animateElements = document.querySelectorAll(
            '.about-card, .feature-card, .devlog-card, .section-header'
        );

        animateElements.forEach((el, index) => {
            // Use type assertion for style property
            (el as HTMLElement).style.opacity = '0';
            (el as HTMLElement).style.animationDelay = `${(index % 4) * 0.1}s`;
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);
}
