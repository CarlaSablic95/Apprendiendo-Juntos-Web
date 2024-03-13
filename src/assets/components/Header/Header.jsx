import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { collection, onSnapshot } from "firebase/firestore";
// import { db } from "../firebaseConfig/firebaseConfig";

const Header = ( ) => {
  // const [datosUsuario, setDatosUsuario] = useState(null);

  // useEffect(() => {
  //   const fetchDatosUsuario = onSnapshot(collection(db, "usuarios"), (querySnapshot) => {
  //       querySnapshot.forEach((doc) => {
  //         const usuario = doc.data();
  //         console.log("NOMBRE: ", usuario)
  //         setDatosUsuario(usuario);
  //       });
  //   });

  //   return () => fetchDatosUsuario();
  // }, []);

    return(
        <header>
              <nav className="navbar navbar-expand-lg bg-body-tertiary py-3">
                <div className="container">
                  <Link className="navbar-brand" to="/">Apprendiendo Juntos</Link>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse justify-content-evenly" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
                      </li>

                      <li className="nav-item">
                        <Link className="nav-link" to="#">Sobre nosotros</Link>
                      </li>

                      <li className="nav-item">
                        <Link className="nav-link" to="#">Cómo funciona</Link>
                      </li>
                      

                      <li className="nav-item">
                        <Link className="nav-link" to="/juegos">
                          Juegos
                        </Link>
                      </li>

                      <li className="nav-item bg-warning border-2 me-3 rounded-4">
                        <Link className="nav-link" to="/panel-admin">Panel de administración</Link>
                      </li>

                      <li className="nav-item">
                      <Link to="/iniciar-sesion" className="btn btn-primary rounded-5">Iniciar sesión</Link>  
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
        </header>
    )
}

export default Header;