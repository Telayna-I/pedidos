import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyAh73FZTq1308yR6zco8hkcw4J2_9UD5Gc",
    authDomain: "pedidos-85d11.firebaseapp.com",
    projectId: "pedidos-85d11",
    storageBucket: "pedidos-85d11.appspot.com",
    messagingSenderId: "165729084789",
    appId: "1:165729084789:web:e7fc83935f1abc31259f3c"
};

const app = initializeApp(firebaseConfig);

export const dataBase = getFirestore(app)
export const auth = getAuth(app)