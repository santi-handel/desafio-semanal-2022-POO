import { useContext, useEffect } from "react";
import Contexto from "../context/Contexto";
import {Container, Row } from 'react-bootstrap';
import RetoMensual from "../components/RetoMensual";

export default function Semanal() {
    const { listameRetosMensual, retosMensual } = useContext(Contexto);
    useEffect(() => {
        listameRetosMensual();
    }, []);
    
    return (
        <>
            <br />
            <Container>
                <Row>
                    {
                        retosMensual.map((item) => (
                            <RetoMensual {...item} key={item.order}></RetoMensual>
                        ))
                    }
                </Row>
            </Container>
        </>
    );
}
