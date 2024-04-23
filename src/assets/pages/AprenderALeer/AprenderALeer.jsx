import Vocales from "./Vocales.jsx";
import Consonantes from "./Consonantes.jsx";
import Numeros from "./Numeros.jsx";
import Colores from "./Colores.jsx";

const AprenderALeer = () => {

      return(
        <section className="container py-5">
            <h1 className="py-5 text-center">Aprendiendo a leer</h1>
            <hr />
            <div className="row justify-content-evenly text-center">
                <Vocales />
                <Consonantes />
                <hr />
                <Numeros />
                <Colores />
            </div>
            
        </section>
    )
}

export default AprenderALeer;