export default function About() {
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">The Concept</span>
                    <h2>Turn Reading Into <span className="gradient-text">an Adventure</span></h2>
                </div>
                <div className="about-grid">
                    <div className="about-card">
                        <div className="about-icon">📖</div>
                        <h3>Read Real Books</h3>
                        <p>Import your EPUB and PDF files into a beautiful, distraction-free reader with customizable fonts,
                            themes, and bookmarks.</p>
                    </div>
                    <div className="about-card">
                        <div className="about-icon">⏱️</div>
                        <h3>Track Your Progress</h3>
                        <p>Every minute of reading earns Focus Points. Watch as your dedication transforms into tangible
                            rewards.</p>
                    </div>
                    <div className="about-card">
                        <div className="about-icon">🪴</div>
                        <h3>Watch Your World Grow</h3>
                        <p>Plants bloom, sunlight shifts, and dust motes dance as you read. Your room evolves with every
                            chapter.</p>
                    </div>
                    <div className="about-card">
                        <div className="about-icon">🛋️</div>
                        <h3>Decorate & Customize</h3>
                        <p>Unlock 50+ furniture items, customize your avatar, and create the perfect cozy reading nook.</p>
                    </div>
                </div>
                <div className="about-visual">
                    <div className="progression-flow">
                        <div className="flow-step">
                            <div className="flow-icon">📚</div>
                            <span>Read</span>
                        </div>
                        <div className="flow-arrow">→</div>
                        <div className="flow-step">
                            <div className="flow-icon">⭐</div>
                            <span>Earn Points</span>
                        </div>
                        <div className="flow-arrow">→</div>
                        <div className="flow-step">
                            <div className="flow-icon">🎁</div>
                            <span>Unlock Items</span>
                        </div>
                        <div className="flow-arrow">→</div>
                        <div className="flow-step">
                            <div className="flow-icon">🏠</div>
                            <span>Build Room</span>
                        </div>
                        <div className="flow-arrow">→</div>
                        <div className="flow-step highlight">
                            <div className="flow-icon">✨</div>
                            <span>Feel Accomplished</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
