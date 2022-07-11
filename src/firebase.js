// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB7MIRr3sVKtcXFR3cXGoJXQG_7iDQAMI8",
    authDomain: "todo-app-6d8e0.firebaseapp.com",
    projectId: "todo-app-6d8e0",
    storageBucket: "todo-app-6d8e0.appspot.com",
    messagingSenderId: "826378942920",
    appId: "1:826378942920:web:537c3e13ff35a1ea1628fd",
    measurementId: "G-X1DV2QWBMK"
});

const db = firebaseApp.firestore();

export default db;