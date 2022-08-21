import { useContext, useEffect } from "react";
import Contexto from "../context/Contexto";
import Reto from "../components/Reto";
export default function Semanal() {
    const { listameRetos, retos } = useContext(Contexto);
    useEffect(() => { 
        listameRetos();
    }, []);
    return (
        <>
            <div className="container">
                <div className="wraper">
                    <div className="home">
                        <br />
                        {
                            retos.map((item)=>(
                                <Reto {...item}></Reto>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
}
