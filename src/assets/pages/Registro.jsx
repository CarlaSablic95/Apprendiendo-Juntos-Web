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
            <div className="">
                <button className="btn btn-primary btn-maestro btn-rol py-3" onClick={ handleMostrarFormMaestro }>Soy maestro/a</button>
                <button className=" btn btn-secondary btn-rol btn-alumno py-3" onClick={ handleMostrarFormAlumno }>Soy alumno/a</button>
            </div>
                {/* Si mostrarFormMaestro es true, muestre el formulario de registro del maestro, si es false, que muestre el formulario de registro del alumno */}
                    { mostrarFormMaestro ? <FormRegistroMaestro /> : <FormRegistroAlumno />}
                
            </div>
        </div>
        </>
    )
}

export default Registro;