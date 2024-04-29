// IMAGENES
import B from "./img/b.png";
import C from "./img/c.png";
import D from "./img/d.png";
import F from "./img/f.png";
import G from "./img/g.png";
import H from "./img/h.png";
import J from "./img/j.png";
import K from "./img/k.png";
import L from "./img/l.png";
import M from "./img/m.png";
import N from "./img/n.png";
import Ñ from "./img/ñ.png";
import P from "./img/p.png";
import Q from "./img/q.png";
import R from "./img/r.png";
import S from "./img/s.png";
import T from "./img/t.png";
import V from "./img/v.png";
import W from "./img/w.png";
import X from "./img/x.png";
import Y from "./img/y.png";
import Z from "./img/z.png";

// AUDIO
import SonidoB from "./audio/consonantes/b.mp3";
import SonidoC from "./audio/consonantes/c.mp3";
import SonidoD from "./audio/consonantes/d.mp3";
import SonidoF from "./audio/consonantes/f.mp3";
import SonidoG from "./audio/consonantes/g.mp3";
import SonidoH from "./audio/consonantes/h.mp3";
import SonidoJ from "./audio/consonantes/j.mp3";
import SonidoK from "./audio/consonantes/k.mp3";
import SonidoL from "./audio/consonantes/l.mp3";
import SonidoM from "./audio/consonantes/m.mp3";
import SonidoN from "./audio/consonantes/n.mp3";
import SonidoÑ from "./audio/consonantes/ñ.mp3";
import SonidoP from "./audio/consonantes/p.mp3";
import SonidoQ from "./audio/consonantes/q.mp3";
import SonidoR from "./audio/consonantes/r.mp3";
import SonidoS from "./audio/consonantes/s.mp3";
import SonidoT from "./audio/consonantes/t.mp3";
import SonidoV from "./audio/consonantes/v.mp3";
import SonidoW from "./audio/consonantes/w.mp3";
import SonidoX from "./audio/consonantes/x.mp3";
import SonidoY from "./audio/consonantes/y.mp3";
import SonidoZ from "./audio/consonantes/z.mp3";


const Consonantes = () => {
  const arrayConsonantes = [
    {
      nombre: B,
      audio: SonidoB
    },
    {
      nombre: C,
      audio: SonidoC
    },
    {
      nombre: D,
      audio: SonidoD
    },
    {
      nombre: F,
      audio: SonidoF
    },
    {
      nombre: G,
      audio: SonidoG
    },
    {
      nombre: H,
      audio: SonidoH
    },
    {
      nombre: J,
      audio: SonidoJ
    },
    {
      nombre: K,
      audio: SonidoK
    },
    {
      nombre: L,
      audio: SonidoL
    },
    {
      nombre: M,
      audio: SonidoM
    },
    {
      nombre: N,
      audio: SonidoN
    },
    {
      nombre: Ñ,
      audio: SonidoÑ
    },
    {
      nombre: P,
      audio: SonidoP
    },
    {
      nombre: Q,
      audio: SonidoQ
    },
    {
      nombre: R,
      audio: SonidoR
    },
    {
      nombre: S,
      audio: SonidoS
    },
    {
      nombre: T,
      audio: SonidoT
    },
    {
      nombre: V,
      audio: SonidoV
    },
    {
      nombre: W,
      audio: SonidoW
    },
    {
      nombre: X,
      audio: SonidoX
    },
    {
      nombre: Y,
      audio: SonidoY
    },
    {
      nombre: Z,
      audio: SonidoZ
    },
  ];

  const EscucharConsonante = async (audio) => {
    const consonante = new Audio(audio);
    try {
      await consonante.play();
      console.log("Audio reproduciéndose correctamente");
    } catch (error) {
      console.error("Error al reproducir el audio: ", error);
    }
  }

  return (
    <section className="container py-5 mb-4">
      <div>
        <h2>Consonantes</h2>
        <p>Presioná cada consonante para escuchar su sonido:</p>
      </div>

      { arrayConsonantes.map((consonante, index) => (
        <button
          key={ index }
          className="btn btn-light rounded-circle border-dark p-0 mx-3 mb-2"
          onClick={ ()=> EscucharConsonante(consonante.audio)}
        >
          <img
            src={ consonante.nombre }
            alt={`Consonante ${consonante.nombre}`}
            style={{ width: "50px" }}
          />
        </button>
      )) }
    </section>

  );
};

export default Consonantes;
