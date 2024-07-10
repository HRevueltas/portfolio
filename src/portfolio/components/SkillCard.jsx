import { Box, Flex, Text } from '@radix-ui/themes';
import styles from './SkillCard.module.css';

import { useRef } from 'react';


export const SkillCard = ({
    name,
    icon,

}) => {


    const cardRef = useRef(null);
    // console.log(cardRef.current);
    const handleMouseEnter = (e) => {
        const cardRect = cardRef.current.getBoundingClientRect();
        // console.log(cardRect );
        const mouseX = e.clientX - cardRect.left;
        const mouseY = e.clientY - cardRect.top;

        const cardWidth = cardRef.current.offsetWidth;
        const cardHeight = cardRef.current.offsetHeight;

        const rotateX = (mouseY - cardHeight / 2) / cardHeight * 100;  // Rotación en el eje X
        const rotateY = (mouseX - cardWidth / 2) / cardWidth * 100;    // Rotación en el eje Y
        cardRef.current.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
    }

    const handleMouseLeave = () => {
        cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        cardRef.current.style.transition = 'transform 250ms ease';
        // cardRef.current.style.backgroundColor = "var(--background)"
    }
    return (
        <Flex ref={cardRef} onMouseMove={handleMouseEnter} onMouseLeave={handleMouseLeave} className={styles.cardContainer}>


            <Flex align={'center'} direction={'column'} gap={'3'} >


                <i style={{ fontSize: "2rem" }} className={icon}> </i>

                <Text size={'2'} weight={'medium'} style={{ color: "var(--text)" }} >{name}</Text>
                {/* 
                <div>

               <Box className={styles.line} ></Box>
                <Box className={styles.line} ></Box>
                <Box className={styles.line} ></Box>
                <Box className={styles.line} ></Box>
                <Box className={styles.line} ></Box>
                <Box className={styles.line} ></Box>
                <Box className={styles.line} ></Box>
                <Box className={styles.line} ></Box>
                <Box className={styles.line} ></Box>
                <Box className={styles.line} ></Box>
                <Box className={styles.line} ></Box>
                <Box className={styles.line} ></Box>
                <Box className={styles.line} ></Box>
                <Box className={styles.line} ></Box>
                <Box className={styles.line} ></Box>
                <Box className={styles.line} ></Box>
                <Box className={styles.line} ></Box>
                <Box className={styles.line} ></Box>
                <Box className={styles.line} ></Box>
                <Box className={styles.line} ></Box>
                </div> */}


            </Flex>

        </Flex>

    )
}
