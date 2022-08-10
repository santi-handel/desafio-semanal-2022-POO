/*
 * Reto #2
 * LA SUCESIÓN DE FIBONACCI
 * Fecha publicación enunciado: 10/08/22
 * Fecha publicación resolución: 17/08/22
 * Dificultad: DIFÍCIL
 *
 * Enunciado: Escribe un programa que imprima los 50 primeros números de la sucesión de Fibonacci empezando en 0.
 * La serie Fibonacci se compone por una sucesión de números en la que el siguiente siempre es la suma de los dos anteriores.
 * 0, 1, 1, 2, 3, 5, 8, 13...
 *
 * Información adicional:
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en clases el miércoles siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el miércoles siguiente al de su publicación..
 *
 */

import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

import Accordion from 'react-bootstrap/Accordion';

export default function Challenge2() {
    return (
        <>
            <Card>
                <Card.Header>
                    <Nav variant="tabs" defaultActiveKey="#first2">
                        <Nav.Item>
                            <Nav.Link href="#first2">Reto #2</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Card.Header>
                <Card.Body>
                    <Card.Title className="text-center">LA SUCESIÓN DE FIBONACCI</Card.Title>
                    <Card.Text>
                        <Accordion defaultActiveKey="4">
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>ENUNCIADO</Accordion.Header>
                                <Accordion.Body>
                                    <div className="row">
                                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                            <br />
                                            * Fecha publicación enunciado: 10/08/22<br />
                                            * Fecha publicación resolución: 17/08/22<br />
                                            * Dificultad: DIFÍCIL
                                        </div>
                                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                            <br />
                                            Enunciado: Escribe un programa que imprima los 50 primeros números de la sucesión de Fibonacci empezando en 0. <br />
                                            * La serie Fibonacci se compone por una sucesión de números en la que el siguiente siempre es la suma de los dos anteriores.<br />
                                            * 0, 1, 1, 2, 3, 5, 8, 13...<br />
                                        </div>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
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
    )
}
