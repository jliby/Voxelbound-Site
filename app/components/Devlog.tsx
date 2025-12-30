export default function Devlog() {
    return (
        <section className="devlog" id="devlog">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Development</span>
                    <h2>Follow the <span className="gradient-text">Journey</span></h2>
                    <p className="section-desc">Stay updated on the latest development progress and behind-the-scenes content.
                    </p>
                </div>
                <div className="devlog-grid">
                    <article className="devlog-card featured">
                        <div className="devlog-date">
                            <span className="day">23</span>
                            <span className="month">Dec</span>
                        </div>
                        <div className="devlog-content">
                            <span className="devlog-tag">Announcement</span>
                            <h3>Welcome to Voxelbound!</h3>
                            <p>We're excited to share our vision for Voxelbound - a cozy productivity game that rewards you
                                for reading. The development is underway, and we can't wait to show you more.</p>
                            <div className="devlog-footer">
                                <span className="read-time">📖 2 min read</span>
                            </div>
                        </div>
                    </article>
                    <article className="devlog-card">
                        <div className="devlog-date">
                            <span className="day">--</span>
                            <span className="month">TBD</span>
                        </div>
                        <div className="devlog-content">
                            <span className="devlog-tag">Coming Soon</span>
                            <h3>More Updates Coming...</h3>
                            <p>Join our community to be the first to know when we share new devlogs, concept art, and
                                development milestones.</p>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}
