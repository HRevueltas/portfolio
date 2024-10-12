import { Box, Container } from "@radix-ui/themes"
import { Footer } from "../../ui/components/Footer"

export const PortfolioLayout = ({ children }) => {
    return (


        <Container
            style={{
                top: '100px',
                position: 'relative', top: '100px',
            }}

            // style={{
            //     position: 'relative',
            //     top: '100px',
            //     border: '2px solid red',
            //     width: '100%',
            // }}
            // style={{
            //     height: '100%',
            //     width: "100%",
            //     background: 'var(--background)',
            //     display: 'flex',
            //     boxShadow: 'var(--shadow-4)',
            // }}

            >



            {children}

            <Footer />
        </Container>
    )
}
