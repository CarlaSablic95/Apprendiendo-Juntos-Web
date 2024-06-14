import { useState } from "react";
// AUDIO NOTAS DE PIANO
import SonidoDo from "../audio/piano/do.mp3";
import SonidoRe from "../audio/piano/re.mp3";
import SonidoMi from "../audio/piano/mi.mp3";
import SonidoFa from "../audio/piano/fa.mp3";
import SonidoSol from "../audio/piano/sol.mp3";
import SonidoLa from "../audio/piano/la.mp3";
import SonidoSi from "../audio/piano/si.mp3";
import SonidoDoOctava from "../audio/piano/do-octava.mp3";

import DoSostenido from "../audio/piano/do-sostenido.mp3";
import ReSostenido from "../audio/piano/re-sostenido.mp3";
import FaSostenido from "../audio/piano/fa-sostenido.mp3";
import SolSostenido from "../audio/piano/sol-sostenido.mp3";
import LaSostenido from "../audio/piano/la-sostenido.mp3";
import DoSostenidoOctava from "../audio/piano/do-sostenido-octava.mp3";



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
      nombre: "DO# REb",
      audio: DoSostenido,
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
      nombre: "RE# MIb",
      audio: ReSostenido,
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
      nombre: "FA# SOLb",
      audio: FaSostenido,
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
      nombre: "SOL# LAb",
      audio: SolSostenido,
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
      nombre: "LA# SIb",
      audio: LaSostenido,
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
      nombre: "DO# REb",
      audio: DoSostenidoOctava,
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
    <main>
      <h1 className="text-center">A tocar</h1>
<section className="container py-5 d-flex justify-content-center align-items-center" style={{  minHeight: "75vh" }}>
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
                  boxShadow: teclaPresionada === index ? "inset 0px 0px 10px #3c3c3c70" : "0px 19px 10px -6px rgba(0,0,0,0.1)"
                }}
                className="btn text-center border- d-flex justify-content-center align-items-end"

                onTouchStart={() => {
                  setTeclaPresionada(index);
                  escucharTecla(tecla.audio)
                }}

                onTouchEnd={() => { () => setTeclaPresionada(null)}}

                onMouseDown={() => {
                  setTeclaPresionada(index);
                  escucharTecla(tecla.audio)

                }}
                onMouseUp = { () => setTeclaPresionada(null)}
                onMouseLeave = { () => setTeclaPresionada(null)}

              >
                {/* <span className="bg-warning rounded-circle px-2 py-2" style={{ fontSize: "15px" }}>{tecla.nombre}</span> */}
                {tecla.nombre}
              </button>
          ))} 
        </div>
          </div>
    </section>
    </main>
    
  );
};

export default Piano;
