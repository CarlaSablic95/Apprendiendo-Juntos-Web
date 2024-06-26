import { Link } from "react-router-dom";
import FormLogin from "../components/Auth/FormLogin";

const IniciarSesion = () => {
  return (
    <section className="container-fluid">
      <div className="fondo-form row justify-content-evenly align-items-center">
        <div className="col-12 col-md-4">
          <h1 className="text-white">Iniciá sesión</h1>
        </div>
        <div className="col-12 col-md-4 d-flex flex-column justify-content-center">
          <div className="card my-5">
            <div className="title-card bg-primary py-3">
              <p className="text-center text-white mb-0">Iniciar sesión</p>
            </div>
            <FormLogin />
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default IniciarSesion;
