import { useState, useEffect } from 'react';
import './ThreatMeter.css';

function ThreatMeter() {
    const [level, setLevel] = useState(0);
    const [status, setStatus] = useState('SCANNING');

    useEffect(() => {
        const timer = setTimeout(() => {
            const targetLevel = 78;
            setLevel(targetLevel);

            if (targetLevel >= 80) {
                setStatus('CRITICAL');
            } else if (targetLevel >= 50) {
                setStatus('ELEVATED');
            } else {
                setStatus('NOMINAL');
            }
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    const getStatusClass = () => {
        if (level >= 80) return 'critical';
        if (level >= 50) return 'warning';
        return '';
    };

    return (
        <section className="threat-meter" id="threat">
            <div className="container">
                <div className="terminal-box">
                    <div className="threat-header">
                        <span className="label">DIMENSIONAL INTERFERENCE LEVEL</span>
                        <span className={`status ${getStatusClass()}`}>[{status}]</span>
                    </div>

                    <div className={`progress-bar ${getStatusClass()}`}>
                        <div
                            className="fill"
                            style={{ width: `${level}%` }}
                        ></div>
                    </div>

                    <div className="threat-stats">
                        <span>SANITY: {100 - Math.floor(level * 0.3)}%</span>
                        <span className={level >= 70 ? 'warning-flash' : ''}>
                            {level >= 70 && '⚠ WARNING: MIND FLAYER ACTIVITY DETECTED'}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ThreatMeter;
