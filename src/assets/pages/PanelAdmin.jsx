import { useState, useEffect } from "react";
import CrearActividad from "../components/FormActividades/CrearActividad";
import EditarActividad from "../components/FormActividades/EditarActividad";
import EliminarActividad from "../components/FormActividades/EliminarActividad";
import TablaActividades from "../components/TablaActividades/TablaActividades";
import TablaAlumnos from "../components/TablaAlumnos/TablaAlumnos";
import CerrarSesion from "../components/Auth/CerrarSesion";


// FIREBASE

import { getAuth, onAuthStateChanged } from "firebase/auth";

const PanelAdmin = () => {
  const [mostrarTablaActividades, setMostrarTablaActividades] = useState(true);
  const [usuario, setUsuario] = useState(null); // Estado para almacenar datos del usuario


  const handleTablaActividades = () => {
    setMostrarTablaActividades(true);
  };

  const handleTablaAlumnos = () => {
    setMostrarTablaActividades(false);
  };

  // Obtengo el nombre y el apellido que guardé en local storage al crear el usuario
  const nombre = localStorage.getItem("nombre");
  const apellido = localStorage.getItem("apellido");
  const avatar = localStorage.getItem("avatar");
  // useEffect para obtener datos del usuario actual
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (usuario) => {
      if (usuario) {
        setUsuario({
          uid: usuario.uid,
          nombre: usuario.displayName, // Extraer nombre del nombre completo si está disponible
          avatar: usuario.photoURL, // Usar photoURL para avatar si está disponible
        });

        console.log(
          "USUARIO REGISTRADO: ",
          usuario.uid,
          " ",
          usuario.email,
          " ",
          usuario.displayName,
          " ",
          usuario.photoURL
        );
      }
    });
  }, [auth]);

  return (
    <section className="container-fluid">
      <div className="row justify-content-between">
        <div className="col-3 px-0 d-none d-md-block">
          <aside className="bg-primary d-flex flex-column justify-content-between px-3">
            <div className="contenedor-info">
              <div className="text-center p-2">
                <h4 className="text-white my-4">Apprendiendo Juntos</h4>
              </div>
              {usuario && ( // Mostrar información del usuario solo si está autenticado
                <div className="text-center text-white mb-5 py-3">
                  <img
                    src={avatar}
                    alt="Avatar"
                    className="mb-3 rounded-circle border"
                  />
                  <p className="mb-0">
                    {nombre} {apellido}
                  </p>
                </div>
              )}

              <div className="text-center text-white d-flex flex-column">
                <div className="p-2 boton-panel" style={{ cursor: "pointer" }} onClick={handleTablaActividades}>
                  {" "}
                     <span className="text-white"><i className="bi bi-book"></i> Actividades</span>
                </div>
                <div className="p-2 boton-panel" style={{ cursor: "pointer" }} onClick={handleTablaAlumnos}>
                  <span className="text-white"><i className ="bi bi-people"></i> Alumnos</span>
                </div>
              </div>
            </div>
            <div
              className="p-2 text-center boton-panel"
              style={{ cursor: "pointer" }}
            >
              <a
                className="text-white text-decoration-none"
                data-bs-toggle="modal"
                data-bs-target="#cerrarSesion"
              >
                <i className="bi bi-box-arrow-right"></i> Cerrar sesión
              </a>
            </div>
          </aside>
        </div>

        { mostrarTablaActividades ? <TablaActividades /> : <TablaAlumnos />}
      </div>

      {/* Formularios modales */}
      <CrearActividad />
      <EditarActividad />
      <EliminarActividad />
      <CerrarSesion />
    </section>
  );
};

export default PanelAdmin;
