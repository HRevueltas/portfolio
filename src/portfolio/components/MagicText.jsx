// import React, { useRef, useEffect } from 'react';

// export const MagicText = ({ colorStart, colorEnd, children, animation }) => {
//   const textRef = useRef(null);
//   const animationRef = useRef(null);

//   useEffect(() => {
//     if (textRef.current && !animationRef.current) {
//       if (animation === 'gradient') {
//         textRef.current.style.background = `linear-gradient(25deg, ${colorStart}, ${colorEnd} 50%, ${colorStart} 50%)  0 0 / 500px 500px repeat-x`;
//         textRef.current.style.backgroundClip = 'text';
//         textRef.current.style.color = 'transparent';
//         textRef.current.style.backgroundSize = '100%';

//         animationRef.current = new Animation(
//           new KeyframeEffect(
//             textRef.current,
//             [
//               { backgroundPosition: '0' },
//               { backgroundPosition: '500px' }
//             ],
//             {
//               duration: 6000,
//               iterations: Infinity
//             }
//           ),
//           document.timeline
//         );

//         animationRef.current.play();

//       } else if (animation === 'blink') {
//         animationRef.current = new Animation(
//           new KeyframeEffect(
//             textRef.current,
//             [
//               { opacity: '0', color: colorStart },
//               { opacity: '1', color: colorEnd }
//             ],
//             {
//               duration: 1000,
//               iterations: Infinity
//             }
//           ),
//           document.timeline
//         );

//         animationRef.current.play();
//       }
//     }
//   }, [colorStart, colorEnd, children, animation]);

//   return (
//     <p className="fade-in-1000" ref={textRef}>
//       {children}
//     </p>
//   );
// };