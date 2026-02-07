import { useState, useEffect } from 'react';
import './MissionBriefing.css';

const BRIEFING_LINES = [
    '> INITIALIZING SECURE CHANNEL...',
    '> CONNECTION ESTABLISHED',
    '>',
    '> SYSTEM STATUS: COMPROMISED',
    '> ELECTROMAGNETIC INTERFERENCE: DETECTED',
    '> STANDARD PROTOCOLS: OFFLINE',
    '> ALTERNATIVE TRANSMISSION: ACTIVE',
    '> MORSE CODE ENCODER: OPERATIONAL',
    '> SHAKE-TO-RECOVER: ENABLED',
    '> DECODER STATUS: READY',
    '>',
    '> AWAITING YOUR TRANSMISSION_'
];

function MissionBriefing() {
    const [visibleLines, setVisibleLines] = useState([]);
    const [currentLine, setCurrentLine] = useState(0);

    useEffect(() => {
        if (currentLine < BRIEFING_LINES.length) {
            const timer = setTimeout(() => {
                setVisibleLines(prev => [...prev, BRIEFING_LINES[currentLine]]);
                setCurrentLine(prev => prev + 1);
            }, 150);

            return () => clearTimeout(timer);
        }
    }, [currentLine]);

    return (
        <section className="mission-briefing" id="mission">
            <div className="container">
                <h2 className="glitch-text-hover">Mission Briefing</h2>
                <div className="terminal-box">
                    <div className="terminal-prompt">
                        {visibleLines.map((line, index) => (
                            <div
                                key={index}
                                className={`line ${line.includes('COMPROMISED') ? 'error' : ''} ${line.includes('OPERATIONAL') || line.includes('ENABLED') || line.includes('READY') ? 'success' : ''}`}
                            >
                                {line}
                            </div>
                        ))}
                        {currentLine < BRIEFING_LINES.length && (
                            <span className="cursor"></span>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MissionBriefing;
