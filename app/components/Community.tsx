'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Community() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' | 'info' } | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !email.includes('@')) {
            setNotification({ message: 'Please enter a valid email address.', type: 'error' });
            return;
        }

        setStatus('submitting');

        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            setNotification({ message: 'Thanks for subscribing! 🎉', type: 'success' });
            setEmail('');

            // Reset status after a delay
            setTimeout(() => {
                setStatus('idle');
            }, 2000);
        }, 1000);
    };

    return (
        <section className="community" id="community">
            {notification && (
                <div className={`notification notification-${notification.type}`} style={{
                    position: 'fixed',
                    bottom: '24px',
                    right: '24px',
                    padding: '16px 24px',
                    borderRadius: '12px',
                    background: notification.type === 'success' ? '#10b981' : notification.type === 'error' ? '#ef4444' : '#3b82f6',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                    zIndex: 9999,
                    animation: 'slideInRight 0.3s ease',
                }}>
                    <span>{notification.message}</span>
                    <button
                        className="notification-close"
                        onClick={() => setNotification(null)}
                        style={{ background: 'none', border: 'none', color: '#fff', fontSize: '1.25rem', cursor: 'pointer', padding: 0 }}
                    >
                        &times;
                    </button>
                </div>
            )}

            <div className="container">
                <div className="community-content">
                    <div className="community-text">
                        <span className="section-tag">Join Us</span>
                        <h2>Be Part of the <span className="gradient-text">Community</span></h2>
                        <p>Get exclusive updates, vote on features, and connect with other readers who love cozy games.</p>
                        <div className="community-perks">
                            <div className="perk">✨ Early access announcements</div>
                            <div className="perk">🎨 Behind-the-scenes content</div>
                            <div className="perk">🗳️ Vote on new themes & features</div>
                            <div className="perk">💬 Connect with the community</div>
                        </div>
                    </div>
                    <div className="community-actions">
                        <div className="newsletter-form">
                            <h4>📬 Newsletter Signup</h4>
                            <form id="newsletterForm" onSubmit={handleSubmit}>
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <button type="submit" className="btn btn-primary" disabled={status === 'submitting'}>
                                    {status === 'submitting' ? 'Subscribing...' : 'Subscribe'}
                                </button>
                            </form>
                            <p className="form-note">No spam, just cozy updates. Unsubscribe anytime.</p>
                        </div>
                        <div className="social-links">
                            <h4>🌐 Connect With Us</h4>
                            <div className="social-grid">
                                <Link href="#" className="social-btn discord">
                                    <span className="social-icon">💬</span>
                                    <span>Discord</span>
                                </Link>
                                <Link href="#" className="social-btn twitter">
                                    <span className="social-icon">🐦</span>
                                    <span>Twitter</span>
                                </Link>
                                <Link href="#" className="social-btn steam">
                                    <span className="social-icon">🎮</span>
                                    <span>Steam</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
