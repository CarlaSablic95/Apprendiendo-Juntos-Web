import { useState } from 'react';
import { Link } from 'react-router-dom'
import Nene from './images/nene.png';
import Nena from './images/nena.png';
import Batman from './images/batman.png';
import TinkerBell from './images/tinker-bell.png';

const FormRegistroAlumno = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (imagen) => {
        setSelectedImage(imagen)
    };

    // Validar datos del formulario
    // const CrearCuenta = (e) => {
    //     e.preventDefault();

    //     console.log("Creando cuenta..");
    // }


    return (
            <form className="py-4 px-5">
                <p>Elegir avatar:</p>
                <div className="mb-4 d-flex justify-content-evenly align-items-center">
                     <div className={`rounded-circle shadow-sm border-2 ${selectedImage === "nene" ? "border border-success" : ""}`} onClick={ () => handleImageClick("nene") }>
                        <img src={ Nene } alt="Ícono de nene" className="rounded-circle img-alumno border" />
                    </div>

                    <div className={`rounded-circle shadow-sm border-2 ${selectedImage === "batman" ? "border border-success" : ""}`} onClick={ () => handleImageClick("batman") }>
                        <img src={ Batman } alt="Ícono de Batman" className="rounded-circle img-alumno border" />
                    </div>

                     <div className={`rounded-circle shadow-sm border-2 ${selectedImage === "nena" ? "border border-success" : ""}`} onClick={ () => handleImageClick("nena") }>
                        <img src={ Nena } alt="Ícono de nena" className="rounded-circle img-alumno border" />
                    </div>


                     <div className={`rounded-circle shadow-sm border-2 ${selectedImage === "tinkerbell" ? "border border-success" : ""}`} onClick={ () => handleImageClick("tinkerbell") }>
                        <img src={ TinkerBell } alt="Ícono de Tinker Bell" className="rounded-circle img-alumno border" />
                    </div>
                </div>
            <div className="mb-3">
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInputName" placeholder="Juan" />
                    <label htmlFor="floatingInputName">Nombre</label>
                </div>
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
                <button type="button" className="btn btn-primary mb-3">Crear cuenta</button>
                <Link to="/iniciar-sesion" className="mb-3">Ya tengo una cuenta</Link>
            </div>
            </form>
    )
}

export default FormRegistroAlumno;