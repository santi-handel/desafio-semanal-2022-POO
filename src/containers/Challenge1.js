/*
 * Reto #1
 * ¿ES UN ANAGRAMA?
 * Fecha publicación enunciado: 10/08/22
 * Fecha publicación resolución: 17/08/22
 * Dificultad: MEDIA
 *
 * Enunciado: Escribe una función que reciba dos palabras (String) y retorne verdadero o falso (Boolean) según sean o no anagramas.
 * Un Anagrama consiste en formar una palabra reordenando TODAS las letras de otra palabra inicial.
 * NO hace falta comprobar que ambas palabras existan.
 * Dos palabras exactamente iguales no son anagrama.
 *
 * Información adicional:
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en clases el miércoles siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el miércoles siguiente al de su publicación.
 *
 */

import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

import Accordion from 'react-bootstrap/Accordion';

export default function Challenge1() {
    return (
        <>
            <Card>
                <Card.Header>
                    <Nav variant="tabs" defaultActiveKey="#first1">
                        <Nav.Item>
                            <Nav.Link href="#first1">Reto #1</Nav.Link>
                        </Nav.Item>
                        {/* <Nav.Item>
                            <Nav.Link href="#link1">Solución Reto #1</Nav.Link>
                        </Nav.Item> */}
                    </Nav>
                </Card.Header>
                <Card.Body>
                    <Card.Title className="text-center"> ENUNCIADO - ¿ES UN ANAGRAMA?</Card.Title>
                    <Card.Text>
                        <Accordion defaultActiveKey="2">
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>ENUNCIADO</Accordion.Header>
                                <Accordion.Body>
                                    <div className="row">
                                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                            <br />
                                            * Fecha publicación enunciado: 10/08/22 <br />
                                            * Fecha publicación resolución: 17/08/22<br />
                                            * Dificultad: MEDIA
                                        </div>
                                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                            <br />
                                            Enunciado: Escribe una función que reciba dos palabras (String) y retorne verdadero o falso (Boolean) según sean o no anagramas.<br />
                                            * Un Anagrama consiste en formar una palabra reordenando TODAS las letras de otra palabra inicial.<br />
                                            * NO hace falta comprobar que ambas palabras existan.<br />
                                            * Dos palabras exactamente iguales no son anagrama.<br />
                                        </div>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
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
