import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';
import ABC from "../img/abc.png";
import Abecedario from "../img/abecedario.png";
import Cuento from "../img/libro.png";
import Vocales from "../img/vocales.png";
import Piano from "../img/piano.png";

const Juegos = () => {
    return (
        <section className="container py-5">
            <div className="row justify-content-center py-5">
                    <h2 className="text-center my-4">Materias</h2>
                       
                        {/* JUEGOS / ACTIVIDADES (LENGUA) */}
                        <div className="row justify-content-evenly" style={{ height: "40vh" }}>
                            <div className="col-10 col-md-5 card mb-5 py-4">
                                <h4 className="text-center mb-5">Lengua</h4>

                                <Splide className="container-fluid" options={{ 
                                type: "loop",
                                perPage: 3,
                                focus: "center",
                                gap: "1px",
                                pagination: false
                                }} aria-label="My Favorite Images">
                                <SplideSlide className='container d-flex justify-content-center'>
                                    <Link to="/abecedario">
                                    <div className="d-flex flex-column justify-content-center align-items-center">
                                        <img src={ Abecedario } alt="" width="70px" className="mb-3" />
                                        <p className="text-center">Abecedario</p>
                                    </div>
                                    </Link>
                                </SplideSlide>

                                <SplideSlide className='container d-flex justify-content-center'>
                                    <Link to="/vocales">
                                    <div className="d-flex flex-column justify-content-center align-items-center">
                                        <img src={ Vocales } alt="" width="70px" className="mb-3" />
                                        <p className="text-center">Vocales</p>
                                    </div>
                                    </Link>
                                </SplideSlide>

                                <SplideSlide className='container d-flex justify-content-center'>
                                    <Link to="/consonantes">
                                    <div className="d-flex flex-column justify-content-center align-items-center">
                                        <img src={ ABC } alt="" width="70px" className="mb-3" />
                                        <p className="text-center">Consonantes</p>
                                    </div>
                                    </Link>
                                </SplideSlide>

                                <SplideSlide className='container d-flex justify-content-center'>
                                    <Link to="/cuento-simon">
                                    <div className="d-flex flex-column justify-content-center align-items-center">
                                        <img src={ Cuento } alt="" width="70px" className="mb-3" />
                                        <p className="text-center">Cuentos</p>
                                    </div>
                                    </Link>
                                </SplideSlide>    
                            </Splide>
                            </div>

                            <div className="col-10 col-md-5 card mb-5 py-4">
                                <h4 className="text-center mb-5">Música</h4>

                                <Splide className="container-fluid" options={{ 
                                type: "loop",
                                perPage: 1,
                                focus: "center",
                                gap: "1px",
                                pagination: false
                                }} aria-label="My Favorite Images">
                                <SplideSlide className="container d-flex justify-content-center">
                                    <Link to="/piano">
                                    <div className="d-flex flex-column justify-content-center align-items-center">
                                        <img src={ Piano } alt="" width="70px" className="mb-3" />
                                        <p className="text-center">Piano</p>
                                    </div>
                                    </Link>
                                </SplideSlide>

                                {/* <SplideSlide className='container d-flex justify-content-center'>
                                    Juego 2
                                </SplideSlide>

                                <SplideSlide className='container d-flex justify-content-center'>
                                    Juego 3
                                </SplideSlide>

                                <SplideSlide className='container d-flex justify-content-center'>
                                    Juego 4
                                </SplideSlide>     */}
                            </Splide>
                            </div>
                                {/* JUEGOS / ACTIVIDADES (MATEMÁTICA) */}
                            {/* <div className="col-10 col-md-5 card mb-5 py-4">
                                <h4 className="text-center mb-5">Matemática</h4>

                                <Splide className="container-fluid" options={{ 
                                type: "loop",
                                perPage: 3,
                                focus: "center",
                                gap: "1px",
                                pagination: false
                                }} aria-label="My Favorite Images">
                                <SplideSlide className='container d-flex justify-content-center'>
                                    Números
                                </SplideSlide>

                                <SplideSlide className='container d-flex justify-content-center'>
                                    Juego 2
                                </SplideSlide>

                                <SplideSlide className='container d-flex justify-content-center'>
                                    Juego 3
                                </SplideSlide>

                                <SplideSlide className='container d-flex justify-content-center'>
                                    Juego 4
                                </SplideSlide>    
                            </Splide>
                            </div>
                        </div>
                        

                        {/* JUEGOS / ACTIVIDADES (MÚSICA) */}
                        {/* <div className="row justify-content-evenly" style={{ height: "40vh" }}>
                            <div className="col-10 col-md-5 card mb-5 py-4">
                                <h4 className="text-center mb-5">Música</h4>

                                <Splide className="container-fluid" options={{ 
                                type: "loop",
                                perPage: 2,
                                focus: "center",
                                gap: "1px",
                                pagination: false
                                }} aria-label="My Favorite Images">
                                <SplideSlide className="container d-flex justify-content-center">
                                    <Link to="/piano">
                                    <div className="d-flex flex-column justify-content-center align-items-center">
                                        <img src={ Piano } alt="" width="70px" className="mb-3" />
                                        <p className="text-center">Piano</p>
                                    </div>
                                    </Link>
                                </SplideSlide>

                                {/* <SplideSlide className='container d-flex justify-content-center'>
                                    Juego 2
                                </SplideSlide>

                                <SplideSlide className='container d-flex justify-content-center'>
                                    Juego 3
                                </SplideSlide>

                                <SplideSlide className='container d-flex justify-content-center'>
                                    Juego 4
                                </SplideSlide>     
                            </Splide>
                            </div>*/}
                        {/* JUEGOS / ACTIVIDADES (MÚSICA) */}
                            {/* <div className="col-10 col-md-5 card mb-5 py-4">
                                <h4 className="text-center mb-5">Dibujo</h4>

                                <Splide className="container-fluid" options={{ 
                                type: "loop",
                                perPage: 3,
                                focus: "center",
                                gap: "1px",
                                pagination: false
                                }} aria-label="My Favorite Images">
                                <SplideSlide className='container d-flex justify-content-center'>
                                    <Link to="#">Dibujar</Link>
                                </SplideSlide>

                                <SplideSlide className='container d-flex justify-content-center'>
                                    <Link to="#">Juego 2</Link>
                                </SplideSlide>

                                <SplideSlide className='container d-flex justify-content-center'>
                                    <Link to="#">Juego 3</Link>
                                </SplideSlide>

                                <SplideSlide className='container d-flex justify-content-center'>
                                    <Link to="#">Juego 4</Link>
                                </SplideSlide>    
                            </Splide>
                            </div> */}
                        </div>
                </div>

        </section>
    )
}

export default Juegos;