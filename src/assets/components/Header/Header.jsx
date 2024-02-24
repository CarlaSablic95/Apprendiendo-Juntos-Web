import { Link } from "react-router-dom";

const Header = () => {
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
                        <Link to="/registro" className="btn btn-primary rounded-5">Crear cuenta</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
        </header>
    )
}

export default Header;