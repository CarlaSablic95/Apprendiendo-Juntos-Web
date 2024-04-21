import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebaseConfig";
import { useState } from "react";

const EliminarActividad = ({ idActividad }) => {
    const [loading, setLoading] = useState(false);

    const borrarActividad = async () => {
        try {
            setLoading(true);
            await deleteDoc(doc(db, "actividades", idActividad)); // Borro la actividad en la coleccion "actividades" de la base de datos
            alert("Actividad eliminada correctamente");
        } catch (error) {
            console.error("Error al eliminar la actividad: ", error);
        } finally {
            setLoading(false);
        }
    }


    return(
        <div className="modal-dialog modal-dialog-centered">
            {/* Modal */}
            <div className="modal fade" id="EliminarActividad" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <h5 className="text-center mb-4">¿Estás seguro de eliminar esta actividad?</h5>

                        <div className="d-flex justify-content-evenly border-0">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
                                <button type="button" className="btn btn-danger" onClick={ borrarActividad } disabled={ loading }>{ loading ? <><span className="loader"></span> Eliminando</> : "Eliminar"}</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EliminarActividad;