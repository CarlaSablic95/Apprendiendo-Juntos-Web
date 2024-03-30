import FormRegistroAlumno from '../components/Auth/FormRegistroAlumno';

const Registro = () => {
    return (
        <section className="container-fluid">
            <div className="fondo-form row justify-content-evenly align-items-center">
                <div className="col-12 col-md-4">
                    <h1 className="text-white">Registrate y jugá</h1>
                </div>
                <div className="col-12 col-md-6 d-flex justify-content-center">
                    <div className="container">
                        <div className="row justify-content-center">
                    <div className="card card-form my-5 px-0">
                        <div className="title-card bg-primary py-3">
                            <p className="text-center text-white mb-0">Registro</p>
                        </div>
                                <FormRegistroAlumno />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Registro;