
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';

export default function Reto(props) {
    const { order, semana, reto, dificultad, enunciado, fecha_publicacion_enunciado, fecha_publicación_resolucion, titulo } = props;
    return (
        <>
            <Card id={order}>
                <Card.Header>
                    <Card.Text>RETO #{reto}</Card.Text>
                </Card.Header>
                <Card.Body>
                    <Card.Title className="text-center">{titulo}</Card.Title>
                        <Row>
                            <Col sm={12} md={6} lg={6} xl={6}>
                                <br />
                                * Semana: {semana} <br />
                                * Fecha publicación enunciado: {fecha_publicacion_enunciado} <br />
                                * Fecha publicación resolución: {fecha_publicación_resolucion} <br />
                                * Dificultad: {dificultad}
                            </Col>
                            <Col sm={12} md={6} lg={6} xl={6}>
                                <br />
                                Enunciado: {enunciado}
                            </Col>
                        </Row>
                </Card.Body>
            </Card>
            <hr />
        </>
    )
}
