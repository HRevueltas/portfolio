import { Box, Container, Heading, Text } from "@radix-ui/themes"
import { PortfolioLayout } from "../layout/PortfolioLayout"

export const Craft = () => {
  return (
    <PortfolioLayout>

       <Box as="section" direction="column" gap="4" align="center" justify="center">
          <Heading as="h1" size="8" color="cyan">Craft</Heading>
          <Text as="p" size="4" align="center"  >This is a simple portfolio that I made using React and Radix UI.</Text>
        </Box>

    </PortfolioLayout>
  )
}
