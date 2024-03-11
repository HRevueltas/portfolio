// useAspectRatio.js
import { useEffect, useRef, useState } from 'react';

export const useAspectRatio = (url) => {
    const isImage = url && url.match(/\.(jpeg|jpg|gif|png|webp)$/) != null;
    const [ratio, setRatio] = useState(null);
    const mediaRef = useRef(isImage ? new Image() : document.createElement('video'));

    useEffect(() => {
        const handleLoad = () => {
            const width = isImage ? mediaRef.current.width : mediaRef.current.videoWidth;
            const height = isImage ? mediaRef.current.height : mediaRef.current.videoHeight;
            setRatio(width / height);
        }

        if (mediaRef.current.complete || (mediaRef.current.readyState > 0 && !isImage)) {
            handleLoad();
        } else {
            const event = isImage ? 'load' : 'loadedmetadata';
            mediaRef.current.addEventListener(event, handleLoad);
        }

        // return () => {
        //     const event = isImage ? 'load' : 'loadedmetadata';
        //     mediaRef.current.removeEventListener(event, handleLoad);
        // }
    }, [url, isImage]);

    return { ratio, mediaRef, isImage };
}