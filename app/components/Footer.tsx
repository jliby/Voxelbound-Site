import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <img src="/media/Voxelbond.png" alt="Voxelbound" className="footer-logo" />
                        <span className="footer-title">Voxelbound</span>
                        <p className="footer-tagline">"Read a chapter, build a world."</p>
                    </div>
                    <div className="footer-links">
                        <div className="footer-col">
                            <h5>Game</h5>
                            <Link href="#about">About</Link>
                            <Link href="#features">Features</Link>
                            <Link href="#gallery">Gallery</Link>
                        </div>
                        <div className="footer-col">
                            <h5>Community</h5>
                            <Link href="#devlog">Devlog</Link>
                            <Link href="#">Discord</Link>
                            <Link href="#">Twitter</Link>
                        </div>
                        <div className="footer-col">
                            <h5>Legal</h5>
                            <Link href="#">Privacy Policy</Link>
                            <Link href="#">Terms of Service</Link>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 Voxelbound. All rights reserved.</p>
                    <p className="footer-made">Made with 📚 and ☕</p>
                </div>
            </div>
        </footer>
    );
}
