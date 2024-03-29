const EliminarActividad = () => {
    return(
        <div className="modal-dialog modal-dialog-centered">
            {/* Modal */}
            <div className="modal fade" id="EliminarActividad" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-body">
                        <h5 className="text-center mb-4">¿Estás seguro de eliminar esta actividad?</h5>

                        <div className="d-flex justify-content-evenly border-0">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
                                <button type="button" className="btn btn-danger">Sí</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EliminarActividad;