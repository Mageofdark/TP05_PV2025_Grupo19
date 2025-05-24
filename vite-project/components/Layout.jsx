import { Navbar, Container, Nav} from 'react-bootstrap'
import {Outlet} from 'react-router-dom'

function Layout() {
    return(
        <>
            <Navbar expand="lg" className='bg-body-tertiary'>
                <Container>
                    <Navbar.Brand>Proyecto</Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className='me-auto'>
                            <Nav.Link href='/'>Home</Nav.Link>
                            <Nav.Link href='/Lista-Alumnos'>Lista de Alumnos</Nav.Link>
                            <Nav.Link href='/Nosotros'>Nosotros</Nav.Link> 
                            {/*Nav.Link href='/Nuevo-Alumno'>Agregar Alumno</Nav.Link>*/}
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