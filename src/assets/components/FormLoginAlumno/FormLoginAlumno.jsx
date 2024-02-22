import { Link } from 'react-router-dom';
import Nene from '../FormRegistroAlumno/images/nene.png';


const FormLoginAlumno = () => {
    return (
        <form className="py-4 px-5">
                <div className="d-flex flex-column justify-content-evenly align-items-center mb-2">
                     <div className="rounded-circle shadow-sm border-2 mb-2">
                        <img src={ Nene } alt="Ícono de nene" className="rounded-circle border" />
                    </div>
                    <p>Martín</p>
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

export default FormLoginAlumno;