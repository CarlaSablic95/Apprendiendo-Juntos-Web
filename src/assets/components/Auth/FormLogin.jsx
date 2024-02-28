import { Link } from 'react-router-dom';
import Avatar from './images/avatar.png';
// import { useState } from 'react';
// import { db } from '../firebaseConfig/config';
// import { collection, getDoc } from 'firebase/firestore';

const FormLogin = () => {
    // const [ emailUsuario, setEmailUsuario ] = useState(false);
    // const [ contraseniaUsuario, setContraseniaUsuario ] = useState(false);

    // const validarLogin = (e) => {
    //     e.preventDefault();

    //     if(emailUsuario) {

    //     }
    // }

    return(
        <form className="py-4 px-5" onSubmit={ validarLogin }>
            <div className="mb-3 text-center">
                <img src={Avatar} alt="Ícono de avatar" />
            </div>

            <div className="mb-3">
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInputEmail" placeholder="juan_gomez@gmail.com" />
                    <label htmlFor="floatingInputEmail">Email <span className="text-danger">*</span></label>
                </div>
            </div>

            <div className="mb-3">
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Contraseña" />
                    <label htmlFor="floatingPassword">Contraseña <span className="text-danger">*</span></label>
                </div>
            </div>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <button type="submit" className="btn btn-primary mb-3">Iniciar sesión</button>
                    <Link to="/registro" className="mb-3">No tengo cuenta</Link>
                </div>
        </form>
    )
}

export default FormLogin;