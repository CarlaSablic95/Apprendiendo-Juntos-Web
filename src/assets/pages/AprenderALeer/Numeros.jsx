import { useState } from "react";
// IMAGENES
import Cero from "./img/numeros/cero.png";
import Uno from "./img/numeros/uno.png";
import Dos from "./img/numeros/dos.png";
import Tres from "./img/numeros/tres.png";
import Cuatro from "./img/numeros/cuatro.png";
import Cinco from "./img/numeros/cinco.png";
import Seis from "./img/numeros/seis.png";
import Siete from "./img/numeros/siete.png";
import Ocho from "./img/numeros/ocho.png";
import Nueve from "./img/numeros/nueve.png";

// AUDIO
// import SonidoCero from "./audio/numeros/cero.mp3";
// import SonidoUno from "./audio/numeros/uno.mp3";
// import SonidoDos from "./audio/numeros/dos.mp3";
// import SonidoTres from "./audio/numeros/tres.mp3";
// import SonidoCuatro from "./audio/numeros/cuatro.mp3";
// import SonidoCinco from "./audio/numeros/cinco.mp3";
// import SonidoSeis from "./audio/numeros/seis.mp3";
// import SonidoSiete from "./audio/numeros/siete.mp3";
// import SonidoOcho from "./audio/numeros/ocho.mp3";
// import SonidoNueve from "./audio/numeros/nueve.mp3";

const Numeros = () => {
    const arrayNumeros = [
        {
            nombre: Cero,
            // audio: SonidoCero,
        },
        {
            nombre: Uno,
            // audio: SonidoUno,
        },
        {
            nombre: Dos,
            // audio: SonidoDos,
        },
        {
            nombre: Tres,
            // audio: SonidoTres,
        },
        {
            nombre: Cuatro,
            // audio: SonidoCuatro,
        },
        {
            nombre: Cinco,
            // audio: SonidoCinco,
        },
        {
            nombre: Seis,
            // audio: SonidoSeis,
        },
        {
            nombre: Siete,
            // audio: SonidoSiete,
        },
        {
            nombre: Ocho,
            // audio: SonidoOcho,
        },
        {
            nombre: Nueve,
            // audio: SonidoNueve,
        },
];
    const [ escuchar, setEscuchar ] = useState(false);


    const EscucharNumero = async (audio) => {
        const vocal = new Audio(audio);
        try {
            await vocal.play();
            console.log("Audio reproduciéndose correctamente");
        } catch (error) {
            console.error("Error al reproducir el audio: ", error )
        }
    }

    return(
            <div className="col-10 col-md-6 py-3 mb-4">
            <h2>Números</h2>
            <p>Presioná cada número para escuchar su sonido:</p>
                { arrayNumeros.map((numero, index) => (
                    <button  key={ index } className="btn btn-light rounded-circle border-dark p-0 mx-2 mb-3"  onClick={ () => EscucharNumero(numero.audio) }>
                        <img src={ numero.nombre } alt={`Vocal ${numero.nombre}`} style={{ width: "50px" }} />
                </button>))
                }
            </div>
    )
}

export default Numeros;