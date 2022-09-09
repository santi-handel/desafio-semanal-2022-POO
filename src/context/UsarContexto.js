import Contexto from "./Contexto";
import { useState, useEffect } from "react";
// importacion de firebase
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, query, orderByChild } from "firebase/database";
import { getAuth , GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail } from "firebase/auth";

export default function UsarContexto(props) {

    // firebase configurations
    const firebaseConfig = {
        apiKey: "AIzaSyDHmSEJvkUmCQb6SdO2OBzS1vb4bD68w2w",
        authDomain: "desafio-semanal-2022-poo.firebaseapp.com",
        databaseURL: "https://desafio-semanal-2022-poo-default-rtdb.firebaseio.com",
        projectId: "desafio-semanal-2022-poo",
        storageBucket: "desafio-semanal-2022-poo.appspot.com",
        messagingSenderId: "367268496132",
        appId: "1:367268496132:web:7dd147a16490f12d90c651",
        measurementId: "G-VHV17QR13E"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getDatabase(app);
    const auth = getAuth(app);

    //referencias firebase
    const refRetosSemanal = ref(db, "retosSemanal/");
    const refRetosMensual = ref(db, "retosMensual/");

    //query firebase
    const queryRetosSemanal = query(refRetosSemanal, orderByChild("order/")); // ordenar por la clave orden todos los elementos semanal
    const queryRetosMensual = query(refRetosMensual, orderByChild("order/")); // ordenar por la clave orden todos los elementos mensual
    //const queryRetosSemanal = query(refRetosSemanal, limitToFirst(3)); //trae los primeros tres retos de retosSemanal
    //const queryRetosMensual = query(refRetosMensual, limitToFirst(3)); //trae los primeros tres retos de retosMensual
    //const queryRetosSemanal = query(refRetosSemanal, limitToLast(3)); //trae los ultimos tres retos de retosSemanal
    //const queryRetosMensual = query(refRetosMensual, limitToLast(3)); //trae los ultimos tres retos de retosMensual
    //Estados de los useState
    const [estadoSemanal, setEstadoSemanal] = useState([]);
    const [estadoMensual, setEstadoMensual] = useState([]);

    const { children } = props;

    const listameRetosSemanal = async () => {
        onValue(queryRetosSemanal, (snap) => {
            let data = snap.val();
            setEstadoSemanal(data);
        })
    }

    const listameRetosMensual = async () => {
        onValue(queryRetosMensual, (snap) => {
            let data = snap.val();
            setEstadoMensual(data);
        })
    }

    const loginWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
    };

    return (
        <>
            <Contexto.Provider value={{
                retosSemanal: estadoSemanal,
                retosMensual: estadoMensual,
                listameRetosSemanal,
                listameRetosMensual,
                loginWithGoogle
            }}>
                {children}
            </Contexto.Provider>
        </>
    )
}
