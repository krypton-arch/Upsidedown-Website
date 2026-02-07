import { useState, useEffect, useCallback } from 'react';
import './Footer.css';

const KONAMI_CODE = [
    'ArrowUp', 'ArrowUp',
    'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight',
    'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
];

function Footer() {
    const [konamiIndex, setKonamiIndex] = useState(0);
    const [easterEggActive, setEasterEggActive] = useState(false);

    const handleKeyDown = useCallback((e) => {
        if (e.code === KONAMI_CODE[konamiIndex]) {
            const nextIndex = konamiIndex + 1;
            if (nextIndex === KONAMI_CODE.length) {
                // Easter egg activated!
                setEasterEggActive(true);
                setKonamiIndex(0);

                // Reset after 5 seconds
                setTimeout(() => {
                    setEasterEggActive(false);
                }, 5000);
            } else {
                setKonamiIndex(nextIndex);
            }
        } else {
            setKonamiIndex(0);
        }
    }, [konamiIndex]);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    useEffect(() => {
        if (easterEggActive) {
            document.body.classList.add('upside-down');
        } else {
            document.body.classList.remove('upside-down');
        }
    }, [easterEggActive]);

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-border">
                    ═══════════════════════════════════════════════════════
                </div>

                <div className="footer-content">
                    <div className="footer-title">
                        UPSIDE DOWN COMMUNICATOR v1.0
                    </div>
                    <div className="footer-credits">
                        Built by <a href="https://github.com/krypton-arch" target="_blank" rel="noopener noreferrer">krypton-arch</a> | Hackathon Project 2026
                    </div>

                    <div className="footer-links">
                        <a href="https://github.com/krypton-arch/UpsideDownCommunicator" target="_blank" rel="noopener noreferrer">
                            [ GITHUB ]
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            [ LINKEDIN ]
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            [ DEVPOST ]
                        </a>
                    </div>

                    <div className="footer-tagline phosphor-glow">
                        &gt; THE GATE IS OPEN. THE MESSAGE MUST GET THROUGH.
                    </div>
                </div>

                <div className="footer-border">
                    ═══════════════════════════════════════════════════════
                </div>

                {easterEggActive && (
                    <div className="easter-egg-message warning-flash">
                        ⚠ DIMENSIONAL RIFT DETECTED - REALITY INVERTING ⚠
                    </div>
                )}
            </div>
        </footer>
    );
}

export default Footer;
