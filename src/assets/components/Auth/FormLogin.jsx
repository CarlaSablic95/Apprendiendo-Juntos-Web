import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import MostrarContrasenia from "./images/ver.png";
import OcultarContrasenia from "./images/ocultar.png";

const FormLogin = () => {
    const navigate = useNavigate();

    const [mostrarPass, setMostrarPass] = useState(false);
    
    const [ loading, setLoading ] = useState(false);
    
    const [ errors, setErrors ] = useState({
        email: "",
        contrasenia: "",
        errorInicioSesion: ""
    });
    
    const handleMostrarPass = () => {
        setMostrarPass(!mostrarPass);
    }

    const handleLoginForm = async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const contrasenia = e.target.contrasenia.value;

        const newErrors = {};

        if(!email.trim()) {
            newErrors.email = "El email es obligatorio";
        } else if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email)) {
            newErrors.email = "El email no tiene un formato válido";
        }

        if(!contrasenia.trim()) {
            newErrors.contrasenia = "La contraseña es obligatoria";
        } else if(contrasenia.length !== 8) {
            newErrors.contrasenia = "La contraseña debe contener 8 caracteres";
        }

        setErrors({ 
            ...newErrors,
            errorInicioSesion: ""
        });

        const hasErrors = Object.values(newErrors).some(error => error !== "");

        if(!hasErrors) {
            try {
                setLoading(true);
                const auth = getAuth();
                const userCredential = await signInWithEmailAndPassword(auth, email, contrasenia)
                // .then((userCredential) => {
                //     console.log("CREDENCIAL DE USUARIO: ", userCredential);
                // })
                // Obtengo el usuario
                const user = userCredential.user;

                localStorage.setItem("nombreUsuario", user.displayName);
                localStorage.setItem("avatarUsuario", user.photoURL);

                // REDIRECCIÓN
                navigate("/");
            } catch(error) {
                let errorMessage = "";
                if(error.code === "auth/user-not-found" || error.code === "auth/wrong-password") {
                    errorMessage = "Email y/o contraseña son incorrectos.";
                } else {
                    errorMessage = "Email y/o contraseña son incorrectos, intentá nuevamente."
                }
                setErrors({
                    ...newErrors,
                    errorInicioSesion: errorMessage
                });
            } finally {
                setLoading(false);
            }
        }

    }

    return (
        <form className="py-5 px-5" onSubmit={ handleLoginForm }>
            <div className="mb-3">
                <div className="form-floating mb-3">
                    <input type="email" className={`form-control ${  errors.email && 'is-invalid' }`} id="floatingInputEmail" placeholder="juan_gomez@gmail.com" 
                    name="email"/>
                    <small className="text-danger">{ errors.email }</small>
                    
                    <label htmlFor="floatingInputEmail">Email <span className="text-danger">*</span></label>
                </div>
            </div>

            <div className="mb-3">
                <div className="form-floating">
                    <input type={ mostrarPass ? "text" : "password" } className={`form-control ${ errors.contrasenia && 'is-invalid'}`} id="floatingPassword" placeholder="Contraseña"
                    name="contrasenia"/>
                    <small className="text-danger">{ errors.contrasenia }</small>
                    {  mostrarPass ? <span className="position-absolute icono-ojo"><img src={ MostrarContrasenia } onClick={ handleMostrarPass }  alt="ícono de ojo" /></span> : <span className="position-absolute icono-ojo"><img src={ OcultarContrasenia } onClick={ handleMostrarPass }  alt="ícono de ojo tachado" /></span> }
                    <label htmlFor="password">Contraseña<span className="text-danger">*</span> </label>
                </div>
            </div>

            { errors.errorInicioSesion && (
                <div className="mb-3"> <small className="text-danger">{ errors.errorInicioSesion }</small>
                       </div>
                    )  }

            <div className='d-flex flex-column justify-content-center align-items-center'>
                <button type="submit" className="btn btn-primary mb-3" disabled={ loading }>{ loading ? <><span className='loader'></span> <span>Iniciando sesión</span></> : "Iniciar sesión" }</button>
                <span>¿No tenés cuenta? <Link to="/registro" className="mb-3">Registrate</Link></span>
            </div>
        </form>
    )
}

export default FormLogin;