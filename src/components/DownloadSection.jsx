import { useState, useEffect } from 'react';
import './DownloadSection.css';

function DownloadSection() {
    const [downloadCount, setDownloadCount] = useState(0);

    useEffect(() => {
        const count = parseInt(localStorage.getItem('downloadCount') || '0');
        setDownloadCount(count);
    }, []);

    const handleDownload = () => {
        // Trigger download
        const link = document.createElement('a');
        link.href = '/upside-down-communicator.apk';
        link.download = 'upside-down-communicator.apk';
        link.click();

        // Update counter
        const newCount = downloadCount + 1;
        localStorage.setItem('downloadCount', newCount.toString());
        setDownloadCount(newCount);

        // Show instructions
        alert(
            '> APK DOWNLOAD INITIATED\n\n' +
            '> INSTALLATION INSTRUCTIONS:\n' +
            '> 1. ENABLE "INSTALL FROM UNKNOWN SOURCES"\n' +
            '> 2. OPEN APK FILE\n' +
            '> 3. GRANT PERMISSIONS\n' +
            '> 4. SHAKE DEVICE TO TEST'
        );
    };

    return (
        <section className="download-section" id="download">
            <div className="container">
                <div className="download-box terminal-box">
                    <h2 className="text-glow">Download Communicator</h2>

                    <div className="download-content">
                        <button
                            className="retro-button download-btn pulse"
                            onClick={handleDownload}
                        >
                            Initiate Download Sequence
                        </button>

                        <div className="download-info">
                            <div className="info-row">
                                <span className="label">VERSION:</span>
                                <span className="value">1.0.0</span>
                            </div>
                            <div className="info-row">
                                <span className="label">SIZE:</span>
                                <span className="value">~15 MB</span>
                            </div>
                            <div className="info-row">
                                <span className="label">REQUIRES:</span>
                                <span className="value">Android 7.0+ (API 24)</span>
                            </div>
                            <div className="info-row">
                                <span className="label">DOWNLOADS:</span>
                                <span className="value counter">{downloadCount}</span>
                            </div>
                        </div>

                        <a
                            href="https://github.com/krypton-arch/UpsideDownCommunicator"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="retro-button secondary"
                        >
                            View Source on GitHub
                        </a>
                    </div>

                    <div className="installation-note">
                        <p>⚠ SECURITY NOTE: Enable "Install from Unknown Sources" in Android settings before installation.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DownloadSection;
