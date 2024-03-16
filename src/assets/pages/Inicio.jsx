import MamaHijo from "../img/mama-hijo.webp";
import PapaHija from "../img/papa-hija.webp";
import Chico from "../img/chico.webp";

const Inicio = () => {
    return (
        <>
        {/* SECCIÓN PRINCIPAL */}
        <section className="seccion-principal py-5">
            <div id="carouselExampleAutoplaying" className="carousel slide position-relative z-2" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="8000">
                        <div className="container">
                            <div className="row justify-content-evenly align-items-center">
                                <div className="col-6">
                                    <h1>Apprendamos Juntos</h1>
                                    <p className="pe-5 mb-0">Nuestra plataforma está pensada para que padres e hijos aprendan juntos a estudiar, a través de juegos educativos que serán un complemento a la educación escolar del niño.</p>
                                    <p className="pe-5 mb-0">Para niños de 6 a 8 años.</p>
                                </div>
                                <div className="col-6 mt-5 text-center d-flex
                        justify-content-center position-relative">
                                    <div className="imagen-1">
                                        <img src={ MamaHijo } alt="Imagen de una mamá estudiando con su hijo" className="rounded-circle py-5 filtro-sombra   img-fluid" />
                                    </div>

                                    <div className="imagen-2 position-absolute top-50 start-50">
                                        <img src={ PapaHija } alt="Imagen de un papá estudiando con su hija" className="rounded-circle py-5 filtro-sombra img-fluid" />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="8000">
                        <div className="container">
                            <div className="row justify-content-evenly align-items-center">
                                <div className="col-6">
                                    <h2>Beneficios</h2>
                                    <p className="pe-5">En nuestra plataforma, podrás estudiar junto a tus hijos, a través de juegos que serán un complemento a su educación escolar.</p>
                                </div>
                                <div className="col-6 mt-5 text-center">
                                    <img src={ Chico } alt="Imagen de niño emocionado" className="imagen-1 rounded-circle py-5" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

        {/* SOBRE NOSOTROS */}
        <section>
            <div className="container">
                <h2>Sobre Nosotros</h2>

            </div>

    
        </section>

{/* // CÓMO FUNCIONA (PASOS PARA JUGAR) */}

        <section className="seccion-explicacion py-5">
            <div className="container">
                 <h2>¿Cómo funciona?</h2>

            </div>

        </section>
</>
    )
}

export default Inicio;