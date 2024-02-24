import { useState } from "react";
import Maestra from "../components/Auth/images/maestra.png";
import ModalForm from "../components/ModalForm/ModalForm";
import PanelActividades from "../components/PanelActividades/PanelActividades";
import PanelAlumnos from "../components/PanelAlumnos/PanelAlumnos";

const PanelAdmin = () => {
    const [mostrarPanelActividades, setMostrarPanelActividades] = useState(true);
    
    const handlePanelActividades = () => {
        setMostrarPanelActividades(true);
    }
    
    const handlePanelAlumnos = () => {
        setMostrarPanelActividades(false);
    }

    return(
        <section className="container-fluid">
            <div className="row justify-content-between">
                <div className="col-2 h-100 bg-secondary px-0">
                    <aside>
                        <div className="bg-dark text-white text-center p-2">
                            <h4 className="mb-0">Panel admin</h4>
                        </div>
                        <div className="text-center text-white mb-5 py-3">
                            <img src={ Maestra } alt="ícono de avatar" className="mb-3" />
                            <p className="">Maestra: <br/> Luciana</p>
                        </div>

                        <div className="text-center text-white d-flex flex-column">
                            <button className="btn btn-primary" onClick={ handlePanelActividades }>Actividades</button>
                            <button className="btn btn-secondary" onClick={ handlePanelAlumnos }>Alumnos</button>
                        </div>
                    </aside>
                </div>

                { mostrarPanelActividades ? <PanelActividades /> : <PanelAlumnos /> }
            </div>
            {/* Modal Form */}
            <ModalForm />
            
        </section>
    )
}

export default PanelAdmin;