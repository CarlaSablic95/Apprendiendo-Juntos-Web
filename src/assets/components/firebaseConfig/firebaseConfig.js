// Importo las funciones que necesito desde los SDK que necesito
import { initializeApp } from "firebase/app";
// Inicializo Cloud Firestore
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

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
const app = initializeApp(firebaseConfig);

// Inicializo Cloud Firestore y obtengo una referencia al servicio
const db = getFirestore(app);

// Obtenga una referencia al servicio de almacenamiento, que se utiliza para crear referencias en su depósito de almacenamiento.
// const storage = getStorage();

// Crear una referencia de almacenamiento desde nuestro servicio de almacenamiento.

// const getImagenesMaestros = async () => {
//     const imagenesRef = collection(db, "avatars"); // imagesRef ahora apunta a "avatars"
//     const querySnapshot = await getDocs(imagenesRef);
//     const imagenes = [];
//     querySnapshot.forEach((doc) => {
//         imagenes.push({
//             id: doc.id,
//             url: doc.data().url
//         });
//     });
//     return imagenes;
// };

const crearCuenta = async (usuario) => {
    const docRef = await addDoc(collection(db, "usuarios"), usuario);
    return docRef.id;
}

// export { db, storage, getImagenesMaestros, crearCuenta };
export { db, crearCuenta };