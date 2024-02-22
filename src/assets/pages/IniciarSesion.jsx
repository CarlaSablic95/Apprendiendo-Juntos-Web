import { useState } from 'react';
import FormLoginMaestro from '../components/FormLoginMaestro/FormLoginMaestro';
import FormLoginAlumno from '../components/FormLoginAlumno/FormLoginAlumno';

const IniciarSesion = () => {
    const [mostrarFormMaestroLogin, setmostrarFormMaestro] = useState(true);

    const handleMostraFormMaestroLogin = () => {
        setmostrarFormMaestro(true);
    }

    const handleMostraFormAlumnoLogin = () => {
        setmostrarFormMaestro(false);
    }



    return (
        <section className="container py-4 mb-3">
            <h1>Iniciar sesión</h1>
            <div className="card mx-auto">
                <div className="d-flex justify-content-around">
                <button className="btn btn-primary btn-maestro btn-rol py-3" onClick={ handleMostraFormMaestroLogin }>Soy maestro/a</button>
                        <button className=" btn btn-secondary btn-rol btn-alumno py-3" onClick={ handleMostraFormAlumnoLogin }>Soy alumno/a</button>
                </div>

                { mostrarFormMaestroLogin ? <FormLoginMaestro /> : <FormLoginAlumno /> }
            </div>
        </section>
    )
}

export default IniciarSesion;