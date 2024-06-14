import Button from "../../../../components/Button/Button";
import Plantilla1 from "./img/abecedario1.jpg";
import Plantilla2 from "./img/abecedario2.jpg";
import Plantilla3 from "./img/abecedario3.jpg";
import Plantilla4 from "./img/abecedario4.jpg";
import Plantilla5 from "./img/abecedario5.jpg";
import Plantilla6 from "./img/abecedario6.jpg";
import Plantilla7 from "./img/abecedario7.jpg";

const Abecedario = () => {
    const plantillas = [
      {
        name: "Plantilla1",
        url: Plantilla1
      },
  
      {
        name: "Plantilla2",
        url: Plantilla2,
      },
  
      {
        name: "Plantilla3",
        url: Plantilla3,
      },
  
      {
        name: "Plantilla4",
        url: Plantilla4
      },
  
      {
        name: "Plantilla5",
        url: Plantilla5
      },
  
      {
        name: "Plantilla6",
        url: Plantilla6,
      },
  
      {
        name: "Plantilla7",
        url: Plantilla7
      },
    ];
  
    return (
      <section className="container py-5">
        <h1>Abecedario</h1>
        <p>Podés descargar las siguientes plantillas:</p>
        <div className="row justify-content-center justify-content-md-start">
          {plantillas.map((plantilla, index) => (
            <div key={index} className="col-10 col-md-3 mb-3">
              <div className="card p-3 shadow-sm">
                  <img
                    key={index}
                    src={plantilla.url}
                    alt={plantilla.name}
                    className="img-fluid rounded-4 mb-3"
                  />
                <a href={plantilla.url} download={`${plantilla.name}.jpg`} className="btn-primary rounded-4 py-2 text-white text-center mb-3">Descargar</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Abecedario;
  