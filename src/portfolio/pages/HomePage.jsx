import { Flex, Text, Button, Container, Box, Code, Avatar } from '@radix-ui/themes';
import { Link } from 'react-router-dom';
import { PortfolioLayout } from '../layout/PortfolioLayout';
import { useEffect, useRef, useState } from 'react';

export const HomePage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const textElementRef = useRef(null);
  const spansRef = useRef([]);

  useEffect(() => {
    if (textElementRef.current && spansRef.current) {
      textElementRef.current.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (textElementRef.current) {
        textElementRef.current.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [spansRef, textElementRef]);

  const handleMouseMove = (event) => {
    const { x, y } = event;
    const textWidth = textElementRef.current.getBoundingClientRect().width;
    const textHeight = textElementRef.current.getBoundingClientRect().height;

    spansRef.current.forEach((span, index) => {
      if (span) {
        const offsetX = (x - span.offsetLeft) / textWidth;
        const offsetY = (y - span.offsetTop) / textHeight;

        // Calculate desired movement based on index
        const movementX = offsetX * 3* (index === 0 ? 1 : (index === 1 ? -0.5 : 0.5));
        const movementY = offsetY * 3* (index === 0 ? 0.5 : (index === 1 ? -0.2 : 0.2));

        span.style.left = `${50 + movementX}%`;
        span.style.top = `${50 + movementY}%`;
      }
    });
  };
  return (
    <PortfolioLayout>
      <Flex direction="column" align="center" justify="center">
        <p className='parraf' ref={textElementRef}>
          It was a mind blowing
          <span className='span-parent'>
            {isHovered && (
              <span className='span-child' ref={(el) => spansRef.current.push(el)}
                aria-hidden='true'
                style={{
                  left: '5%',
                  top: '0%',
                  opacity: '1',
                }}
                animate='1'
              >
                <svg
                  className='rotate-animation svg'
                  width="20"
                  height="20"
                  viewBox="0 0 68 68"
                  fill="#8253D5"
                >
                  <path d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"></path>
                </svg>
              </span>
            )}
            
            <span type='light' className='magic-span'
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              A magical moment.
            </span>
          </span>
        </p>
      </Flex>
    </PortfolioLayout>
  )
}