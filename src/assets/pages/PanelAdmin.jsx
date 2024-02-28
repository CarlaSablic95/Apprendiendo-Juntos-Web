import { useEffect, useState } from "react";
import CrearActividad from "../components/FormActividades/CrearActividad";
import EditarActividad from "../components/FormActividades/EditarActividad";
import EliminarActividad from "../components/FormActividades/EliminarActividad";
import TablaActividades from "../components/TablaActividades/TablaActividades";
import TablaAlumnos from "../components/TablaAlumnos/TablaAlumnos";

// FIREBASE
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../components/firebaseConfig/firebaseConfig";

const PanelAdmin = () => {
    const [mostrarTablaActividades, setMostrarTablaActividades] = useState(true);
    const [ datosUsuario, setDatosUsuario ] = useState(null);
    
    const handleTablaActividades = () => {
        setMostrarTablaActividades(true);
    }
    
    const handleTablaAlumnos = () => {
        setMostrarTablaActividades(false);
    }

    // useEffect obtiene los datos al montar el componente
    useEffect(() => {
        const fetchDatosUsuario = onSnapshot(collection(db, "usuarios"), (querySnapshot) => {
            querySnapshot.forEach((doc) => {
            const usuario = doc.data(); // objeto de JS
               setDatosUsuario(usuario);
            });
        });
        
        return () => fetchDatosUsuario();

    }, []);

    return(
        <section className="container-fluid">
            <div className="row justify-content-between">
                <div className="col-2 h-100 bg-secondary px-0">
                    <aside>
                        <div className="bg-dark text-white text-center p-2">
                            <h4 className="mb-0">Panel admin</h4>
                        </div>
                            { datosUsuario && (
                                <div className="text-center text-white mb-5 py-3">
                                    <img src={ `./components/Auth/images/${ datosUsuario.avatar }` } alt="Avatar de usuario maestro" className="mb-3" />
                                    <p className="mb-0">{ datosUsuario.nombre } { datosUsuario.apellido }</p>
                            </div>
                            )}

                        <div className="text-center text-white d-flex flex-column">
                            <button className="btn btn-primary" onClick={ handleTablaActividades }>Actividades</button>
                            <button className="btn btn-secondary" onClick={ handleTablaAlumnos }>Alumnos</button>
                        </div>
                    </aside>
                </div>

                { mostrarTablaActividades ? <TablaActividades /> : <TablaAlumnos /> }
            </div>
            {/* Modal Form */}
            <CrearActividad />
            <EditarActividad />
            <EliminarActividad />
            
        </section>
    )
}

export default PanelAdmin;