import MamaHijo from "../img/mama-hijo.webp";
import PapaHija from "../img/papa-hija.webp";
import Button from "../components/Button/Button";
import FuncionamientoApp from "../components/FuncionamientoApp/FuncionamientoApp";

const Inicio = () => {
  return (
    <>
      {/* SECCIÓN PRINCIPAL */}
      <section className="seccion-principal pb-5 mb-5">
        <div className="container">
          <div className="row justify-content-evenly align-items-center">
            <div className="col-10 col-md-6">
              <h1 className="mb-3">Apprendiendo Juntos</h1>
              <p className="pe-5 mb-0 pb-3">
              Una plataforma interactiva para niños de primer grado de primaria, donde los juegos educativos se entrelazan con la participación activa de los padres, fortaleciendo la relación familiar y apoyando el desarrollo académico de los más pequeños.
              </p>
              <Button title="Comenzar" />
            </div>
            <div
              className="col-6 d-none d-md-block mt-5 text-center d-flex
                        justify-content-center position-relative"
            >
              <div className="imagen-1">
                <img
                  src={MamaHijo}
                  alt="Imagen de una mamá estudiando con su hijo"
                  className="rounded-circle py-5 filtro-sombra img-fluid"
                />
              </div>

              <div className="imagen-2 position-absolute top-50 start-50">
                <img
                  src={PapaHija}
                  alt="Imagen de un papá estudiando con su hija"
                  className="rounded-circle filtro-sombra img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE NOSOTROS */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-10 col-md-4 text-center">
              <h3>Nosotros</h3>
              <p>
                Apprendiendo juntos es una plataforma educativa interactiva que
                nació durante la pandemia para unir a familias, y acompañar el
                aprendizaje de los niños, por medio de juegos que comprenden las materias
                básicas.
              </p>
            </div>
            <div className="col-10 col-md-4 text-center">
              <h3>Misión</h3>
              <p>
              Nuestro principal propósito es ser un complemento al
                aprendizaje del niño, y un medio para fortalecer el vínculo entre padres
                e hijos.
              </p>
            </div>
            <div className="col-10 col-md-4 text-center">
              <h3>Visión</h3>
              <p>Nuestro compromiso es hacer del aprendizaje
                una experiencia memorable, con cada juego representando un paso
                hacia el futuro.
              </p>
            </div>
          </div>
          <div className="px-3"></div>
        </div>
      </section>

      {/* // CÓMO FUNCIONA (PASOS PARA JUGAR) */}

      <section className="py-5">
        <div className="container">
          <h2>¿Cómo funciona?</h2>
          <FuncionamientoApp />
        </div>
      </section>
    </>
  );
};

export default Inicio;
