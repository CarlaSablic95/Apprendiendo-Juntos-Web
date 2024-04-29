// IMAGENES
import VocalA from "../Vocales/img/vocal-a.png";
import VocalE from "../Vocales/img/vocal-e.png";
import VocalI from "../Vocales/img/vocal-i.png";
import VocalO from "../Vocales/img/vocal-o.png";
import VocalU from "../Vocales/img/vocal-u.png";

// AUDIO
import SonidoA from "./audio/vocales/vocal-a.mp3";
import SonidoE from "./audio/vocales/vocal-e.mp3";
import SonidoI from "./audio/vocales/vocal-i.mp3";
import SonidoO from "./audio/vocales/vocal-o.mp3";
import SonidoU from "./audio/vocales/vocal-u.mp3";

const Vocales = () => {
    const arrayVocales = [
        {
            nombre: VocalA,
            audio: SonidoA,
        },
        {
            nombre: VocalE,
            audio: SonidoE,
        },
        {
            nombre: VocalI,
            audio: SonidoI,
        },
        {   nombre: VocalO,
            audio: SonidoO,
        },
        {
            nombre: VocalU,
            audio: SonidoU,
        }
];

    const escucharVocal = async (audio) => {
        const vocal = new Audio(audio);
        try {
            await vocal.play();
            console.log("Audio reproduciéndose correctamente");
        } catch (error) {
            console.error("Error al reproducir el audio: ", error )
        }
    }

    return(
            <section className="container py-5 mb-4">
                <div className="py-5">
                    {/* Explicación: */}
                    <h2 className="text-center mb-4">Las vocales:</h2>
                    <h3 className="text-center mb-4">¿Qué son las vocales?</h3>
                    <p>Las vocales son 5 letras que forman parte del abecedario, y son las siguientes: “<strong>a</strong>, <strong>e</strong>, <strong>i</strong>, <strong>o</strong>, <strong>u</strong>”. Sin ellas sería imposible formar palabras, ya que serían palabras sin sentido.</p>
                    <p><strong>Ejemplo:</strong></p> 
                    <p> ✅ Palabras <strong>con</strong> vocales: C<strong>a</strong>s<strong>a</strong> / S<strong>o</strong>l / P<strong>e</strong>l<strong>o</strong>t<strong>a</strong> / <strong>I</strong>sl<strong>a</strong> / <strong>E</strong>sp<strong>e</strong>j<strong>o</strong> / <strong>U</strong>v<strong>a</strong></p>
                    <p> ❌ Palabras <strong>sin</strong> vocales: C_s_ / S_l / P_l_t_ / _sl_ / _sp_j_ / _v_</p>

                    <div className="row">
                    {/* Vocales en minúsculas: */}
                            <h3 className="text-center mb-4">¿Cómo se escriben?:</h3>
                        <div className="col-10 col-md-6">
                            <h4 className="text-center">Vocales en minúsculas:</h4>
                            <p><strong>a</strong> - <strong>e</strong> - <strong>i</strong> - <strong>o</strong> - <strong>u</strong></p>
                        </div>
                            {/* Vocales en mayúsculas: */}
                        <div className="col-10 col-md-6">
                            <h4 className="text-center">Vocales en mayúsculas:</h4>
                            <p><strong>A</strong> - <strong>E</strong> - <strong>I</strong> - <strong>O</strong> - <strong>U</strong></p>
                        </div>
                    </div>
                </div>
                    {/* ¿CÓMO SUENAN LAS VOCALES? */}
                <div>
                  <h3 className="text-center mb-4">¿Cómo suenan las vocales?</h3>
                  <p>Sin importar si se escriben en minúscula o mayúsculas, suenan igual.</p>
                    <p>Presioná cada vocal para escuchar su sonido:</p>
            
                { arrayVocales.map((vocal, index) => (
                    <button key={ index } className="btn btn-light rounded-circle border-dark p-0 mx-2"  onClick={ () => escucharVocal(vocal.audio) }>
                        <img src={ vocal.nombre } alt={`Vocal ${vocal.nombre}`} style={{ width: "50px" }} />
                </button>))
                }
                </div>
            </section>
    )
}

export default Vocales;