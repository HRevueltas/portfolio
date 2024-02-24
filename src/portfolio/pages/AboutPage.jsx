import { Link1Icon } from "@radix-ui/react-icons"
import { Container, Flex, Heading } from "@radix-ui/themes"
import { Link } from "react-router-dom"
import { PortfolioLayout } from "../layout/PortfolioLayout"

export const AboutPage = () => {


  return (

    <PortfolioLayout>

        <Flex as="section" direction="column" gap="4" align="center" justify="center">

          <p style={{ color: 'var(--ruby-10)' }}>Hi, I'm a web developer from Colombia.</p>

          {/* <Button >Click me</Button> */}
          <Link to="/projects">
            get in touch
            <Link1Icon />
          </Link>
        </Flex>
    </PortfolioLayout>
  )
}
