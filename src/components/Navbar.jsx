import { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: 'HOME', href: '#hero' },
        { label: 'FEATURES', href: '#features' },
        { label: 'HOW IT WORKS', href: '#how-it-works' },
        { label: 'SCREENSHOTS', href: '#screenshots' },
        { label: 'DOWNLOAD', href: '#download' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <a href="#hero" className="navbar-logo">
                    <span className="logo-icon">▲</span>
                    <span className="logo-text">UDC</span>
                </a>

                <button
                    className="mobile-toggle"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? '✕' : '☰'}
                </button>

                <ul className={`navbar-links ${mobileMenuOpen ? 'open' : ''}`}>
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <a
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <a href="#download" className="navbar-cta">
                    [ GET APK ]
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
