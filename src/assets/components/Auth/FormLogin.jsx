import { Link } from 'react-router-dom';
import Avatar from './images/avatar.png';

const FormLogin = () => {
    return(
        <form className="py-4 px-5">
            <div className="mb-3 text-center">
                <img src={Avatar} alt="Ícono de avatar" />
            </div>

            <div className="mb-3">
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInputEmail" placeholder="juan_gomez@gmail.com" />
                    <label htmlFor="floatingInputEmail">Email</label>
                </div>
            </div>

            <div className="mb-3">
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Contraseña" />
                    <label htmlFor="floatingPassword">Contraseña</label>
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