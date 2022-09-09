import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Contexto from "../context/Contexto";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import iconoCabecera from "../assets/statics/loading.gif";
export default function Header() {
    const { loginWithGoogle } = useContext(Contexto);

    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            await loginWithGoogle();
            navigate("/");
        } catch (error) {
            console.log(error.message);
        }

    }

    return (
        <>
            <Navbar collapseOnSelect expand="xl" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/"><img alt="" src={iconoCabecera} width="30" height="30" className="d-inline-block align-top" />{' '}Retos de Programación</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/semanales2022">Ejercicios Semanales '22</Nav.Link>
                            <Nav.Link href="/mensuales2022">Apps Mensuales '22</Nav.Link>
                            <Nav.Link href="https://github.com/rgplazas/desafio-semanal-2022-POO">Proyecto en GitHub</Nav.Link>
                            <button id="login" name="login" onClick={handleLogin} className="DCButton_DCButton__2G827 DCButton_DCButton__outline__mECyy undefined" aria-label="Login with github"><div className="DCButton_DCButton_icon__l9p8v DCButton_DCButton_icon__marginRight__9b00y"></div><div className="DCButton_DCButton_wrapper__1uexv">Login Github</div></button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
