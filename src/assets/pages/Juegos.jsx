import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';

const Juegos = () => {
    return (
        <section className="container py-5">
            <div className="row justify-content-center py-5">
                    <h2 className="text-center my-4">Materias</h2>
                       
                        {/* JUEGOS / ACTIVIDADES (LENGUA) */}
                        <div className="row justify-content-evenly" style={{ height: "40vh" }}>
                            <div className="col-10 col-md-5 card mb-5 py-4">
                                <h4 className="text-center">Lengua</h4>

                                <Splide className="container-fluid" options={{ 
                                type: "loop",
                                perPage: 3,
                                focus: "center",
                                gap: "1px",
                                pagination: true
                                }} aria-label="My Favorite Images">
                                <SplideSlide className='container d-flex justify-content-center'>
                                    <Link to="/abecedario">Abecedario</Link>
                                </SplideSlide>

                                <SplideSlide className='container d-flex justify-content-center'>
                                    <Link to="/vocales">Vocales</Link>
                                </SplideSlide>

                                <SplideSlide className='container d-flex justify-content-center'>
                                    <Link to="/consonantes">Consonantes</Link>
                                </SplideSlide>

                                <SplideSlide className='container d-flex justify-content-center'>
                                    <Link to="/cuentos">Cuentos</Link>
                                </SplideSlide>    
                            </Splide>
                            </div>

                                {/* JUEGOS / ACTIVIDADES (MATEMÁTICA) */}
                            <div className="col-10 col-md-5 card mb-5 py-4">
                                <h4 className="text-center">Matemática</h4>

                                <Splide className="container-fluid" options={{ 
                                type: "loop",
                                perPage: 3,
                                focus: "center",
                                gap: "1px",
                                pagination: true
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
                        <div className="row justify-content-evenly" style={{ height: "40vh" }}>
                            <div className="col-10 col-md-5 card mb-5 py-4">
                                <h4 className="text-center">Música</h4>

                                <Splide className="container-fluid" options={{ 
                                type: "loop",
                                perPage: 3,
                                focus: "center",
                                gap: "1px",
                                pagination: true
                                }} aria-label="My Favorite Images">
                                <SplideSlide className='container d-flex justify-content-center'>
                                    <Link to="/piano">Piano</Link>
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
                            </div>
                        {/* JUEGOS / ACTIVIDADES (MÚSICA) */}
                            <div className="col-10 col-md-5 card mb-5 py-4">
                                <h4 className="text-center">Dibujo</h4>

                                <Splide className="container-fluid" options={{ 
                                type: "loop",
                                perPage: 3,
                                focus: "center",
                                gap: "1px",
                                pagination: true
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
                            </div>
                        </div>
                </div>

        </section>
    )
}

export default Juegos;