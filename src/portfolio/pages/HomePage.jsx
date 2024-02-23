import { violetDark } from '@radix-ui/colors';
import { Flex, Text, Button, Container, Box } from '@radix-ui/themes';
import { Link } from 'react-router-dom';
import { PortfolioLayout } from '../layout/PortfolioLayout';
import { MagicText } from '../components/MagicText';
export const HomePage = () => {



  return (

    <PortfolioLayout>

      <Flex as="section" direction="column" gap="4" align="center" justify="center">

        <svg width="10" height="10" viewBox="0 0 68 68" fill="#8253D5" class="sc-661781f7-2 imcBMi"><path d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"></path></svg>
        <Text as="p" size="4" align="center">This is a simple portfolio that I made using React and Radix UI.</Text>
        <Button className='button' as="a" href="/projects" size="3" variant="soft" radius="small">View Projects</Button>

        <Text as="p" size="4" align="center">You can also check out the  

        <MagicText
          text=" source code on GitHub."
          animationType="gradient"
          colorStart="var(--yellow-12)"
          colorEnd="var(--cyan-4)"
        /></Text>
        <Button className='button' as="a" href="100vh" size="3" variant="soft" radius="small">GitHub</Button>

        <Text as="p" size="4" align="center">Or you can contact me by email.</Text>
        <Button href="mailto:haroldrevueltas12@hotmail.com" size="3" variant="soft" radius="small">Email</Button>

        <MagicText
          text="Full-Stack "
          animationType="gradient"
          colorStart="var(--yellow-10)"
          colorEnd="var(--gray-1)"
        />
      </Flex>
    </PortfolioLayout>


  )
}
