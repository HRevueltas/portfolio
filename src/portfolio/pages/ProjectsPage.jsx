import { Box, Container, Flex, Grid, Heading } from "@radix-ui/themes"

export const ProjectsPage = () => {
  return (
    <Container className='dark' style={{ background: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center' }} as="main" py={9}  >
      <Flex as="section" direction="column" gap="4" align="center" justify="center">
        <Heading size="8" color="yellow">Projects</Heading>
        <p>Here are some of the projects that I have worked on.</p>
      </Flex>
      {/* <Grid >  </Grid> */}
      <Box style={{ background: 'var(--gray-a2)', borderRadius: 'var(--radius-3)' }}>
        <Container size="1">

          <Box style={{backgroundColor:"var(--ruby-3)"}}  py="9" />
          <Box py="9" />
          <Box py="9" />
          <Box py="9" />
          <Box py="9" />
        </Container>
      </Box>


    </Container>
  )
}
