import { useGlitchEffect } from '../hooks/useGlitchEffect';
import './Features.css';

const FEATURES = [
    {
        icon: '▪ ▪ ▪ ― ― ― ▪ ▪ ▪',
        title: 'CRYPTIC TRANSMISSION',
        subtitle: 'MORSE CODE SYSTEM',
        description: 'Messages encoded into visual light patterns. No plain text survives the dimensional rift.'
    },
    {
        icon: '▼ ▼ ▼',
        title: 'MIND FLAYER MODE',
        subtitle: 'CORRUPTION STATE',
        description: 'Sanity meter drains over time. At 0%, the app enters Possessed Mode for 30 seconds.'
    },
    {
        icon: '⟲ ⟳ ⟲',
        title: 'SHAKE TO RECOVER',
        subtitle: 'PHYSICAL OVERRIDE',
        description: 'Shake your device to restore sanity and exit Possessed Mode. Hardware beats software.'
    }
];

function Features() {
    const { isGlitching, triggerGlitch } = useGlitchEffect(200);

    return (
        <section className="features" id="features">
            <div className="container">
                <h2 className="text-glow">System Capabilities</h2>

                <div className="features-grid">
                    {FEATURES.map((feature, index) => (
                        <div
                            key={index}
                            className={`feature-card ${isGlitching ? 'glitch' : ''}`}
                            onClick={triggerGlitch}
                        >
                            <div className="icon">{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <div className="subtitle">{feature.subtitle}</div>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Features;
