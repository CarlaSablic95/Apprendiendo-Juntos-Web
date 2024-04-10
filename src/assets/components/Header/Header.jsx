import { Link, useNavigate } from "react-router-dom";
import { app } from "../firebaseConfig/firebaseConfig";
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth(app);

const Header = ({ nombreUsuario, avatarUsuario }) => {
  const navigate = useNavigate();


// CERRAR SESIÓN
  const cerrarSesionUsuario = () => {
    signOut(auth)
      .then(() => {
        navigate("/iniciar-sesion");
        localStorage.removeItem("nombreUsuario");
        localStorage.removeItem("avatarUsuario");
      })
      .catch((error) => {
        console.log("ERROR: ", error);
      });
  };

  // MUESTRO EL NOMBRE DEL USUARIO LOGUEADO
  // const nombreUsuario = localStorage.getItem("nombreUsuario");
  // const avatarUsuario = localStorage.getItem("avatarUsuario");

  return (
    <header className="position-absolute w-100 z-3">
      <nav className="navbar navbar-expand-lg py-3">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Apprendiendo Juntos
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-evenly"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav align-items-center">
              <li className="nav-item">
                <Link className="nav-link text-center active" aria-current="page" to="/">
                  Inicio
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-center" to="#">
                  Sobre nosotros
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-center" to="#">
                  Cómo funciona
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-center" to="/juegos">
                  Juegos
                </Link>
              </li>

              <li className="nav-item bg-warning border-2 me-3 rounded-5">
                <Link className="nav-link text-center" to="/panel-admin">
                  Panel de administración
                </Link>
              </li>

              <li className="nav-item item-dropdown">
                { nombreUsuario ? (
                  <div className="dropdown">
                    <a
                      className="btn dropdown-toggle d-flex justify-content-evenly align-items-center"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src={avatarUsuario}
                        alt="Avatar del usuario"
                        className="border rounded-circle w-25"
                      />
                      <small className="mb-0">Hola, {nombreUsuario}!</small>
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a
                          href=""
                          className="dropdown-item text-center text-decoration-none text-dark"
                        >
                          Mi perfil
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          className="dropdown-item text-center text-decoration-none text-white bg-danger"
                          onClick={cerrarSesionUsuario}
                        >
                          Cerrar sesión
                        </a>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <Link
                    to="/iniciar-sesion"
                    className="btn btn-primary rounded-5"
                  >
                    Iniciar sesión
                  </Link>
                )}
              </li>

              
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
