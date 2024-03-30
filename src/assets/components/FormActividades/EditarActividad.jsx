import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../firebaseConfig/firebaseConfig";

const EditarActividad = ({ idActividad }) => {
    const [actividad, setActividad] = useState({});

    useEffect(() => {
        const obtenerActividad = async () => {
            try {
                if (idActividad) {
                    const docSnap = await getDoc(doc(db, "actividades", idActividad));
                    if (docSnap.exists()) {
                        setActividad({ id: docSnap.id, ...docSnap.data() });
                        console.log("DATOS: ", docSnap.data());
                    } else {
                        alert("No se encuentra el documento");
                    }
                }
            } catch (error) {
                console.error("Error al obtener el documento: ", error);
            }
        };

        obtenerActividad();
    }, [idActividad]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setActividad({ ...actividad, [name]: value });
    };

    const actualizarActividad = async () => {
        try {
            await updateDoc(doc(db, "actividades", idActividad), {
                nombre: actividad.nombre,
                descripcion: actividad.descripcion,
                materia: actividad.materia,
                portadaJuego: actividad.portadaJuego,
            });
            alert("Documento actualizado con éxito");
        } catch (error) {
            console.error("Error al actualizar el documento: ", error);
        }
    };

    return (
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal fade" id={`EditarActividadForm-${idActividad}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Editar actividad</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form className="py-4 px-5">
                                    <div className="mb-3">
                                        <div className="form-floating mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id={`floatingInputNombre-${idActividad}`}
                                                placeholder="Aprender las vocales"
                                                value={actividad.nombre || ""}
                                                onChange={handleChange}
                                                name="nombre"
                                            />
                                            <label htmlFor={`floatingInputNombre-${idActividad}`}>Nombre</label>
                                        </div>
                                    </div>

                                    <div className="form-floating mb-4">
                                        <textarea
                                            className="form-control"
                                            placeholder="Descripción"
                                            id={`floatingTextarea-${idActividad}`}
                                            value={actividad.descripcion || ""}
                                            style={{ height: "100px" }}
                                            onChange={handleChange}
                                            name="descripcion"
                                        ></textarea>
                                        <label htmlFor={`floatingTextarea-${idActividad}`}>Descripción</label>
                                    </div>

                                    <div className="mb-4">
                                        <div className="form-floating mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id={`floatingInputMateria-${idActividad}`}
                                                placeholder="Materia"
                                                value={actividad.materia || ""}
                                                onChange={handleChange}
                                                name="materia"
                                            />
                                            <label htmlFor={`floatingInputMateria-${idActividad}`}>Materia</label>
                                        </div>
                                    </div>

                                    <div className="mb-4">
                            <label htmlFor="portadaJuego" className="form-label w-100">Portada del juego<span className="text-danger">*</span>
                            <span className="archivo-imagen dm-sans py-2 mt-2 mb-1 w-100">
                                <i className="bi bi-paperclip fs-4"></i> { actividad.portadaJuego || ""}
                            </span>
                            </label>

                            <input className="form-control d-none" type="file" accept=".png, .jpg, .jpeg" id="portadaJuego"  />
                        </div>

                                    <div className="d-flex justify-content-evenly border-0">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                        <button type="button" className="btn btn-primary" onClick={actualizarActividad}>Aceptar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default EditarActividad;
