// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

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
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);