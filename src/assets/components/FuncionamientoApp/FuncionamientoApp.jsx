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
                    <p>Solo toma un momento registrarse y ya estarás listo para guiar a tus hijos en un viaje lleno de descubrimientos.</p>
                </div>

                <div className="col-12 col-md-3 card text-center py-5 seccion-explicacion  border-0">
                    <img src={ Juegos } alt="Ícono de rompecabezas" width={ 70 } className="mb-3 mx-auto filtro-sombra" />
                    <h4>2 - Elegir materia</h4>
                    <p>Navega a nuestra sección de <strong>Juegos</strong>, donde encontrarás actividades lúdicas de las materias básicas.</p>
                </div>

                <div className="col-12 col-md-3 card text-center py-5 seccion-explicacion border-0">
                    <div className="d-flex justify-content-center">
                        <img src={ Niño } alt="Ícono de niño" width={ 70 } className="mb-3 mx-auto filtro-sombra" />
                        <img src={ Niña } alt="Ícono de niña" width={ 70 } className="mb-3 mx-auto filtro-sombra" />
                    </div>
                    <h4>3 - Diversión y aprendizaje</h4>
                    <p><strong>Apprendiendo Juntos</strong> es el espacio donde tus hijos se divertirán, mientras fortalecen sus conocimientos.</p>
                </div>
            </div>
        </>
    )
}

export default FuncionamientoApp;