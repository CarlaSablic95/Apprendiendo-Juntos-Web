  import { Link, useNavigate } from "react-router-dom";
  import { app } from "../firebaseConfig/firebaseConfig";
  import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
  import { useState, useEffect } from "react";

  const auth = getAuth(app);

  const Header = () => {
    // ESTADO PARA CONTROLAR SI EL USUARIO ES ADMIN
    const [isAdmin, setIsAdmin] = useState(false);
    const navigate = useNavigate();

    // ESTADO PARA CONTROLAR SI EL USUARIO ESTÁ AUTENTICADO
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // ESTADO PARA ALMACENAR EL NOMBRE Y AVATAR DEL USUARIO
    const [nombreUsuario, setNombreUsuario] = useState("");
    const [avatarUsuario, setAvatarUsuario] = useState("");
    useEffect(() => {
      // VERIFICAR SI EL USUARIO ESTÁ AUTENTICADO
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if(user) {
          setIsAuthenticated(true);
        setNombreUsuario(localStorage.getItem("nombreUsuario"));
        setAvatarUsuario(localStorage.getItem("avatarUsuario"));
          setIsAdmin(user.email === "carlasablic@gmail.com");
        } else {
          setIsAuthenticated(false);
          setNombreUsuario("");
          setAvatarUsuario("");
        }
      });

      return () => unsubscribe;
    }, []);

    

  // CERRAR SESIÓN
  const cerrarSesionUsuario = () => {
    signOut(auth)
      .then(() => {
         localStorage.removeItem("nombreUsuario");
         localStorage.removeItem("avatarUsuario");
         setIsAuthenticated(false); // Actualizar estado de autenticación
        navigate("/");
      })
      .catch((error) => {
        console.log("ERROR: ", error);
      });
  };

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
                <li className="nav-item px-2">
                  <Link className="nav-link text-center active" aria-current="page" to="/">
                    Inicio
                  </Link>
                </li>

                <li className="nav-item px-2">
                  <Link className="nav-link text-center" to="#">
                    Sobre nosotros
                  </Link>
                </li>

                <li className="nav-item px-2">
                  <Link className="nav-link text-center" to="#">
                    Cómo funciona
                  </Link>
                </li>

                <li className="nav-item px-2">
                  <Link className="nav-link text-center" to="/juegos">
                    Juegos
                  </Link>
                </li>

                { isAdmin && <li className="nav-item px-2 border-2 rounded-5" style={{ backgroundColor: "#FFAA5A" }}>
                  <Link className="nav-link text-center" to="/panel-admin">
                    Panel de administración
                  </Link>
                </li> }

                <li className="nav-item px-2 ms-4 item-dropdown">
                  { isAuthenticated ? (
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
