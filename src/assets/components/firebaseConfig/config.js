// Importo las funciones que necesito desde los SDK que necesito
import { initializeApp } from "firebase/app";
// Inicializo Cloud Firestore
import { getFirestore } from "firebase/firestore";

// TODO: Agrego SDK para los productos de Firebase que deso usar
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyDbeVHod0APwuSgqxqlBygCD9YZoN8UHrg",
    authDomain: "apprendiendo-juntos-web.firebaseapp.com",
    projectId: "apprendiendo-juntos-web",
    storageBucket: "apprendiendo-juntos-web.appspot.com",
    messagingSenderId: "823595718766",
    appId: "1:823595718766:web:47f944bcc6c836475f6e7f"
};

// Inicializo Firebase
const app = initializeApp(firebaseConfig)

// Inicializo Cloud Firestore y obtengo una referencia al servicio
const db = getFirestore(app);