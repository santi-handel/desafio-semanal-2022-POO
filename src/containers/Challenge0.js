/*
 * Reto #0
 * EL FAMOSO "FIZZ BUZZ"
 * Fecha publicación enunciado: 10/08/22
 * Fecha publicación resolución: 17/08/22
 * Dificultad: FÁCIL
 * Enunciado: Escribe un programa que muestre por consola (con un print) los números de 1 a 100 (ambos incluidos y con un salto de línea entre cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 *
 * Información adicional:
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en clases el miércoles siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el miércoles siguiente al de su publicación.
 *
 */

import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";

import Accordion from 'react-bootstrap/Accordion';

export default function Challenge0() {
    return (
        <>
            <Card>
                <Card.Header>
                    <Nav variant="tabs" defaultActiveKey="#first0">
                        <Nav.Item>
                            <Nav.Link href="#first0">Reto #0</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Card.Header>
                <Card.Body id="first0">
                    <Card.Title className="text-center">EL FAMOSO "FIZZ BUZZ"</Card.Title>
                    <Card.Text>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>ENUNCIADO</Accordion.Header>
                                <Accordion.Body>
                                    <div className="row">
                                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                            <br />
                                            * Fecha publicación enunciado: 10/08/22 <br />
                                            * Fecha publicación resolución: 17/08/22 <br />
                                            * Dificultad: FÁCIL
                                        </div>
                                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                            <br />
                                            Enunciado: Escribe un programa que muestre por consola (con un
                                            print) los números de 1 a 100 (ambos incluidos y con un salto de
                                            línea entre cada impresión), sustituyendo los siguientes: <br />
                                            - Múltiplos de 3 por la palabra "fizz".
                                            <br />
                                            - Múltiplos de 5 por la palabra "buzz".
                                            <br />
                                            - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
                                            <br />
                                        </div>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>SOLUCIÓN</Accordion.Header>
                                <Accordion.Body>

                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Card.Text>
                </Card.Body>
            </Card>
            <hr />
        </>
    );
}
