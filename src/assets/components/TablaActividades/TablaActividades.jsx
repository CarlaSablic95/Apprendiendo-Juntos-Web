import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig/firebaseConfig";
import EditarActividad from "../FormActividades/EditarActividad";
import EliminarActividad from "../FormActividades/EliminarActividad";

const TablaActividades = () => {
    // Estado para la tabla de actividades
   const [ tablaActividades, setTablaActividades ] = useState([]);
   const [ loading, setLoading ] = useState(true);

useEffect(() => {
    const obtenerActividades = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "actividades"));
            const actividades = [];
            querySnapshot.forEach((doc) => {
                // Obtener datos de cada actividad y agregarlos al array actividades
                actividades.push({
                    id: doc.id,
                    ...doc.data()
                });
            });

            // Actualizar el estado con las actividades obtenidas
            setTablaActividades(actividades);
        } catch (error) {
            console.error("Error al obtener las actividades: ", error);
        } finally {
            setLoading(false);
        }
    }

    obtenerActividades();

}, []); // El array vacío como segundo argumento indica que esete efecto se ejecuta solo UNA VEZ al montar el componente
    
    return (
    <div className="col-12 col-md-8 px-5 py-5 m-auto d-flex justify-content-center align-items-center">
        { loading ? (<><div className="spinner">
                        <div className="pages"></div>
                        <div className="pages"></div>
                        <div className="pages"></div>
                        <div className="pages"></div>
                        <div className="pages"></div>
                        </div></>)
        : tablaActividades.length > 0 ? (
            <div>
                <div className="d-flex justify-content-end mt-3 mb-4">
                    <button className="btn btn-primary rounded-5" data-bs-toggle="modal" data-bs-target="#crearActividadForm">
                        <i className="bi bi-patch-plus text-white"></i> Crear actividad
                    </button>
                </div>
                   
                <div className="table-responsive">
                    {/* Código para mostrar la tabla de actividades */}
                    <table className="table mt-4 text-center">
                        <thead>
                            <tr>
                                <th scope="col">Imagen</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Descripción</th>
                                <th scope="col">Materia</th>
                                <th scope="col text-center">Editar</th>
                                <th scope="col text-center">Eliminar</th>
                            </tr>
                        </thead>
                        <tbody className="align-middle">
                            { tablaActividades.map((actividad) => (
                                <tr key={actividad.id}>
                                    <td><img src={actividad.portadaJuego} alt="Portada de la actividad" className="img-actividad rounded-5" width={"70px"} /></td>
                                    <td>{actividad.nombre}</td>
                                    <td>{actividad.descripcion}</td>
                                    <td>{actividad.materia}</td>

                                    <td>
                                        <button
                                            className="btn text-white bg-primary rounded-circle"
                                            data-bs-toggle="modal"
                                            data-bs-target={`#EditarActividadForm-${actividad.id}`}
                                        ><i className="bi bi-pencil-square"></i>
                                        </button>
                                    </td>
                                    <td>
                                        <button className="btn text-white bg-danger rounded-circle" data-bs-toggle="modal" data-bs-target="#EliminarActividad" ><i className="bi bi-trash-fill"></i></button>
                                    </td>
                                    <td><EditarActividad idActividad={actividad.id} /></td>
                                    <td><EliminarActividad idActividad={actividad.id} /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            
        ) : (
            <div className="p-4 rounded-5 text-center" style={{ backgroundColor: "#ff96426e" }}>
                <p className="text-center">No hay actividades para mostrar</p>
                <button className="btn rounded-5 bg-primary" data-bs-toggle="modal" data-bs-target="#crearActividadForm">
                    <i className="bi bi-patch-plus text-white fs-2"></i>
                </button>
            </div>
        )}
    </div>
)
}

export default TablaActividades;