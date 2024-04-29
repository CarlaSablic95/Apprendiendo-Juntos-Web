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
      backgroundColor: "#e54a4a",
      width: "100px",
      height: "250px",
      // borderRadius: "5rem"
    },

    {
      nombre: "DO# / REb",
      audio: SonidoDo,
      backgroundColor: "black",
      width: "25px",
      height: "150px",
      position: "absolute",
      left: "58px",
    },

    {
      nombre: "RE",
      audio: SonidoRe,
      backgroundColor: "#f3a71d",
      width: "100px",
      height: "250px",
      // borderRadius: "5rem"
    },

    {
      nombre: "RE# / MIb",
      audio: SonidoDo,
      backgroundColor: "black",
      width: "25px",
      height: "150px",
      position: "absolute",
      left: "138px",
    },

    {
      nombre: "MI",
      audio: SonidoMi,
      backgroundColor: "#eeee3b",
      width: "100px",
      height: "250px",
      // borderRadius: "5rem"
    },

    {
      nombre: "FA",
      audio: SonidoFa,
      backgroundColor: "#83de83",
      width: "100px",
      height: "250px",
      // borderRadius: "5rem"
    },

    {
      nombre: "FA# / SOLb",
      audio: SonidoDo,
      backgroundColor: "black",
      width: "25px",
      height: "150px",
      position: "absolute",
      left: "297px",
    },

    {
      nombre: "SOL",
      audio: SonidoSol,
      backgroundColor: "#4c82f3",
      width: "100px",
      height: "250px",
      // borderRadius: "5rem"
    },

    {
      nombre: "SOL# / LAb",
      audio: SonidoDo,
      backgroundColor: "black",
      width: "25px",
      height: "150px",
      position: "absolute",
      left: "377px",
    },
    
    {
      nombre: "LA",
      audio: SonidoLa,
      backgroundColor: "#df9ff5",
      width: "100px",
      height: "250px",
      // borderRadius: "5rem"
    },

    {
      nombre: "LA# / SIb",
      audio: SonidoDo,
      backgroundColor: "black",
      width: "25px",
      height: "150px",
      position: "absolute",
      left: "457px",
    },


    {
      nombre: "SI",
      audio: SonidoSi,
      backgroundColor: "#7940d6",
      width: "100px",
      height: "250px",
      // borderRadius: "5rem"
    },

    {
      nombre: "DO",
      audio: SonidoDoOctava,
      backgroundColor: "#de3a3a",
      width: "100px",
      height: "250px",
      // borderRadius: "5rem"
    },

    {
      nombre: "DO# / REb",
      audio: SonidoDo,
      backgroundColor: "black",
      width: "25px",
      height: "150px",
      position: "absolute",
      left: "617px",
    },
  ];

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
    <section className="container py-5 vh-100">
      <div className="py-5 position-relative d-flex justify-content-center">
          <div className="d-flex justify-content-center bg-dark position-absolute z-3" style={{ width:"80%", height: "20vh" }}>
          
            {arrayTeclasPiano.map((tecla, index) => (
              <button
                key={index}
                style={{
                  width: tecla.width,
                  height: tecla.height,
                  backgroundColor: tecla.backgroundColor,
                  position: tecla.position,
                  left: tecla.left,
                  borderRadius: tecla.borderRadius
                }}
                className="btn text-center border"
                onClick={() => escucharTecla(tecla.audio)}
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
