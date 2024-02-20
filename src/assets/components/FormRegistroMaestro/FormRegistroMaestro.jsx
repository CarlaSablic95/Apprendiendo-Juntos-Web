import { useState } from 'react';
import { Link } from 'react-router-dom'
import Maestra from './images/maestra.png';
import Maestro from './images/maestro.png';

const FormRegistroMaestro = () => {
    // Creo un estado para realizar seguimiento de la imagen seleccionada, en principio, el valor de selectedImage es null
    const [selectedImage, setSelectedImage] = useState(null);

    // Función que llamo al hacer click en una imagen
    const handleImageClick = (imagen) => { // Toma el nombre de la imagen como argumento y
        // actualiza el estado con el nombre de la imagen seleccionada
        setSelectedImage(imagen)
    };

    return (
        <section>
            <form className="py-4 px-5">
                <p>Elegir avatar:</p>
                {/* A cada div que contiene la imagen, le agrego una clase CSS condicionalmente dependiendo si elegí la imagen. Uso "plantillas literales" y "operador ternario" */}
                <div className="mb-4 d-flex justify-content-evenly align-items-center">
                     <div className={`rounded-circle shadow-sm border-2 ${selectedImage === "maestra" ? "border border-success" : ""}`} onClick={ () => handleImageClick("maestra") }> {/* Al clickear en la imagen, llamo a la función handleImageClick con el nombre de la imagen. Estamos creando una función de flecha que se ejecutará SÓLO cuando ocurra el evento onClick, y no se va a ejecutar inmediatamente cuando se renderice el componente. Esto evita problemas de rendimiento. */}
                        <img src={ Maestra } alt="Ícono de maestra" className="rounded-circle img-admin border" />
                    </div>
                     <div className={`rounded-circle shadow-sm border-2 ${selectedImage === "maestro" ? "border border-success" : ""}`} onClick={ () => handleImageClick("maestro") }> {/* Al clickear en la imagen, llamo a la función handleImageClick con el nombre de la imagen. Estamos creando una función de flecha que se ejecutará SÓLO cuando ocurra el evento onClick, y no se va a ejecutar inmediatamente cuando se renderice el componente. Esto evita problemas de rendimiento. */}
                        <img src={ Maestro } alt="Ícono de maestro" className="rounded-circle img-admin border" />
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
                    <input type="text" className="form-control" id="floatingInputSurname" placeholder="Gomez" />
                    <label htmlFor="floatingInputSurname">Apellido</label>
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
                <button type="submit" className="btn btn-primary mb-3">Crear cuenta</button>
                <Link to="#" className="mb-3">Ya tengo una cuenta</Link>
            </div>
            </form>
        </section>
    )
}

export default FormRegistroMaestro;