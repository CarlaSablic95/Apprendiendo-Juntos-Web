const FormActividades = () => {
    return(
        <form className="py-4 px-5">
            <div className="mb-3">
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInputNombre" placeholder="Aprender las vocales" />
                    <label htmlFor="floatingInputNombre">Nombre</label>
                </div>
            </div>

            <div className="mb-3">
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInputDescripcion" placeholder="Descripción"/>
                    <label htmlFor="floatingInputDescripcion">Descripción</label>
                </div>
            </div>

            <div className="mb-4">
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInputMateria" placeholder="Materia"/>
                    <label htmlFor="floatingInputDescripcion">Materia</label>
                </div>
            </div>

{/* VALIDAR QUE SÓLO ACEPTE ARCHIVOS DE TIPO IMAGEN: png/jpg/jpeg */}
            <div className="mb-4">
                <div className="mb-3">
                    <input className="form-control" type="file" id="formFile" />
                </div>
            </div>

                <div className="d-flex justify-content-evenly border-0">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    <button type="button" className="btn btn-primary">Crear actividad</button>
                </div>
        </form>
    )
}

export default FormActividades;