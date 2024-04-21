import Pintor from "./img/pintor.jpeg";
import Estrella from "./img/estrella.png";
import Paleta from "./img/paleta-de-color.png";
import Lapiz from "./img/lapiz.png";
import Nube from "./img/nube.png";

const CuentoSimon = () => {
    return (
        <>
        {/* CUENTO */}
            <section className="container py-4">
                <div className="row justify-content-evenly mt-5 pt-5">
                    <div className="col-10 col-md-4 text-center">
                        <img src={ Pintor } alt="Imagen de un niño pintor" className="rounded-5 mb-5 shadow-sm img-fluid" />
                    </div>
                    <div className="col-10 col-md-6">
                            <div className="">
                        <h1 className="mb-4 fs-2">Simon, un pequeño gran artista</h1>
                                <p>Había una vez en un pequeño pueblo de Francia, un niño llamado Simon, conocido por todos por su gran pasión: la pintura. Con su gran creatividad y su pincel en mano, Simon creaba mundos de colores que dejaban a todos maravillados.</p>
                                <p>Un día, se anunció una gran competencia de pintura en el pueblo. Los mejores artistas de todas partes llegarían con años de experiencia y obras magníficas. Simon, con solo diez años, era el participante más joven.</p>
                                <p>“Son demasiado buenos, y yo solo soy un niño sin experiencia”, pensaba Simon, mirando su lienzo en blanco. Pero sus padres, viendo su tristeza, se acercaron y le dijeron: “Simon, no importa la edad o la experiencia. Dios te ha dado un talento único que puede tocar el corazón de las personas. No tenés que ganar para ser especial; ya lo sos porque Dios te creó con gran amor y con un gran propósito.”</p>
                            </div>
                            <div className="">
                                <p>Inspirado por las palabras de sus padres, Simon tomó su pincel con nueva determinación. Pintó como nunca antes, con cada trazo lleno de la alegría y la esperanza que sentía en su corazón.</p>
                                <p>El día de la competencia llegó, y los pintores presentaron sus obras. Había paisajes realistas, retratos detallados y escenas que parecían cobrar vida. Cuando llegó el turno de Simon, todos se quedaron en silencio. Su pintura era diferente: un paisaje sencillo pero lleno de vida, con colores que bailaban en el lienzo y transmitían una felicidad pura.</p>
                                <p>Los jueces quedaron impresionados. “Esta obra nos recuerda la belleza de ver el mundo a través de los ojos de un niño,” dijeron. Y así, contra todo pronóstico, Simon ganó el premio mayor.</p>
                            </div>
                            <div className="">
                                <p>
                                Cuando Simon subió al escenario para recibir su premio, les dijo a todos: “Al principio, pensaba que no tenía oportunidad, pero aprendí algo importante: todos somos especiales y únicos. Cada uno de nosotros tiene algo maravilloso que ofrecer al mundo”.
                                </p>
                                <p>Con esas palabras, Simon no solo se llevó el premio a casa, sino que también dejó una lección valiosa en el corazón de cada persona que lo escuchó. Y desde ese día, todos en el pueblo empezaron a ver sus propias habilidades con nuevos ojos, apreciando la singularidad que Dios había puesto en ellos.</p>
                            </div>
                        </div>
                    
                        
                </div>
            </section>

            {/* ACTIVIDADES */}
            <section className="container py-3 px-4">
                <hr className="my-5" />
                <div className="mb-4">
                    <h2 className="text-center">Actividades <img
                        src={ Lapiz }
                        alt="ícono de lápiz"
                        style={{ width: "35px", transform: "rotate(-20deg)" }}
                    /></h2>
                    <p className="text-center">A partir del cuento que leíste, copiá y respondé en tu cuaderno, las siguientes preguntas:</p>
                    <div className="d-flex align-items-center">
                        
                    <div>
                        <ol>
                            <li>¿Cuál es la pasión de Simon?</li>
                            <li>¿Por qué motivo Simon se sentía triste?</li>
                            <li>¿Qué consejo le dieron sus padres cuando vieron triste a Simon?</li>
                            <li>¿Qué dijeron los jueces al ver la obra de pintura creada por Simon?</li>
                        </ol>
                    </div>
                </div>

                {/* DIBUJO */}
                <div className="">
                    <hr className="my-5" />
                    <h3 className="mb-0 text-center">¡Hora de dibujar! <img
                        src={ Paleta }
                        alt="ícono de paleta de color"
                        style={{ width: "35px", transform: "rotate(-20deg)" }}
                    /></h3> 
                    
                    </div>
                </div>
                <div>
                    <p className="mb-2">Ahora es tu momento de demostrar el gran artista que sos. Por eso, dibujá la obra que hubieras presentado en el concurso de pintura.</p>
                    <div className="d-flex justify-content-start align-items-start align-items-md-center"><img
                        src={ Estrella }
                        alt="ícono de estrellita"
                        style={{ width: "20px" }}
                        className="me-2"
                    /> <p className="mb-0" >Podés usar lápices de colores y papel o pinceles y acuarelas.</p></div>

                </div>

                <hr className="my-5" />
                
                {/* REFLEXIÓN */}
                <div className="mb-4">
                    <h3 className="text-center">Para reflexionar.. <img
                        src={ Nube }
                        alt="ícono de nube"
                        style={{ width: "35px", transform: "rotate(5deg)" }}
                    /></h3>
                    <p className="text-center">Basándote en la historia de Simon, tomá un momento para pensar y respondé estas preguntas en tu cuaderno:</p>
                    <div className="d-flex align-items-center">
                        
                    <div>
                        <ul>
                            <li>¿Cuál es tu mayor pasión?</li>
                            <li>¿Alguna vez te sentiste triste como Simon? Si tu respuesta es “Sí”, ¿qué hiciste para superarlo?</li>
                            <li>¿Qué consejo le darías a un amigo que se siente triste por no creer en su propio talento?</li>
                            <li>Habla con tus papás y amigos sobre lo increíble que es saber que Dios nos hizo a todos con un propósito especial. Él nos dio habilidades súper especiales para hacer cosas geniales en el mundo. ¿Sabes cuál es tu habilidad especial?</li>
                        </ul>
                    </div>
                </div>
                </div>

            </section>
        </>
    )
}

export default CuentoSimon;