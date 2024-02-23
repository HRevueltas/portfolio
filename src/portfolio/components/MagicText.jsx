import React, { useState, useEffect, useRef } from 'react';

export const MagicText = ({ text, animationType, colorStart, colorEnd, ...props }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const textRef = useRef(null);


  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimating(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (textRef.current) {
      // Dentro del componente MagicText:
      // textRef.current.style.background = `linear-gradient(45deg, ${colorStart}, ${colorEnd} 10% 20%, ${colorStart} 30% 40%, ${colorEnd} 50% 60%, ${colorStart} 70% 80%, ${colorEnd} 90% 100%, ${colorStart} 110% 120%, ${colorEnd} 130% 140%`;
      textRef.current.style.background = `linear-gradient(80deg , ${colorStart} , ${colorEnd}, 20%, ${colorStart} 40%, ${colorEnd} 60%, ${colorStart} 80%, ${colorEnd} 100%)`;
      textRef.current.style.backgroundClip = 'text';
      textRef.current.style.color = 'transparent';
      textRef.current.style.backgroundSize = '100%';


      // Anima el background-position
      textRef.current.animate([
        {
          backgroundPosition: '0px',

        },
        {
          backgroundPosition: '1500px ',
        }
      ], {
        duration: 100000,
        iterations: Infinity,
      });
    }
  }, [text, colorStart, colorEnd]);

  return (
    <span className='fade-in-1000' ref={textRef} style={{ ...props }}>
      {text}
    </span>
  );
};
