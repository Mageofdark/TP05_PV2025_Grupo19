import { Navbar, Container, Nav } from 'react-bootstrap'
import { Outlet, Link } from 'react-router-dom'

function Layout() {
    return(
        <>
            <Navbar expand="lg" className='bg-body-tertiary'>
            <Container>
                <Navbar.Brand as={Link} to="/">Proyecto</Navbar.Brand> {/* Marca también con Link */}
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='me-auto'>
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/Lista-Alumnos">Lista de Alumnos</Nav.Link>
                    <Nav.Link as={Link} to="/Nosotros">Nosotros</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        
            <section>
                <Outlet></Outlet>
            </section>
        </>
    )

}

export default Layout