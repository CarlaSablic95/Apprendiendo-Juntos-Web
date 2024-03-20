import { useState } from 'react';
import { Link } from 'react-router-dom'
import Nene from './images/nene.png';
import Nena from './images/nena.png';
import Batman from './images/batman.png';
import TinkerBell from './images/tinker-bell.png';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import MostrarContrasenia from "./images/ver.png";
import OcultarContrasenia from "./images/ocultar.png";

const FormRegistroAlumno = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [form, setForm] = useState({
        avatar: null,
        nombre: "",
        password: ""
    });

    const [errors, setErrors] = useState({
        errorNombre: "",
        errorPassword: ""
    });

    const [ mostrarPass, setMostrarPass ] = useState(false);

    const [ loading, setLoading] = useState(false)
 
    const handleMostrarPass = () => {
        setMostrarPass(!mostrarPass);
    }

    // console.log("DB: ", db);
    // console.log("AUTH: ", getAuth);
    // console.log("CREAR USUARIO: ", createUserWithEmailAndPassword);

    const handleImageClick = (imagen) => {
        setSelectedImage(imagen);
        console.log("imagen ", imagen);
    };

    // Controlar datos de formulario
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setForm(prevState => ({
            ...prevState,
            [id]: value
        }));

        // Limpio los mensajes de error

        if(id === "nombre") {
            setErrors(prevState => ({
                ...prevState,
                errorNombre: ""
            }))
        } else if(id === "password") {
            setErrors(prevState => ({
                ...prevState,
                errorPassword: ""
            }))
        }

    }

    // Detengo el form
    const handleForm = (e) => {
        e.preventDefault();

       console.log("Formulario no enviado");

       const { nombre,  password } = form;
// Validación de campos
       if(!nombre.trim()) {
        setErrors(prevState => ({
            ...prevState,
            errorNombre: "El nombre es requerido"
        }));

       }

       if(!password.trim()) {
        setErrors(prevState => ({
            ...prevState,
            errorPassword: "La contraseña es requerida"
        }))
       } else if(password.length < 6) {
        setErrors(prevState => ({
            ...prevState,
            errorPassword: "La contraseña debe tener al menos 6 caracteres"
        }));
       }

    // Guardo la filtración de errores existentes en una variable

    const hasErrors = Object.values(errors).some((error) => error !== "");

    // CREANDO USUARIO:
    if(!hasErrors) {
        setLoading(true);
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, password)
            .then((userCredential) => {
                console.log("CREDENCIAL DE USUARIO: ", userCredential)
    
                setForm({
                    avatar: selectedImage,
                    nombre: nombre,
                    password: password
                });
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log("MENSAJE DE ERROR", errorMessage);
                console.log("ERROR", error);
            })
            .finally(() => {
                setLoading(false);
            });

    }
        
    }

    return (
            <form className="py-4 px-5" onSubmit={ handleForm }>
                <p>Elegir avatar<span className="text-danger">*</span></p>
                <div className="mb-4 d-flex justify-content-evenly align-items-center">
                <Splide className="container-fluid" options={{ 
                    perPage: 3,
                    focus: "center",
                    isLoop: true,
                    gap: "1px",
                    pagination: false
                    }} aria-label="My Favorite Images">
                    <SplideSlide className='container d-flex justify-content-center'>
                        <img src={ Nene } alt="Ícono de nene" className={`rounded-circle img-alumno shadow-sm border-2 ${selectedImage === "nene" ? "border border-success" : ""}`} onClick={ () => handleImageClick("nene") } />
                    
                    </SplideSlide>

                    <SplideSlide className='container d-flex justify-content-center'>
                        <img src={ Batman } alt="Ícono de Batman" className={`rounded-circle img-alumno shadow-sm border-2 ${selectedImage === "batman" ? "border border-success" : ""}`} onClick={ () => handleImageClick("batman") } />
                    
                    </SplideSlide>

                    <SplideSlide className='container d-flex justify-content-center'>
                        <img src={ Nena } alt="Ícono de nena" className={`img-alumno rounded-circle shadow-sm border-2 ${selectedImage === "nena" ? "border border-success" : ""}`} onClick={ () => handleImageClick("nena") } />
                    
                    </SplideSlide>

                    <SplideSlide className='container d-flex justify-content-center'>
                        <img src={ TinkerBell } alt="Ícono de Tinker Bell" className={`img-alumno rounded-circle shadow-sm border-2 ${selectedImage === "tinkerbell" ? "border border-success" : ""}`} onClick={ () => handleImageClick("tinkerbell") } />
                    
                    </SplideSlide>
                    
                </Splide>
                </div>
            <div className="mb-4">
                <div className="form-floating mb-3">
                    <input type="text" className={`form-control ${ errors.errorNombre ? "is-invalid" : ""}`} id="nombre" placeholder="Juan"
                    onChange={ handleInputChange } />
                    <small className="text-danger mb-3">{ errors.errorNombre }</small>
                    <label htmlFor="nombre">Nombre<span className="text-danger">*</span> </label>
                </div>
            </div>

            <div className="mb-4">
                <div className="form-floating">
                    <input type={ mostrarPass ? "text" : "password"} className={`form-control position-relative ps-3 ${ errors.errorPassword ? "is-invalid" : ""}`}
                    id="password" placeholder="Contraseña"
                    onChange={ handleInputChange } />
                    <small className="text-danger mb-3">{ errors.errorPassword }</small>
                    
                    {/*  A la Imagen le asocio el evento que cambia el estado de la variable (true / false) */}
                   {/* {   <img src={ mostrarPass ?MostrarContrasenia : OcultarContrasenia} /> } */}

                   {  mostrarPass ? <span className="position-absolute icono-ojo"><img src={ MostrarContrasenia } onClick={ handleMostrarPass }  alt="ícono de ojo" /></span> : <span className="position-absolute icono-ojo"><img src={ OcultarContrasenia } onClick={ handleMostrarPass }  alt="ícono de ojo tachado" /></span> }
                    <label htmlFor="password">Contraseña<span className="text-danger">*</span> </label>
                </div>
            </div>

            <div className='d-flex flex-column justify-content-center align-items-center'>
                <button type="submit" className="btn btn-primary mb-3" disabled={ loading }>{ loading ? <><span className="loader"></span> <span>Creando cuenta</span></> : "Crear cuenta" }</button>
                <span>Si ya tenés cuenta. <Link to="/iniciar-sesion" className="mb-3">Iniciá sesión</Link></span>
            </div>
            </form>
    )
}

export default FormRegistroAlumno;