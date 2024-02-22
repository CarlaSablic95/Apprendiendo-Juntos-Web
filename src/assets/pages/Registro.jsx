import { useState } from 'react';
import FormRegistroMaestro from '../components/FormRegistroMaestro/FormRegistroMaestro';
import FormRegistroAlumno from '../components/FormRegistroAlumno/FormRegistroAlumno';

const Registro = () => {
    const [mostrarFormMaestro, setmostrarFormMaestro] = useState(true);

    const handleMostrarFormMaestro = () => {
        setmostrarFormMaestro(true);
    };

    const handleMostrarFormAlumno = () => {
        setmostrarFormMaestro(false);
    };


    return (
        <section className="container py-4 mb-3">
            <h1>Registro</h1>
                    <div className="card mx-auto">
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