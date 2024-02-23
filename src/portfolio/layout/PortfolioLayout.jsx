import { Container } from "@radix-ui/themes"

export const PortfolioLayout = ({ children }) => {
    return (
        <Container style={{ height: '100vh', width:"100%", background: 'var(--background)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow:'var(--shadow-2)' }} as="main"   >

            {children}
        </Container>
    )
}
