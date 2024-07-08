import { Box, Flex, Text } from '@radix-ui/themes';
import styles from './Technologies.module.css';
import { ArrowTopLeftIcon } from '@radix-ui/react-icons';
import { SkillCard } from './SkillCard';
import { cardInfo } from '../../helpers/cardInfo';
export const Technologies = () => {


    return (

        <Flex direction={'row'} wrap={'wrap'} gap={'3'} >

            {/* <SkillCard
                icon={'./icons/javascript.svg'}
                name={'JavaScript'}
            /> */}
            {cardInfo.map((card, index) => (
                <SkillCard
                    key={index}
                    icon={card.icon}
                    name={card.name}
                />
            ))}
            {/* 
            <Box p={'3'} display={'flex'} className={styles.containerText} >

                <Text weight="regular" size={'2'} style={{ color: "var(--text)" }} >This looks great!</Text>
                <Box className={styles.blink}></Box>

                <Box className={styles.arrow}>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.14645 2.14645C7.34171 1.95118 7.65829 1.95118 7.85355 2.14645L11.8536 6.14645C12.0488 6.34171 12.0488 6.65829 11.8536 6.85355C11.6583 7.04882 11.3417 7.04882 11.1464 6.85355L8 3.70711L8 12.5C8 12.7761 7.77614 13 7.5 13C7.22386 13 7 12.7761 7 12.5L7 3.70711L3.85355 6.85355C3.65829 7.04882 3.34171 7.04882 3.14645 6.85355C2.95118 6.65829 2.95118 6.34171 3.14645 6.14645L7.14645 2.14645Z" fill="var(--black-a12)" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                </Box>

            </Box> */}
        </Flex>

        // <div>Technologies</div>
    )
}
