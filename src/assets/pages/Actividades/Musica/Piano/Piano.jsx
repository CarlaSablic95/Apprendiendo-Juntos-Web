import { useState } from "react";
// AUDIO NOTAS DE PIANO
import SonidoDo from "../audio/do.mp3";
import SonidoRe from "../audio/re.mp3";
import SonidoMi from "../audio/mi.mp3";
import SonidoFa from "../audio/fa.mp3";
import SonidoSol from "../audio/sol.mp3";
import SonidoLa from "../audio/la.mp3";
import SonidoSi from "../audio/si.mp3";
import SonidoDoOctava from "../audio/do-octava.mp3";

const Piano = () => {
  const arrayTeclasPiano = [
    {
      nombre: "DO",
      audio: SonidoDo,
      backgroundColor: "#fefefe",
      width: "100px",
      height: "250px",
      borderRadius: "2rem"
    },

    {
      nombre: "DO# / REb",
      audio: SonidoDo,
      backgroundColor: "#3c3c3c",
      color: "#fefefe",
      width: "45px",
      height: "150px",
      position: "absolute",
      left: "123px",
    },

    {
      nombre: "RE",
      audio: SonidoRe,
      backgroundColor: "#fefefe",
      width: "100px",
      height: "250px",
      borderRadius: "2rem"
    },

    {
      nombre: "RE# / MIb",
      audio: SonidoDo,
      backgroundColor: "#3c3c3c",
      color: "#fefefe",
      width: "45px",
      height: "150px",
      position: "absolute",
      left: "229px",
    },

    {
      nombre: "MI",
      audio: SonidoMi,
      backgroundColor: "#fefefe",
      width: "100px",
      height: "250px",
      borderRadius: "2rem"
    },

    {
      nombre: "FA",
      audio: SonidoFa,
      backgroundColor: "#fefefe",
      width: "100px",
      height: "250px",
      borderRadius: "2rem"
    },

    {
      nombre: "FA# / SOLb",
      audio: SonidoDo,
      backgroundColor: "#3c3c3c",
      color: "#fefefe",
      width: "45px",
      height: "150px",
      position: "absolute",
      left: "424px",
    },

    {
      nombre: "SOL",
      audio: SonidoSol,
      backgroundColor: "#fefefe",
      width: "100px",
      height: "250px",
      borderRadius: "2rem"
    },

    {
      nombre: "SOL# / LAb",
      audio: SonidoDo,
      backgroundColor: "#3c3c3c",
      color: "#fefefe",
      width: "45px",
      height: "150px",
      position: "absolute",
      left: "526px",
    },
    
    {
      nombre: "LA",
      audio: SonidoLa,
      backgroundColor: "#fefefe",
      width: "100px",
      height: "250px",
      borderRadius: "2rem"
    },

    {
      nombre: "LA# / SIb",
      audio: SonidoDo,
      backgroundColor: "#3c3c3c",
      color: "#fefefe",
      width: "45px",
      height: "150px",
      position: "absolute",
      left: "625px",
    },


    {
      nombre: "SI",
      audio: SonidoSi,
      backgroundColor: "#fefefe",
      width: "100px",
      height: "250px",
      left: "578px",
      borderRadius: "2rem"
    },

    {
      nombre: "DO",
      audio: SonidoDoOctava,
      backgroundColor: "#fefefe",
      width: "100px",
      height: "250px",
      borderRadius: "2rem"
    },

    {
      nombre: "DO# / REb",
      audio: SonidoDo,
      backgroundColor: "#3c3c3c",
      color: "#fefefe",
      width: "45px",
      height: "150px",
      position: "absolute",
      left: "823px",
    },
  ];

  const [ teclaPresionada, setTeclaPresionada ] = useState(null);

  const escucharTecla = async (audio) => {
    const tecla = new Audio(audio);
    try {
      await tecla.play();
      console.log("Audio reproduciéndose correctamente");
    } catch (error) {
      console.error("Error al reproducir el audio: ", error);
    }
  };

  return (
    <section className="container py-5 vh-100 d-flex justify-content-center align-items-center">
          <div className="position-relative piano-container">
            <div className="piano">
            </div>
          <div className="d-flex flex-wrap p-5 rounded-5">
            {arrayTeclasPiano.map((tecla, index) => (
              <button
                key={index}
                style={{
                  width: tecla.width,
                  height: tecla.height,
                  backgroundColor: tecla.backgroundColor,
                  color: tecla.color,
                  position: tecla.position,
                  left: tecla.left,
                  borderRadius: tecla.borderRadius,
                  boxShadow: teclaPresionada === index ? "inset 0px 0px 10px #000000" : "none"
                }}
                className="btn text-center border-0 d-flex justify-content-center align-items-end"
                onMouseDown={() => {
                  setTeclaPresionada(index);
                  escucharTecla(tecla.audio)

                }}
                onMouseUp = { () => setTeclaPresionada(null)}
                onMouseLeave = { () => setTeclaPresionada(null)}

              >
                {tecla.nombre}
              </button>
          ))} 
        </div>
          </div>
    </section>
  );
};

export default Piano;
