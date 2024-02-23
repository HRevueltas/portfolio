import { Box, Flex, Grid, Heading } from "@radix-ui/themes"
import { PortfolioLayout } from "../layout/PortfolioLayout"

export const ProjectsPage = () => {
  return (
    <PortfolioLayout>


      <Flex as="section" direction="column" gap="4" align="center" justify="center">
        <Heading size="8" color="yellow">Projects</Heading>
        <p>Here are some of the projects that I have worked on.</p>
      </Flex>
      {/* <Grid >  </Grid> */}
      <Box
        color="red"
        style={{ background: 'var(--ruby-10)' , width: '100%', height: '100%'}}
      >
        hola

      </Box>
    </PortfolioLayout>


  )
}
