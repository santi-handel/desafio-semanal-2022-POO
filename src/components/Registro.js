import { useState, useContext } from "react";
import Contexto from "../context/Contexto";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../assets/css/Login.css";
export default function Registro() {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const { signup } = useContext(Contexto);

    const handleChange = ({ target: { value, name } }) =>
        setUser({ ...user, [name]: value });

    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await signup(user.email, user.password);
            navigate("/");
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <>
            <Container>
                {error && <p>{error}</p>}
                <Row className="vh-100 d-flex justify-content-center align-items-center">
                    <Col md={8} lg={6} xs={12}>
                        <div className="border border-3 border-primary"></div>
                        <Card className="shadow fondoBackground">
                            <Card.Body>
                                <div className="mb-3 mt-md-4">
                                    <h2 className="fw-bold mb-2 text-uppercase ">
                                        Registro para los Retos POO
                                    </h2>
                                    <p className=" mb-5">
                                        ¡Por favor, introduzca un nombre de usuario y contraseña
                                        para registrarse!
                                    </p>
                                    <div className="mb-3">
                                        <Form onSubmit={handleSubmit}>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label className="text-center">
                                                    Dirección de correo electrónico
                                                </Form.Label>
                                                <Form.Control
                                                    name="email"
                                                    className="fondoInput"
                                                    type="email"
                                                    placeholder="Ingresar email"
                                                    onChange={handleChange}
                                                />
                                            </Form.Group>

                                            <Form.Group
                                                className="mb-3"
                                                controlId="formBasicPassword"
                                            >
                                                <Form.Label>Contraseña</Form.Label>
                                                <Form.Control
                                                    name="password"
                                                    className="fondoInput"
                                                    type="password"
                                                    placeholder="Password"
                                                    onChange={handleChange}
                                                />
                                            </Form.Group>
                                            <Form.Group
                                                className="mb-3"
                                                controlId="formBasicCheckbox"
                                            ></Form.Group>
                                            <div className="d-grid">
                                                <Button variant="primary" type="submit">
                                                    Unirme
                                                </Button>
                                            </div>
                                        </Form>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
