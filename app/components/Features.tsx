export default function Features() {
    return (
        <section className="features" id="features">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Room Themes</span>
                    <h2>Choose Your <span className="gradient-text">Perfect Vibe</span></h2>
                    <p className="section-desc">Multiple themed environments to match your mood, with more coming as DLC.</p>
                </div>
                <div className="features-showcase">
                    <div className="feature-card featured">
                        <div className="feature-image">
                            <img src="/media/standard-example.jpg" alt="Cozy Cabin Theme" />
                            <div className="feature-overlay">
                                <span className="feature-tag">Base Game</span>
                            </div>
                        </div>
                        <div className="feature-content">
                            <h3>🏠 Cozy Cabin</h3>
                            <p>The default starter room. Warm wood tones, crackling fireplace, and the perfect atmosphere
                                for getting lost in a good book.</p>
                            <ul className="feature-list">
                                <li>Crackling fire ambiance</li>
                                <li>Rain on windows</li>
                                <li>Acoustic lofi music</li>
                            </ul>
                        </div>
                    </div>
                    <div className="feature-card">
                        <div className="feature-image">
                            <img src="/media/cyberpunk-example.jpg" alt="Cyberpunk Archive Theme" />
                            <div className="feature-overlay">
                                <span className="feature-tag">DLC</span>
                            </div>
                        </div>
                        <div className="feature-content">
                            <h3>🌃 Cyberpunk Archive</h3>
                            <p>Neon rain, server racks, and synth vibes. Perfect for sci-fi readers and night owls.</p>
                        </div>
                    </div>
                    <div className="feature-card">
                        <div className="feature-image">
                            <img src="/media/medieval-example.jpg" alt="Medieval Library Theme" />
                            <div className="feature-overlay">
                                <span className="feature-tag">DLC</span>
                            </div>
                        </div>
                        <div className="feature-content">
                            <h3>🏛️ Medieval Library</h3>
                            <p>Grand stone architecture, mystical candles, and ancient tome atmosphere for fantasy
                                enthusiasts.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
