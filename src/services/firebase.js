// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, query, orderByChild } from "firebase/database";
import { getAuth, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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