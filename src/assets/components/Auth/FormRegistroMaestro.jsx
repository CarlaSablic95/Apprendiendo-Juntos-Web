import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import  UsuarioAvatar  from "../Auth/images/avatar.png";
import { db } from "../firebaseConfig/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

// Importando los módulos de Firebase
import { app, getImagenesMaestros } from "../firebaseConfig/firebaseConfig";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const auth = getAuth(app);
const usuarios = collection(db, "usuarios");


const FormRegistroMaestro = () => {
    // Variable de estado para mostrar las imagenes en el formulario, desde la base de datos
  const [ imagenes, setImagenes ] = useState([]);

const [ selectedAvatar, setSelectedAvatar ] = useState(null);
   // Estado para controlar la imagen de perfil
  const [ loading, setLoading ] = useState(false);

  const [errors, setErrors] = useState({ // errores para el formulario
    nombre: "",
    apellido: "",
    email: "",
    contrasenia: ""
});

// SELECCION DE AVATAR

const handleAvatarClick = (imageUrl) => { // 
    setSelectedAvatar(imageUrl);
}

// FORMULARIO
const handleForm = async(e) => {
    e.preventDefault();
    const nombre = e.target.nombre.value;
    const apellido = e.target.apellido.value;
    const email = e.target.email.value;
    const contrasenia = e.target.contrasenia.value;
    const avatar = selectedAvatar || UsuarioAvatar;
  

    const newErrors = {};

    // Validación de los campos
    if(!nombre.trim()) {
        newErrors.nombre = "El nombre es obligatorio";
    } 

    if(!apellido.trim()) {
        newErrors.apellido = "El apellido es obligatorio";
    }    

    if(!email.trim()) {
        newErrors.email = "El email es obligatorio";
    } else if(!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
        newErrors.email = "El email no tiene un formato válido";
    }

    if(!contrasenia.trim()) {
        newErrors.contrasenia = "La contraseña es obligatoria";
    } else if(contrasenia.length !== 8) {
        newErrors.contrasenia = "La contraseña debe contener 8 caracteres";
    }

    if(!avatar) {
        newErrors.avatar = "Seleccioná un avatar";
    } 
    
    setErrors(newErrors);

    // Funcion existente Object.values()
    const hasErrors = Object.values(newErrors).some(error => error !== "");

    if(!hasErrors) {
        try {
            setLoading(true);
                localStorage.setItem("nombre", nombre);
                localStorage.setItem("apellido", apellido);
                localStorage.setItem("avatar", avatar);
            const usuario = await createUserWithEmailAndPassword(auth, email, contrasenia);
             console.log("USUARIO: ", usuario)
             // Creo el documento del usuario en la colección
         
             const usuarioDocRef = await addDoc(usuarios, {
                 nombre,
                 apellido,
                 avatar
             });
 
             console.log("Usuario creado con ID: ", usuarioDocRef.id);
             window.location.replace("./");
             // Redirigir a otra página o mostrar un mensaje de éxito
         } catch (error) {
            setErrors({
             ...errors,
            });
         } finally {
            setLoading(false);
         }
    }
        

}

// Obtener imagenes de la base de datos
    useEffect(() => {
        const getImagesData = async () => {
            const images = await getImagenesMaestros();
            setImagenes(images); // array que tiene las url de las imagenes
        };

      getImagesData(); // Promise
    }, []);


    return (
            <form className="py-4 px-4 px-md-5" onSubmit={ handleForm }>
                <p className="mb-2">Elegir avatar: <span className="text-danger">*</span></p>
                 {/* A cada div que contiene el avatar, le agrego una clase CSS condicionalmente dependiendo si elegí el avatar. Uso "plantillas literales" y "operador ternario" */}
                 <div className="mb-4 d-flex justify-content-evenly align-items-center">
                     { imagenes.map((imageUrl) => (
                        <div key={ imageUrl } className={`rounded-circle shadow-sm border-2 ${ selectedAvatar === imageUrl ? "border border-success" : ""}`} onClick={ () => handleAvatarClick(imageUrl) } >
                            <img key={ imageUrl } src={ imageUrl } alt="Imagen del maestro" className="rounded-circle img-maestro border"  />
                        </div>
                    ))

                    }
                </div>
            <div className="mb-3">
                <div className="form-floating mb-3">
                    <input type="text" className={ `form-control ${ errors.nombre && "is-invalid" }` }
                    name="nombre" id="nombre" placeholder="Juan" 
                    />
                    <small className="text-danger">{ errors.nombre }</small>
                    <label htmlFor="nombre">Nombre <span className="text-danger">*</span> </label>
                </div>
            </div>

            <div className="mb-3">
                <div className="form-floating mb-3">
                    <input type="text" className={ `form-control ${ errors.apellido && "is-invalid" }` } id="apellido"
                    name="apellido" placeholder="Gomez" 
                    />
                    <small className="text-danger">{ errors.apellido }</small>
                    <label htmlFor="apellido">Apellido <span className="text-danger">*</span></label>
                </div>
            </div>

            <div className="mb-3">
                <div className="form-floating mb-3">
                    <input type="email" className={ `form-control ${ errors.email && "is-invalid" }` } id="email" name="email"
                    placeholder="juan_gomez@gmail.com" 
                    />
                    <small className="text-danger">{ errors.email }</small>
                    <label htmlFor="email">Email <span className="text-danger">*</span></label>
                </div>
            </div>

            <div className="mb-3">
                <div className="form-floating">
                    <input type="password" className={ `form-control ${ errors.contrasenia && "is-invalid" }` } id="contrasenia" name="contrasenia"
                    placeholder="Contraseña" 
                    />
                    <small className="text-danger">{ errors.contrasenia }</small>
                    <label htmlFor="contrasenia">Contraseña <span className="text-danger">*</span></label>
                </div>
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <button type="submit" className="btn btn-primary mb-3" disabled={ loading }>{ loading ? <><span className="loader"></span> <span>Creando cuenta</span></> : "Crear cuenta" }</button>
                <Link to="/iniciar-sesion" className="mb-3">Ya tengo una cuenta</Link>
            </div>
            </form>
    )
}

export default FormRegistroMaestro;