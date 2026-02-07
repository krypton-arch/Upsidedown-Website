import { useTypingEffect } from '../hooks/useTypingEffect';
import { useGlitchEffect } from '../hooks/useGlitchEffect';
import './Hero.css';

const ASCII_TITLE = `
██╗   ██╗██████╗ ███████╗██╗██████╗ ███████╗
██║   ██║██╔══██╗██╔════╝██║██╔══██╗██╔════╝
██║   ██║██████╔╝███████╗██║██║  ██║█████╗  
██║   ██║██╔═══╝ ╚════██║██║██║  ██║██╔══╝  
╚██████╔╝██║     ███████║██║██████╔╝███████╗
 ╚═════╝ ╚═╝     ╚══════╝╚═╝╚═════╝ ╚══════╝

██████╗  ██████╗ ██╗    ██╗███╗   ██╗
██╔══██╗██╔═══██╗██║    ██║████╗  ██║
██║  ██║██║   ██║██║ █╗ ██║██╔██╗ ██║
██║  ██║██║   ██║██║███╗██║██║╚██╗██║
██████╔╝╚██████╔╝╚███╔███╔╝██║ ╚████║
╚═════╝  ╚═════╝  ╚══╝╚══╝ ╚═╝  ╚═══╝
`;

function Hero() {
    const subtitle = '> COMMUNICATOR';
    const tagline = '> HAWKINS RESEARCH LAB - PROJECT MK-ULTRA';
    const description = '> WHEN TRADITIONAL COMMUNICATION FAILS_';

    const { displayedText: subtitleText, isComplete: subtitleDone } = useTypingEffect(subtitle, 80, 500);
    const { displayedText: taglineText, isComplete: taglineDone } = useTypingEffect(tagline, 40, 1500);
    const { displayedText: descText } = useTypingEffect(description, 40, 2500);
    const { isGlitching, triggerGlitch } = useGlitchEffect(300);

    return (
        <section className="hero" id="hero">
            <div className="container">
                <div className="hero-content">
                    <div
                        className={`ascii-title ${isGlitching ? 'glitch-text' : ''}`}
                        onMouseEnter={triggerGlitch}
                    >
                        <pre className="ascii-art phosphor-glow">{ASCII_TITLE}</pre>
                    </div>

                    <div className="hero-text">
                        <p className="subtitle phosphor-glow">
                            {subtitleText}
                            {!subtitleDone && <span className="cursor"></span>}
                        </p>
                        <p className="tagline">
                            {taglineText}
                            {subtitleDone && !taglineDone && <span className="cursor"></span>}
                        </p>
                        <p className="description">
                            {descText}
                            {taglineDone && <span className="cursor"></span>}
                        </p>
                    </div>

                    <div className="hero-cta">
                        <a href="#download" className="retro-button">
                            Initiate Download
                        </a>
                        <a href="#features" className="retro-button secondary">
                            View Intel
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
