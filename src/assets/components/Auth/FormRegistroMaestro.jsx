import { useState } from 'react';
import { Link } from 'react-router-dom'
import Maestra from './images/maestra.png';
import Maestro from './images/maestro.png';

const FormRegistroMaestro = () => {
    // Creo un estado para realizar seguimiento de el avatar seleccionada, en principio, el valor de selectedAvatar es null
    const [selectedAvatar, setSelectedAvatar] = useState(null);

    // Función que llamo al hacer click en una avatar
    const handleAvatarClick = (avatar) => { // Toma el nombre de el avatar como argumento y
        // actualiza el estado con el nombre de el avatar seleccionada
        setSelectedAvatar(avatar);
        setValues((prevValues) => ({
            ...prevValues,
            avatar: avatar
        }))
    };

    // Estado para el spinner
    const [loading, setLoading] = useState(false);

    // Estado para el manejo de errores en el formulario
    const [error, setError] = useState({
        nombre:"",
        apellido:"",
        email:"",
        contrasenia:""
    })

    // Envío del formulario
    const [values, setValues] = useState({ // Inicializo los valores
        avatar: null,
        nombre:"",
        apellido:"",
        email:"",
        contrasenia:"",
    });

    // Destructuración
    const { avatar, nombre, apellido, email, contrasenia } = values;

    // Función para manejar los cambios en los inputs
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        // console.log("VALUE:" + value); // Carla
        // console.log("NAME:" + name); // nombre
        setValues({ 
            ...values,
            [name]: value,
            avatar: selectedAvatar 
        });
    };

// Detengo al envío del formulario para el manejo de errores
const handleForm = (e) => {
    e.preventDefault();

    // Declarar newErrors dentro de la función handleForm
    let newErrors = {};

    if(!nombre.trim()) {
        newErrors.nombre = "El nombre es obligatorio";
    } 

    if(!apellido.trim()) {
        newErrors.apellido = "El apellido es obligatorio";
    }    

    if(!email.trim()) {
        newErrors.email = "El email es obligatorio";
    } else if(!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
        newErrors.email = "El email no tiene un formato válido";
    }

    if(!contrasenia.trim()) {
        newErrors.contrasenia = "La contraseña es obligatoria";
    } else if(contrasenia.length < 6) {
        newErrors.contrasenia = "La contraseña debe contener 6 caracteres";
    }

    if(!avatar) {
        newErrors.avatar = "Seleccioná un avatar";
    } 
    
    setError(newErrors);

    const hasErrors = Object.values(newErrors).some(error => error !== "");

    if(!hasErrors) {
        setLoading(true);
        setTimeout(() => {
            console.log("Form enviado:", values);
            setLoading(false);
        }, 300);
    } else {
        console.log("Hay errores de validación:", newErrors);
    }
};

    return (
            <form className="py-4 px-5" onSubmit={ handleForm }>
                <p>Elegir avatar:</p>
                {/* A cada div que contiene el avatar, le agrego una clase CSS condicionalmente dependiendo si elegí el avatar. Uso "plantillas literales" y "operador ternario" */}
                <div className="mb-4 d-flex justify-content-evenly align-items-center">
                     <div className={`rounded-circle shadow-sm border-2 ${selectedAvatar === "maestra" ? "border border-success" : ""}`} onClick={ () => handleAvatarClick("maestra") }> {/* Al clickear en el avatar, llamo a la función handleAvatarClick con el nombre de el avatar. Estamos creando una función de flecha que se ejecutará SÓLO cuando ocurra el evento onClick, y no se va a ejecutar inmediatamente cuando se renderice el componente. Esto evita problemas de rendimiento. */}
                        <img src={ Maestra } alt="Ícono de maestra" className="rounded-circle img-maestro border" />
                    </div>
                     <div className={`rounded-circle shadow-sm border-2 ${selectedAvatar === "maestro" ? "border border-success" : ""}`} onClick={ () => handleAvatarClick("maestro") }> {/* Al clickear en el avatar, llamo a la función handleAvatarClick con el nombre de el avatar. Estamos creando una función de flecha que se ejecutará SÓLO cuando ocurra el evento onClick, y no se va a ejecutar inmediatamente cuando se renderice el componente. Esto evita problemas de rendimiento. */}
                        <img src={ Maestro } alt="Ícono de maestro" className="rounded-circle img-maestro border" />
                    </div>
                </div>
            <div className="mb-3">
                <div className="form-floating mb-3">
                    <input type="text" className={ `form-control ${ error.nombre && "is-invalid" }` }
                    name="nombre" id="floatingInputName" placeholder="Juan" value={ nombre } onChange={ handleInputChange } />
                    <small className="text-danger">{ error.nombre }</small>
                    <label htmlFor="floatingInputName">Nombre <span className="text-danger">*</span> </label>
                </div>
            </div>

            <div className="mb-3">
                <div className="form-floating mb-3">
                    <input type="text" className={ `form-control ${ error.apellido && "is-invalid" }` } id="floatingInputSurname"
                    name="apellido" placeholder="Gomez" value={ apellido } onChange={ handleInputChange } />
                    <small className="text-danger">{ error.apellido }</small>
                    <label htmlFor="floatingInputSurname">Apellido <span className="text-danger">*</span></label>
                </div>
            </div>

            <div className="mb-3">
                <div className="form-floating mb-3">
                    <input type="email" className={ `form-control ${ error.email && "is-invalid" }` } id="floatingInputEmail" name="email"
                    placeholder="juan_gomez@gmail.com" value={ email } onChange={ handleInputChange } />
                    <small className="text-danger">{ error.email }</small>
                    <label htmlFor="floatingInputEmail">Email <span className="text-danger">*</span></label>
                </div>
            </div>

            <div className="mb-3">
                <div className="form-floating">
                    <input type="password" className={ `form-control ${ error.contrasenia && "is-invalid" }` } id="floatingPassword" name="contrasenia"
                    placeholder="Contraseña" value={ contrasenia } onChange={ handleInputChange } />
                    <small className="text-danger">{ error.contrasenia }</small>
                    <label htmlFor="floatingPassword">Contraseña <span className="text-danger">*</span></label>
                </div>
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <button type="submit" className="btn btn-primary mb-3" disabled={ loading }>{ loading ? <><span className="loader"></span> <span>Enviando</span></> : "Crear cuenta" }</button>
                <Link to="/iniciar-sesion" className="mb-3">Ya tengo una cuenta</Link>
            </div>
            </form>
    )
}

export default FormRegistroMaestro;