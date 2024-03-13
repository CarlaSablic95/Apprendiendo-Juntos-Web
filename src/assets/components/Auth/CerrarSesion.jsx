import { app } from "../firebaseConfig/firebaseConfig";
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth(app);

const CerrarSesion = () => {

    const CerrarSesionUsuario = () => {
        signOut(auth)
        .then(() => {
            window.location.href = "./iniciar-sesion";
        })
        .catch((error) => {
            console.log("ERROR: ", error);
        })
    }

    return(
        
        <div className="modal-dialog modal-dialog-centered my-auto">
            <div className="modal fade" id="cerrarSesion" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-body">
                        <h4 className="text-center mb-3">¿Estás seguro de cerrar sesión?</h4>
                             <div className="d-flex justify-content-evenly border-0">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                <button type="button" className="btn btn-primary" onClick={ CerrarSesionUsuario }>Aceptar</button>
                            </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
)
}

export default CerrarSesion;