//import "../assets/css/Loading.css";
//import iconoCargador from "../assets/statics/loading.gif";
import { useContext } from "react";
import Contexto from "../context/Contexto";
export default function Present() {
    const { user } = useContext(Contexto);


    return (
        <>
            {/* <div className="loading"><img src={iconoCargador} width="100" height="100" className="img-fluid mx-auto d-block" alt="cargador" /></div> */}
            <div class="d-flex d-flex justify-content-center">
                <h1 className="text-xl p-4">Bienvenido {user.displayName || user.email}</h1>
            </div>
        </>
    )
}
