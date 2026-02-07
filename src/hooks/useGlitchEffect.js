import { useState, useCallback } from 'react';

export const useGlitchEffect = (duration = 300) => {
    const [isGlitching, setIsGlitching] = useState(false);

    const triggerGlitch = useCallback(() => {
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), duration);
    }, [duration]);

    return { isGlitching, triggerGlitch };
};

export default useGlitchEffect;
