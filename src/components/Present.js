import { useContext } from "react";
import Contexto from "../context/Contexto";
export default function Present() {
    const { user } = useContext(Contexto);
    return (
        <>
            <div className="d-flex d-flex justify-content-center">
                <h1 className="text-xl p-4">Bienvenido {user.displayName || user.email}</h1>
            </div>
        </>
    )
}
