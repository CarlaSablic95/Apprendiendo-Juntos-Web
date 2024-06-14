import MamaHijo from "../img/mama-hijo.webp";
import PapaHija from "../img/papa-hija.webp";
import Button from "../components/Button/Button";
import FuncionamientoApp from "../components/FuncionamientoApp/FuncionamientoApp";

const Inicio = () => {
  return (
    <>
      {/* SECCIÓN PRINCIPAL */}
      <section className="seccion-principal py-5">
        <div className="container">
          <div className="row justify-content-evenly align-items-center">
            <div className="col-10 col-md-6">
              <h1>Apprendamos Juntos</h1>
              <p className="pe-5 mb-0">
                Nuestra plataforma está pensada para que padres e hijos aprendan
                juntos a estudiar, a través de juegos educativos que serán un
                complemento a la educación escolar del niño.
              </p>
              <p className="pe-5">Para niños de 6 a 8 años.</p>
              <Button title="Conoce más" />
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
          <h2>Acerca de</h2>
          <div className="row">
            <div className="col-10 col-md-4 text-center">
              <h3>Inicio</h3>
              <p>
                Apprendiendo juntos es una plataforma educativa interactiva que
                nació durante la pandemia para unir a familias y mejorar el
                conocimiento de los niños. Ofrecemos juegos que cubren materias
                básicas, diseñados para ser divertidos y reforzar lo aprendido
                en clases virtuales. Nuestro doble objetivo es proporcionar a
                los niños herramientas educativas y ser una guía para los padres
                en la educación de sus hijos.
              </p>
            </div>
            <div className="col-10 col-md-4 text-center">
              <h3>Misión</h3>
              <p>
                Buscamos ser parte de la solución a los desafíos educativos
                presentados por la pandemia, ofreciendo práctica y comprensión
                de conceptos escolares. Queremos que los padres se sientan
                apoyados al educar a sus hijos, proporcionando recursos lúdicos
                y efectivos. Apprendiendo juntos busca ser un complemento al
                aprendizaje y un medio para fortalecer la relación entre padres
                e hijos.
              </p>
            </div>
            <div className="col-10 col-md-4 text-center">
              <h3>Visión</h3>
              <p>
                La plataforma es un espacio colaborativo para el crecimiento y
                aprendizaje conjunto de padres e hijos. Como fundadora, tengo la
                visión de expandir el equipo e incluir expertos en pedagogía y
                enseñanza infantil. Nuestro compromiso es hacer del aprendizaje
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
