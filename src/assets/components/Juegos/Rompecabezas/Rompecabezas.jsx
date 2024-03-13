import Tomate from "./images/rompecabeza-tomate.png";
import Pieza1 from "./images/tomate-1.png";
import Pieza2 from "./images/tomate-2.png";
import Pieza3 from "./images/tomate-3.png";
import Pieza4 from "./images/tomate-4.png";
import DragAndDrop from "../../../functions/DragAndDrop";

const Rompecabezas = () => {
   

    return (
        <section className="container">
            <h1>Rompecabezas</h1>

            <div className="row justify-content-evenly">
                <div className="col-2 p-4 bg-light border">
                    <img src={ Tomate } alt="Imagen de rompecabeza de tomate" className="img-fluid img" />
                </div>

                <div className="col-2 p-4 bg-light border">
                    <DragAndDrop>
                        <div className="grab">
                            <img src={ Pieza3 } alt="Imagen de rompecabeza de tomate" className="mb-3" width={ 120 } height={ 120 } />
                        </div>
                    </DragAndDrop>
                    
                    <DragAndDrop>
                        <div className="grab">
                            <img src={ Pieza1 } alt="Imagen de rompecabeza de tomate" className="mb-3" width={ 120 } height={ 120 } />
                        </div>
                    </DragAndDrop>
                    
                    <DragAndDrop>
                        <div className="grab">
                            <img src={ Pieza4 } alt="Imagen de rompecabeza de tomate" className="mb-3" width={ 120 } height={ 120 } />
                        </div>
                    </DragAndDrop>

                    <DragAndDrop>
                        <div className="grab">
                            <img src={ Pieza2 } alt="Imagen de rompecabeza de tomate" className="mb-3" width={ 120 } height={ 120 } />
                        </div>
                    </DragAndDrop>
                        
                </div>

                    <div className="col-6 bg-light">
                        <div className="">
                           

                            <div className="container p-4">
                                <div className="row flex-row align-items-center">
                                    <div className="col-6 pieza border"></div>

                                    <div className="col-6 pieza border"></div>

                                    <div className="col-6 pieza border"></div>

                                    <div className="col-6 pieza border"></div>

                        
                                </div>
                            </div>
                        </div>

                        <div className="row">
                        </div>
                    </div>
            </div>

        </section>
    )
}

export default Rompecabezas;