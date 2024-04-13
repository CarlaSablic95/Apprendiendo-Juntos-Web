import { useState } from "react";
import { db, storage } from "../firebaseConfig/firebaseConfig"; // Obtengo la BD y el almacenamiento
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL  } from "firebase/storage";

const FormActividades = () => {
    // ESTADO DEL FORMULARIO
    const [form, setForm] = useState({
        nombre: "",
        descripcion: "",
        materia: "",
        portadaJuego: null
    });

    // ESTADO DE ERRORES EN EL FORMULARIO
    const [errors, setErrors] = useState({
        errorNombre: "",
        errorDescripcion: "",
        errorMateria: "",
        errorPortadaJuego: ""
    });

    // LOADER
    const [loading, setLoading] = useState(false);

    // ESTADO DEL NOMBRE DEL ARCHIVO
    const [fileName, setFileName] = useState(null);

    // VALIDACIÓN DE LOS CAMPOS
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setForm(prevState => ({
            ...prevState,
            [id]: value, // [id] : sirve para acceder y actualizar dinámicamente las propiedades de un objeto en función de una clave dinámica, que en este caso es el valor de id del campo de entrada del formulario
        }));

        // Actualizar errores
        if(id === "nombre") {
            setErrors(prevState => ({
                ...prevState,
                errorNombre: value.trim() ? "" : "Este campo es requerido"
            }));
        }

        if(id === "descripcion") {
            setErrors(prevState => ({
                ...prevState,
                errorDescripcion: value.trim() ? "" : "Este campo es requerido"
            }));
        }

        if(id === "materia") {
            setErrors(prevState => ({
                ...prevState,
                errorMateria: value.trim() ? "" : "Este campo es requerido"
            }));
        }
    }
    
    // VALIDACIÓN DEL TIPO DE IMAGEN Y SUBIDA DE ARCHIVO
const handleImageChange = (e) => {
    const file = e.target.files[0]; // objeto file
    // Verifico si se seleccionó un archivo
    if(file) {
        console.log("IMAGEN ELEGIDA: ", file.name);
        // Verifico el tipo de archivo
        if(file.type === "image/png" || file.type === "image/jpg" || file.type === "image/jpeg") {
            
            setFileName(file.name);
            // cuando elijo una imagen, se actualiza el formulario agregando el nombre del archivo
            setForm(prevState => ({
                ...prevState,
                portadaJuego: file// Guarda el objeto File completo en el estado
            }));
            

            setErrors(prevState => ({
                ...prevState,
                errorPortadaJuego: ""
            }));


        } else {
            alert("Sólo se aceptan imagen de tipo PNG o JPG");
        }
    }
};


// ENVÍO DE FORMULARIO SI NO HAY ERRORES
const handleFormSubmit = async (e) => {
    e.preventDefault();

    const { nombre, descripcion, materia, portadaJuego } = form;

    // Verificar si hay errores
    if (!nombre.trim() || !descripcion.trim() || !materia.trim() || portadaJuego === null) {
        // Si hay campos vacíos, establece los errores correspondientes
        setErrors(prevState => ({
            ...prevState,
            errorNombre: !nombre.trim() ? "Este campo es requerido" : "",
            errorDescripcion: !descripcion.trim() ? "Este campo es requerido" : "",
            errorMateria: !materia.trim() ? "Este campo es requerido" : "",
            errorPortadaJuego: portadaJuego === null ? "La imagen es requerida" : "",
        }));
        console.log("El formulario tiene errores, no se puede enviar.");

        console.log("ESTADO DEL FORMULARIO: ", form);

        return;
    }

    // Intentar agregar los datos a Firestore
    try {
        setLoading(true);
       
        const storageRef = ref(storage, `portadas/${portadaJuego.name}`); // https://firebasestorage.googleapis.com/v0/b/apprendiendo-juntos-web.appspot.com/o/portadas%2Fleon.jpeg --> portadaJuego.name = leon.jpeg. Antes había escrito fileName.name = undefined
        console.log("storageRef: ", storageRef);

        await uploadBytes(storageRef, portadaJuego);

        const url = await getDownloadURL(storageRef); // Obtener la URL de descarga de la imagen

        console.log("URL: ", url);
        // SUBO A FIRESTORE TODOS LOS DATOS
        const docRef = await addDoc(collection(db, "actividades"), {
            nombre,
            descripcion,
            materia,
            portadaJuego: url // Guarda la URL de descarga en Firestore
        });
        
        console.log("Actividad agregada con ID: ", docRef.id);
        alert("Actividad agregada con éxito");

        // Limpiar el formulario después de agregar la actividad
        console.log("ESTADO DEL FORMULARIO: ", form);

        setForm({
            nombre: "",
            descripcion: "",
            materia: "",
            portadaJuego: null
        });

    // Limpiar el nombre del archivo
    // setFileName(null);

    } catch (error) {
        console.error("Error al agregar la actividad: ", error);
        alert("Ocurrió un error al agregar la actividad");
    } finally {
        setLoading(false);
    }
};


    return(
        <div className="modal-dialog modal-dialog-centered">
            {/* Modal */}
            <div className="modal fade" id="crearActividadForm" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Agregar actividad</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    <form className="py-4 px-5" onSubmit={ handleFormSubmit }>
                        <div className="mb-3">
                            <div className="form-floating mb-3">
                                <input type="text" className={`form-control ${ errors.errorNombre ? "is-invalid" : ""}`} id="nombre" placeholder="Aprender las vocales"  onChange={ handleInputChange }/>
                                <small className="text-danger mb-3">{errors.errorNombre}</small>
                                <label htmlFor="nombre">Nombre<span className="text-danger">*</span></label>
                            </div>
                        </div>

                        <div className="form-floating mb-4">
                            <textarea className={`form-control ${ errors.errorDescripcion ? "is-invalid" : ""}`} placeholder="Descripción" id="descripcion" style={ { height: "100px" } } onChange={ handleInputChange }></textarea>
                            <small className="text-danger mb-3">{errors.errorDescripcion}</small>
                            <label htmlFor="descripcion">Descripción<span className="text-danger">*</span></label>
                        </div>

                        <div className="mb-4">
                            <div className="form-floating mb-3">
                                <input type="text" className={`form-control ${ errors.errorNombre ? "is-invalid" : ""}`} id="materia" placeholder="Materia" onChange={ handleInputChange } />
                                <small className="text-danger mb-3">{errors.errorMateria}</small>
                                <label htmlFor="materia">Materia<span className="text-danger">*</span></label>
                            </div>
                        </div>
                        {/* INPUT FILE  */}
                        {/* <div className="mb-4">
                            <label htmlFor="portadaJuego" className="form-label w-100">Portada del juego<span className="text-danger">*</span>
                            <span className="archivo-imagen dm-sans py-2 mt-2 mb-1 w-100">
                                { fileName ? fileName : <><i className="bi bi-paperclip fs-4"></i> Subir imagen</> }
                            </span>
                            </label>

                            <input className="form-control d-none" type="file" accept=".png, .jpg, .jpeg" id="portadaJuego" onClick={ handleImageChange } />
                            <small className="text-danger mb-3">{errors.errorPortadaJuego}</small>
                        </div> */}

                         {/* INPUT FILE 2 */}
                         <div className="mb-4">
                            <label htmlFor="portadaJuego" className="form-label w-100">Portada del juego
                                <input className="form-control" type="file" accept=".png, .jpg, .jpeg" id="portadaJuego" onChange={ handleImageChange } />
                            </label>

                            <small className="text-danger mb-3">{errors.errorPortadaJuego}</small>
                                <span className="archivo-imagen dm-sans py-2 mt-2 mb-1 w-100">
                                    { fileName ? fileName : <><i className="bi bi-paperclip fs-4"></i> Subir imagen</>  }
                                </span>
                        </div>

                            <div className="d-flex justify-content-evenly border-0">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                
                                <button type="submit" className="btn btn-primary" disabled={ loading }>{ loading ? <>
                                    <span className="loader"></span> <span>Cargando</span>
                                    </> : "Aceptar" }</button>
                            </div>
                     </form>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormActividades;