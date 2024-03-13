import { Link } from 'react-router-dom';
import Avatar from './images/avatar.png';
import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const FormLogin = () => {
    const [ loading, setLoading ] = useState(false);

    const [ errors, setErrors ] = useState({
        email: "",
        contrasenia: "",
        errorInicioSesion: ""
    });

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
                await signInWithEmailAndPassword(auth, email, contrasenia)
                    window.location.href="./";
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
        <form className="py-4 px-5" onSubmit={ handleLoginForm }>
            <div className="mb-3 text-center">
                <img src={Avatar} alt="Ícono de avatar" />
            </div>

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
                    <input type="password" className={`form-control ${ errors.contrasenia && 'is-invalid'}`} id="floatingPassword" placeholder="Contraseña"
                    name="contrasenia"/>
                    <small className="text-danger">{ errors.contrasenia }</small>
                    <label htmlFor="floatingPassword">Contraseña <span className="text-danger">*</span></label>
                </div>
            </div>

            { errors.errorInicioSesion && (
                <div className="mb-3"> <small className="text-danger">{ errors.errorInicioSesion }</small>
                       </div>
                    )  }

            <div className='d-flex flex-column justify-content-center align-items-center'>
                <button type="submit" className="btn btn-primary mb-3" disabled={ loading }>{ loading ? <><span className='loader'></span> <span>Iniciando sesión</span></> : "Iniciar sesión" }</button>
                <Link to="/registro" className="mb-3">No tengo cuenta</Link>
            </div>
        </form>
    )
}

export default FormLogin;