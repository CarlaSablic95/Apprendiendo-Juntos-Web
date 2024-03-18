import { useState } from 'react';
import FormRegistroMaestro from '../components/Auth/FormRegistroMaestro';
import FormRegistroAlumno from '../components/Auth/FormRegistroAlumno';

const Registro = () => {
    const [mostrarFormMaestro, setmostrarFormMaestro] = useState(true);

    const handleMostrarFormMaestro = () => {
        setmostrarFormMaestro(true);
    };

    const handleMostrarFormAlumno = () => {
        setmostrarFormMaestro(false);
    };


    return (
        <section className="container py-5 mb-5">
                    <div className="card mx-auto my-5">
                        <div className="d-flex justify-content-around">
                            <button className="btn btn-primary btn-maestro btn-rol py-3" onClick={ handleMostrarFormMaestro }>Soy maestro/a</button>
                            <button className=" btn btn-secondary btn-rol btn-alumno py-3" onClick={ handleMostrarFormAlumno }>Soy alumno/a</button>
                        </div>
                        {/* Si mostrarFormMaestro es true, muestre el formulario de registro del maestro, si es false, que muestre el formulario de registro del alumno */}
                            { mostrarFormMaestro ? <FormRegistroMaestro /> : <FormRegistroAlumno />}
                        
                    </div>
        </section>
    )
}

export default Registro;