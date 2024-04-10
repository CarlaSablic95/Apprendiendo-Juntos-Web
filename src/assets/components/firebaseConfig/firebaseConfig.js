// Importo las funciones que necesito desde los SDK que necesito
import { initializeApp } from "firebase/app";
// Inicializo Cloud Firestore
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, list, getDownloadURL } from "firebase/storage";

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


const storage = getStorage();

const getImagenesMaestros = async () => {
    const listRef = ref(storage, "avatars");
    try {
        const res = await list(listRef);
        const filteredImages = res.items.filter((image) => image.name === "maestro.png" || image.name === "maestra.png");
        
        // Extraigo las URLs
        const imageUrls = await Promise.all(
            filteredImages.map(async (imageRef) => await getDownloadURL(imageRef))
            );
            
            console.log("IMAGE URLS ", imageUrls);
            
            return imageUrls;
            
        } catch (error) {
            console.log("Error al obtener las imágenes" , error);
        }
}
    
// export { db, storage, getImagenesMaestros, crearCuenta };
export { app, db, storage, getImagenesMaestros };