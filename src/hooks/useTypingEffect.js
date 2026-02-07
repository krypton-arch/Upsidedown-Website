import { useState, useEffect } from 'react';

export const useTypingEffect = (text, speed = 50, startDelay = 0) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isComplete, setIsComplete] = useState(false);
    const [isStarted, setIsStarted] = useState(false);

    useEffect(() => {
        let timeout;
        let index = 0;

        const startTyping = () => {
            setIsStarted(true);
            const timer = setInterval(() => {
                if (index < text.length) {
                    setDisplayedText(text.slice(0, index + 1));
                    index++;
                } else {
                    setIsComplete(true);
                    clearInterval(timer);
                }
            }, speed);

            return () => clearInterval(timer);
        };

        timeout = setTimeout(startTyping, startDelay);

        return () => {
            clearTimeout(timeout);
        };
    }, [text, speed, startDelay]);

    return { displayedText, isComplete, isStarted };
};

export default useTypingEffect;
