import { useState } from "react";
// IMAGENES
import VocalA from "./img/vocales/vocal-a.png";
import VocalE from "./img/vocales/vocal-e.png";
import VocalI from "./img/vocales/vocal-i.png";
import VocalO from "./img/vocales/vocal-o.png";
import VocalU from "./img/vocales/vocal-u.png";

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
    const [ escuchar, setEscuchar ] = useState(false);


    const EscucharVocal = async (audio) => {
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
            <h2>Vocales</h2>
            <p>Presioná cada vocal para escuchar su sonido:</p>
                { arrayVocales.map((vocal, index) => (
                    <button  key={ index } className="btn btn-light rounded-circle border-dark p-0 mx-2"  onClick={ () => EscucharVocal(vocal.audio) }>
                        <img src={ vocal.nombre } alt={`Vocal ${vocal.nombre}`} style={{ width: "50px" }} />
                </button>))
}
    
            </div>
    )
}

export default Vocales;