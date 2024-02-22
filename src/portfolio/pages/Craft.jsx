import { Box, Container, Heading, Text } from "@radix-ui/themes"

export const Craft = () => {
  return (
     <Container className='dark' style={{height:'100vh',  background:'black', display:'flex', alignItems:'center', justifyContent:'center' }}  as="main"   >
       <Box as="section" direction="column" gap="4" align="center" justify="center">
          <Heading as="h1" size="8" color="cyan">Craft</Heading>
          <Text as="p" size="4" align="center"  >This is a simple portfolio that I made using React and Radix UI.</Text>
        </Box>
    </Container>
  )
}
