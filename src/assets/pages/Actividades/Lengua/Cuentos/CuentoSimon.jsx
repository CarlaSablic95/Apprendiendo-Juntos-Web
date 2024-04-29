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
                <div className="mt-5 pt-5">
                        <div className="text-center mb-5">
                                <h1 className="mb-4 fs-2 text-center">Simon, un pequeño gran artista</h1>
                            <img src={ Pintor } alt="Imagen de un niño pintor" className="rounded-4 shadow-sm" style={{ width: "450px" }}  />
                        </div>
                            <div className="container text-center text-md-start">
                                <p style={{ fontSize:"1.1rem" }}>Había una vez en un pequeño pueblo de Argentina, un niño llamado Simón, conocido por todos por su gran pasión: la pintura. Con su gran creatividad y su pincel en mano, Simón creaba mundos de colores que dejaban a todos maravillados.</p>
                                <p style={{ fontSize:"1.1rem" }}>Un día, se anunció una gran competencia de pintura en el pueblo. Los mejores artistas de todas partes llegarían con años de experiencia y obras magníficas. Simón, con solo diez años, era el participante más joven.</p>
                                <p style={{ fontSize:"1.1rem" }}>“Son demasiado buenos, y yo solo soy un niño sin experiencia”, pensaba Simón, mirando su lienzo en blanco. Pero sus padres, viendo su tristeza, se acercaron y le dijeron: “Simón, no importa la edad o la experiencia. Dios te ha dado un talento único que puede tocar el corazón de las personas. No tenés que ganar para ser especial; ya lo sos porque Dios te creó con gran amor y con un gran propósito.”</p>
                            
                                <p style={{ fontSize:"1.1rem" }}>Inspirado por las palabras de sus padres, Simón tomó su pincel con nueva determinación. Pintó como nunca antes, con cada trazo lleno de la alegría y la esperanza que sentía en su corazón.</p>
                                <p style={{ fontSize:"1.1rem" }}>El día de la competencia llegó, y los pintores presentaron sus obras. Había paisajes realistas, retratos detallados y escenas que parecían cobrar vida. Cuando llegó el turno de Simón, todos se quedaron en silencio. Su pintura era diferente: un paisaje sencillo pero lleno de vida, con colores que bailaban en el lienzo y transmitían una felicidad pura.</p>
                                <p style={{ fontSize:"1.1rem" }}>Los jueces quedaron impresionados. “Esta obra nos recuerda la belleza de ver el mundo a través de los ojos de un niño,” dijeron. Y así, contra todo pronóstico, Simón ganó el premio mayor.</p>
                            
                                <p style={{ fontSize:"1.1rem" }}>
                                Cuando Simón subió al escenario para recibir su premio, les dijo a todos: “Al principio, pensaba que no tenía oportunidad por ser el más pequeño e inexperto de la competencia, pero gracias a mis papás, aprendí algo importante: todos somos especiales y únicos. Cada uno de nosotros tiene algo maravilloso que ofrecer al mundo”.
                                </p>
                                <p style={{ fontSize:"1.1rem" }}>Con esas palabras, Simón no solo se llevó el premio a casa, sino que también dejó una lección valiosa en el corazón de cada persona que lo escuchó. Y desde ese día, todos en el pueblo empezaron a ver sus propias habilidades con nuevos ojos, apreciando la singularidad que Dios había puesto en ellos.</p>
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
                    <p>A partir del cuento que leíste, copiá y respondé en tu cuaderno, las siguientes preguntas:</p>
                    <div className="d-flex align-items-center">
                        
                    <div>
                        <ol className="ps-3">
                            <li style={{ fontSize:"1.1rem" }}>¿Cuál es la pasión de Simon?</li>
                            <li style={{ fontSize:"1.1rem" }}>¿Por qué motivo Simon se sentía triste?</li>
                            <li style={{ fontSize:"1.1rem" }}>¿Qué consejo le dieron sus padres cuando vieron triste a Simon?</li>
                            <li style={{ fontSize:"1.1rem" }}>¿Qué dijeron los jueces al ver la obra de pintura creada por Simon?</li>
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
                    <h3 className="text-center">Para reflexionar... <img
                        src={ Nube }
                        alt="ícono de nube"
                        style={{ width: "35px", transform: "rotate(5deg)" }}
                    /></h3>
                    <p>Basándote en la historia de Simon, tomá un momento para pensar y respondé estas preguntas en tu cuaderno:</p>
                    <div className="d-flex align-items-center">
                        
                    <div>
                        <ul className="ps-3">
                            <li style={{ fontSize:"1.1rem" }}>¿Cuál es tu mayor pasión?</li>
                            <li style={{ fontSize:"1.1rem" }}>¿Alguna vez te sentiste triste como Simon? Si tu respuesta es “Sí”, ¿qué hiciste para superarlo?</li>
                            <li style={{ fontSize:"1.1rem" }}>¿Qué consejo le darías a un amigo que se siente triste por no creer en su propio talento?</li>
                            <li style={{ fontSize:"1.1rem" }}>Habla con tus papás y amigos sobre lo increíble que es saber que Dios nos hizo a todos con un propósito especial. Él nos dio habilidades súper especiales para hacer cosas geniales en el mundo. ¿Sabes cuál es tu habilidad especial?</li>
                        </ul>
                    </div>
                </div>
                </div>

            </section>
        </>
    )
}

export default CuentoSimon;