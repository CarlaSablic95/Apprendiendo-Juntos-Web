import ABC from "../FormActividades/images/abc.png";
import { useState } from "react";


const TablaActividades = () => {
   const [ mostrarActividades, setActividades ] = useState(false);

   const handleSetActividades = () => {
    setActividades(true);
   }
   
    return(
        <div className="col-6 px-5 py-5 m-auto">
                    { mostrarActividades ?  (
                        <div> 
                            <div className="d-flex justify-content-end mt-3 mb-4">
                                <button className="btn btn-primary rounded-5" data-bs-toggle="modal" data-bs-target="#crearActividadForm">
                                    <i className="bi bi-patch-plus text-white"></i> Crear actividad
                                </button>
                            </div>
                        <div className="table-responsive">
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
                                <tr>
                                    <td><img src={ ABC } alt="" className="img-actividad" /></td>
                                    <td>Aprender las vocales</td>
                                    <td>Lorem ipsum</td>
                                    <td>Lengua</td>
                                    <td><button className="btn text-white bg-primary rounded-circle" data-bs-toggle="modal" data-bs-target="#EditarActividadForm"><i className="bi bi-pencil-square"></i></button></td>
                                    <td><button className="btn text-white bg-danger rounded-circle" data-bs-toggle="modal" data-bs-target="#EliminarActividad"><i className="bi bi-trash-fill"></i></button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    </div>) : ( <div className="bg-light p-4 rounded-5 text-center">
                        <p className="text-center">No hay actividades para mostrar</p>
                        <button className="btn rounded-circle bg-warning" data-bs-toggle="modal" data-bs-target="#crearActividadForm">
                            <i className="bi bi-patch-plus text-white fs-2"></i>
                        </button>
                    </div> )
                     }
                </div>
    )
}

export default TablaActividades;