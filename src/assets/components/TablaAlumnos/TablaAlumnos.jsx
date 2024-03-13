import Nena from "../Auth/images/nena.png";

const TablaAlumnos = () => {
    return (
        <div className="col-8 px-5 m-auto">
            <div className="table-responsive">
                <table className="table mt-4 text-center">
                    <thead>
                        <tr>
                            <th scope="col">Avatar</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Actividad</th>
                            <th scope="col">Materia</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Estado</th>
                        </tr>
                    </thead>
                    <tbody className="align-middle text-center">
                        <tr>
                            <td><img src={ Nena } alt="" className="img-actividad" /></td>
                            <td>Luli</td>
                            <td>Aprender las vocales</td>
                            <td>Lengua</td>
                            <td>24/02/2024</td>
                            <td>Completado</td>
                        </tr>
                    </tbody>
                </table>
            </div>
         </div>
    )
}

export default TablaAlumnos;