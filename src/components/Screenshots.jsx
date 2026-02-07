import { useState } from 'react';
import './Screenshots.css';

const MEDIA_ITEMS = [
    {
        id: 1,
        type: 'image',
        title: 'HOME SCREEN',
        description: 'Terminal interface ready for transmission - Sanity at 95%',
        src: '/home.png'
    },
    {
        id: 2,
        type: 'video',
        title: 'MORSE CODE DEMO',
        description: 'Live demonstration of Morse code encoding and visual transmission',
        src: '/morse.webm'
    },
    {
        id: 3,
        type: 'image',
        title: 'POSSESSED MODE',
        description: 'UI corruption during Mind Flayer attack - System inverted',
        src: '/possessed.png'
    }
];

function Screenshots() {
    const [selectedItem, setSelectedItem] = useState(null);

    return (
        <section className="screenshots" id="screenshots">
            <div className="container">
                <h2 className="text-glow">System Interface</h2>

                <div className="screenshots-grid three-col">
                    {MEDIA_ITEMS.map((item) => (
                        <div
                            key={item.id}
                            className={`screenshot-item ${item.type === 'video' ? 'video-item' : ''}`}
                            onClick={() => setSelectedItem(item)}
                        >
                            <div className="crt-frame">
                                {item.type === 'video' ? (
                                    <div className="video-container">
                                        <video
                                            src={item.src}
                                            muted
                                            loop
                                            autoPlay
                                            playsInline
                                            className="preview-video"
                                        />
                                        <div className="play-overlay">▶</div>
                                    </div>
                                ) : (
                                    <div className="image-container">
                                        <img
                                            src={item.src}
                                            alt={item.title}
                                            loading="lazy"
                                        />
                                        <div className="scanlines"></div>
                                    </div>
                                )}
                            </div>
                            <div className="screenshot-label">{item.title}</div>
                        </div>
                    ))}
                </div>

                <p className="screenshots-note">
                    * Actual screenshots from the Android application
                </p>
            </div>

            {selectedItem && (
                <div className="lightbox" onClick={() => setSelectedItem(null)}>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <div className="crt-frame large">
                            {selectedItem.type === 'video' ? (
                                <video
                                    src={selectedItem.src}
                                    controls
                                    autoPlay
                                    loop
                                    className="lightbox-video"
                                />
                            ) : (
                                <img
                                    src={selectedItem.src}
                                    alt={selectedItem.title}
                                    className="lightbox-image"
                                />
                            )}
                        </div>
                        <p className="lightbox-caption">{selectedItem.description}</p>
                        <button className="close-btn" onClick={() => setSelectedItem(null)}>
                            [ CLOSE ]
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Screenshots;
