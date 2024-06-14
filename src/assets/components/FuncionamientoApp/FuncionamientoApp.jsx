import Usuario from "../../img/usuario.png";
import Juegos from "../../img/juegos.png";
import Niño from "../../img/nino.png";
import Niña from "../../img/nina.png";
// import Uno from "./img/uno.png";
// import Dos from "./img/dos.png";
// import Tres from "./img/uno.png";

const FuncionamientoApp = () => {

    return (
        <>
            <div className="row justify-content-evenly gap-5">
                <div className="col-12 col-md-3 card text-center py-5 seccion-explicacion border-0">
                    <img src={ Usuario } alt="Ícono de usuario" width={ 70 } className="mb-3 mx-auto" />
                    <h4>1 - Crear cuenta</h4>
                    <p>Registra a tus hijos en nuestra plataforma para que tengan acceso a los juegos, y un seguimiento de sus logros y avances.</p>
                </div>

                <div className="col-12 col-md-3 card text-center py-5 seccion-explicacion  border-0">
                    <img src={ Juegos } alt="Ícono de rompecabezas" width={ 70 } className="mb-3 mx-auto filtro-sombra" />
                    <h4>2 - Jugar</h4>
                    <p>Ve a la sección de <strong>Juegos</strong>, donde encontrarás actividades lúdicas de las materias básicas.</p>
                </div>

                <div className="col-12 col-md-3 card text-center py-5 seccion-explicacion border-0">
                    <div className="d-flex justify-content-center">
                        <img src={ Niño } alt="Ícono de niño" width={ 70 } className="mb-3 mx-auto filtro-sombra" />
                        <img src={ Niña } alt="Ícono de niña" width={ 70 } className="mb-3 mx-auto filtro-sombra" />
                    </div>
                    <h4>3 - Divertirse</h4>
                    <p>Es fundamental que te diviertas</p>
                </div>
            </div>
        </>
    )
}

export default FuncionamientoApp;