import { Link1Icon } from "@radix-ui/react-icons"
import { Container, Flex, Heading } from "@radix-ui/themes"
import { Link } from "react-router-dom"

export const AboutPage = () => {

 
  return (
    <Container  style={{ height: '100vh', background: 'var(--dark-textSecondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }} as="main"   >
      <Flex as="section" direction="column" gap="4" align="center" justify="center">
        <Heading size="8" color="yellow">About</Heading>
        <p style={{color:'var(--ruby-10)'}}>Hi, I'm a web developer from Colombia.</p>

        {/* <Button >Click me</Button> */}
        <Link to="/projects">
          get in touch
          <Link1Icon />
        </Link>
      </Flex>
    </Container>
  )
}
