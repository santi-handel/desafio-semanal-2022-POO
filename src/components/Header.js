import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import iconoCabecera from "../assets/statics/loading.gif";
export default function Header() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/"><img alt="" src={iconoCabecera} width="30" height="30" className="d-inline-block align-top"/>{' '}Retos de Programación</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/semanales2022">Ejercicios Semanales '22</Nav.Link>
                            <Nav.Link href="/">Apps Mensuales '22</Nav.Link>
                            <Nav.Link href="https://github.com/rgplazas/desafio-semanal-2022-POO">Proyecto en GitHub</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
