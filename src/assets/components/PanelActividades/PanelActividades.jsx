import ABC from "../FormActividades/images/abc.png";

const PanelActividades = () => {
    return(
        <div className="col-8 px-5">
                    <div className="d-flex justify-content-end">
                        <button className="btn btn-primary rounded-5" data-bs-toggle="modal" data-bs-target="#modalForm">
                            <i className="bi bi-plus-circle-fill text-white"></i> Crear actividad
                        </button>
                    </div>
                    <table className="table mt-4 text-center">
                        <thead>
                            <tr>
                                <th scope="col">Imagen</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Descripción</th>
                                <th scope="col">Materia</th>
                            </tr>
                        </thead>
                        <tbody className="align-middle">
                            <tr>
                                <td><img src={ ABC } alt="" className="img-actividad" /></td>
                                <td>Aprender las vocales</td>
                                <td>Lorem ipsum</td>
                                <td>Lengua</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
    )
}

export default PanelActividades;