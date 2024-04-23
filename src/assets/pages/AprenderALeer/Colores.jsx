import { useState } from "react";
// IMAGENES
import Rojo from "./img/colores/rojo.png";
import Naranja from "./img/colores/naranja.png";
import Amarillo from "./img/colores/amarillo.png";
import Verde from "./img/colores/verde.png";
import Azul from "./img/colores/azul.png";
import Violeta from "./img/colores/violeta.png";
import Rosa from "./img/colores/rosa.png";
import Celeste from "./img/colores/celeste.png";
import Marron from "./img/colores/marron.png";
import Negro from "./img/colores/negro.png";
import Blanco from "./img/colores/blanco.png";

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

const Colores = () => {
// Cree un array para simplificar el renderizado de los nombres y sonidos de los colores, ya que son muchos, y puede sobrecargar la pagina por renderizar muchos botones e imagenes.
    const arrayColores = [
        {
            nombre: Rojo,
            // audio: SonidoRojo,
        },
        {
            nombre: Naranja,
            // audio: SonidoNaranja,
        },
        {
            nombre: Amarillo,
            // audio: SonidoAmarillo,
        },
        {
            nombre: Verde,
            // audio: SonidoVerde,
        },
        {
            nombre: Azul,
            // audio: SonidoAzul,
        },
        {
            nombre: Violeta,
            // audio: SonidoVioleta,
        },
        {
            nombre: Rosa,
            // audio: SonidoRosa,
        },
        {
            nombre: Celeste,
            // audio: SonidoCeleste,
        },
        {
            nombre: Marron,
            // audio: SonidoMarron,
        },
        {
            nombre: Negro,
            // audio: SonidoNegro,
        },
        {
            nombre: Blanco,
            // audio: SonidoBlanco,
        },
];
    const [ escuchar, setEscuchar ] = useState(false);


    const EscucharColor = async (audio) => {
        const vocal = new Audio(audio);
        try {
            await vocal.play();
            console.log("Audio reproduciéndose correctamente");
        } catch (error) {
            console.error("Error al reproducir el audio: ", error )
        }
    }

    return(
            <div className="col-10 col-md-5 py-3 mb-4">
            <h2>Colores</h2>
            <p>Presioná cada color para escuchar su sonido:</p>
                { arrayColores.map((color, index) => (
                    <button  key={ index } className="btn btn-light rounded-circle border-dark border-2 p-0 mx-2 mb-3"  onClick={ () => EscucharNumero(numero.audio) }>
                        <img src={ color.nombre } alt={`Vocal ${color.nombre}`} style={{ width: "50px" }} />
                </button>))
}
    
            </div>
    )
}

export default Colores;