import FormLogin from '../components/Auth/FormLogin';

const IniciarSesion = () => {

    return (
        <section className="container py-4 mb-3">
            <h1>Iniciar sesión</h1>
            <div className="card mx-auto">
                <FormLogin />
            </div>
        </section>
    )
}

export default IniciarSesion;