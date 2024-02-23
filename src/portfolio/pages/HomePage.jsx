import { violetDark } from '@radix-ui/colors';
import { Flex, Text, Button, Container, Box } from '@radix-ui/themes';
import { Link } from 'react-router-dom';
export const HomePage = () => {

  

  return (


    <Container  className='' style={{height:'100vh',  background:'var(--background)', display:'flex', alignItems:'center', justifyContent:'center' }}  as="main"   >
      <Flex as="section" direction="column" gap="4" align="center" justify="center">
        <Text as="h1" size="8" weight="bold" color="var(--ruby-12)" >Welcome to my portfolio</Text>
        <Text as="p" size="4" align="center">This is a simple portfolio that I made using React and Radix UI.</Text>
        <Button className='button' as="a" href="/projects" size="3" variant="soft" radius="small">View Projects</Button>
        
        <Text as="p" size="4" align="center">You can also check out the source code on GitHub.</Text>
        <Button className='button' as="a" href="100vh" size="3" variant="soft" radius="small">GitHub</Button>
         
        <Text as="p" size="4" align="center">Or you can contact me by email.</Text>
        <Button   href="mailto:haroldrevueltas12@hotmail.com" size="3" variant="soft" radius="small">Email</Button>

      </Flex>


    </Container>
  )
}
