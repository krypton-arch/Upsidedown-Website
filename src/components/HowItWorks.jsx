import { useState, useEffect } from 'react';
import './HowItWorks.css';

const STEPS = [
    {
        title: 'ACCEPT_TEXT_INPUT',
        description: 'User types emergency message (e.g., "HELP")'
    },
    {
        title: 'ENCODE_MESSAGE',
        description: 'Convert to Morse code sequence'
    },
    {
        title: 'VISUAL_TRANSMISSION',
        description: 'Flash screen or display light patterns'
    },
    {
        title: 'MONITOR_SANITY_METER',
        description: 'Track system stability (100% → 0%)'
    },
    {
        title: 'SURVIVE_POSSESSION',
        description: 'Endure 30 seconds of UI corruption'
    },
    {
        title: 'SHAKE_TO_RECOVER',
        description: 'Physical gesture restores system'
    },
    {
        title: 'REPEAT_TRANSMISSION',
        description: 'Continue until the message gets through'
    }
];

function HowItWorks() {
    const [visibleSteps, setVisibleSteps] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    const timer = setInterval(() => {
                        setVisibleSteps(prev => {
                            if (prev < STEPS.length) return prev + 1;
                            clearInterval(timer);
                            return prev;
                        });
                    }, 200);
                }
            },
            { threshold: 0.3 }
        );

        const section = document.getElementById('how-it-works');
        if (section) observer.observe(section);

        return () => observer.disconnect();
    }, []);

    return (
        <section className="how-it-works" id="how-it-works">
            <div className="container">
                <h2 className="glitch-text-hover">&gt; How the Decoder Works</h2>

                <div className="terminal-box steps-container">
                    {STEPS.map((step, index) => (
                        <div
                            key={index}
                            className={`step ${index < visibleSteps ? 'visible' : ''}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="step-number">{index + 1}.</div>
                            <div className="step-content">
                                <div className="step-title">{step.title}</div>
                                <div className="step-description">└─ {step.description}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;
