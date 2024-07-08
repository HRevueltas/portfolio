import { Box, Flex, Text } from '@radix-ui/themes';
import styles from './SkillCard.module.css';
export const SkillCard = ({
    name,
    icon,

}) => {
    return (
        <Flex direction={'column'} className={styles.cardContainer}>

            
            <Flex gap={'2'} align={'center'}  direction={'column'}>


                <i style={{ fontSize: "2rem"}} className={icon}> </i>

                <Text size={'3'} weight={'medium'} style={{ color: "var(--text)" }} >{name}</Text>

            </Flex>

        </Flex>

    )
}
