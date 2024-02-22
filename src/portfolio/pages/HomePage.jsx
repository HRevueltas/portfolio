import { Flex, Text, Button, Container } from '@radix-ui/themes';
export const HomePage = () => {
  return (
    <Container className='dark' style={{height:'100vh',  background:'black', display:'flex', alignItems:'center', justifyContent:'center' }}  as="main"   >
      <Flex as="section" direction="column" gap="4" align="center" justify="center">
        <Text as="h1" size="8" weight="bold">Welcome to my portfolio</Text>
        <Text as="p" size="4" align="center">This is a simple portfolio that I made using React and Radix UI.</Text>
        <Button className='button' as="a" href="/projects" size="3" variant="soft" radius="small">View Projects</Button>
      </Flex>

        <div style={{height:'100vh',  background:'black', display:'flex', alignItems:'center', justifyContent:'center' }}>
           <section>
             <h1>Welcome to my portfolio</h1>
              <p>This is a simple portfolio that I made using React and Radix UI.</p>

              <a href="/projects">View Projects</a>
            </section>
        </div>
        
    </Container>
  )
}
