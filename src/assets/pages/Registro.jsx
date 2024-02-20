import { useState } from 'react';
import FormRegistroMaestro from '../components/FormRegistroMaestro/FormRegistroMaestro';
import FormRegistroAlumno from '../components/FormRegistroAlumno/FormRegistroAlumno';

const Registro = () => {
    const [mostrarFormMaestro, setmostrarFormMaestro] = useState(true);

    const handleMostrarFormMaestro = () => {
        setmostrarFormMaestro(true);
    };

    const handleMostrarFormAlumno = () => {
        setmostrarFormMaestro(false)
    };


    return (
        <>
        <div className="container py-4 mb-3">
            <h1>Registro</h1>
            <div className="card mx-auto">
                <div className="buttons d-flex justify-content-center mb-3">
                    <div className="">
                        <button className="btn btn-primary btn-rol" onClick={ handleMostrarFormMaestro }>Soy maestro/a</button>
                    </div>
                    <div className="position-relative ">
                        <button className="position-absolute btn btn-secondary btn-rol btn-alumno" onClick={ handleMostrarFormAlumno }>Soy alumno/a</button>
                    </div>
                </div>
                {/* Si mostrarFormMaestro es true, muestre el formulario de registro del maestro, si es false, que muestre el formulario de registro del alumno */}
                    { mostrarFormMaestro ? <FormRegistroMaestro /> : <FormRegistroAlumno />}
                
            </div>
        </div>
        </>
    )
}

export default Registro;