import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Nene from './images/nene.png';
import Nena from './images/nena.png';
import Batman from './images/batman.png';
import TinkerBell from './images/tinker-bell.png';
import CaritaFeliz from './images/feliz.png';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebaseConfig";
import MostrarContrasenia from "./images/ver.png";
import OcultarContrasenia from "./images/ocultar.png";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const FormRegistroAlumno = () => {
    const navigate = useNavigate();

    const [selectedImage, setSelectedImage] = useState(null);
    const [form, setForm] = useState({
        avatar: null,
        nombre: "",
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({
        errorNombre: "",
        errorEmail: "",
        errorPassword: ""
    });

    const [mostrarPass, setMostrarPass] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleMostrarPass = () => {
        setMostrarPass(!mostrarPass);
    }

    const handleImageClick = (imagen) => {
        setSelectedImage(imagen);
        console.log("imagen ", imagen);
        setForm(prevState => ({
            ...prevState,
            avatar: imagen
        }));
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setForm(prevState => ({
            ...prevState,
            [id]: value
        }));

        if (id === "nombre") {
            setErrors(prevState => ({
                ...prevState,
                errorNombre: ""
            }))
        } 
        
        if (id === "email") {
            setErrors(prevState => ({
                ...prevState,
                errorEmail: ""
            }))
        } else if (id === "password") {
            setErrors(prevState => ({
                ...prevState,
                errorPassword: ""
            }))
        }
    }

    const handleForm = (e) => {
        e.preventDefault();

        console.log("Formulario no enviado");

        const { nombre, email, password } = form;

        if (!nombre.trim()) {
            setErrors(prevState => ({
                ...prevState,
                errorNombre: "El nombre es requerido"
            }));
        }

        if (!email.trim()) {
            setErrors(prevState => ({
                ...prevState,
                errorEmail: "El email es requerido"
            }));
        } else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
            setErrors(prevState => ({
                ...prevState,
                errorEmail: "El email no tiene un formato válido"
            }));
        }

        if (!password.trim()) {
            setErrors(prevState => ({
                ...prevState,
                errorPassword: "La contraseña es requerida"
            }))
        } else if (password.length < 8) {
            setErrors(prevState => ({
                ...prevState,
                errorPassword: "La contraseña debe tener al menos 8 caracteres"
            }));
        }

        const hasErrors = Object.values(errors).some((error) => error !== "");

        if (!hasErrors) {
            setLoading(true);
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, email, password)
                .then(async (userCredential) => {
                    const user = userCredential.user;
                    console.log("CREDENCIAL DE USUARIO: ", user);
        
                    try {
                        const docRef = await addDoc(collection(db, "usuarios"), {
                            uid: user.uid,
                            nombre: nombre,
                            avatar: selectedImage
                        });
                        
                        setForm(prevState => ({
                            ...prevState,
                            avatar: selectedImage,
                            nombre: nombre,
                            email: email,
                            password: password
                        }));
                        
                        console.log("ÉXITO: Documento guardado con ID ", docRef.id);
                        // Guardo el nombre en localStorage
                        localStorage.setItem("nombreUsuario", nombre);
                        localStorage.setItem("avatarUsuario", selectedImage);

                        navigate("/");


                        const MySwal = withReactContent(Swal)

                        MySwal.fire({
                            html: <img src={ CaritaFeliz } alt="Ícono de carita feliz" style={{width: "60px" }} />,
                            title: <>
                                    <p>¡Bienvenido/a { nombre }!</p>
                                    <p style={{
                                        fontSize: "25px",
                                        fontWeight: 500
                                    }}>¿Estás preparado/a para aprender y divertirte?</p>
                                    </>,
                        })
                        .catch(error => {
                            console.log("Error al añadir documento: ", error);
                        });
                    } catch (error) {
                        console.log("Error al añadir documento: ", error);
                    }
                }).catch((error) => {
                    const errorMessage = error.message;
                    console.log("MENSAJE DE ERROR", errorMessage);
                    console.log("ERROR", error);
                }).finally(() => {
                    setLoading(false);
                });
        }
    }

    return (
        <>
            <form className="py-4 px-5" onSubmit={ handleForm }>
                <p>Elegir avatar<span className="text-danger">*</span></p>
                <div className="mb-4 d-flex justify-content-center align-items-center">
                <Splide className="container-fluid" options={{ 
                    type: "loop",
                    perPage: 3,
                    focus: "center",
                    gap: "1px",
                    pagination: false
                    }} aria-label="My Favorite Images">
                    <SplideSlide className='container d-flex justify-content-center'>
                        <img src={ Nene } alt="Ícono de nene" className={`rounded-circle img-alumno shadow-sm border-2 ${selectedImage === Nene ? "border border-success" : ""}`} onClick={ () => handleImageClick(Nene) } />

                    </SplideSlide>

                    <SplideSlide className='container d-flex justify-content-center'>
                        <img src={ Batman } alt="Ícono de Batman" className={`rounded-circle img-alumno shadow-sm border-2 ${selectedImage === Batman ? "border border-success" : ""}`} onClick={ () => handleImageClick(Batman) } />
                    
                    </SplideSlide>

                    <SplideSlide className='container d-flex justify-content-center'>
                        <img src={ Nena } alt="Ícono de nena" className={`img-alumno rounded-circle shadow-sm border-2 ${selectedImage === Nena ? "border border-success" : ""}`} onClick={ () => handleImageClick(Nena) } />
                    
                    </SplideSlide>

                    <SplideSlide className='container d-flex justify-content-center'>
                        <img src={ TinkerBell } alt="Ícono de Tinker Bell" className={`img-alumno rounded-circle shadow-sm border-2 ${selectedImage === TinkerBell ? "border border-success" : ""}`} onClick={ () => handleImageClick(TinkerBell) } />
                    
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
                <div className="form-floating mb-3">
                    <input type="email" className={`form-control ${ errors.errorEmail ? "is-invalid" : ""}`} id="email" placeholder="juan@gmail.com"
                    onChange={ handleInputChange } />
                    <small className="text-danger mb-3">{ errors.errorEmail }</small>
                    <label htmlFor="nombre">Email<span className="text-danger">*</span> </label>
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
            <Link className='bg-primary rounded-4 text-center py-2 mb-0 text-white' to="/registro-admin">Acceso para administrador</Link>
            </>
    )
}

export default FormRegistroAlumno;